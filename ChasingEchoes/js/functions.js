function setBrightness() {
    if(localStorage.getItem('brightness') !== null) {
        switch(localStorage.getItem('brightness')) {
            case '1':
                document.querySelector('body').classList.remove('light');
                document.querySelector('body').classList.remove('medium');
                document.querySelector('body').classList.add('dark');
                break;
            case '2':
                document.querySelector('body').classList.remove('light');
                document.querySelector('body').classList.add('medium');
                document.querySelector('body').classList.remove('dark');
                break;
            case '3':
            default:
                document.querySelector('body').classList.add('light');
                document.querySelector('body').classList.remove('medium');
                document.querySelector('body').classList.remove('dark');
                break;
        }
    } else {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.querySelector('body').classList.remove('light');
            document.querySelector('body').classList.remove('medium');
            document.querySelector('body').classList.add('dark');
            localStorage.setItem('brightness', '1');
        } else {
            document.querySelector('body').classList.add('light');
            document.querySelector('body').classList.remove('medium');
            document.querySelector('body').classList.remove('dark');
            localStorage.setItem('brightness', '3');
        }
    }
    document.querySelectorAll('input[name="setting-brightness"]').forEach(slider => slider.value = localStorage.getItem('brightness'));
}
function setSize() {
    if(localStorage.getItem('size') !== null) {
        switch(localStorage.getItem('size')) {
            case '1':
                document.querySelector('body').classList.add('smFont');
                document.querySelector('body').classList.remove('mdFont');
                document.querySelector('body').classList.remove('lgFont');
                break;
            case '2':
                document.querySelector('body').classList.remove('smFont');
                document.querySelector('body').classList.add('mdFont');
                document.querySelector('body').classList.remove('lgFont');
                break;
            case '3':
            default:
                document.querySelector('body').classList.remove('smFont');
                document.querySelector('body').classList.remove('mdFont');
                document.querySelector('body').classList.add('lgFont');
                break;
        }
    } else {
        document.querySelector('body').classList.add('smFont');
        document.querySelector('body').classList.remove('mdFont');
        document.querySelector('body').classList.remove('lgFont');
        localStorage.setItem('size', '1');
    }
    document.querySelectorAll('input[name="setting-size"]').forEach(slider => slider.value = localStorage.getItem('size'));
}

function toggleMenu(e) {
    let menu = e.parentNode.parentNode;
    if (menu.classList.contains('is-open')) {
        menu.classList.remove('is-open');
    } else {
        document.querySelectorAll('.nav--popout').forEach(menu => {
            menu.classList.remove('is-open');
        });
        menu.classList.add('is-open');
    }
}

function switchAccount(e) {
    e.classList.toggle('is-open');
}

function cpShift() {
	let appType = document.querySelector('#field_27_input').value,
	    account = document.querySelector('#field_1_input').value,
	    showFields = [],
	    hideFields = hideAlways,
	    showHeaders = allHeaders;

	if(account == 'B') {
		if(appType == 'a') {
            //equestrian
			showFields = charFields.concat(eqFields);
			hideFields = hideAlways;
			showHeaders = allHeaders.concat(charHeaders).concat(eqHeaders);
		}
		else {
            //non-equestrian
			showFields = charFields;
			hideFields = hideAlways.concat(eqFields);
			showHeaders = allHeaders.concat(charHeaders);
		}
	} else {
		showFields = [];
		hideFields = hideAlways.concat(charFields).concat(eqFields);
        showHeaders = allHeaders;
	}
    adjustCP(showFields, hideFields, showHeaders);
}
function adjustCP(show, hide, headers) {
	show.forEach(field => {
		showAccField(field);
	});
	hide.forEach(field => {
		hideAccField(field);
	});
	document.querySelectorAll('.cp-header').forEach(header => {
		header.remove();
	});
	headers.forEach(header => {
		insertCPHeader(header['title'], header['insertBefore']);
	});
}
function hideAccField(field) {
	if(document.querySelector(field)) {
		document.querySelector(field).classList.add('hide');
	}
}
function showAccField(field) {
	if(document.querySelector(field)) {
		document.querySelector(field).classList.remove('hide');
	}
}
function insertCPHeader (title, field, identifier) {
	$(field).before(`<tr class="pformstrip cp-header"><td>${title}</td></tr>`);
}

function moveLeft(e) {
    e.parentNode.querySelector('tag-labelset').scrollLeft -= 150;
}
function moveRight(e) {
    e.parentNode.querySelector('tag-labelset').scrollLeft += 150;
}

function setUCPMenus() {
    if(localStorage.getItem('ucpAccount') && localStorage.getItem('ucpTrack') && localStorage.getItem('ucpSettings')) {
        if(window.innerWidth >= 768) {
            document.querySelectorAll('.ucp--expandable').forEach(menu => menu.classList.remove('is-closed'));
            document.querySelectorAll('.ucp--expandable').forEach(menu => menu.classList.add('is-open'));
        } else {
            document.querySelectorAll('.ucp--expandable').forEach(menu => menu.classList.remove('is-open'));
            document.querySelectorAll('.ucp--expandable').forEach(menu => menu.classList.remove('is-closed'));
            document.querySelector('.ucp--menu-account').classList.add(localStorage.getItem('ucpAccount'));
            document.querySelector('.ucp--menu-track').classList.add(localStorage.getItem('ucpTrack'));
            document.querySelector('.ucp--menu-settings').classList.add(localStorage.getItem('ucpSettings'));
        }
    } else {
        if(window.innerWidth >= 768) {
            document.querySelectorAll('.ucp--expandable').forEach(menu => menu.classList.remove('is-closed'));
            document.querySelectorAll('.ucp--expandable').forEach(menu => menu.classList.add('is-open'));
        } else {
            document.querySelectorAll('.ucp--expandable').forEach(menu => menu.classList.remove('is-open'));
            document.querySelectorAll('.ucp--expandable').forEach(menu => menu.classList.add('is-closed'));
            localStorage.setItem('ucpAccount', 'is-closed');
            localStorage.setItem('ucpTrack', 'is-closed');
            localStorage.setItem('ucpSettings', 'is-closed');
        }
    }
}

function getAllTextNodes(element) {
    if(element) {
        return Array.from(element.childNodes).filter(node => node.nodeType === 3 && node.textContent.trim().length > 1);
    }
}


function openHelp(e) {
    e.classList.toggle('is-help');
    e.parentNode.parentNode.parentNode.querySelector('.help').classList.toggle('show');
}
function loadHides(fields, classes) {
    fields.forEach((field, i) => {
	if(classes[i] !== '.is-competitive') {
	        if(field.options[field.selectedIndex].value === 'y') {
	            document.querySelectorAll(classes[i]).forEach(item => item.classList.remove('hide'));
	        } else {
	            document.querySelectorAll(classes[i]).forEach(item => item.classList.add('hide'));
	        }
	} else {
	        if(field.options[field.selectedIndex].value !== '13' && field.options[field.selectedIndex].value !== '14' && field.options[field.selectedIndex].value !== '') {
	            document.querySelectorAll(classes[i]).forEach(item => item.classList.remove('hide'));
	        } else {
	            document.querySelectorAll(classes[i]).forEach(item => item.classList.add('hide'));
	        }
	}
    });
}
function loadJobFields(fields, type) {
    fields.forEach((field, i) => {
        let num = field.value;
        let html = ``;
        if(type[i] !== 'update') {
            for(let j = 0; j < num; j++) {
                html += `<label>
                    <tag-md data-align="left">Employer</tag-md>
                    <input type="text"
                        name="${type[i]}-job${j}employer"
                        id="${type[i]}-job${j}employer"
                        placeholder="Employer"
                        class="${type[i]}-job-employer"
                        required>
                </label><label>
                <tag-md data-align="left">Position</tag-md>
                    <input type="text"
                        name="${type[i]}-job${j}position"
                        id="${type[i]}-job${j}position"
                        placeholder="Position"
                        class="${type[i]}-job-position"
                        required>
                </label>`;
            }
        } else {
            for(let j = 0; j < num; j++) {
                html += `<label>
                    <tag-md data-align="left">Current Employer</tag-md>
                    <input type="text"
                        name="${type[i]}-job${j}employer-current"
                        id="${type[i]}-job${j}employer-current"
                        placeholder="Current Employer"
                        class="${type[i]}-job-employer-current"
                        required>
                </label>
                <label>
                    <tag-md data-align="left">New Employer</tag-md>
                    <input type="text"
                        name="${type[i]}-job${j}employer-new"
                        id="${type[i]}-job${j}employer-new"
                        placeholder="New Employer"
                        class="${type[i]}-job-employer-new">
                </label>
                <label>
                    <tag-md data-align="left">Current Position</tag-md>
                    <input type="text"
                        name="${type[i]}-job${j}position-current"
                        id="${type[i]}-job${j}position-current"
                        placeholder="Current Position"
                        class="${type[i]}-job-position-current"
                        required>
                </label>
                <label>
                    <tag-md data-align="left">New Position</tag-md>
                    <input type="text"
                        name="${type[i]}-job${j}position-new"
                        id="${type[i]}-job${j}position-new"
                        placeholder="New Position"
                        class="${type[i]}-job-position-new">
                </label>`;
            }
        }
        document.querySelector(`.form--${type[i]}-job-fields`).innerHTML = html;
    })
}
function updateJobs(jobs) {
    let html = ``;
    jobs.split('+').forEach((job, i) => {
        let details = JSON.parse(job);
        html += `<div class="form--update-job">
        <tag-md data-align="left">${details.position}, ${details.employer}</tag-md>
        <label>
            <tag-md data-align="left">Change</tag-md>
            <select name="update-${i}-jobchoice"
                    id="update-${i}-jobchoice"
                    class="job-changechoice"
                    data-employer="${details.employer}"
                    data-position="${details.position}">
                <option value="">(select)</option>
                <option value="Employer">Change Employer</option>
                <option value="Position">Change Position</option>
            </select>
        </label>
        <label class="hide is-change">
            <tag-md data-align="left"></tag-md>
            <input type="text"
                name="update-${i}-jobchange"
                id="update-${i}-jobchange"
                class="job-change"
                data-employer="${details.employer}"
                data-position="${details.position}">
        </label></div>`;
    });
    return html;
}
function jobEvents() {
    document.querySelectorAll('.job-changechoice').forEach(jobChoice => {
        jobChoice.addEventListener('change', e => {
            let select = e.target;
            let value = select.options[select.selectedIndex].value;
            if(value !== '') {
                select.parentNode.nextElementSibling.classList.remove('hide');
                select.parentNode.nextElementSibling.querySelector('tag-md').innerHTML = `New ${value}`;
                select.parentNode.nextElementSibling.querySelector('input').setAttribute('placeholder', `New ${value}`);
                select.parentNode.nextElementSibling.querySelector('input').setAttribute('data-changed', `${value}`);
            }
        });
    });
}
function removeJobs(jobs) {
    let html = `<div class="form--choices">
        <div class="form--flex">`;
    jobs.split('+').forEach((job, i) => {
        let details = JSON.parse(job);
        html += `<label>
            <input type="checkbox"
                name="removeJobChoices"
                id="update-removeChoice-${i}"
                value="update-removeChoice-${i}"
                data-employer="${details.employer}"
                data-position="${details.position}">
            <strong class="checkbox">${details.position}, ${details.employer}</strong>
        </label>`;
    });
    html += `</div>
    </div>`;
    return html;
}
function loadDisciplineFields(fields, type) {
    fields.forEach((field, i) => {
        let num = field.value;
        let html = ``;
        for(let j = 0; j < num; j++) {
            html += `<label>
                <tag-md data-align="left">Discipline</tag-md>
                <input type="text"
                    name="${type[i]}-discipline${j}"
                    id="${type[i]}-discipline${j}"
                    placeholder="Discipline"
                    class="${type[i]}-discipline">
            </label>
            <label>
                <tag-md data-align="left">Level</tag-md>
                <select name="horse-level${j}"
                        id="horse-level${j}"
                        class="horse-level"
                        required>
                    <option value="">(select)</option>
                    <option value="in-training">In Training</option>
                    <option value="pleasure">Pleasure</option>
                    <option value="green">Green</option>
                    <option value="trained">Competition Ready</option>
                </select>
            </label>`;
        }
        document.querySelector(`.form--${type[i]}-discipline-fields`).innerHTML = html;
    })
}
function updateDisciplines(disciplines) {
    let html = ``;
    disciplines.split('+').forEach(discipline => {
        let details = JSON.parse(discipline);
        html += `<label>
            <tag-md data-align="left">${details.discipline} Level</tag-md>
            <select name="horse-${details.discipline}-level"
                    id="horse-${details.discipline}-level"
                    class="horse-level"
                    data-discipline="${details.discipline}">
                <option value="">Unchanged</option>
                <option value="in-training">In Training</option>
                <option value="pleasure">Pleasure</option>
                <option value="green">Green</option>
                <option value="trained">Competition Ready</option>
            </select>
        </label>`;
    });
    return html;
}
function removeDisciplines(disciplines) {
    let html = `<div class="form--choices">
        <div class="form--flex">`;
    disciplines.split('+').forEach(discipline => {
        let details = JSON.parse(discipline);
        html += `<label>
            <input type="checkbox"
                name="removeDisciplineChoices"
                id="horseedit-removeChoice-${details.discipline}"
                value="removeChoice-${details.discipline}"
                data-discipline="${details.discipline}">
            <strong class="checkbox">${details.discipline}</strong>
        </label>`;
    });
    html += `</div>
    </div>`;
    return html;
}
function loadUpdateForm(form = '#form-update') {
    document.querySelectorAll(`${form} .form--choices input[type="checkbox"]`).forEach(option => { 
        switch(option.value) {
	    case 'group':
		let field = document.querySelector('#update-group');
		let className = '.is-update-skills';
		if(form === '#form-update' && option.checked) {
			if(field.options[field.selectedIndex].value !== '13' && field.options[field.selectedIndex].value !== '14' && field.options[field.selectedIndex].value !== '') {
				document.querySelectorAll(className).forEach(item => item.classList.remove('hide'));
			} else {
				document.querySelectorAll(className).forEach(item => item.classList.add('hide'));
			}
		} else if(form === '#form-update' && !option.checked) {
			document.querySelectorAll(className).forEach(item => item.classList.add('hide'));
		}
		break;
            case 'face':
                let face = document.querySelector('#form-update .is-update-face');
                if(!option.checked) {
                    face.classList.add('hide');
                } else {
                    face.classList.remove('hide');
                }
                break;
            case 'newjob':
                let newjob = document.querySelector('#form-update .is-new-job');
                if(!option.checked) {
                    newjob.classList.add('hide');
                    document.querySelector('#new-jobnum').value = 0;
                    loadJobFields([document.querySelector('#new-jobnum')], ['new']);
                } else {
                    newjob.classList.remove('hide');
                }
                break;
            case 'updatejob':
                let updatejob = document.querySelector('#form-update .is-update-job');
                if(!option.checked) {
                    updatejob.classList.add('hide');
                    document.querySelector('.form--update-job-fields').innerHTML = '';
                } else {
                    updatejob.classList.remove('hide');
                    const url = `https://opensheet.elk.sh/1x6ZjvfoBDksT1H09aLM40hWgaTWbvSDfWVumHqnOHL8/HumanClaims`;
                    let character = [];
                    fetch(url)
                    .then((response) => response.json())
                    .then(data => {
                        idCheck = data.filter(item => item.AccountID === document.querySelector('#update-accountid').value.trim());
                        if(idCheck.length === 1) {
                            character = data.filter(item => item.AccountID === document.querySelector('#update-accountid').value.trim())[0];
                            document.querySelector('.form--update-job-fields').innerHTML = updateJobs(character.Jobs);
                            jobEvents();
                        } else if (idCheck.length === 0) {
                            document.querySelector('.form--update-job-fields').innerHTML = `<div class="form--warning">This character doesn't exist in our records. Please be sure to register them using the Get Sorted form.</div>`;
                        } else {
                            document.querySelector('.form--update-job-fields').innerHTML = '<div class="form--warning">Whoops! Somehow this character is already on the sheet - more than once! Please contact a member of staff to fix the sheet.</div>';
                        }
                    });
                }
                break;
            case 'removejob':
                let removejob = document.querySelector('#form-update .is-remove-job');
                if(!option.checked) {
                    removejob.classList.add('hide');
                    document.querySelector('.form--remove-job-fields').innerHTML = '';
                } else {
                    removejob.classList.remove('hide');
                    const url = `https://opensheet.elk.sh/1x6ZjvfoBDksT1H09aLM40hWgaTWbvSDfWVumHqnOHL8/HumanClaims`;
                    let character = [];
                    fetch(url)
                    .then((response) => response.json())
                    .then(data => {
                        idCheck = data.filter(item => item.AccountID === document.querySelector('#update-accountid').value.trim());
                        if(idCheck.length === 1) {
                            character = data.filter(item => item.AccountID === document.querySelector('#update-accountid').value.trim())[0];
                            document.querySelector('.form--remove-job-fields').innerHTML = removeJobs(character.Jobs);
                        } else if (idCheck.length === 0) {
                            document.querySelector('.form--remove-job-fields').innerHTML = `<div class="form--warning">This character doesn't exist in our records. Please be sure to register them using the Get Sorted form.</div>`;
                        } else {
                            document.querySelector('.form--remove-job-fields').innerHTML = '<div class="form--warning">Whoops! Somehow this character is already on the sheet - more than once! Please contact a member of staff to fix the sheet.</div>';
                        }
                    });
                }
                break;
            case 'showname':
                let showname = document.querySelector('#form-horseedit .is-update-showname');
                if(!option.checked) {
                    showname.classList.add('hide');
                } else {
                    showname.classList.remove('hide');
                }
                break;
            case 'barnname':
                let barnname = document.querySelector('#form-horseedit .is-update-barnname');
                if(!option.checked) {
                    barnname.classList.add('hide');
                } else {
                    barnname.classList.remove('hide');
                }
                break;
            case 'image':
                let image = document.querySelector('#form-horseedit .is-update-image');
                if(!option.checked) {
                    image.classList.add('hide');
                } else {
                    image.classList.remove('hide');
                }
                break;
            case 'stable':
                let stable = document.querySelector('#form-horseedit .is-update-stable');
                if(!option.checked) {
                    stable.classList.add('hide');
                } else {
                    stable.classList.remove('hide');
                }
                break;
            case 'sex':
                let sex = document.querySelector('#form-horseedit .is-update-sex');
                if(!option.checked) {
                    sex.classList.add('hide');
                } else {
                    sex.classList.remove('hide');
                }
                break;
            case 'height':
                let height = document.querySelector('#form-horseedit .is-update-height');
                if(!option.checked) {
                    height.classList.add('hide');
                } else {
                    height.classList.remove('hide');
                }
                break;
            case 'newdisc':
                let newdisc = document.querySelector('#form-horseedit .is-new-discipline');
                if(!option.checked) {
                    newdisc.classList.add('hide');
                    document.querySelector('#new-discnum').value = 0;
                    loadDisciplineFields([document.querySelector('#new-discnum')], ['new']);
                } else {
                    newdisc.classList.remove('hide');
                }
                break;
            case 'updatedisc':
                let updatedisc = document.querySelector('#form-horseedit .is-update-discipline');
                if(!option.checked) {
                    updatedisc.classList.add('hide');
                    document.querySelector('.form--update-discipline-fields').innerHTML = '';
                } else {
                    updatedisc.classList.remove('hide');
                    const url = `https://opensheet.elk.sh/1x6ZjvfoBDksT1H09aLM40hWgaTWbvSDfWVumHqnOHL8/HorseClaims`;
                    let horse = [];
                    fetch(url)
                    .then((response) => response.json())
                    .then(data => {
                        nameCheck = data.filter(item => item.ShowName.toLowerCase().trim() === document.querySelector('#horseedit-showname').value.toLowerCase().trim());
                        if(nameCheck.length === 1) {
                            horse = data.filter(item => item.ShowName.toLowerCase().trim() === document.querySelector('#horseedit-showname').value.toLowerCase().trim())[0];
                            document.querySelector('.form--update-discipline-fields').innerHTML = updateDisciplines(horse.Disciplines);
                        } else if (nameCheck.length === 0) {
                            document.querySelector('.form--update-discipline-fields').innerHTML = `<div class="form--warning">This horse doesn't exist in our records. Please be sure to register them using the Horse Registration form.</div>`;
                        } else {
                            document.querySelector('.form--update-discipline-fields').innerHTML = '<div class="form--warning">Whoops! Somehow this horse is already on the sheet - more than once! Please contact a member of staff to fix the sheet.</div>';
                        }
                    });
                }
                break;
            case 'removedisc':
                let removedisc = document.querySelector('#form-horseedit .is-remove-discipline');
                if(!option.checked) {
                    removedisc.classList.add('hide');
                    document.querySelector('.form--remove-discipline-fields').innerHTML = '';
                } else {
                    removedisc.classList.remove('hide');
                    const url = `https://opensheet.elk.sh/1x6ZjvfoBDksT1H09aLM40hWgaTWbvSDfWVumHqnOHL8/HorseClaims`;
                    let horse = [];
                    fetch(url)
                    .then((response) => response.json())
                    .then(data => {
                        nameCheck = data.filter(item => item.ShowName.toLowerCase().trim() === document.querySelector('#horseedit-showname').value.toLowerCase().trim());
                        if(nameCheck.length === 1) {
                            horse = data.filter(item => item.ShowName.toLowerCase().trim() === document.querySelector('#horseedit-showname').value.toLowerCase().trim())[0];
                            document.querySelector('.form--remove-discipline-fields').innerHTML = removeDisciplines(horse.Disciplines);
                        } else if (nameCheck.length === 0) {
                            document.querySelector('.form--remove-discipline-fields').innerHTML = `<div class="form--warning">This horse doesn't exist in our records. Please be sure to register them using the Horse Registration form.</div>`;
                        } else {
                            document.querySelector('.form--remove-discipline-fields').innerHTML = '<div class="form--warning">Whoops! Somehow this horse is already on the sheet - more than once! Please contact a member of staff to fix the sheet.</div>';
                        }
                    });
                }
                break;
            default:
                break;
        }
    });
    if(form === '#form-update') {
	document.querySelector('#update-group').addEventListener('change', e => {
		let field = document.querySelector('#update-group');
		let className = '.is-update-skills';
		let option = document.querySelector('input[type="checkbox"][value="group"]');
		if(option.checked) {
			if(e.target.options[e.target.selectedIndex].value !== '13' && e.target.options[e.target.selectedIndex].value !== '14' && e.target.options[e.target.selectedIndex].value !== '') {
				document.querySelectorAll(className).forEach(item => item.classList.remove('hide'));
			} else {
				document.querySelectorAll(className).forEach(item => item.classList.add('hide'));
			}
		} else if(!option.checked) {
			document.querySelectorAll(className).forEach(item => item.classList.add('hide'));
		}
	});
        document.querySelector('#update-accountid').addEventListener('change', e => {
            if(document.querySelector(`#choice-updatejob`).checked) {
                const url = `https://opensheet.elk.sh/1x6ZjvfoBDksT1H09aLM40hWgaTWbvSDfWVumHqnOHL8/HumanClaims`;
                let character = [];
                fetch(url)
                .then((response) => response.json())
                .then(data => {
                    idCheck = data.filter(item => item.AccountID === document.querySelector('#update-accountid').value.trim());
                    if(idCheck.length === 1) {
                        character = data.filter(item => item.AccountID === document.querySelector('#update-accountid').value.trim())[0];
                        document.querySelector('.form--update-job-fields').innerHTML = updateJobs(character.Jobs);
                        jobEvents();
                    } else if (idCheck.length === 0) {
                        document.querySelector('.form--update-job-fields').innerHTML = `<div class="form--warning">This character doesn't exist in our records. Please be sure to register them using the Get Sorted form.</div>`;
                    } else {
                        document.querySelector('.form--update-job-fields').innerHTML = '<div class="form--warning">Whoops! Somehow this character is already on the sheet - more than once! Please contact a member of staff to fix the sheet.</div>';
                    }
                });
            }
            if(document.querySelector(`#choice-removejob`).checked) {
                const url = `https://opensheet.elk.sh/1x6ZjvfoBDksT1H09aLM40hWgaTWbvSDfWVumHqnOHL8/HumanClaims`;
                let character = [];
                fetch(url)
                .then((response) => response.json())
                .then(data => {
                    idCheck = data.filter(item => item.AccountID === document.querySelector('#update-accountid').value.trim());
                    if(idCheck.length === 1) {
                        character = data.filter(item => item.AccountID === document.querySelector('#update-accountid').value.trim())[0];
                        document.querySelector('.form--remove-job-fields').innerHTML = removeJobs(character.Jobs);
                    } else if (idCheck.length === 0) {
                        document.querySelector('.form--remove-job-fields').innerHTML = `<div class="form--warning">This character doesn't exist in our records. Please be sure to register them using the Get Sorted form.</div>`;
                    } else {
                        document.querySelector('.form--remove-job-fields').innerHTML = '<div class="form--warning">Whoops! Somehow this character is already on the sheet - more than once! Please contact a member of staff to fix the sheet.</div>';
                    }
                });
            }
        });
        let jobFields = [document.querySelector('#new-jobnum')];
        let jobTypes = ['new'];
        loadJobFields(jobFields, jobTypes);
        jobFields.forEach((field, i) => {
            field.addEventListener('change', e => {
                loadJobFields([field], [jobTypes[i]]);
            });
        });
    } else if (form === '#form-horseedit') {
        document.querySelector('#horseedit-showname').addEventListener('change', e => {
            if(document.querySelector(`#horseedit-updatediscChoice`).checked) {
                const url = `https://opensheet.elk.sh/1x6ZjvfoBDksT1H09aLM40hWgaTWbvSDfWVumHqnOHL8/HorseClaims`;
                let horse = [];
                fetch(url)
                .then((response) => response.json())
                .then(data => {
                    nameCheck = data.filter(item => item.ShowName.toLowerCase().trim() === document.querySelector('#horseedit-showname').value.toLowerCase().trim());
                    if(nameCheck.length === 1) {
                        horse = data.filter(item => item.ShowName.toLowerCase().trim() === document.querySelector('#horseedit-showname').value.toLowerCase().trim())[0];
                        document.querySelector('.form--update-discipline-fields').innerHTML = updateDisciplines(horse.Disciplines);
                    } else if (nameCheck.length === 0) {
                        document.querySelector('.form--update-discipline-fields').innerHTML = `<div class="form--warning">This horse doesn't exist in our records. Please be sure to register them using the Horse Registration form.</div>`;
                    } else {
                        document.querySelector('.form--update-discipline-fields').innerHTML = '<div class="form--warning">Whoops! Somehow this horse is already on the sheet - more than once! Please contact a member of staff to fix the sheet.</div>';
                    }
                });
            }
            if(document.querySelector(`#horseedit-removediscChoice`).checked) {
                const url = `https://opensheet.elk.sh/1x6ZjvfoBDksT1H09aLM40hWgaTWbvSDfWVumHqnOHL8/HorseClaims`;
                let horse = [];
                fetch(url)
                .then((response) => response.json())
                .then(data => {
                    nameCheck = data.filter(item => item.ShowName.toLowerCase().trim() === document.querySelector('#horseedit-showname').value.toLowerCase().trim());
                    if(nameCheck.length === 1) {
                        horse = data.filter(item => item.ShowName.toLowerCase().trim() === document.querySelector('#horseedit-showname').value.toLowerCase().trim())[0];
                        document.querySelector('.form--remove-discipline-fields').innerHTML = removeDisciplines(horse.Disciplines);
                    } else if (nameCheck.length === 0) {
                        document.querySelector('.form--remove-discipline-fields').innerHTML = `<div class="form--warning">This horse doesn't exist in our records. Please be sure to register them using the Horse Registration form.</div>`;
                    } else {
                        document.querySelector('.form--remove-discipline-fields').innerHTML = '<div class="form--warning">Whoops! Somehow this horse is already on the sheet - more than once! Please contact a member of staff to fix the sheet.</div>';
                    }
                });
            }
        });
        let discFields = [document.querySelector('#new-discnum')];
        let discTypes = ['new'];
        loadDisciplineFields(discFields, discTypes);
        discFields.forEach((field, i) => {
            field.addEventListener('change', e => {
                loadDisciplineFields([field], [discTypes[i]]);
            });
        });
    }
}

function modalHorseBox(horse, comp) {
    let disciplines = [];
    let disciplineList = horse.Disciplines.split('+');
    disciplineList.forEach(discipline => {
        disciplines.push(JSON.parse(discipline));
    })
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
    if (comp) {
        return `<div class="claims--horse">
	        <img src="${horse.Image}" />
	        <div class="claims--item horse"><div class="claims--border">
	            <b>${horse.ShowName}</b>
	            <a href="?act=Pages&kid=guidebook#${horse.Stable}">kept at ${horse.StableFull}</a>
	            <span>known as ${horse.BarnName}</span>
	            <span>a ${horse.Age} ${horse.Breed} ${horse.Sex}</span>
	            <span>${horse.Height}hh ${horse.Color} with ${horse.Markings}</span>
	        </div></div>
	        <div class="claims--item skills"><div class="claims--border"><div class="scroll">
	            ${disciplineHTML}
	        </div></div></div>
	    </div>`;
    }
    return `<div class="claims--horse">
	        <img src="${horse.Image}" />
	        <div class="claims--item horse"><div class="claims--border">
	            <b>${horse.ShowName}</b>
	            <a href="?act=Pages&kid=guidebook#${horse.Stable}">kept at ${horse.StableFull}</a>
	            <span>known as ${horse.BarnName}</span>
	            <span>a ${horse.Age} ${horse.Breed} ${horse.Sex}</span>
	            <span>${horse.Height}hh ${horse.Color} with ${horse.Markings}</span>
	        </div></div>
	    </div>`;
}
function formatModalHorses(data, id, gid, eqField) {
    let owned = data.filter(item => item.AccountID === id);
    let comp = false;
    if (gid !== `13` && gid !== `14` && eqField === 'Competitive') { comp = true; }
    let html = ``;
    owned.forEach(horse => {
        html += modalHorseBox(horse, true);
    });
    if(html === ``) {
        html = `<div class="post--notice">Horses not yet submitted.</div>`;
    }
    document.querySelector(`div[data-modal-box="horses-${id}"] .post--modal-content`).insertAdjacentHTML('beforeend', html);
    let scrolls = document.querySelectorAll('.claims--item.skills .scroll');
    if(scrolls.length > 0) {
    	scrolls.forEach(scroll => {
            if(scroll.scrollHeight > scroll.clientHeight) {
            	scroll.style.paddingRight = '10px';
            }
    	});
    }
}

function capitalize(str, separators) {
    separators = separators || [ ' ' ];
    var regex = new RegExp('(^|[' + separators.join('') + '])(\\w)', 'g');
    return str.replace(regex, function(x) { return x.toUpperCase(); });
}

function webpageFunctions() {
    window.addEventListener('scroll', () => {
        if(window.scrollY > 0) {
            document.querySelector('body').classList.add('is-scrolled');
        } else {
            document.querySelector('body').classList.remove('is-scrolled');
        }
    });

    window.addEventListener('hashchange', function(e){
        //get hash
        let hash = $.trim( window.location.hash );
        let selected = document.querySelector(`.webpage--menu a[href="${hash}"]`);
        let selectedCategory = selected.parentNode.parentNode.parentNode.getAttribute('data-category');
        let hashMain = document.querySelector(`.webpage--menu tag-label[data-category="${selectedCategory}"]`);
        let hashCategory = document.querySelector(`.webpage--menu tag-tab[data-category="${selectedCategory}"]`);
        let hashTab = document.querySelector(`.webpage--content tag-tab[data-category="${selectedCategory}"]`);
        let hashContent = document.querySelector(`tag-tab[data-key="${hash}"]`);
        let unsetDefault = Array.from(selected.parentNode.children);
        let submenuSiblings = Array.from(hashTab.parentNode.children);
        let categorySiblings = Array.from(hashCategory.parentNode.children);
        let tabSiblings = Array.from(hashContent.parentNode.children);
        let submenuIndex = submenuSiblings.indexOf.call(submenuSiblings, hashTab);
        let categoryIndex = categorySiblings.indexOf.call(categorySiblings, hashCategory);
        let tabIndex = tabSiblings.indexOf.call(tabSiblings, hashContent);
        //find the sub menu/inner menu link with the matching hash
        if (hash) {
            $(selected).trigger('click');
        }
        //select based on this

        //Tabs
        //Remove active from everything
        document.querySelectorAll('.webpage--menu tag-label').forEach(label => label.classList.remove('is-active'));
        unsetDefault.forEach(label => label.classList.remove('is-active'));
        document.querySelectorAll('.webpage tag-tab').forEach(label => label.classList.remove('is-active'));

        //Add active
        hashMain.classList.add('is-active');
        selected.classList.add('is-active');
        hashTab.classList.add('is-active');
        hashContent.classList.add('is-active');
        selected.parentNode.parentNode.parentNode.classList.add('is-active');
        submenuSiblings.forEach(sibling => sibling.style.left = `${-100 * submenuIndex}%`);
        categorySiblings.forEach(sibling => sibling.style.left = `${-100 * categoryIndex}%`);
        tabSiblings.forEach(sibling => sibling.style.left = `${-100 * tabIndex}%`);
    });

    //hash linking
    if (window.location.hash){
        //get hash
        let hash = $.trim( window.location.hash );
        let selected = document.querySelector(`.webpage--menu a[href="${hash}"]`);
        let selectedCategory = selected.parentNode.parentNode.parentNode.getAttribute('data-category');
        let hashMain = document.querySelector(`.webpage--menu tag-label[data-category="${selectedCategory}"]`);
        let hashCategory = document.querySelector(`.webpage--menu tag-tab[data-category="${selectedCategory}"]`);
        let hashTab = document.querySelector(`.webpage--content tag-tab[data-category="${selectedCategory}"]`);
        let hashContent = document.querySelector(`tag-tab[data-key="${hash}"]`);
        let unsetDefault = Array.from(selected.parentNode.children);
        let submenuSiblings = Array.from(hashTab.parentNode.children);
        let categorySiblings = Array.from(hashCategory.parentNode.children);
        let tabSiblings = Array.from(hashContent.parentNode.children);
        let submenuIndex = submenuSiblings.indexOf.call(submenuSiblings, hashTab);
        let categoryIndex = categorySiblings.indexOf.call(categorySiblings, hashCategory);
        let tabIndex = tabSiblings.indexOf.call(tabSiblings, hashContent);
        //find the sub menu/inner menu link with the matching hash
        if (hash) {
            $(selected).trigger('click');
        }
        //select based on this

        //Tabs
        //Remove active from everything
        document.querySelectorAll('.webpage--menu tag-label').forEach(label => label.classList.remove('is-active'));
        unsetDefault.forEach(label => label.classList.remove('is-active'));
        document.querySelectorAll('.webpage tag-tab').forEach(label => label.classList.remove('is-active'));

        //Add active
        hashMain.classList.add('is-active');
        selected.classList.add('is-active');
        hashTab.classList.add('is-active');
        hashContent.classList.add('is-active');
        selected.parentNode.parentNode.parentNode.classList.add('is-active');
        submenuSiblings.forEach(sibling => sibling.style.left = `${-100 * submenuIndex}%`);
        categorySiblings.forEach(sibling => sibling.style.left = `${-100 * categoryIndex}%`);
        tabSiblings.forEach(sibling => sibling.style.left = `${-100 * tabIndex}%`);
    } else {
        //Auto-select  tab without hashtag present
        document.querySelector('.webpage--menu a[href="#etiquette"]').classList.add('is-active');
        document.querySelector('.webpage--menu a[href="#etiquette"]').parentNode.parentNode.parentNode.classList.add('is-active');
        document.querySelector('.webpage--menu tag-label[data-category="required"]').classList.add('is-active');
        document.querySelector('tag-tab[data-category="required"] .webpage--section tag-tabset tag-tab:first-child').classList.add('is-active');
    }
}