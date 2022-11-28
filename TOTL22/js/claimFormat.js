function setGroup(id) {
    let form = document.querySelector('#newsort');
    switch (id) {
        case '7':
        case '9':
        case '14':
        case '16':
            form.querySelectorAll('.ifStudent').forEach(field => field.classList.remove('hide'));
            form.querySelectorAll('.ifAdult, .ifJob, .ifUni').forEach(field => field.classList.add('hide'));
            break;
        case '17':
            form.querySelectorAll('.ifStudent, .ifCore, .ifStart, .ifElec, .ifUpper, .ifLeadershipPossible, .ifHogwartsQuidditch, .ifLeadership').forEach(field => field.classList.add('hide'));
            form.querySelectorAll('.ifAdult').forEach(field => field.classList.remove('hide'));
            let canon = document.querySelector('#sort-canon');
            setShowHide(canon.options[canon.selectedIndex].value, '.ifReturn');
            break;
        case '18':
        case '15':
        case '8':
        case '12':
        case '11':
        case '13':
        case '6':
            form.querySelectorAll('.ifStudent, .ifCore, .ifStart, .ifElec, .ifUpper, .ifLeadershipPossible, .ifHogwartsQuidditch, .ifLeadership').forEach(field => field.classList.add('hide'));
            form.querySelectorAll('.ifAdult').forEach(field => field.classList.remove('hide'));
            break;
        default:
            form.querySelectorAll('.ifAdult, .ifJob, .ifUni, .ifStudent, .ifCore, .ifStart, .ifElec, .ifUpper, .ifLeadershipPossible, .ifHogwartsQuidditch, .ifLeadership').forEach(field => field.classList.add('hide'));
            break;
    }
}
function setShowHide(value, classList) {
    let form = document.querySelector('#newsort');
    switch (value) {
        case 'y':
            form.querySelectorAll(classList).forEach(field => field.classList.remove('hide'));
            break;
        default:
            form.querySelectorAll(classList).forEach(field => field.classList.add('hide'));
            break;
    }
}
function setCheckShowHide(value, classList, form) {
    switch (value) {
        case true:
            form.querySelectorAll(classList).forEach(field => field.classList.remove('hide'));
            break;
        default:
            form.querySelectorAll(classList).forEach(field => field.classList.add('hide'));
            break;
    }
}
function addJobFields(i, formType) {
    let html = `<label class="form--job-section">
        <strong>Job Section</strong>
        <select name="${formType}-jobsection-${i}" id="${formType}-jobsection-${i}">
            <option value="">(select)</option>
            <option value="hogwarts">Hogwarts Castle</option>
            <option value="ministry">Ministry of Magic</option>
            <option value="mungos">St. Mungo's</option>
            <option value="sports">Professional Sports</option>
            <option value="prophet">The Daily Prophet</option>
            <option value="diagon">Diagon Alley</option>
            <option value="horizon">Horizon Alley</option>
            <option value="knockturn">Knockturn Alley</option>
            <option value="mythic">Mythic Alley</option>
            <option value="wizardlondon">Wizarding London (Other)</option>
            <option value="mugglelondon">Muggle London (Other)</option>
            <option value="hogsmeade">Hogsmeade</option>
            <option value="ilkley">Ilkley</option>
            <option value="elsewhere">Elsewhere</option>
            <option value="selfemployed">Self-Employed</option>
        </select>
    </label>
    <label class="form--job-sub-section">
        <strong>
            Job Sub-Section
            <button onclick="openHelp(this)" type="button">
                <i class="fa-solid fa-circle-question"></i>
                <i class="fa-solid fa-circle-xmark"></i>
            </button>
        </strong>
        <i class="help">Equivalent to the grouping underneath the main tab. For example, in the Ministry, these are overarching departments. In Diagon Alley, these are individual businesses. For Professional sports players, ensure it mentions the league/level, if applicable, as well as the sport they play (e.g., British &amp; Irish Quidditch League or International Soccer). REQUIRED unless self-employed.</i>
        <input type="text" name="${formType}-jobsubsection-${i}" id="${formType}-jobsubsection-${i}" placeholder="Job Subsection">
    </label>
    <label class="form--job-line1">
        <strong>
            Job Info - Line 1
            <button onclick="openHelp(this)" type="button">
                <i class="fa-solid fa-circle-question"></i>
                <i class="fa-solid fa-circle-xmark"></i>
            </button>
        </strong>
        <i class="help">Unless one of the following applies, this line is reserved for the job title/position of your character. Exceptions are: for Ministry personnel, if they are part of a specific sub-division or team under the overall department (e.g., the Hitwizard Team within Magical Law Enforcement), this team label goes here; for Hogwarts teaching staff, place their speciality; for Quidditch players, please name their team; or, if they are self-employed and have a specific business name. In these instances, place the job title/position in <b>line 2</b>.</i>
        <input type="text" name="${formType}-jobline1-${i}" id="${formType}-jobline1-${i}" placeholder="Job Info - Line 1, see help for specifics">
    </label>
    <label class="form--job-line2">
        <strong>
            Job Info - Line 2
            <button onclick="openHelp(this)" type="button">
                <i class="fa-solid fa-circle-question"></i>
                <i class="fa-solid fa-circle-xmark"></i>
            </button>
        </strong>
        <i class="help">Not applicable for characters who are not one of the exception in Line 1 above or are house-specific Hogwarts Staff (e.g., a House Parent). For those exceptions: for Ministry personnel or self-employed individuals, place their job title/position; for Hogwarts teaching staff, place the years they teach (e.g, Years One to Three); for Quidditch, use their position on the team. Additionally, if your character is Hogwarts Staff and is house-specific, please place the house affiliation.</i>
        <input type="text" name="${formType}-jobline2-${i}" id="${formType}-jobline2-${i}" placeholder="Job Info - Line 2, see help for specifics">
    </label>`;
    return html;
}
function setHogwartsYear(year) {
    let reqClip = document.querySelector('.form--reqclass-clip.form--sort');
    let elecClip = document.querySelector('.form--elecclass-clip.form--sort');
    switch(year) {
        case '1':
        case '2':
            document.querySelectorAll('.ifElec').forEach(field => field.classList.add('hide'));
            document.querySelectorAll('.ifLeadershipPossible').forEach(field => field.classList.add('hide'));
            reqClip.innerHTML = '';
            elecClip.innerHTML = '';
            reqClip.insertAdjacentHTML('beforeend', addStartClasses('sort'));
            reqClip.insertAdjacentHTML('beforeend', addCoreClasses('sort'));
            break;
        case '3':
        case '4':
            document.querySelectorAll('.ifElec').forEach(field => field.classList.remove('hide'));
            document.querySelectorAll('.ifLeadershipPossible').forEach(field => field.classList.add('hide'));
            reqClip.innerHTML = '';
            elecClip.innerHTML = '';
            reqClip.insertAdjacentHTML('beforeend', addCoreClasses('sort'));
            elecClip.insertAdjacentHTML('beforeend', addElecClasses(4, 2, false, 'sort'));
            break;
        case '5':
            document.querySelectorAll('.ifElec').forEach(field => field.classList.remove('hide'));
            document.querySelectorAll('.ifLeadershipPossible').forEach(field => field.classList.remove('hide'));
            reqClip.innerHTML = '';
            elecClip.innerHTML = '';
            reqClip.insertAdjacentHTML('beforeend', addCoreClasses());
            elecClip.insertAdjacentHTML('beforeend', addElecClasses(4, 2, false, 'sort'));
            break;
        case '6':
        case '7':
            document.querySelectorAll('.ifElec').forEach(field => field.classList.remove('hide'));
            document.querySelectorAll('.ifLeadershipPossible').forEach(field => field.classList.remove('hide'));
            reqClip.innerHTML = '';
            elecClip.innerHTML = '';
            elecClip.insertAdjacentHTML('beforeend', addElecClasses(8, 4, true));
            break;
        default:
            break;
    }
}
function setHogwartsYearUpdate(year) {
    let reqClip = document.querySelector('.form--reqclass-clip.form--update');
    let elecClip = document.querySelector('.form--elecclass-clip.form--update');
    switch(year) {
        case '1':
        case '2':
            document.querySelectorAll('.ifElec-Change').forEach(field => field.classList.add('hide'));
            reqClip.innerHTML = '';
            elecClip.innerHTML = '';
            reqClip.insertAdjacentHTML('beforeend', addStartClasses('update'));
            reqClip.insertAdjacentHTML('beforeend', addCoreClasses('update'));
            break;
        case '3':
        case '4':
        case '5':
            document.querySelectorAll('.ifElec-Change').forEach(field => field.classList.remove('hide'));
            reqClip.innerHTML = '';
            elecClip.innerHTML = '';
            reqClip.insertAdjacentHTML('beforeend', addCoreClasses('update'));
            elecClip.insertAdjacentHTML('beforeend', addElecClasses(4, 2, false, 'update'));
            break;
        case '6':
        case '7':
            document.querySelectorAll('.ifElec-Change').forEach(field => field.classList.remove('hide'));
            reqClip.innerHTML = '';
            elecClip.innerHTML = '';
            elecClip.insertAdjacentHTML('beforeend', addElecClasses(8, 4, true,'update'));
            break;
        default:
            break;
    }
}
function addStartClasses(formType) {
    let html = `
    <h3 class="fullWidth"><hr>Introductory Classes<hr></h3>
    <label class="required">
        <strong>Culture Class</strong>
        <select name="${formType}-culture" id="${formType}-culture">
        <option value="">(select)</option>
        <option value="muggle">Muggle Studies</option>
        <option value="wizarding">Wizarding Culture</option>
        </select>
    </label>
    <label class="required">
        <strong>Culture Grade</strong>
        <select name="${formType}-culturegrade" id="${formType}-culturegrade">
        <option value="">(select)</option>
        <option value="o">Outstanding</option>
        <option value="e">Exceeds Expectations</option>
        <option value="a">Acceptable</option>
        <option value="p">Poor</option>
        <option value="d">Dreadful</option>
        <option value="t">Troll</option>
        </select>
    </label>
    <label class="required">
        <strong>Literacy</strong>
        <select name="${formType}-literacy" id="${formType}-literacy">
        <option value="">(select)</option>
        <option value="o">Outstanding</option>
        <option value="e">Exceeds Expectations</option>
        <option value="a">Acceptable</option>
        <option value="p">Poor</option>
        <option value="d">Dreadful</option>
        <option value="t">Troll</option>
        </select>
    </label>
    <label class="required">
        <strong>Magical Theory</strong>
        <select name="${formType}-magicaltheory" id="${formType}-magicaltheory">
        <option value="">(select)</option>
        <option value="o">Outstanding</option>
        <option value="e">Exceeds Expectations</option>
        <option value="a">Acceptable</option>
        <option value="p">Poor</option>
        <option value="d">Dreadful</option>
        <option value="t">Troll</option>
        </select>
    </label>
    <label class="required">
        <strong>Maths</strong>
        <select name="${formType}-maths" id="${formType}-maths">
        <option value="">(select)</option>
        <option value="o">Outstanding</option>
        <option value="e">Exceeds Expectations</option>
        <option value="a">Acceptable</option>
        <option value="p">Poor</option>
        <option value="d">Dreadful</option>
        <option value="t">Troll</option>
        </select>
    </label>`;
    return html;
}
function addCoreClasses(formType) {
    let html = `
    <h3 class="fullWidth"><hr>Core Classes<hr></h3>
    <label class="required">
        <strong>Astronomy</strong>
        <select name="${formType}-astronomy" id="${formType}-astronomy">
        <option value="">(select)</option>
        <option value="o">Outstanding</option>
        <option value="e">Exceeds Expectations</option>
        <option value="a">Acceptable</option>
        <option value="p">Poor</option>
        <option value="d">Dreadful</option>
        <option value="t">Troll</option>
        </select>
    </label>
    <label class="required">
        <strong>Charms</strong>
        <select name="${formType}-charms" id="${formType}-charms">
        <option value="">(select)</option>
        <option value="o">Outstanding</option>
        <option value="e">Exceeds Expectations</option>
        <option value="a">Acceptable</option>
        <option value="p">Poor</option>
        <option value="d">Dreadful</option>
        <option value="t">Troll</option>
        </select>
    </label>
    <label class="required">
        <strong>Defence Against the Dark Arts</strong>
        <select name="${formType}-dada" id="${formType}-dada">
        <option value="">(select)</option>
        <option value="o">Outstanding</option>
        <option value="e">Exceeds Expectations</option>
        <option value="a">Acceptable</option>
        <option value="p">Poor</option>
        <option value="d">Dreadful</option>
        <option value="t">Troll</option>
        </select>
    </label>
    <label class="required">
        <strong>Games</strong>
        <select name="${formType}-games" id="${formType}-games">
        <option value="">(select)</option>
        <option value="o">Outstanding</option>
        <option value="e">Exceeds Expectations</option>
        <option value="a">Acceptable</option>
        <option value="p">Poor</option>
        <option value="d">Dreadful</option>
        <option value="t">Troll</option>
        </select>
    </label>
    <label class="required">
        <strong>Herbology</strong>
        <select name="${formType}-herbology" id="${formType}-herbology">
        <option value="">(select)</option>
        <option value="o">Outstanding</option>
        <option value="e">Exceeds Expectations</option>
        <option value="a">Acceptable</option>
        <option value="p">Poor</option>
        <option value="d">Dreadful</option>
        <option value="t">Troll</option>
        </select>
    </label>
    <label class="required">
        <strong>History of Magic</strong>
        <select name="${formType}-historyofmagic" id="${formType}-historyofmagic">
        <option value="">(select)</option>
        <option value="o">Outstanding</option>
        <option value="e">Exceeds Expectations</option>
        <option value="a">Acceptable</option>
        <option value="p">Poor</option>
        <option value="d">Dreadful</option>
        <option value="t">Troll</option>
        </select>
    </label>
    <label class="required">
        <strong>Potions</strong>
        <select name="${formType}-potions" id="${formType}-potions">
        <option value="">(select)</option>
        <option value="o">Outstanding</option>
        <option value="e">Exceeds Expectations</option>
        <option value="a">Acceptable</option>
        <option value="p">Poor</option>
        <option value="d">Dreadful</option>
        <option value="t">Troll</option>
        </select>
    </label>
    <label class="required">
        <strong>Transfiguration</strong>
        <select name="${formType}-transfiguration" id="${formType}-transfiguration">
        <option value="">(select)</option>
        <option value="o">Outstanding</option>
        <option value="e">Exceeds Expectations</option>
        <option value="a">Acceptable</option>
        <option value="p">Poor</option>
        <option value="d">Dreadful</option>
        <option value="t">Troll</option>
        </select>
    </label>`;
    return html;
}
function addElecClasses(count, min, upper, formType) {
    let html = ``;
    for(let i = 0; i < count; i++) {
        if (i < min) {
            html += `<label class="required">`;
        } else {
            html += `<label>`;
        }
        let options = `<option value="">(select)</option>
        <option value="runes">Ancient Runes</option>
        <option value="arithmancy">Arithmancy</option>
        <option value="art">Art</option>
        <option value="comc">Care of Magical Creatures</option>
        <option value="divination">Divination</option>
        <option value="magicaltheory">Magical Theory</option>
        <option value="mugglestudies">Muggle Studies</option>
        <option value="music">Music</option>`;
        if(upper) {
            options = `<option value="">(select)</option>
            <option value="alchemy">Alchemy</option>
            <option value="runes">Ancient Runes</option>
            <option value="ancientstudies">Ancient Studies</option>
            <option value="arithmancy">Arithmancy</option>
            <option value="art">Art</option>
            <option value="astronomy">Astronomy</option>
            <option value="comc">Care of Magical Creatures</option>
            <option value="charms">Charms</option>
            <option value="dada">Defence Against the Dark Arts</option>
            <option value="divination">Divination</option>
            <option value="games">Games</option>
            <option value="ghoulstudies">Ghoul Studies</option>
            <option value="herbology">Herbology</option>
            <option value="historyofmagic">History of Magic</option>
            <option value="magicaltheory">Magical Theory</option>
            <option value="mugglestudies">Muggle Studies</option>
            <option value="music">Music</option>
            <option value="potions">Potions</option>
            <option value="transfiguration">Transfiguration</option>
            <option value="xylomancy">Xylomancy</option>`;
        }
        html += `
            <strong>Course</strong>
            <select name="${formType}-elec${i}" id="${formType}-elec${i}">${options}</select>
        </label>`;
        if (i < min) {
            html += `<label class="required">`;
        } else {
            html += `<label>`;
        }
        html += `
            <strong>Grade</strong>
            <select name="${formType}-elec${i}grade" id="${formType}-elec${i}grade">
            <option value="">(select)</option>
            <option value="o">Outstanding</option>
            <option value="e">Exceeds Expectations</option>
            <option value="a">Acceptable</option>
            <option value="p">Poor</option>
            <option value="d">Dreadful</option>
            <option value="t">Troll</option>
            </select>
        </label>`;
    }
    return html;
}
function setUpdateOptions() {
    let faceChange = document.querySelector('#choice-face').checked;
    let addUni = document.querySelector('#choice-newuni').checked;
    let addAbility = document.querySelector('#choice-ability').checked;
    let addJobs = document.querySelector('#choice-newjob').checked;
    let changeJobs = document.querySelector('#choice-changejob').checked;
    let removeJobs = document.querySelector('#choice-removejob').checked;
    let changeClasses = document.querySelector('#choice-classes').checked;
    let changeQuid = document.querySelector('#choice-quidditch').checked;
    let changeLead = document.querySelector('#choice-leadership').checked;

    setCheckShowHide(faceChange, '.ifFace-Change', document.querySelector('#newedit'));
    setCheckShowHide(addUni, '.ifUni-Change', document.querySelector('#newedit'));
    setCheckShowHide(addAbility, '.ifAbSp-Add', document.querySelector('#newedit'));
    setCheckShowHide(addJobs, '.ifJob-Add', document.querySelector('#newedit'));
    setCheckShowHide(changeJobs, '.ifJob-Change', document.querySelector('#newedit'));
    setCheckShowHide(removeJobs, '.ifJob-Remove', document.querySelector('#newedit'));
    setCheckShowHide(changeClasses, '.ifStudent-Change', document.querySelector('#newedit'));
    setHogwartsYearUpdate(document.querySelector('#update-hwyear').options[document.querySelector('#update-hwyear').selectedIndex].value);
    setCheckShowHide(changeQuid, '.ifHogwartsQuidditch-Change', document.querySelector('#newedit'));
    setCheckShowHide(changeLead, '.ifLeadership-Change', document.querySelector('#newedit'));
    
    if(!changeClasses) {
        document.querySelectorAll('.ifElec-Change').forEach(field => field.classList.add('hide'));
    }

    if(changeJobs) {
        setJobChange(document.querySelector('.form--jobschange-clip.form--update'));
    }

    if(removeJobs) {
        setJobRemove(document.querySelector('.form--jobsremove-clip.form--update'));
    }
}
function setJobChange(clip) {
    const url = `https://opensheet.elk.sh/146rEeh3eiyftnC-9NXF29rgSPRLAhuG2gss_nWp_xxw/NewClaims`;
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            let idExists = data.filter(item => item.AccountID === document.querySelector('#update-id').value).length > 0;
            
            if(idExists) {
                let character = data.filter(item => item.AccountID === document.querySelector('#update-id').value)[0];
                if(character.Jobs !== '') {
                    let jobs = character.Jobs.split('+').map(job => JSON.parse(job));
                    return jobs;
                } else {
                    clip.innerHTML = `<p class="fullWidth">This character does not have any jobs to change.</p>`;
                }
            } else {
                clip.innerHTML = `<p class="fullWidth">This character does not exist on the sheet. Please double check the ID entered.</p>`;
            }
        }).then((jobs) => {
            let html = ``;
            jobs.forEach((job, i) => {
                html += `<u class="fullWidth editJobs">${job.section} &mdash; ${job.subsection}</u>
                <label class="form--job-line1">
                <strong>
                    Job Info - Line 1
                    <button onclick="openHelp(this)" type="button">
                        <i class="fa-solid fa-circle-question"></i>
                        <i class="fa-solid fa-circle-xmark"></i>
                    </button>
                </strong>
                <i class="help">Unless one of the following applies, this line is reserved for the job title/position of your character. Exceptions are: for Ministry personnel, if they are part of a specific sub-division or team under the overall department (e.g., the Hitwizard Team within Magical Law Enforcement), this team label goes here; for Hogwarts teaching staff, place their speciality; for Quidditch players, please name their team; or, if they are self-employed and have a specific business name. In these instances, place the job title/position in <b>line 2</b>.</i>
                <input type="text" name="change-jobline1-${i}" id="change-jobline1-${i}" placeholder="Job Info - Line 1, see help for specifics">
            </label>
            <label class="form--job-line2">
                <strong>
                    Job Info - Line 2
                    <button onclick="openHelp(this)" type="button">
                        <i class="fa-solid fa-circle-question"></i>
                        <i class="fa-solid fa-circle-xmark"></i>
                    </button>
                </strong>
                <i class="help">Not applicable for characters who are not one of the exception in Line 1 above or are house-specific Hogwarts Staff (e.g., a House Parent). For those exceptions: for Ministry personnel or self-employed individuals, place their job title/position; for Hogwarts teaching staff, place the years they teach (e.g, Years One to Three); for Quidditch, use their position on the team. Additionally, if your character is Hogwarts Staff and is house-specific, please place the house affiliation.</i>
                <input type="text" name="change-jobline2-${i}" id="change-jobline2-${i}" placeholder="Job Info - Line 2, see help for specifics">
            </label>`;
            });
            clip.innerHTML = html;
        });
}
function setJobRemove(clip) {
    const url = `https://opensheet.elk.sh/146rEeh3eiyftnC-9NXF29rgSPRLAhuG2gss_nWp_xxw/NewClaims`;
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            let idExists = data.filter(item => item.AccountID === document.querySelector('#update-id').value).length > 0;
            
            if(idExists) {
                let character = data.filter(item => item.AccountID === document.querySelector('#update-id').value)[0];
                if(character.Jobs !== '') {
                    let jobs = character.Jobs.split('+').map(job => JSON.parse(job));
                    return jobs;
                } else {
                    clip.innerHTML = `<p class="fullWidth">This character does not have any jobs to remove.</p>`;
                }
            } else {
                clip.innerHTML = `<p class="fullWidth">This character does not exist on the sheet. Please double check the ID entered.</p>`;
            }
        }).then((jobs) => {
            let html = `<div class="form-flex fullWidth">`;
            jobs.forEach((job, i) => {
                html += `<label>
                    <input type="checkbox" name="remove-jobs" id="remove-job-${i}" value="remove-job-${i}">
                    <div>x</div>
                    <u class="editJobs">${job.section}, ${job.subsection}`;
                if(job.line1 !== '') {
                    html += `, ${job.line1}`;
                }
                if(job.line2 !== '') {
                    html += `, ${job.line2}`;
                }
                html += `</u>
                </label>`;
            });
            html += `</div>`;
            clip.innerHTML = html;
        });
}

function claimTabStart(data) {
    return `<div class="claim--tab grid twoCol" data-tab="#${cleanString(data)}">`;
}
function claimTabEnd() {
    return `</div>`;
}
function claimTabLabel(label, category, subcategory = null) {
    if(subcategory) {
        return `<a href="#${cleanString(label)}" data-category="${category}" data-subcategory="${subcategory}">${label}</a>`;
    }
    return `<a href="#${cleanString(label)}" data-category="${category}">${label}</a>`;
}
function claimHeader(title) {
    return `<h3 class="fullWidth"><hr />${title}<hr /></h3>`;
}
function claimSubheader(title) {
    return `<h4 class="fullWidth"><hr />${title}<hr /></h4>`;
}
function characterBox(id, group, bold, lines = []) {
    let box = `<a href="?showuser=${id}" class="claim--item g-${group}">
    <b>${bold}</b>`;
    if(lines.length > 0) {
        lines.forEach(line => {
            box += `<span>${line}</span>`;
        });
    }
    box += `</a>`;
    return box;
}
function simpleBox(face, member) {
    let box = `<div class="claim--item">
    <b>${face}</b>
    <span>being worked on by ${member}</span>
    </div>`;
    return box;
}

function formatFaces(data) {
    data.sort((a, b) => {
        aValue = a.Face;
        bValue = b.Face;
        if (aValue < bValue) {
            return -1;
        } else if (aValue > bValue) {
            return 1;
        } else {
            return 0;
        }
    });
    let html = ``;
    data.forEach((character, i) => {
        if(i === 0) {
            html += claimHeader(character.Face[0]);
            html += characterBox(character.AccountID, character.GroupID, character.Face, [character.Character, character.Member]);
        } else if(data[i - 1].Face[0] !== character.Face[0]) {
            html += claimHeader(character.Face[0]);
            html += characterBox(character.AccountID, character.GroupID, character.Face, [character.Character, character.Member]);
        } else {
            html += characterBox(character.AccountID, character.GroupID, character.Face, [character.Character, character.Member]);
        }
    });
    document.querySelector('#faces').insertAdjacentHTML('beforeend', html);
}

function formatUniversities(data) {
    let students = data.filter(item => item.School);
    students.sort((a, b) => {
        aSchool = a.School;
        bSchool = b.School;
        aYear = parseInt(getYear(a.UniversityYear));
        bYear = parseInt(getYear(b.UniversityYear));
        aProgram = a.Program;
        bProgram = b.Program;
        aName = a.Character;
        bName = b.Character;
        if (aSchool < bSchool) {
            return -1;
        } else if (aSchool > bSchool) {
            return 1;
        } if (aProgram < bProgram) {
            return -1;
        } else if (aProgram > bProgram) {
            return 1;
        } if (aYear < bYear) {
            return -1;
        } else if (aYear > bYear) {
            return 1;
        } else if (aName < bName) {
                return -1;
        } else if (aName > bName) {
            return 1;
        } else {
            return 0;
        }
    });
    let html = ``;
    students.forEach((character, i) => {
        if(i === 0) {
            html += claimHeader(character.School);
            html += claimSubheader(character.Program);
            html += characterBox(character.AccountID, character.GroupID, character.Character, [`studying ${character.Program}`, character.UniversityYear]);
        } else if(students[i - 1].School !== character.School) {
            html += claimHeader(character.School);
            html += claimSubheader(character.Program);
            html += characterBox(character.AccountID, character.GroupID, character.Character, [`studying ${character.Program}`, character.UniversityYear]);
        } else if(students[i - 1].School === character.School && students[i - 1].Program !== character.Program) {
            html += claimSubheader(character.Program);
            html += characterBox(character.AccountID, character.GroupID, character.Character, [`studying ${character.Program}`, character.UniversityYear]);
        } else {
            html += characterBox(character.AccountID, character.GroupID, character.Character, [`studying ${character.Program}`, character.UniversityYear]);
        }
    });
    document.querySelector('#university').insertAdjacentHTML('beforeend', html);
}

function formatAbilitiesSpecies(data) {
    let characters = data.filter(item => item.AbilitiesSpecies);
    let abilities = [];
    characters.forEach(character => {
        let characterAbilities = character.AbilitiesSpecies.split(', ');
        characterAbilities.forEach(ability => {
            let stripped = ability.split(' ('), detail = null;
            if(stripped.length > 1) {
                detail = stripped[1].split(')')[0];
            }
            abilities.push({
                Character: character.Character,
                GroupID: character.GroupID,
                AccountID: character.AccountID,
                Ability: stripped[0],
                Detail: detail,
            });
        });
    });
    abilities.sort((a, b) => {
        aName = a.Character;
        bName = b.Character;
        aAbility = a.Ability;
        bAbility = b.Ability;
        if (aAbility < bAbility) {
            return -1;
        } else if (aAbility > bAbility) {
            return 1;
        } else if (aName < bName) {
            return -1;
        } else if (aName > bName) {
            return 1;
        } else {
            return 0;
        }
    });
    let body = ``;
    let labels = ``;
    abilities.forEach((character, i) => {
        if(i === 0) {
            labels += claimTabLabel(character.Ability, "claims", "absp-claim");
            body += claimTabStart(character.Ability);
            body += claimHeader(character.Ability);
            body += (character.Detail) ? characterBox(character.AccountID, character.GroupID, character.Character, [character.Detail]) : characterBox(character.AccountID, character.GroupID, character.Character);
        } else if(abilities[i - 1].Ability !== character.Ability) {
            labels += claimTabLabel(character.Ability, "claims", "absp-claim");
            body += claimTabEnd();
            body += claimTabStart(character.Ability);
            body += claimHeader(character.Ability);
            body += (character.Detail) ? characterBox(character.AccountID, character.GroupID, character.Character, [character.Detail]) : characterBox(character.AccountID, character.GroupID, character.Character);
        } else {
            body += (character.Detail) ? characterBox(character.AccountID, character.GroupID, character.Character, [character.Detail]) : characterBox(character.AccountID, character.GroupID, character.Character);
        }
    });
    body += claimTabEnd();
    document.querySelector('#abilitiesTabs').insertAdjacentHTML('beforeend', labels);
    document.querySelector('#abilities').insertAdjacentHTML('beforeend', body);
}

function formatJobs(data) {
    let characters = data.filter(item => item.Jobs);
    let employed = [];
    characters.forEach(character => {
        let jobs = character.Jobs.split('+').map(job => JSON.parse(job));
        jobs.forEach(job => {
            employed.push({
                Character: character.Character,
                GroupID: character.GroupID,
                AccountID: character.AccountID,
                Section: job.section,
                Subsection: job.subsection,
                Line1: job.line1,
                Line2: job.line2,
            });
        })
    });

    let selfemployed = employed.filter(item => item.Section === 'self-employed');
    let other = employed.filter(item => item.Section !== 'self-employed');
    other.sort((a, b) => {
        aName = a.Character;
        bName = b.Character;
        aSection = a.Section.replace('the ', '');
        bSection = b.Section.replace('the ', '');
        aSubsection = a.Subsection.replace('the ', '');
        bSubsection = b.Subsection.replace('the ', '');
        aLine2 = a.Line2;
        bLine2 = b.Line2;
        aLine1 = a.Line1;
        bLine1 = b.Line1;
        if (aSection < bSection) {
            return -1;
        } else if (aSection > bSection) {
            return 1;
        } else if (aSubsection < bSubsection) {
            return -1;
        } else if (aSubsection > bSubsection) {
            return 1;
        }  else if (aLine1 < bLine1) {
            return -1;
        } else if (aLine1 > bLine1) {
            return 1;
        } else if (aLine2 < bLine2) {
            return -1;
        } else if (aLine2 > bLine2) {
            return 1;
        }  else if (aName < bName) {
            return -1;
        } else if (aName > bName) {
            return 1;
        } else {
            return 0;
        }
    });
    selfemployed.sort((a, b) => {
        aName = a.Character;
        bName = b.Character;
        aLine2 = a.Line2;
        bLine2 = b.Line2;
        aLine1 = a.Line1;
        bLine1 = b.Line1;
        if (aName < bName) {
            return -1;
        } else if (aName > bName) {
            return 1;
        } else if (aLine1 < bLine1) {
            return -1;
        } else if (aLine1 > bLine1) {
            return 1;
        } else if (aLine2 < bLine2) {
            return -1;
        } else if (aLine2 > bLine2) {
            return 1;
        } else {
            return 0;
        }
    });
    let body = ``;
    let labels = ``;
    other.forEach((character, i) => {
        if(i === 0) {
            labels += claimTabLabel(character.Section, "jobs");
            body += claimTabStart(character.Section);
            if(character.Subsection) {
                body += claimHeader(character.Subsection);
            }
            body += characterBox(character.AccountID, character.GroupID, character.Character, [character.Line1, character.Line2]);
        } else if(other[i - 1].Section !== character.Section) {
            labels += claimTabLabel(character.Section, "jobs");
            body += claimTabEnd();
            body += claimTabStart(character.Section);
            if(character.Subsection) {
                body += claimHeader(character.Subsection);
            }
            body += characterBox(character.AccountID, character.GroupID, character.Character, [character.Line1, character.Line2]);
        }  else if(other[i - 1].Section === character.Section && other[i - 1].Subsection !== character.Subsection) {
            if(character.Subsection) {
                body += claimHeader(character.Subsection);
            }
            body += characterBox(character.AccountID, character.GroupID, character.Character, [character.Line1, character.Line2]);
        } else {
            body += characterBox(character.AccountID, character.GroupID, character.Character, [character.Line1, character.Line2]);
        }
    });
    body += claimTabEnd();
    selfemployed.forEach((character, i) => {
        if(i === 0) {
            labels += claimTabLabel(character.Section, "jobs");
            body += claimTabEnd();
            body += claimTabStart(character.Section);
            body += claimHeader('self-employed');
        }
        body += characterBox(character.AccountID, character.GroupID, character.Character, [character.Line1, character.Line2]);
    })
    body += claimTabEnd();
    document.querySelector('#jobsTabs').insertAdjacentHTML('beforeend', labels);
    document.querySelector('#jobs').insertAdjacentHTML('beforeend', body);
}

function formatClasses(data) {
    let characters = data.filter(item => {
        if(item.GroupName === 'hufflepuff' || item.GroupName === 'ravenclaw' || item.GroupName === 'gryffindor' || item.GroupName === 'slytherin') {
            return true;
        }
        return false;
    });
    let classLists = [];
    characters.forEach(character => {
        let student = {
            Character: character.Character,
            AccountID: character.AccountID,
            GroupID: character.GroupID,
            HogwartsYear: character.HogwartsYear,
            Classes: [],
        };
        let classes = character.HogwartsClasses.split('+').map(course => JSON.parse(course));
        classes.forEach(course => {
            student.Classes.push({
                Name: course.class,
                Grade: course.grade,
            });
        });
        classLists.push(student);
    });
    let students = [];
    classLists.forEach(student => {
        student.Classes.forEach(course => {
            if(course.Name) {
                students.push({
                    Character: student.Character,
                    AccountID: student.AccountID,
                    GroupID: student.GroupID,
                    HogwartsYear: student.HogwartsYear,
                    ClassName: course.Name,
                    ClassGrade: course.Grade,
                });
            }
        });
    });
    students.sort((a, b) => {
        aName = a.Character;
        bName = b.Character;
        aYear = parseInt(getYear(a.HogwartsYear));
        bYear = parseInt(getYear(b.HogwartsYear));
        aClass = a.ClassName;
        bClass = b.ClassName;
        if (aYear < bYear) {
            return -1;
        } else if (aYear > bYear) {
            return 1;
        } else if (aClass < bClass) {
            return -1;
        } else if (aClass > bClass) {
            return 1;
        } else if (aName < bName) {
            return -1;
        } else if (aName > bName) {
            return 1;
        } else {
            return 0;
        }
    });
    let body = ``;
    let labels = ``;
    students.forEach((character, i) => {
        if(i === 0) {
            labels += claimTabLabel(character.HogwartsYear, "students", "classes");
            body += claimTabStart(character.HogwartsYear);
            body += claimHeader(character.ClassName);
            body += characterBox(character.AccountID, character.GroupID, character.Character, [character.ClassGrade]);
        } else if(students[i - 1].HogwartsYear !== character.HogwartsYear) {
            labels += claimTabLabel(character.HogwartsYear, "students", "classes");
            body += claimTabEnd();
            body += claimTabStart(character.HogwartsYear);
            body += claimHeader(character.ClassName);
            body += characterBox(character.AccountID, character.GroupID, character.Character, [character.ClassGrade]);
        }  else if(students[i - 1].HogwartsYear === character.HogwartsYear && students[i - 1].ClassName !== character.ClassName) {
            body += claimHeader(character.ClassName);
            body += characterBox(character.AccountID, character.GroupID, character.Character, [character.ClassGrade]);
        } else {
            body += characterBox(character.AccountID, character.GroupID, character.Character, [character.ClassGrade]);
        }
    });
    body += claimTabEnd();
    document.querySelector('#classTabs').insertAdjacentHTML('beforeend', labels);
    document.querySelector('#classes').insertAdjacentHTML('beforeend', body);
}

function formatDorms(data) {
    let students = data.filter(item => {
        if(item.GroupName === 'hufflepuff' || item.GroupName === 'ravenclaw' || item.GroupName === 'gryffindor' || item.GroupName === 'slytherin') {
            return true;
        }
        return false;
    });
    students.sort((a, b) => {
        aName = a.Character;
        bName = b.Character;
        aHouse = a.GroupName;
        bHouse = b.GroupName;
        aYear = parseInt(getYear(a.HogwartsYear));
        bYear = parseInt(getYear(b.HogwartsYear));
        aDorm = a.Dorm;
        bDorm = b.Dorm;
        if (aHouse < bHouse) {
            return -1;
        } else if (aHouse > bHouse) {
            return 1;
        } else if (aYear < bYear) {
            return -1;
        } else if (aYear > bYear) {
            return 1;
        } else if (aDorm < bDorm) {
            return -1;
        } else if (aDorm > bDorm) {
            return 1;
        } else if (aName < bName) {
            return -1;
        } else if (aName > bName) {
            return 1;
        } else {
            return 0;
        }
    });
    let body = ``;
    let labels = ``;
    students.forEach((character, i) => {
        if(i === 0) {
            labels += claimTabLabel(character.GroupName, "students", "dorms");
            body += claimTabStart(character.GroupName);
            body += claimHeader(character.HogwartsYear);
            body += claimSubheader(character.Dorm);
            body += characterBox(character.AccountID, character.GroupID, character.Character);
        } else if(students[i - 1].GroupName !== character.GroupName) {
            labels += claimTabLabel(character.GroupName, "students", "dorms");
            body += claimTabEnd();
            body += claimTabStart(character.GroupName);
            body += claimHeader(character.HogwartsYear);
            body += claimSubheader(character.Dorm);
            body += characterBox(character.AccountID, character.GroupID, character.Character);
        } else if(students[i - 1].HogwartsYear !== character.HogwartsYear) {
            body += claimHeader(character.HogwartsYear);
            body += claimSubheader(character.Dorm);
            body += characterBox(character.AccountID, character.GroupID, character.Character);
        } else if(students[i - 1].Dorm !== character.Dorm) {
            body += claimSubheader(character.Dorm);
            body += characterBox(character.AccountID, character.GroupID, character.Character);
        } else {
            body += characterBox(character.AccountID, character.GroupID, character.Character);
        }
    });
    body += claimTabEnd();
    document.querySelector('#dormTabs').insertAdjacentHTML('beforeend', labels);
    document.querySelector('#dorms').insertAdjacentHTML('beforeend', body);
}

function formatQuidditch(data) {
    let students = data.filter(item => item.QuidditchPosition);
    students.forEach(student => {
        student.Captain = student.QuidditchPosition.includes('captain');
        if(student.Captain) {
            student.QuidditchPosition = student.QuidditchPosition.split(', ').filter(item => item != 'captain')[0];
        }
    });
    let captains = {
        gryffindor: students.filter(item => item.Captain && item.GroupName === 'gryffindor') || null,
        slytherin: students.filter(item => item.Captain && item.GroupName === 'slytherin') || null,
        ravenclaw: students.filter(item => item.Captain && item.GroupName === 'ravenclaw') || null,
        hufflepuff: students.filter(item => item.Captain && item.GroupName === 'hufflepuff') || null
    }
    students.sort((a, b) => {
        aName = a.Character;
        bName = b.Character;
        aHouse = a.GroupName;
        bHouse = b.GroupName;
        aPosition = a.QuidditchPosition;
        bPosition = b.QuidditchPosition;
        if (aHouse < bHouse) {
            return -1;
        } else if (aHouse > bHouse) {
            return 1;
        } else if (aPosition < bPosition) {
            return -1;
        } else if (aPosition > bPosition) {
            return 1;
        } else if (aName < bName) {
            return -1;
        } else if (aName > bName) {
            return 1;
        } else {
            return 0;
        }
    });

    let html = ``;
    students.forEach((character, i) => {
        if(i === 0) {
            html += claimHeader(character.GroupName);
            if(captains[character.GroupName].length > 0) {
                html += characterBox(captains[character.GroupName][0].AccountID, captains[character.GroupName][0].GroupID, captains[character.GroupName][0].Character, ['captain']);
                html += `<span></span>`;
                html += `<hr class="fullWidth" />`;
            }
            html += characterBox(character.AccountID, character.GroupID, character.Character, [character.QuidditchPosition]);
        } else if(students[i - 1].GroupName !== character.GroupName) {
            html += claimHeader(character.GroupName);
            if(captains[character.GroupName].length > 0) {
                html += characterBox(captains[character.GroupName][0].AccountID, captains[character.GroupName][0].GroupID, captains[character.GroupName][0].Character, ['captain']);
                html += `<span></span>`;
                html += `<hr class="fullWidth" />`;
            }
            html += characterBox(character.AccountID, character.GroupID, character.Character, [character.QuidditchPosition]);
        } else {
            html += characterBox(character.AccountID, character.GroupID, character.Character, [character.QuidditchPosition]);
        }
    });
    document.querySelector('#StudentQuidditch').insertAdjacentHTML('beforeend', html);
}

function formatLeadership(data) {
    let students = data.filter(item => item.LeadershipPosition);
    students.sort((a, b) => {
        aName = a.Character;
        bName = b.Character;
        aHouse = a.GroupName;
        bHouse = b.GroupName;
        if (aHouse < bHouse) {
            return -1;
        } else if (aHouse > bHouse) {
            return 1;
        } else if (aName < bName) {
            return -1;
        } else if (aName > bName) {
            return 1;
        } else {
            return 0;
        }
    });
    let heads = false;
    let fifths = false;
    let sixths = false;
    let sevenths = false;
    (students.filter(student => student.LeadershipPosition === 'head boy/girl').length > 0) ? heads = true : heads = false;
    (students.filter(student => student.HogwartsYear === 'fifth year').length > 0) ? fifths = true : fifths = false;
    (students.filter(student => student.HogwartsYear === 'sixth year').length > 0) ? sixths = true : sixths = false;
    (students.filter(student => student.HogwartsYear === 'seventh year').length > 0) ? sevenths = true : sevenths = false;
    let html = ``;
    if(heads) {
        html += `<h3 class="fullWidth"><hr />student heads<hr /></h3>`;
        students.forEach(character => {
            if(character.LeadershipPosition === 'head boy/girl') {
                html += characterBox(character.AccountID, character.GroupID, character.Character);
            }
        });
    }
    if(sevenths) {
        html += `<h3 class="fullWidth"><hr />seventh year prefects<hr /></h3>`;
        students.forEach(character => {
            if(character.LeadershipPosition === 'prefect' && character.HogwartsYear === 'seventh year') {
                html += characterBox(character.AccountID, character.GroupID, character.Character);
            }
        });
    }
    if(sixths) {
        html += `<h3 class="fullWidth"><hr />sixth year prefects<hr /></h3>`;
        students.forEach(character => {
            if(character.LeadershipPosition === 'prefect' && character.HogwartsYear === 'sixth year') {
                html += characterBox(character.AccountID, character.GroupID, character.Character);
            }
        });
    }
    if(fifths) {
        html += `<h3 class="fullWidth"><hr />fifth year prefects<hr /></h3>`;
        students.forEach(character => {
            if(character.LeadershipPosition === 'prefect' && character.HogwartsYear === 'fifth year') {
                html += characterBox(character.AccountID, character.GroupID, character.Character);
            }
        });
    }
    document.querySelector('#leadership').insertAdjacentHTML('beforeend', html);
}

function formatReserves(data) {
    data.sort((a, b) => {
        aValue = a.Face.toLowerCase();
        bValue = b.Face.toLowerCase();
        if (aValue < bValue) {
            return -1;
        } else if (aValue > bValue) {
            return 1;
        } else {
            return 0;
        }
    });
    let html = ``;
    data.forEach((character, i) => {
        if(i === 0) {
            html += claimHeader(character.Face[0]);
            html += simpleBox(character.Face, character.Member);
        } else if(data[i - 1].Face[0] !== character.Face[0]) {
            html += claimHeader(character.Face[0]);
            html += simpleBox(character.Face, character.Member);
        } else {
            html += simpleBox(character.Face, character.Member);
        }
    });
    document.querySelector('#upcomingfaces').insertAdjacentHTML('beforeend', html);
}