function claimHeader(title, id = null) {
    if(id) {
        return `<tag-lg class="fullWidth" data-align="left"><a href="?showuser=${id}">${title} <i class="fa-solid fa-arrow-up-right-from-square"></i></a></tag-lg>`;
    }
    return `<tag-lg class="fullWidth" data-align="left">${title}</tag-lg>`;
}
function characterBox(id, group, bold, lines = null) {
    let box = `<a href="?showuser=${id}" class="claims--item g-${group}"><div class="claims--border">
    <b>${bold}</b>`;
    if(lines && lines[0] !== '') {
        lines.forEach(line => {
            box += `<span>${line}</span>`;
        });
    }
    box += `</div></a>`;
    return box;
}
function horseBox(horse) {
    let disciplines = [];
    let disciplineList = horse.Disciplines.split('+');
    disciplineList.forEach(discipline => {
        disciplines.push(JSON.parse(discipline));
    });
    if(!horse.Markings) {
        horse.Markings = 'no markings';
    }
    let disciplineHTML = ``;
    disciplines.forEach(discipline => {
        disciplineHTML += `<div class="claims--discipline">
            <b>${discipline.discipline}</b>
            <div class="claims--skill-bar ${discipline.level}" title="${discipline.level}"><span class="pleasure"></span><span class="green"></span></div>
        </div>`;
    });
    let compLevel = `<span>'${horse.BarnName}' does not compete</span>`;
    if(horse.GroupID !== `13` && horse.GroupID !== `14`) {
        compLevel = `<span>'${horse.BarnName}' competes at ${horse.Group} level</span>`;
    } else {
        disciplineHTML = `<tag-md data-align="left">trained in</tag-md>`;
        disciplines.forEach(discipline => {
            disciplineHTML += `<b>${discipline.discipline}</b><br>`;
        });
    }
    return `<div class="claims--horse g-${horse.GroupID}">
        <img src="${horse.Image}" />
        <div class="claims--item horse"><div class="claims--border">
            <b>${horse.ShowName}</b>
            <a href="?showuser=${horse.AccountID}">owned by ${horse.Character}</a>
            ${compLevel}
            <span>a ${horse.Age} ${horse.Breed} ${horse.Sex}</span>
            <span>${horse.Height}hh ${horse.Color} with ${horse.Markings}</span>
        </div></div>
        <div class="claims--item skills"><div class="claims--border"><div class="scroll">
            ${disciplineHTML}
        </div></div></div>
    </div>`;
}

function formatReserves(data) {
    let current = new Date();
    let active = data.filter(item => {
        let time = new Date(item.Timestamp);
        let difference = Math.floor(((current - time) / (1000*60*60*24)));
        return difference < 8;
    });
    active.sort((a, b) => {
        if (a.Face < b.Face) {
            return -1;
        } else if (a.Face > b.Face) {
            return 1;
        } else {
            return 0;
        }
    });
    let html = ``;
    active.forEach(reserve => {
        let reserveDate = new Date(reserve.Timestamp);
        reserveDate.setDate(reserveDate.getDate() + 7);
        const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october',	'november', 'december'];
        html += `<div class="claims--item"><div class="claims--border">
            <b>${reserve.Face}</b>
            <span>Reserved by ${reserve.Member}</span>
            <span>Expires ${months[reserveDate.getMonth()]} ${reserveDate.getDate()}, ${reserveDate.getFullYear()}</span>
        </div></div>`;
    });
    if (html === ``) {
        html = `<div class="claims--notice"><div class="claims--border">No active reservations.</div></div>`;
    }
    document.querySelector(`tag-tab[data-key="#reserves"]`).insertAdjacentHTML('beforeend', html);
}

function formatPeople(data) {
    formatMembers(data);
    formatFaces(data);
    formatJobs(data);
}

function formatMembers(data) {
    data.sort((a,b) => {
        if (a.Member < b.Member) {
            return -1;
        } else if (a.Member > b.Member) {
            return 1;
        } else if (a.Character < b.Character) {
                return -1;
        } else if (a.Character > b.Character) {
            return 1;
        } else {
            return 0;
        }
    });
    let html = ``;
    data.forEach((character, i) => {
        let jobList = [character.Job1Position];
        if(character.Job2Position) {jobList.push(character.Job2Position)}
        if(character.Job3Position) {jobList.push(character.Job3Position)}
        if(character.Job4Position) {jobList.push(character.Job4Position)}
        if(jobList.length > 0) {
            jobList = jobList.join(', ');
        } else {
            jobList = null;
        }
        if(i === 0) {
            html += claimHeader(character.Member, character.ParentID);
            html += characterBox(character.AccountID, character.GroupID, character.Character, [jobList]);
        } else if(data[i - 1].Member !== character.Member) {
            html += claimHeader(character.Member, character.ParentID);
            html += characterBox(character.AccountID, character.GroupID, character.Character, [jobList]);
        } else {
            html += characterBox(character.AccountID, character.GroupID, character.Character, [jobList]);
        }
    });
    document.querySelector(`tag-tab[data-key="#members"]`).insertAdjacentHTML('beforeend', html);
}

function formatFaces(data) {
    data.sort((a, b) => {
        if (a.Face < b.Face) {
            return -1;
        } else if (a.Face > b.Face) {
            return 1;
        } else {
            return 0;
        }
    });
    let html = ``;
    data.forEach((character, i) => {
        if(i === 0) {
            html += claimHeader(character.Face[0]);
            html += characterBox(character.AccountID, character.GroupID, character.Face, [`playing ${character.Character}`]);
        } else if(data[i - 1].Face[0] !== character.Face[0]) {
            html += claimHeader(character.Face[0]);
            html += characterBox(character.AccountID, character.GroupID, character.Face, [`playing ${character.Character}`]);
        } else {
            html += characterBox(character.AccountID, character.GroupID, character.Face, [`playing ${character.Character}`]);
        }
    });
    document.querySelector(`tag-tab[data-key="#faces"]`).insertAdjacentHTML('beforeend', html);
}

function formatJobs(data) {
    let array = data.filter(item => item.Jobs);
    let employed = [];
    array.forEach(character => {
        let jobs = [];
        let jobsList = character.Jobs.split('+');
        jobsList.forEach(job => {
            jobs.push(JSON.parse(job));
        });
        jobs.forEach(job => {
            employed.push({
                Character: character.Character,
                GroupID: character.GroupID,
                AccountID: character.AccountID,
                Employer: job.employer,
                Position: job.position,
                BumpOwner: job.position.indexOf('owner'),
                BumpCoOwner: job.position.indexOf('co-owner'),
            });
        });
    });
    employed.sort((a,b) => {
        if (a.Employer < b.Employer) {
            return -1;
        } else if (a.Employer > b.Employer) {
            return 1;
        } else if (a.BumpOwner > b.BumpOwner) {
            return -1;
        } else if (a.BumpOwner < b.BumpOwner) {
            return 1;
        } else if (a.BumpCoOwner > b.BumpCoOwner) {
            return -1;
        } else if (a.BumpCoOwner < b.BumpCoOwner) {
            return 1;
        } else if (a.Position < b.Position) {
            return -1;
        } else if (a.Position > b.Position) {
            return 1;
        } else if (a.Character < b.Character) {
                return -1;
        } else if (a.Character > b.Character) {
            return 1;
        } else {
            return 0;
        }
    });
    let html = ``;
    employed.forEach((character, i) => {
        if(i === 0) {
            html += claimHeader(character.Employer);
            html += characterBox(character.AccountID, character.GroupID, character.Character, [character.Position]);
        } else if(employed[i - 1].Employer !== character.Employer) {
            html += claimHeader(character.Employer);
            html += characterBox(character.AccountID, character.GroupID, character.Character, [character.Position]);
        } else {
            html += characterBox(character.AccountID, character.GroupID, character.Character, [character.Position]);
        }
    });
    document.querySelector(`tag-tab[data-key="#jobs"]`).insertAdjacentHTML('beforeend', html);
}

function formatHorses(data) {
    let stableTabs = Array.from(document.querySelectorAll(`tag-tab[data-category="stables"] tag-labelset a:not(:first-child)`));
    let activeStables = [];
    stableTabs.forEach(tab => {
        let entry = {Stable: tab.getAttribute('href').split('#')[1], Horses: []}
        activeStables.push(entry);
    });
    data.forEach(horse => {
        activeStables.forEach(stable => {
            if(horse.Stable === stable.Stable) {
                stable.Horses.push(horse);
            }
        });
    });
    activeStables.forEach(stable => {
        let html = ``;
        stable.Horses.forEach(horse => {
            html += horseBox(horse);
        });
        if(html === ``) {
            html = `<div class="claims--notice"><div class="claims--border">No horses on property.</div></div>`;
        }
        document.querySelector(`tag-tab[data-key="#${stable.Stable}"]`).insertAdjacentHTML('beforeend', html);
    });
    let scrolls = document.querySelectorAll('.claims--item.skills .scroll');
    if(scrolls.length > 0) {
        scrolls.forEach(scroll => {
            if(scroll.scrollHeight > scroll.clientHeight) {
                scroll.style.paddingRight = '10px';
            }
        });
    }
}

function postClaims(formtype = 'POST') {
    let member = document.querySelector('#sort-member').value.toLowerCase().trim();
    let character = document.querySelector('#sort-character').value.toLowerCase().trim();
    let accountID = document.querySelector('#sort-accountid').value.trim();
    let parentID = document.querySelector('#sort-parentid').value.trim();
    let group = document.querySelector('#sort-group').options[document.querySelector('#sort-group').selectedIndex].innerText.toLowerCase().trim();
    let groupID = document.querySelector('#sort-group').options[document.querySelector('#sort-group').selectedIndex].value;
    let face = document.querySelector('#sort-face').value.toLowerCase().trim();
    let jobs = ``;
    if(document.querySelector('#sort-employed').options[document.querySelector('#sort-employed').selectedIndex].value === 'y') {
        let employers = document.querySelectorAll('.sort-job-employer');
        let positions = document.querySelectorAll('.sort-job-position');
        for(let i = 0; i < employers.length; i++) {
            jobs += `{"employer": "${employers[i].value.toLowerCase().trim()}", "position": "${positions[i].value.toLowerCase().trim()}"}`;
            if(i !== employers.length - 1) {
                jobs += `+`;
            }
        }
    }

    $.ajax({
        url: `https://script.google.com/macros/s/AKfycbzAeOtlDM67PVcwdIGgqDI_ieEK9IJAVf9wKbriP_oGSDkC5CefCt1mvj9cUUbmJNf24w/exec`,   
        data: {
            "SubmissionType": "claims-submit",
            "Member": member,
            "Character": character,
            "AccountID": accountID,
            "ParentID": parentID,
            "Group": group,
            "GroupID": groupID,
            "Face": face,
            "Jobs": jobs
        },
        method: formtype,
        type: formtype,
        dataType: "json", 
        success: function () {
            console.log('success');
            //sendSortRequest(message);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('error');
            document.querySelector('.form--sort-warning').innerHTML = `Whoops! The sheet connection didn't quite work. Please refresh the page and try again! If this persists, please open the console (ctrl + shift + J) and send Lux a screenshot of what's there.`;
        },
        complete: function () {
            $('#form-sort').trigger('reset');
            let fields = [document.querySelector('#sort-employed')];
            let classes = ['.is-employed'];
            let jobFields = [document.querySelector('#sort-jobnum')];
            let jobTypes = ['sort'];
            loadHides(fields, classes);
            loadJobFields(jobFields, jobTypes);
            $('#form-sort button[type="submit"]').text('Submit');
            document.querySelector('.form--sort-warning').innerHTML = 'Success! Your character has been added to the sheet.';
            document.querySelector('tag-tab[data-key="#sort"]').scrollIntoView({ behavior: 'smooth', block: 'end'}); 
        }
      });
    
      return false;
}

function updateClaims(character, formtype = 'POST') {
    console.log('update claims');
    let alias = character[0].Member;
    if(document.querySelector('#choice-member').checked) {
        alias = document.querySelector('#update-member').value.toLowerCase().trim();
    }
    let accountID = document.querySelector('#update-accountid').value.trim();
    let characterName = character[0].Character;
    if(document.querySelector('#choice-character').checked) {
        characterName = document.querySelector('#update-character').value.toLowerCase().trim();
    }
    let group = character[0].Group;
    let groupID = character[0].GroupID;
    if(document.querySelector('#choice-group').checked) {
        group = document.querySelector('#update-group').options[document.querySelector('#update-group').selectedIndex].innerText.toLowerCase().trim();
        groupID = document.querySelector('#update-group').options[document.querySelector('#update-group').selectedIndex].value;
    }
    let face = character[0].Face;
    if(document.querySelector('#choice-face').checked) {
        face = document.querySelector('#update-face').value.toLowerCase().trim();
    }
    let jobsString = character[0].Jobs;
    if(document.querySelector('#choice-newjob').checked || document.querySelector('#choice-updatejob').checked || document.querySelector('#choice-removejob').checked) {
        let jobs = [];
        let jobsArray = character[0].Jobs.split('+');
        jobsArray.forEach(job => {
            jobs.push(JSON.parse(job));
        });
        if(document.querySelector('#choice-newjob').checked) {
            let employers = document.querySelectorAll('.new-job-employer');
            let positions = document.querySelectorAll('.new-job-position');
            for(let i = 0; i < employers.length; i++) {
                let newJob = {
                    employer: employers[i].value.toLowerCase().trim(),
                    position: positions[i].value.toLowerCase().trim()
                };
                jobs.push(newJob);
            }
        }
        if(document.querySelector('#choice-updatejob').checked) {
            jobs.forEach(job => {
                let newValue = document.querySelector(`input[data-employer="${job.employer}"][data-position="${job.position}"]`);
                let oldValue = '';
                if(newValue && newValue.dataset.changed === 'Employer') {
                    oldValue = job.employer;
                } else if(newValue && newValue.dataset.changed === 'Position') {
                    oldValue = job.position;
                }
                if(newValue && newValue.value !== `` && newValue.value.toLowerCase().trim() !== oldValue) {
                    if(newValue.dataset.changed === 'Employer') {
                        job.employer = newValue.value.toLowerCase().trim();
                    } else if(newValue.dataset.changed === 'Position') {
                        job.position = newValue.value.toLowerCase().trim();
                    }
                }
            });
        }
        if(document.querySelector('#choice-removejob').checked) {
            jobs.forEach(job => {
                let selected = document.querySelector(`input[type="checkbox"][data-employer="${job.employer}"][data-position="${job.position}"]`);
                if(selected && selected.checked) {
                    let remove = jobs.findIndex(job => {
                        return selected.dataset.employer === job.employer && selected.dataset.position === job.position;
                    });
                    jobs.splice(remove, 1);
                }
            });
        }
        jobsString = jobs.map(job => JSON.stringify(job)).join('+');
    }
    let handling = character[0].Handling;
    let training = character[0].Training;
    let equitation = character[0].Equitation;
    let jumping = character[0].Jumping;
    let western = character[0].Western;
    let other = character[0].Other;
    let groupField = document.querySelector('#update-group');
    if(document.querySelector('#choice-group').checked && groupField.options[groupField.selectedIndex] !== '13' && groupField.options[groupField.selectedIndex] !== '14') {
 	   handling = parseInt(document.querySelector('#update-handling').value);
	   training = parseInt(document.querySelector('#update-training').value);
 	   equitation = parseInt(document.querySelector('#update-equitation').value);
 	   jumping = parseInt(document.querySelector('#update-jumping').value);
 	   western = parseInt(document.querySelector('#update-western').value);
 	   other = parseInt(document.querySelector('#update-other').value);
    }

    $.ajax({
        url: `https://script.google.com/macros/s/AKfycbwM7UbGB6Jagw72dt3Z7KlRyCgnlFMDA_Cd_B5kYJYmnFspbYwTa2186qjADZ9HsSWtDA/exec`,   
        data: {
            "SubmissionType": "claims-edit",
            "Member": alias,
            "Character": characterName,
            "AccountID": accountID,
            "Group": group,
            "GroupID": groupID,
            "Face": face,
            "Jobs": jobsString,
	    "Handling": handling,
	    "Training": training,
	    "Equitation": equitation,
	    "Jumping": jumping,
	    "Western": western,
	    "Other": other
        },
        method: formtype,
        type: formtype,
        dataType: "json", 
        success: function () {
            console.log('success');
            //sendSortRequest(message);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('error');
            document.querySelector('.form--update-warning').innerHTML = `Whoops! The sheet connection didn't quite work. Please refresh the page and try again! If this persists, please open the console (ctrl + shift + J) and send Lux a screenshot of what's there.`;
        },
        complete: function () {
            $('#form-update').trigger('reset');
            document.querySelectorAll('.form--update-section').forEach(section => section.classList.add('hide'));
            let jobFields = [document.querySelector('#new-jobnum')];
            let jobTypes = ['new'];
            loadJobFields(jobFields, jobTypes);
            $('#form-update button[type="submit"]').text('Submit');
            document.querySelector('.form--update-warning').innerHTML = 'Success! Your claims have been updated.';
            document.querySelector('tag-tab[data-key="#editclaims"]').scrollIntoView({ behavior: 'smooth', block: 'end'}); 
        }
      });
    
      return false;
}

function postHorse(formtype = 'POST') {
    let member = document.querySelector('#horse-member').value.toLowerCase().trim();
    let character = document.querySelector('#horse-character').value.toLowerCase().trim();
    let accountID = document.querySelector('#horse-accountid').value.trim();
    let group = document.querySelector('#horse-group').options[document.querySelector('#horse-group').selectedIndex].innerText.toLowerCase().trim();
    let groupID = document.querySelector('#horse-group').options[document.querySelector('#horse-group').selectedIndex].value;
    let showname = document.querySelector('#horse-showname').value.toLowerCase().trim();
    let barnname = document.querySelector('#horse-barnname').value.toLowerCase().trim();
    let image = document.querySelector('#horse-image').value.trim();
    let stable = document.querySelector('#horse-stable').options[document.querySelector('#horse-stable').selectedIndex].innerText.toLowerCase().trim();
    let stableID = document.querySelector('#horse-stable').options[document.querySelector('#horse-stable').selectedIndex].value;
    let sex = document.querySelector('#horse-sex').options[document.querySelector('#horse-sex').selectedIndex].innerText.toLowerCase().trim();
    let age = document.querySelector('#horse-age').value.toLowerCase().trim();
    let height = document.querySelector('#horse-height').value.toLowerCase().trim();
    let breed = document.querySelector('#horse-breed').value.toLowerCase().trim();
    let color = document.querySelector('#horse-color').value.toLowerCase().trim();
    let markings = document.querySelector('#horse-markings').value.toLowerCase().trim();
    let disciplines = ``;
    if(document.querySelector('#horse-discnum').value > 0) {
        let disciplineArray = document.querySelectorAll('.horse-discipline');
        let levels = document.querySelectorAll('.horse-level');
        for(let i = 0; i < disciplineArray.length; i++) {
            disciplines += `{"discipline": "${disciplineArray[i].value.toLowerCase().trim()}", "level": "${levels[i].options[levels[i].selectedIndex].value}"}`;
            if(i !== disciplineArray.length - 1) {
                disciplines += `+`;
            }
        }
    }

    $.ajax({
        url: `https://script.google.com/macros/s/AKfycbzAeOtlDM67PVcwdIGgqDI_ieEK9IJAVf9wKbriP_oGSDkC5CefCt1mvj9cUUbmJNf24w/exec`,   
        data: {
            "SubmissionType": "horse-submit",
            "Member": member,
            "Character": character,
            "AccountID": accountID,
            "Group": group,
            "GroupID": groupID,
            "ShowName": showname,
            "BarnName": barnname,
            "Image": image,
            "StableFull": stable,
            "Stable": stableID,
            "Sex": sex,
            "Age": age,
            "Height": height,
            "Breed": breed,
            "Color": color,
            "Markings": markings,
            "Disciplines": disciplines
        },
        method: formtype,
        type: formtype,
        dataType: "json", 
        success: function () {
            console.log('success');
            //sendSortRequest(message);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('error');
            document.querySelector('.form--horse-warning').innerHTML = `Whoops! The sheet connection didn't quite work. Please refresh the page and try again! If this persists, please open the console (ctrl + shift + J) and send Lux a screenshot of what's there.`;
        },
        complete: function () {
            $('#form-horse').trigger('reset');
            let discFields = [document.querySelector('#horse-discnum')];
            let discTypes = ['horse'];
            loadDisciplineFields(discFields, discTypes);
            $('#form-horse button[type="submit"]').text('Submit');
            document.querySelector('.form--horse-warning').innerHTML = 'Success! Your character has been added to the sheet.';
            document.querySelector('tag-tab[data-key="#horseregistration"]').scrollIntoView({ behavior: 'smooth', block: 'end'}); 
        }
      });
    
      return false;
}

function updateHorse(horse, formtype = 'POST') {
    let currentShowName = horse[0].ShowName;

    let alias = horse[0].Member;
    if(document.querySelector('#horseedit-memberChoice').checked) {
        alias = document.querySelector('#horseedit-member').value.toLowerCase().trim();
    }
    let characterName = horse[0].Character;
    if(document.querySelector('#horseedit-characterChoice').checked) {
        characterName = document.querySelector('#horseedit-character').value.toLowerCase().trim();
    }
    let showName = horse[0].ShowName;
    if(document.querySelector('#horseedit-shownameChoice').checked) {
        showName = document.querySelector('#horseedit-newshowname').value.toLowerCase().trim();
    }
    let barnName = horse[0].BarnName;
    if(document.querySelector('#horseedit-shownameChoice').checked) {
        barnName = document.querySelector('#horseedit-barnname').value.toLowerCase().trim();
    }
    let image = horse[0].Image;
    if(document.querySelector('#horseedit-image').checked) {
        image = document.querySelector('#horseedit-image').value.trim();
    }
    let height = horse[0].Height;
    if(document.querySelector('#horseedit-height').checked) {
        height = document.querySelector('#horseedit-height').value.trim();
    }
    
    let group = horse[0].Group;
    let groupID = horse[0].GroupID;
    if(document.querySelector('#horseedit-groupChoice').checked) {
        group = document.querySelector('#horseedit-group').options[document.querySelector('#horseedit-group').selectedIndex].innerText.toLowerCase().trim();
        groupID = document.querySelector('#horseedit-group').options[document.querySelector('#horseedit-group').selectedIndex].value;
    }
    let stable = horse[0].StableFull;
    let stableID = horse[0].Stable;
    if(document.querySelector('#horseedit-stableChoice').checked) {
        stable = document.querySelector('#horseedit-stable').options[document.querySelector('#horseedit-stable').selectedIndex].innerText.toLowerCase().trim();
        stableID = document.querySelector('#horseedit-stable').options[document.querySelector('#horseedit-stable').selectedIndex].value;
    }
    let sex = horse[0].Sex;
    if(document.querySelector('#horseedit-sexChoice').checked) {
        sex = document.querySelector('#horseedit-sex').options[document.querySelector('#horseedit-sex').selectedIndex].value;
    }
    
    let disciplineString = horse[0].Disciplines;
    if(document.querySelector('#horseedit-newdiscChoice').checked || document.querySelector('#horseedit-updatediscChoice').checked || document.querySelector('#horseedit-removediscChoice').checked) {
        let disciplines = [];
        let disciplinesArray = disciplineString.split('+');
        disciplinesArray.forEach(discipline => {
            disciplines.push(JSON.parse(discipline));
        });
        if(document.querySelector('#horseedit-newdiscChoice').checked) {
            let disciplinesList = document.querySelectorAll('.new-discipline');
            let levels = document.querySelectorAll('.horse-level');
            for(let i = 0; i < disciplinesList.length; i++) {
                let newDiscipline = {
                    discipline: disciplinesList[i].value.toLowerCase().trim(),
                    level: levels[i].value.toLowerCase().trim()
                };
                disciplines.push(newDiscipline);
            }
        }
        if(document.querySelector('#horseedit-updatediscChoice').checked) {
            disciplines.forEach(discipline => {
                console.log(discipline.discipline);
                let selectBox = document.querySelector(`select[data-discipline="${discipline.discipline}"]`);
                if(selectBox && selectBox.options[selectBox.selectedIndex].value !== `` && selectBox.options[selectBox.selectedIndex].value !== discipline.level) {
                    discipline.level = selectBox.options[selectBox.selectedIndex].value;
                }
            });
        }
        if(document.querySelector('#horseedit-removediscChoice').checked) {
            disciplines.forEach(discipline => {
                let selected = document.querySelector(`input[type="checkbox"][data-discipline="${discipline.discipline}"]`);
                if(selected && selected.checked) {
                    let remove = disciplines.findIndex(discipline => {
                        return selected.dataset.discipline === discipline.discipline;
                    });
                    disciplines.splice(remove, 1);
                }
            });
        }
        disciplineString = disciplines.map(discipline => JSON.stringify(discipline)).join('+');
    }

    $.ajax({
        url: `https://script.google.com/macros/s/AKfycbzAeOtlDM67PVcwdIGgqDI_ieEK9IJAVf9wKbriP_oGSDkC5CefCt1mvj9cUUbmJNf24w/exec`,   
        data: {
            "SubmissionType": "horse-edit",
            "Member": alias,
            "Character": characterName,
            "CurrentShowName": currentShowName,
            "ShowName": showName,
            "BarnName": barnName,
            "Image": image,
            "Height": height,
            "Group": group,
            "GroupID": groupID,
            "Stable": stableID,
            "StableFull": stable,
            "Sex": sex,
            "Disciplines": disciplineString
        },
        method: formtype,
        type: formtype,
        dataType: "json", 
        success: function () {
            console.log('success');
            //sendSortRequest(message);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('error');
            document.querySelector('.form--horseedit-warning').innerHTML = `Whoops! The sheet connection didn't quite work. Please refresh the page and try again! If this persists, please open the console (ctrl + shift + J) and send Lux a screenshot of what's there.`;
        },
        complete: function () {
            $('#form-horseedit').trigger('reset');
            $('#form-horseedit button[type="submit"]').text('Submit');
            document.querySelector('.form--horseedit-warning').innerHTML = 'Success! Your claims have been updated.';
            document.querySelector('tag-tab[data-key="#edithorse"]').scrollIntoView({ behavior: 'smooth', block: 'end'}); 
        }
      });
    
      return false;
}

function postReserve(formtype = 'POST') {
    let member = document.querySelector('#reserve-member').value.toLowerCase().trim();
    let face = document.querySelector('#reserve-face').value.toLowerCase().trim();

    $.ajax({
        url: `https://script.google.com/macros/s/AKfycbzAeOtlDM67PVcwdIGgqDI_ieEK9IJAVf9wKbriP_oGSDkC5CefCt1mvj9cUUbmJNf24w/exec`,   
        data: {
            "SubmissionType": "reserve-submit",
            "Member": member,
            "Face": face,
            "Count": 1
        },
        method: formtype,
        type: formtype,
        dataType: "json", 
        success: function () {
            console.log('success');
            //sendSortRequest(message);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('error');
            document.querySelector('.form--reserve-warning').innerHTML = `Whoops! The sheet connection didn't quite work. Please refresh the page and try again! If this persists, please open the console (ctrl + shift + J) and send Lux a screenshot of what's there.`;
        },
        complete: function () {
            $('#reserve').trigger('reset');
            $('#reserve button[type="submit"]').text('Submit');
            document.querySelector('.form--reserve-warning').innerHTML = 'Success! Your reservation has been added to the sheet.';
        }
      });
    
      return false;
}