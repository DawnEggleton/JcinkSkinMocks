function toggleMenu() {
    document.querySelector('body').classList.toggle('nav-open');
}


function highlightCode() {
    console.log('clicked');
    let clipcodeQuick = new Clipboard('.copyQuick', {
        target: function(trigger) {
            console.log(trigger.nextElementSibling);
            return trigger.nextElementSibling.querySelector('textarea');
        }
    });
}


function toggleSize() {
    document.body.classList.toggle('smlFont');
    document.body.classList.toggle('lrgFont');
    if(document.body.classList.contains('lrgFont')) {
        localStorage.setItem("SIZEMODE", "1");
    } else {
        localStorage.setItem("SIZEMODE", "0");
    }
}


function toggleTheme() {
    document.body.classList.toggle('light');
    document.body.classList.toggle('dark');
    if(document.body.classList.contains('dark')) {
        localStorage.setItem("COLORMODE", "1");
    } else {
        localStorage.setItem("COLORMODE", "0");
    }
}

function capitalize(str, separators) {
    separators = separators || [ ' ' ];
    var regex = new RegExp('(^|[' + separators.join('') + '])(\\w)', 'g');
    return str.replace(regex, function(x) { return x.toUpperCase(); });
}




/* SORTING FORM FUNCTIONS */
function addRequired(field) {
    document.querySelector(field).setAttribute('required', true);
}
function removeRequired(field) {
    document.querySelector(field).removeAttribute('required');   
}
function showFields(fields) {
    document.querySelectorAll(fields).forEach(field => {
        field.classList.remove('hide');
    });
}
function hideFields(fields) {
    document.querySelectorAll(fields).forEach(field => {
        field.classList.add('hide');
    });
}
function checkEmployed() {
    let selected = document.querySelector('#sort-employed').options[document.querySelector('#sort-employed').selectedIndex].value;
    if(selected == 'y') {
        showFields('.ifJob');
        addRequired('#sort-jobtitle');
    } else {
        hideFields('.ifJob');
        removeRequired('#sort-jobtitle');
    }
}
function checkUniversity() {
    let selected = document.querySelector('#sort-universitystudent').options[document.querySelector('#sort-universitystudent').selectedIndex].value;
    if(selected == 'y') {
        showFields('.ifUni');
        addRequired('#sort-universityname');
        addRequired('#sort-universityprogram');
        addRequired('#sort-universityyear');
    } else {
        hideFields('.ifUni');
        removeRequired('#sort-universityname');
        removeRequired('#sort-universityprogram');
        removeRequired('#sort-universityyear');
    }
}
function checkYear() {
    let selected = document.querySelector('#sort-hogwartsyear').options[document.querySelector('#sort-hogwartsyear').selectedIndex].value;
    switch (selected) {
        case '1':
        case '2':
            showFields('.ifCore, .ifStart');
            hideFields('.ifLower, .ifLeadershipershipPossible, .ifUpper, .ifElec');
            break;
        case '3':
        case '4':
            showFields('.ifLower, .ifElec, .ifCore');
            hideFields('.ifLeadershipershipPossible, .ifUpper, .ifStart');
            break;
        case '5':
            showFields('.ifLeadershipershipPossible, .ifLower, .ifElec, .ifCore');
            hideFields('.ifUpper, .ifStart');
            break;
        case '6':
        case '7':
            showFields('.ifLeadershipershipPossible, .ifUpper, .ifElec');
            hideFields('.ifLower, .ifStart, .ifCore');
            break;
        default:
            hideFields('.ifLower, .ifUpper, .ifLeadership, .ifLeadershipershipPossible, .ifQuidditch, .ifElec, .ifStart, .ifCore');
            break;
    } 
}
function checkLeadPos() {
    let selected = document.querySelector('#sort-leadership').options[document.querySelector('#sort-leadership').selectedIndex].value;
    if(selected == 'y') {
        showFields('.ifLeadership');
    } else {
        hideFields('.ifLeadership');
    }  
}
function checkQuid() {
    let selected = document.querySelector('#sort-quidditch').options[document.querySelector('#sort-quidditch').selectedIndex].value;
    if(selected == 'y') {
        showFields('.ifQuidditch');
    } else {
        hideFields('.ifQuidditch');
    }  
}

class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    get(endpoint) {
        return fetch(this.baseURL + endpoint)
            .then(response => response.json());
    }
}