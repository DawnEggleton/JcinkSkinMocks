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
    console.log('submit');

    $.ajax({
        url: `https://script.google.com/macros/s/AKfycbzZjIt4sCyEGOe3tekg9KA4A3DKLI45mlZUlaep3LiT_ivQCKfv_tQA-Zzp1zc1ZJ1mSw/exec`,   
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
        }
      });
    
      return false;
}