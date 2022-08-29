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
        if(field.options[field.selectedIndex].value === 'y') {
            document.querySelectorAll(classes[i]).forEach(item => item.classList.remove('hide'));
        } else {
            document.querySelectorAll(classes[i]).forEach(item => item.classList.add('hide'));
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