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
        addRequired('#sort-jobnotes');
    } else {
        hideFields('.ifJob');
        removeRequired('#sort-jobnotes');
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
            hideFields('.ifLower, .ifLeadershipPossible, .ifUpper, .ifElec');
            break;
        case '3':
        case '4':
            showFields('.ifLower, .ifElec, .ifCore');
            hideFields('.ifLeadership, .ifLeadershipPossible, .ifUpper, .ifStart');
            break;
        case '5':
            showFields('.ifLeadershipPossible, .ifLower, .ifElec, .ifCore');
            hideFields('.ifUpper, .ifStart');
            break;
        case '6':
        case '7':
            showFields('.ifLeadershipPossible, .ifUpper, .ifElec');
            hideFields('.ifLower, .ifStart, .ifCore');
            break;
        default:
            hideFields('.ifLower, .ifUpper, .ifLeadership, .ifLeadershipPossible, .ifQuidditch, .ifElec, .ifStart, .ifCore');
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

function getYear(year) {
    switch (year) {
        case 'first year':
            return 1;
        case 'second year':
            return 2;
        case 'third year':
            return 3;
        case 'fourth year':
            return 4;
        case 'post-grad':
        case 'fifth year':
            return 5;
        case 'sixth year':
            return 6;
        case 'seventh year':
            return 7;
    }
}

function structureFaceClaim (data, infoClip = '#faces') {
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
    document.querySelector(infoClip).insertAdjacentHTML('beforeend', html);
}

function structureUniClaim (data, infoClip = '#university') {
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
    document.querySelector(infoClip).insertAdjacentHTML('beforeend', html);
}

function structureAbilitiesClaim (data, labelClip = '#abilitiesTabs', tabClip = '#abilities') {
    let charAbilities = data.filter(item => item.Abilities);
    let charSpecies = data.filter(item => item.Species);
    let abilities = [];
    charAbilities.forEach(character => {
        let characterAbilities = character.Abilities.split(', ');
        characterAbilities.forEach(ability => {
            let stripped = ability.split(' ('), animagusForm = null;
            if(stripped.length > 1) {
                animagusForm = stripped[1].split(')')[0];
            }
            abilities.push({
                Character: character.Character,
                GroupID: character.GroupID,
                AccountID: character.AccountID,
                Ability: stripped[0],
                AnimagusForm: animagusForm,
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
    charSpecies.sort((a, b) => {
        aName = a.Character;
        bName = b.Character;
        aSpecies = a.Species;
        bSpecies = b.Species;
        if (aSpecies < bSpecies) {
            return -1;
        } else if (aSpecies > bSpecies) {
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
            labels += claimTabLabel(character.Ability);
            body += claimTabStart();
            body += claimHeader(character.Ability);
            body += (character.AnimagusForm) ? characterBox(character.AccountID, character.GroupID, character.Character, [character.AnimagusForm]) : characterBox(character.AccountID, character.GroupID, character.Character);
        } else if(abilities[i - 1].Ability !== character.Ability) {
            labels += claimTabLabel(character.Ability);
            body += claimTabEnd();
            body += claimTabStart();
            body += claimHeader(character.Ability);
            body += (character.AnimagusForm) ? characterBox(character.AccountID, character.GroupID, character.Character, [character.AnimagusForm]) : characterBox(character.AccountID, character.GroupID, character.Character);
        } else {
            body += (character.AnimagusForm) ? characterBox(character.AccountID, character.GroupID, character.Character, [character.AnimagusForm]) : characterBox(character.AccountID, character.GroupID, character.Character);
        }
    });
    body += claimTabEnd();
    charSpecies.forEach((character, i) => {
        if(i === 0) {
            labels += claimTabLabel(character.Species);
            body += claimTabStart();
            body += claimHeader(character.Species);
            body += (character.VeelaBlood) ? characterBox(character.AccountID, character.GroupID, character.Character, [character.VeelaBlood]) : characterBox(character.AccountID, character.GroupID, character.Character);
        } else if(charSpecies[i - 1].Species !== character.Species) {
            labels += claimTabLabel(character.Species);
            body += claimTabEnd();
            body += claimTabStart();
            body += claimHeader(character.Species);
            body += (character.VeelaBlood) ? characterBox(character.AccountID, character.GroupID, character.Character, [character.VeelaBlood]) : characterBox(character.AccountID, character.GroupID, character.Character);
        } else {
            body += (character.VeelaBlood) ? characterBox(character.AccountID, character.GroupID, character.Character, [character.VeelaBlood]) : characterBox(character.AccountID, character.GroupID, character.Character);
        }
    });
    body += claimTabEnd();
    document.querySelector(labelClip).insertAdjacentHTML('beforeend', labels);
    document.querySelector(tabClip).insertAdjacentHTML('beforeend', body);
}

function structureJobClaim (data, labelClip = '#jobsTabs', tabClip = '#jobs') {
    let array = data.filter(item => item.JobTitle);
    let employed = [];
    array.forEach(character => {
        employed.push({
            Character: character.Character,
            GroupID: character.GroupID,
            AccountID: character.AccountID,
            Section: character.JobSection,
            Subsection: character.JobSubsection,
            Title: character.JobTitle,
            Notes: character.JobNotes,
        });
        if(character.Job2Title) {
            employed.push({
                Character: character.Character,
                GroupID: character.GroupID,
                AccountID: character.AccountID,
                Section: character.Job2Section,
                Subsection: character.Job2Subsection,
                Title: character.Job2Title,
                Notes: character.Job2Notes,
            });
        }
        if(character.Job3Title) {
            employed.push({
                Character: character.Character,
                GroupID: character.GroupID,
                AccountID: character.AccountID,
                Section: character.Job3Section,
                Subsection: character.Job3Subsection,
                Title: character.Job3Title,
                Notes: character.Job3Notes,
            });
        }
        if(character.Job4Title) {
            employed.push({
                Character: character.Character,
                GroupID: character.GroupID,
                AccountID: character.AccountID,
                Section: character.Job4Section,
                Subsection: character.Job4Subsection,
                Title: character.Job4Title,
                Notes: character.Job4Notes,
            });
        }
    });
    employed.sort((a, b) => {
        aName = a.Character;
        bName = b.Character;
        aSection = a.Section;
        bSection = b.Section;
        aSubsection = a.Subsection;
        bSubsection = b.Subsection;
        aTitle = a.Title;
        bTitle = b.Title;
        aNotes = a.Notes;
        bNotes = b.Notes;
        if (aSection < bSection) {
            return -1;
        } else if (aSection > bSection) {
            return 1;
        } else if (aSubsection < bSubsection) {
            return -1;
        } else if (aSubsection > bSubsection) {
            return 1;
        }  else if (aNotes < bNotes) {
            return -1;
        } else if (aNotes > bNotes) {
            return 1;
        } else if (aTitle < bTitle) {
            return -1;
        } else if (aTitle > bTitle) {
            return 1;
        }  else if (aName < bName) {
            return -1;
        } else if (aName > bName) {
            return 1;
        } else {
            return 0;
        }
    });
    let body = ``;
    let labels = ``;
    employed.forEach((character, i) => {
        if(i === 0) {
            labels += claimTabLabel(character.Section);
            body += claimTabStart();
            body += claimHeader(character.Section);
            body += claimSubheader(character.Subsection);
            body += characterBox(character.AccountID, character.GroupID, character.Character, [character.Notes, character.Title]);
        } else if(employed[i - 1].Section !== character.Section) {
            labels += claimTabLabel(character.Section);
            body += claimTabEnd();
            body += claimTabStart();
            body += claimHeader(character.Section);
            body += claimSubheader(character.Subsection);
            body += characterBox(character.AccountID, character.GroupID, character.Character, [character.Notes, character.Title]);
        }  else if(employed[i - 1].Section === character.Section && employed[i - 1].Subsection !== character.Subsection) {
            body += claimSubheader(character.Subsection);
            body += characterBox(character.AccountID, character.GroupID, character.Character, [character.Notes, character.Title]);
        } else {
            body += characterBox(character.AccountID, character.GroupID, character.Character, [character.Notes, character.Title]);
        }
    });
    body += claimTabEnd();
    document.querySelector(labelClip).insertAdjacentHTML('beforeend', labels);
    document.querySelector(tabClip).insertAdjacentHTML('beforeend', body);
}

function structureClassClaim (data, labelClip = '#classTabs', tabClip = '#classes') {
    let array = data.filter(item => {
        if(item.GroupName === 'hufflepuff' || item.GroupName === 'ravenclaw' || item.GroupName === 'gryffindor' || item.GroupName === 'slytherin') {
            return true;
        }
        return false;
    });
    let classLists = [];
    array.forEach(character => {
        let student = {
            Character: character.Character,
            AccountID: character.AccountID,
            GroupID: character.GroupID,
            HogwartsYear: character.HogwartsYear,
        };
        if(parseInt(getYear(character.HogwartsYear)) < 3) {
            student.Classes = [
                {
                    Name: 'astronomy',
                    Grade: character.Astronomy,
                },
                {
                    Name: 'charms',
                    Grade: character.Charms,
                },
                {
                    Name: 'defence against the dark arts',
                    Grade: character.DADA,
                },
                {
                    Name: 'games',
                    Grade: character.Games,
                },
                {
                    Name: 'herbology',
                    Grade: character.Herbology,
                },
                {
                    Name: 'history of magic',
                    Grade: character.HistoryOfMagic,
                },
                {
                    Name: 'literacy',
                    Grade: character.Literacy,
                },
                {
                    Name: 'magical theory',
                    Grade: character.MagicalTheory,
                },
                {
                    Name: 'maths',
                    Grade: character.Maths,
                },
                {
                    Name: character.Culture,
                    Grade: character.CultureGrade,
                },
                {
                    Name: 'potions',
                    Grade: character.Potions,
                },
                {
                    Name: 'transfiguration',
                    Grade: character.Transfiguration,
                }
            ]
        } else if (parseInt(getYear(character.HogwartsYear)) < 6) {
            student.Classes = [
                {
                    Name: 'astronomy',
                    Grade: character.Astronomy,
                },
                {
                    Name: 'charms',
                    Grade: character.Charms,
                },
                {
                    Name: 'defence against the dark arts',
                    Grade: character.DADA,
                },
                {
                    Name: 'games',
                    Grade: character.Games,
                },
                {
                    Name: 'herbology',
                    Grade: character.Herbology,
                },
                {
                    Name: 'history of magic',
                    Grade: character.HistoryOfMagic,
                },
                {
                    Name: 'potions',
                    Grade: character.Potions,
                },
                {
                    Name: 'transfiguration',
                    Grade: character.Transfiguration,
                },
                {
                    Name: character.Elec1,
                    Grade: character.Elec1Grade,
                },
                {
                    Name: character.Elec2,
                    Grade: character.Elec2Grade,
                },
                {
                    Name: character.Elec3,
                    Grade: character.Elec3Grade,
                },
                {
                    Name: character.Elec4,
                    Grade: character.Elec4Grade,
                }
            ]
        } else {
            student.Classes = [
                {
                    Name: character.Elec1,
                    Grade: character.Elec1Grade,
                },
                {
                    Name: character.Elec2,
                    Grade: character.Elec2Grade,
                },
                {
                    Name: character.Elec3,
                    Grade: character.Elec3Grade,
                },
                {
                    Name: character.Elec4,
                    Grade: character.Elec4Grade,
                },
                {
                    Name: character.Elec5,
                    Grade: character.Elec5Grade,
                },
                {
                    Name: character.Elec6,
                    Grade: character.Elec6Grade,
                },
                {
                    Name: character.Elec7,
                    Grade: character.Elec7Grade,
                },
                {
                    Name: character.Elec8,
                    Grade: character.Elec8Grade,
                }
            ]
        }
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
            labels += claimTabLabel(character.HogwartsYear);
            body += claimTabStart();
            body += claimHeader(character.HogwartsYear);
            body += claimSubheader(character.ClassName);
            body += characterBox(character.AccountID, character.GroupID, character.Character, [character.ClassGrade]);
        } else if(students[i - 1].HogwartsYear !== character.HogwartsYear) {
            labels += claimTabLabel(character.HogwartsYear);
            body += claimTabEnd();
            body += claimTabStart();
            body += claimHeader(character.HogwartsYear);
            body += claimSubheader(character.ClassName);
            body += characterBox(character.AccountID, character.GroupID, character.Character, [character.ClassGrade]);
        }  else if(students[i - 1].HogwartsYear === character.HogwartsYear && students[i - 1].ClassName !== character.ClassName) {
            body += claimSubheader(character.ClassName);
            body += characterBox(character.AccountID, character.GroupID, character.Character, [character.ClassGrade]);
        } else {
            body += characterBox(character.AccountID, character.GroupID, character.Character, [character.ClassGrade]);
        }
    });
    body += claimTabEnd();
    document.querySelector(labelClip).insertAdjacentHTML('beforeend', labels);
    document.querySelector(tabClip).insertAdjacentHTML('beforeend', body);
}

function structureDormClaim (data, labelClip = '#dormTabs', tabClip = '#dorms') {
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
            labels += claimTabLabel(character.GroupName);
            body += claimTabStart();
            body += claimHeader(character.HogwartsYear);
            body += claimSubheader(character.Dorm);
            body += characterBox(character.AccountID, character.GroupID, character.Character);
        } else if(students[i - 1].GroupName !== character.GroupName) {
            labels += claimTabLabel(character.GroupName);
            body += claimTabEnd();
            body += claimTabStart();
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
    document.querySelector(labelClip).insertAdjacentHTML('beforeend', labels);
    document.querySelector(tabClip).insertAdjacentHTML('beforeend', body);
}

function structureQuidditchClaim (data, infoClip = '#quidditch') {
    let students = data.filter(item => item.QuidditchPosition);
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
            html += characterBox(character.AccountID, character.GroupID, character.Character, [character.QuidditchPosition]);
        } else if(students[i - 1].GroupName !== character.GroupName) {
            html += claimHeader(character.GroupName);
            html += characterBox(character.AccountID, character.GroupID, character.Character, [character.QuidditchPosition]);
        } else {
            html += characterBox(character.AccountID, character.GroupID, character.Character, [character.QuidditchPosition]);
        }
    });
    document.querySelector(infoClip).insertAdjacentHTML('beforeend', html);
}

function structureLeadClaim (data, infoClip = '#leadership') {
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
        html += `<h3 class="fullWidth">student heads</h3>`;
        students.forEach(character => {
            if(character.LeadershipPosition === 'head boy/girl') {
                html += characterBox(character.AccountID, character.GroupID, character.Character);
            }
        });
    }
    if(sevenths) {
        html += `<h3 class="fullWidth">seventh year prefects</h3>`;
        students.forEach(character => {
            if(character.LeadershipPosition === 'prefect' && character.HogwartsYear === 'seventh year') {
                html += characterBox(character.AccountID, character.GroupID, character.Character);
            }
        });
    }
    if(sixths) {
        html += `<h3 class="fullWidth">sixth year prefects</h3>`;
        students.forEach(character => {
            if(character.LeadershipPosition === 'prefect' && character.HogwartsYear === 'sixth year') {
                html += characterBox(character.AccountID, character.GroupID, character.Character);
            }
        });
    }
    if(fifths) {
        html += `<h3 class="fullWidth">fifth year prefects</h3>`;
        students.forEach(character => {
            if(character.LeadershipPosition === 'prefect' && character.HogwartsYear === 'fifth year') {
                html += characterBox(character.AccountID, character.GroupID, character.Character);
            }
        });
    }
    document.querySelector(infoClip).insertAdjacentHTML('beforeend', html);
}

function claimTabStart() {
    return `<div class="claim--tab grid twoCol">`;
}

function claimTabEnd() {
    return `</div>`;
}

function claimTabLabel(label) {
    return `<a href="#${cleanString(label)}">${label}</a>`;
}

function claimHeader(title) {
    return `<h3 class="fullWidth">${title}</h3>`;
}

function claimSubheader(title) {
    return `<h4 class="fullWidth">${title}</h4>`;
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
                

function postToGoogle() {
  let member = $("#sort-member").val().toLowerCase();
  let character = $("#sort-character").val().toLowerCase();
  let accountID = $("#sort-id").val();
  let group = $("#sort-group").find(":selected").text().toLowerCase();
  let groupID = $("#sort-group").val();
  let face = $("#sort-face").val().toLowerCase();
  let checkboxes = document.querySelectorAll('input[name="abilities"]:checked'), values = [];
  Array.prototype.forEach.call(checkboxes, function(el) {
      let value = el.value;
      if(value == 'animagus') {
          value = `${value} (${document.querySelector("#sort-animagusform").value.toLowerCase()})`;
      }
      values.push(value);
  });
  if($('#sort-otherability').val()) {
      values.push($('#sort-otherability').val().toLowerCase());
  }
  let abilities = values.join(', ');
  let species = $("#sort-species").find(":selected").val();
  if(species == `Not Applicable`) {species = '';}
  let veelablood = $("#sort-veelablood").val();
  if(veelablood == `(select)`) {veelablood = '';}
  let jobsection = $("#sort-jobsection").find(":selected").text().toLowerCase();
  if(jobsection == `(select)`) {jobsection = '';}
  let jobsubsection = $("#sort-jobsubsection").val().toLowerCase();
  let jobtitle = $("#sort-jobtitle").val().toLowerCase();
  let jobnotes = $("#sort-jobnotes").val().toLowerCase();
  let school = $("#sort-universityname").val().toLowerCase();
  let program = $("#sort-universityprogram").val().toLowerCase();
  let universityyear = $("#sort-universityyear").find(":selected").text().toLowerCase();
  if(universityyear == `(select)`) {universityyear = '';}
  let hogwartsyear = $("#sort-hogwartsyear").find(":selected").text().toLowerCase();
  if(hogwartsyear == `(select)`) {hogwartsyear = '';}
  let astronomy = $("#sort-astronomy").find(":selected").text().toLowerCase();
  if(astronomy == `(select)`) {astronomy = '';}
  let charms = $("#sort-charms").find(":selected").text().toLowerCase();
  if(charms == `(select)`) {charms = '';}
  let dada = $("#sort-dada").find(":selected").text().toLowerCase();
  if(dada == `(select)`) {dada = '';}
  let games = $("#sort-games").find(":selected").text().toLowerCase();
  if(games == `(select)`) {games = '';}
  let herbology = $("#sort-herbology").find(":selected").text().toLowerCase();
  if(herbology == `(select)`) {herbology = '';}
  let historyofmagic = $("#sort-historyofmagic").find(":selected").text().toLowerCase();
  if(historyofmagic == `(select)`) {historyofmagic = '';}
  let literacy = $("#sort-literacy").find(":selected").text().toLowerCase();
  if(literacy == `(select)`) {literacy = '';}
  let magicaltheory = $("#sort-magicaltheory").find(":selected").text().toLowerCase();
  if(magicaltheory == `(select)`) {magicaltheory = '';}
  let maths = $("#sort-maths").find(":selected").text().toLowerCase();
  if(maths == `(select)`) {maths = '';}
  let potions = $("#sort-potions").find(":selected").text().toLowerCase();
  if(potions == `(select)`) {potions = '';}
  let transfiguration = $("#sort-transfiguration").find(":selected").text().toLowerCase();
  if(transfiguration == `(select)`) {transfiguration = '';}
  let culture = $("#sort-culture").find(":selected").text().toLowerCase();
  if(culture == `(select)`) {culture = '';}
  let culturegrade = $("#sort-culturegrade").find(":selected").text().toLowerCase();
  if(culturegrade == `(select)`) {culturegrade = '';}
  let elec1 = $("#sort-elec1").find(":selected").text().toLowerCase();
  if(elec1 == `(select)`) {elec1 = '';}
  let elec1grade = $("#sort-elec1grade").find(":selected").text().toLowerCase();
  if(elec1grade == `(select)`) {elec1grade = '';}
  let elec2 = $("#sort-elec2").find(":selected").text().toLowerCase();
  if(elec2 == `(select)`) {elec2 = '';}
  let elec2grade = $("#sort-elec2grade").find(":selected").text().toLowerCase();
  if(elec2grade == `(select)`) {elec2grade = '';}
  let elec3 = $("#sort-elec3").find(":selected").text().toLowerCase();
  if(elec3 == `(select)`) {elec3 = '';}
  let elec3grade = $("#sort-elec3grade").find(":selected").text().toLowerCase();
  if(elec3grade == `(select)`) {elec3grade = '';}
  let elec4 = $("#sort-elec4").find(":selected").text().toLowerCase();
  if(elec4 == `(select)`) {elec4 = '';}
  let elec4grade = $("#sort-elec4grade").find(":selected").text().toLowerCase();
  if(elec4grade == `(select)`) {elec4grade = '';}
  let elec5 = $("#sort-elec5").find(":selected").text().toLowerCase();
  if(elec5 == `(select)`) {elec5 = '';}
  let elec5grade = $("#sort-elec5grade").find(":selected").text().toLowerCase();
  if(elec5grade == `(select)`) {elec5grade = '';}
  let elec6 = $("#sort-elec6").find(":selected").text().toLowerCase();
  if(elec6 == `(select)`) {elec6 = '';}
  let elec6grade = $("#sort-elec6grade").find(":selected").text().toLowerCase();
  if(elec6grade == `(select)`) {elec6grade = '';}
  let elec7 = $("#sort-elec7").find(":selected").text().toLowerCase();
  if(elec7 == `(select)`) {elec7 = '';}
  let elec7grade = $("#sort-elec7grade").find(":selected").text().toLowerCase();
  if(elec7grade == `(select)`) {elec7grade = '';}
  let elec8 = $("#sort-elec8").find(":selected").text().toLowerCase();
  if(elec8 == `(select)`) {elec8 = '';}
  let elec8grade = $("#sort-elec8grade").find(":selected").text().toLowerCase();
  if(elec8grade == `(select)`) {elec8grade = '';}
  let quidditchposition = $("#sort-quidditchposition").val().toLowerCase();
  let leadershipposition = $("#sort-leadershipposition").find(":selected").text().toLowerCase();
  if(leadershipposition == `(select)`) {leadershipposition = '';}

  $.ajax({
    url: "https://docs.google.com/forms/u/1/d/e/1FAIpQLSdHej9BAllha02vmUwmNvXWlWpX_0ECX-zUq3bLO5gmSU3PBw/formResponse?embedded=true",
      
    //add your google form generated numbers below which are also the 'names' of your inputs     
    data: {
      "entry.1432517820": member,
      "entry.107957704": character,
      "entry.1642550285": accountID,
      "entry.143362062": group,
      "entry.1355686451": groupID,
      "entry.1726668460": face,
      "entry.622253808": abilities,
      "entry.994119699": (species === `Not Applicable`) ? `` : species,
      "entry.2106914261": (veelablood === `(selected)`) ? `` : veelablood,
      "entry.794218756": (jobsection === `(selected)`) ? `` : jobsection,
      "entry.13065058": jobsubsection,
      "entry.437548501": jobtitle,
      "entry.1508899464": jobnotes,
      "entry.1260116484": school,
      "entry.1662751314": program,
      "entry.876623337": (universityyear === `(selected)`) ? `` : universityyear,
      "entry.2066116776": (hogwartsyear === `(selected)`) ? `` : hogwartsyear,
      "entry.183274541": (astronomy === `(selected)`) ? `` : astronomy,
      "entry.1490442733": (charms === `(selected)`) ? `` : charms,
      "entry.1393178788": (dada === `(selected)`) ? `` : dada,
      "entry.967152081": (games === `(selected)`) ? `` : games,
      "entry.1098395938": (herbology === `(selected)`) ? `` : herbology,
      "entry.1697474133": (historyofmagic === `(selected)`) ? `` : historyofmagic,
      "entry.1903652715": (literacy === `(selected)`) ? `` : literacy,
      "entry.484032441": (magicaltheory === `(selected)`) ? `` : magicaltheory,
      "entry.135635464": (maths === `(selected)`) ? `` : maths,
      "entry.1264662180": (potions === `(selected)`) ? `` : potions,
      "entry.1035411565": (transfiguration === `(selected)`) ? `` : transfiguration,
      "entry.2142142079": (culture === `(selected)`) ? `` : culture,
      "entry.698903169": (culturegrade === `(selected)`) ? `` : culturegrade,
      "entry.1299686648": (elec1 === `(selected)`) ? `` : elec1,
      "entry.768681073": (elec1grade === `(selected)`) ? `` : elec1grade,
      "entry.671470831": (elec2 === `(selected)`) ? `` : elec2,
      "entry.483899832": (elec2grade === `(selected)`) ? `` : elec2grade,
      "entry.1377650876": (elec3 === `(selected)`) ? `` : elec3,
      "entry.261216209": (elec3grade === `(selected)`) ? `` : elec3grade,
      "entry.530618541": (elec4 === `(selected)`) ? `` : elec4,
      "entry.1632241456": (elec4grade === `(selected)`) ? `` : elec4grade,
      "entry.1399421084": (elec5 === `(selected)`) ? `` : elec5,
      "entry.1123859686": (elec5grade === `(selected)`) ? `` : elec5grade,
      "entry.223598383": (elec6 === `(selected)`) ? `` : elec6,
      "entry.1859311863": (elec6grade === `(selected)`) ? `` : elec6grade,
      "entry.76064911": (elec7 === `(selected)`) ? `` : elec7,
      "entry.1321648888": (elec7grade === `(selected)`) ? `` : elec7grade,
      "entry.1638810127": (elec8 === `(selected)`) ? `` : elec8,
      "entry.1094021435": (elec8grade === `(selected)`) ? `` : elec8grade,
      "entry.1227238528": quidditchposition,
      "entry.878358884": leadershipposition
    },
    method: "POST",
    type: "POST",
    dataType: "json", 
    statusCode: {
        404: function() {
            document.querySelector('#warning').innerHTML = `Whoops! The sheet connection didn't quite work. Please refresh the page and try again!`;
        }
    },
    success: function () {
        console.log('success');
    },
    error: function (jqXHR, textStatus, errorThrown) {
        console.log(jqXHR.status);
        console.log(textStatus);
        console.log(errorThrown);
        if(jqXHR.status == 404) {
            document.querySelector('#warning').innerHTML = `Whoops! The sheet connection didn't quite work. Please refresh the page and try again!`;
        }
    },
    complete: function () {
        formReset();
        $('button[type="submit"]').text('Submit');
        document.querySelector('#warning').innerHTML = 'Success! Your character has been added to the sheet.';
    }
  });

  return false;
}

function formReset() {
    $('#sort').trigger('reset');
    hideFields('.ifAdult, .ifJob, .ifStudent, .ifLower, .ifUpper, .ifLeadership, .ifLeadershipPossible, .ifQuidditch, .ifElec, .ifStart, .ifCore, .ifAbilities, .ifAnimagus, .ifVeela, .ifUni');
    checkYear();
    checkLeadPos();
    checkQuid();   
    removeRequired('#sort-hogwartsyear');
    removeRequired('#sort-employed');
    removeRequired('#sort-universitystudent');
}

function tabbedContent(labels, tabs, remove = '') {
    let labelArray = document.querySelectorAll(labels);
    let tabArray = document.querySelectorAll(tabs);
    labelArray.forEach((label, index) => {
        label.addEventListener('click', e => {
            labelArray.forEach(label => label.classList.remove('active'));
            tabArray.forEach(tab => tab.classList.remove('active'));
            document.querySelectorAll('.webpage a').forEach(label => label.classList.remove('active'));
            labelArray[index].classList.add('active');
            tabArray[index].classList.add('active');
            if(remove === 'webpagetab') {
                document.querySelectorAll('.webpage--tab').forEach(tabset => tabset.classList.remove('active'));
                document.querySelectorAll('.claim--tabs').forEach(tabset => tabset.classList.remove('active'));
                if(tabArray[index].parentNode.classList.contains('claim--tabs')) {
                    tabArray[index].parentNode.classList.add('active');
                }
            }
            if(remove === 'claimtab') {
                document.querySelectorAll('.claim--tabs').forEach(tabset => tabset.classList.remove('active'));
                if(tabArray[index].parentNode.classList.contains('claim--tabs')) {
                    tabArray[index].parentNode.classList.add('active');
                }
            }
        });
    });
}

function collapsingTabbedContent(labels, tabs) {
    let labelArray = document.querySelectorAll(labels);
    let tabArray = document.querySelectorAll(tabs);
    labelArray.forEach((label, index) => {
        label.addEventListener('click', e => {
            if(e.currentTarget.classList.contains('active')) {
                labelArray[index].classList.remove('active');
                tabArray[index].classList.remove('active');
            } else {
                labelArray.forEach(label => label.classList.remove('active'));
                tabArray.forEach(tab => tab.classList.remove('active'));
                document.querySelectorAll('.webpage a').forEach(label => label.classList.remove('active'));
                labelArray[index].classList.add('active');
                tabArray[index].classList.add('active');
            }
        });
    });
}

function moveLeft(e, scrollMenu) {
    e.parentNode.querySelector(scrollMenu).scrollLeft -= 150;
}

function moveRight(e, scrollMenu) {
    e.parentNode.querySelector(scrollMenu).scrollLeft += 150;
}

function cleanString(string) {
    return string.replaceAll(' ', '').replaceAll('(', '').replaceAll(')', '').replaceAll('.', '').replaceAll(`'`, '');
}

function openHelp(e) {
    e.classList.toggle('show');
    e.parentNode.parentNode.querySelector('.help').classList.toggle('show');
}