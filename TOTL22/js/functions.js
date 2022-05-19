function toggleMenu() {
    document.querySelector('body').classList.toggle('nav-open');
}


function highlightCode() {
    let clipcodeQuick = new Clipboard('.copyQuick', {
        target: function(trigger) {
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
function checkCanon() {
    let selected = document.querySelector('#sort-canon').options[document.querySelector('#sort-canon').selectedIndex].value;
    let group = document.querySelector('#sort-group').options[document.querySelector('#sort-group').selectedIndex].value;
    if(selected === 'y' && parseInt(group) === 17) {
        showFields('.ifCanon, .ifReturn');
        addRequired('#sort-canonRelation');
        addRequired('#sort-birth');
        addRequired('#sort-death');
        addRequired('#sort-return');
    } else if (selected === 'y' && parseInt(group) !== 17) {
        showFields('.ifCanon');
        hideFields('.ifReturn');
        addRequired('#sort-canonRelation');
        addRequired('#sort-birth');
        removeRequired('#sort-death');
        removeRequired('#sort-return');
    } else {
        hideFields('.ifCanon, .ifReturn');
        removeRequired('#sort-canonRelation');
        removeRequired('#sort-birth');
        removeRequired('#sort-death');
        removeRequired('#sort-return');
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
            labels += claimTabLabel(character.Ability, "claims", "absp-claim");
            body += claimTabStart(character.Ability);
            body += claimHeader(character.Ability);
            body += (character.AnimagusForm) ? characterBox(character.AccountID, character.GroupID, character.Character, [character.AnimagusForm]) : characterBox(character.AccountID, character.GroupID, character.Character);
        } else if(abilities[i - 1].Ability !== character.Ability) {
            labels += claimTabLabel(character.Ability, "claims", "absp-claim");
            body += claimTabEnd();
            body += claimTabStart(character.Ability);
            body += claimHeader(character.Ability);
            body += (character.AnimagusForm) ? characterBox(character.AccountID, character.GroupID, character.Character, [character.AnimagusForm]) : characterBox(character.AccountID, character.GroupID, character.Character);
        } else {
            body += (character.AnimagusForm) ? characterBox(character.AccountID, character.GroupID, character.Character, [character.AnimagusForm]) : characterBox(character.AccountID, character.GroupID, character.Character);
        }
    });
    body += claimTabEnd();
    charSpecies.forEach((character, i) => {
        if(i === 0) {
            labels += claimTabLabel(character.Species, "claims", "absp-claim");
            body += claimTabStart(character.Species);
            body += claimHeader(character.Species);
            body += (character.VeelaBlood) ? characterBox(character.AccountID, character.GroupID, character.Character, [character.VeelaBlood]) : characterBox(character.AccountID, character.GroupID, character.Character);
        } else if(charSpecies[i - 1].Species !== character.Species) {
            labels += claimTabLabel(character.Species, "claims", "absp-claim");
            body += claimTabEnd();
            body += claimTabStart(character.Species);
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
    let array = data.filter(item => item.JobNotes);
    let employed = [];
    array.forEach(character => {
        employed.push({
            Character: character.Character,
            GroupID: character.GroupID,
            AccountID: character.AccountID,
            Section: character.JobSection,
            Subsection: character.JobSubsection,
            Line2: character.JobTitle,
            Line1: character.JobNotes,
        });
        if(character.Job2Notes) {
            employed.push({
                Character: character.Character,
                GroupID: character.GroupID,
                AccountID: character.AccountID,
                Section: character.Job2Section,
                Subsection: character.Job2Subsection,
                Line2: character.Job2Title,
                Line1: character.Job2Notes,
            });
        }
        if(character.Job3Notes) {
            employed.push({
                Character: character.Character,
                GroupID: character.GroupID,
                AccountID: character.AccountID,
                Section: character.Job3Section,
                Subsection: character.Job3Subsection,
                Line2: character.Job3Title,
                Line1: character.Job3Notes,
            });
        }
        if(character.Job4Notes) {
            employed.push({
                Character: character.Character,
                GroupID: character.GroupID,
                AccountID: character.AccountID,
                Section: character.Job4Section,
                Subsection: character.Job4Subsection,
                Line2: character.Job4Title,
                Line1: character.Job4Notes,
            });
        }
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
    document.querySelector(labelClip).insertAdjacentHTML('beforeend', labels);
    document.querySelector(tabClip).insertAdjacentHTML('beforeend', body);
}

function structureQuidditchClaim (data, infoClip = '#StudentQuidditch') {
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
    document.querySelector(infoClip).insertAdjacentHTML('beforeend', html);
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
                

function postToGoogle(formtype = 'POST') {
  let member = $("#sort-member").val().toLowerCase();
  let character = $("#sort-character").val().toLowerCase();
  let firstName = character.split(' ')[0].trim().toLowerCase();
  let lastName = character.split(' ').splice(1).join(' ').trim().toUpperCase();
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
  let canon = $('#sort-canon').find(":selected").val().toLowerCase();
  let relation = $('#sort-canonRelation').val();
  let birthYear = $('#sort-birth').val();
  let deathYear = $('#sort-death').val();
  let returnYear = $('#sort-return').val();
  let dorm = $('#sort-preferreddorm').val();
  let capitalizedGroup = `${group[0].toUpperCase()}${group.substring(1).toLowerCase()}`

  let message = `**${member}** has requested sorting for **${character}**.\n**View Profile:** https://totl.jcink.net/?showuser=${accountID}\n**Sort Into:** ${capitalizedGroup}`;
  if(dorm !== ``) {
      message += `\n**Dorm Request:** ${dorm}`
  }
  if(canon === 'y') {
      message += `\n**Relation to Canon:**\n\`\`\`${relation}\`\`\``;
      if(parseInt(groupID) === 17) {
        message += `\n**Canon Code:**\n\`\`\`<a href="?showuser=${accountID}" class="g-${groupID}"><b>${lastName.toUpperCase()}, ${firstName.toLowerCase()}.</b></a> ${jobtitle}. b. ${birthYear}. d. ${deathYear}. r. ${returnYear}. ${member}.<br>\`\`\``;
      } else {
        message += `\n**Canon Code:**\n\`\`\`<a href="?showuser=${accountID}" class="g-${groupID}"><b>${lastName.toUpperCase()}, ${firstName.toLowerCase()}.</b></a> ${jobtitle}. b. ${birthYear}. ${member}.<br>\`\`\``;
      }
  }

  $.ajax({
    url: `https://script.google.com/macros/s/AKfycbx-Pa97Wz-MamFZ6MYpx2jHQFSM9JHx5ihMPrEF6AfmF-yA7FM4BeVxWOxxsK5f9oAylw/exec`,   
    data: {
      "Member": member,
      "Character": character,
      "AccountID": accountID,
      "GroupName": group,
      "GroupID": groupID,
      "Face": face,
      "Abilities": abilities,
      "Species": (species === `Not Applicable`) ? `` : species,
      "VeelaBlood": (veelablood === `(selected)`) ? `` : veelablood,
      "JobSection": (jobsection === `(selected)`) ? `` : jobsection,
      "JobSubsection": jobsubsection,
      "JobTitle": jobtitle,
      "JobNotes": jobnotes,
      "School": school,
      "Program": program,
      "UniversityYear": (universityyear === `(selected)`) ? `` : universityyear,
      "HogwartsYear": (hogwartsyear === `(selected)`) ? `` : hogwartsyear,
      "Astronomy": (astronomy === `(selected)`) ? `` : astronomy,
      "Charms": (charms === `(selected)`) ? `` : charms,
      "DADA": (dada === `(selected)`) ? `` : dada,
      "Games": (games === `(selected)`) ? `` : games,
      "Herbology": (herbology === `(selected)`) ? `` : herbology,
      "HistoryOfMagic": (historyofmagic === `(selected)`) ? `` : historyofmagic,
      "Literacy": (literacy === `(selected)`) ? `` : literacy,
      "MagicalTheory": (magicaltheory === `(selected)`) ? `` : magicaltheory,
      "Maths": (maths === `(selected)`) ? `` : maths,
      "Potions": (potions === `(selected)`) ? `` : potions,
      "Transfiguration": (transfiguration === `(selected)`) ? `` : transfiguration,
      "Culture": (culture === `(selected)`) ? `` : culture,
      "CultureGrade": (culturegrade === `(selected)`) ? `` : culturegrade,
      "Elec1": (elec1 === `(selected)`) ? `` : elec1,
      "Elec1Grade": (elec1grade === `(selected)`) ? `` : elec1grade,
      "Elec2": (elec2 === `(selected)`) ? `` : elec2,
      "Elec2Grade": (elec2grade === `(selected)`) ? `` : elec2grade,
      "Elec3": (elec3 === `(selected)`) ? `` : elec3,
      "Elec3Grade": (elec3grade === `(selected)`) ? `` : elec3grade,
      "Elec4": (elec4 === `(selected)`) ? `` : elec4,
      "Elec4Grade": (elec4grade === `(selected)`) ? `` : elec4grade,
      "Elec5": (elec5 === `(selected)`) ? `` : elec5,
      "Elec5Grade": (elec5grade === `(selected)`) ? `` : elec5grade,
      "Elec6": (elec6 === `(selected)`) ? `` : elec6,
      "Elec6Grade": (elec6grade === `(selected)`) ? `` : elec6grade,
      "Elec7": (elec7 === `(selected)`) ? `` : elec7,
      "Elec7Grade": (elec7grade === `(selected)`) ? `` : elec7grade,
      "Elec8": (elec8 === `(selected)`) ? `` : elec8,
      "Elec8Grade": (elec8grade === `(selected)`) ? `` : elec8grade,
      "QuidditchPosition": quidditchposition,
      "LeadershipPosition": leadershipposition
    },
    method: formtype,
    type: formtype,
    dataType: "json", 
    success: function () {
        console.log('form submitted successfully');
        sendSortRequest(message);
    },
    error: function (jqXHR, textStatus, errorThrown) {
        console.log('error xhr: ' + jqXHR.status);
        console.log('error status: ' + textStatus);
        console.log('error text: ' + errorThrown);
        document.querySelector('#warning').innerHTML = `Whoops! The sheet connection didn't quite work. Please refresh the page and try again! If this persists, please open the console (ctrl + shift + J) and let Lux know the error xhr, error status, and error text values.`;
    },
    complete: function () {
        formReset('#sort');
        $('button[type="submit"]').text('Submit');
        document.querySelector('#warning').innerHTML = 'Success! Your character has been added to the sheet.';
    }
  });

  return false;
}

function postToWIP() {
    let face = $("#wip-face").val().toLowerCase();
    let member = $("#wip-alias").val().toLowerCase();

    $.ajax({
        url: `https://script.google.com/macros/s/AKfycbwx2Xq5YNuWCR-Hb9IA0WoVWDS2IstKhS2AQUjLQUcwqtJs5NmV68hAhSDuYB1Dws7nzw/exec`,   
        data: {
          "Member": member,
          "Face": face,
        },
        method: 'POST',
        type: 'POST',
        dataType: "json", 
        success: function () {
            console.log('form submitted successfully');
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('error xhr: ' + jqXHR.status);
            console.log('error status: ' + textStatus);
            console.log('error text: ' + errorThrown);
            document.querySelector('#wip-warning').innerHTML = `Whoops! The sheet connection didn't quite work. Please refresh the page and try again! If this persists, please open the console (ctrl + shift + J) and let Lux know the error xhr, error status, and error text values.`;
        },
        complete: function () {
            formReset('#wipadd');
            $('button[type="submit"]').text('Submit');
            document.querySelector('#wip-warning').innerHTML = 'Success! Your face has been added to the sheet.';
        }
      });
}

function formReset(form) {
    $(form).trigger('reset');
    if(form === '#sort') {
        hideFields('.ifAdult, .ifJob, .ifStudent, .ifLower, .ifUpper, .ifLeadership, .ifLeadershipPossible, .ifQuidditch, .ifElec, .ifStart, .ifCore, .ifAbilities, .ifAnimagus, .ifVeela, .ifUni');
        checkYear();
        checkLeadPos();
        checkQuid();   
        removeRequired('#sort-hogwartsyear');
        removeRequired('#sort-employed');
        removeRequired('#sort-universitystudent');
    }
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

function webpageTabs() {
    let mainItems = document.querySelectorAll('.webpage--main-menu a');
    let mainTabs = document.querySelectorAll('.webpage--section');

    let subItems = document.querySelectorAll('.webpage--sub-menu .webpage--sub-menu-links:not(.claim--labels) > a');
    let innerTriggers = document.querySelectorAll('.webpage--sub-menu .webpage--sub-menu-links > button');

    let innerMenus = document.querySelectorAll('.webpage--pop-menu');
    let innerItems = document.querySelectorAll('.claim--labels > a');

    let webpageTabs = document.querySelectorAll('.webpage--tab');
    let claimTabs = document.querySelectorAll('.claim--tab');

    //main menu - on click, change submenu
    mainItems.forEach((item, index) => {
        item.addEventListener('click', e => {
            mainItems.forEach(item => item.classList.remove('active'));
            mainTabs.forEach(tab => tab.classList.remove('active'));
            e.currentTarget.classList.add('active');
            mainTabs[index].classList.add('active');
        });
    });

    //sub menu - on button click, open inner menu
    innerTriggers.forEach((trigger, index) => {
        trigger.addEventListener('click', e => {
            innerTriggers.forEach(trigger => trigger.classList.remove('active'));
            innerMenus.forEach(menu => menu.classList.remove('active'));
            e.currentTarget.classList.add('active');
            innerMenus[index].classList.add('active');
        });
    });

    //sub menu - on link click, open content
    subItems.forEach((item, index) => {
        item.addEventListener('click', e => {
            subItems.forEach(item => item.classList.remove('active'));
            innerTriggers.forEach(item => item.classList.remove('active'));
            innerItems.forEach(item => item.classList.remove('active'));
            webpageTabs.forEach(tab => tab.classList.remove('active'));
            claimTabs.forEach(tab => tab.classList.remove('active'));
            innerMenus.forEach(menu => menu.classList.remove('active'));
            e.currentTarget.classList.add('active');
            webpageTabs[index].classList.add('active');
        });
    });

    //inner menu/sub menu links - on click, change content
    innerItems.forEach((item, index) => {
        item.addEventListener('click', e => {
            subItems.forEach(item => item.classList.remove('active'));
            innerItems.forEach(item => item.classList.remove('active'));
            webpageTabs.forEach(tab => tab.classList.remove('active'));
            claimTabs.forEach(tab => tab.classList.remove('active'));
            e.currentTarget.classList.add('active');
            claimTabs[index].classList.add('active');
            claimTabs[index].parentNode.classList.add('active');
        });
    });


    if (window.location.hash){
        //get hash
        let hash = $.trim( window.location.hash );
        let selected = document.querySelector(`.webpage--sub-menu-links a[href="${hash}"]`);
        let selectedCategory = selected.getAttribute('data-category');
        //find the sub menu/inner menu link with the matching hash
        if (hash) {
            $(selected).trigger('click');
        }
        //select based on this
        let hashMain = document.querySelector(`.webpage--main-menu-links a[data-group="${selectedCategory}"]`);

        //Tabs
        //Remove active from everything
        mainItems.forEach(item => item.classList.remove('active'));
        mainTabs.forEach(item => item.classList.remove('active'));
        subItems.forEach(item => item.classList.remove('active'));
        innerTriggers.forEach(item => item.classList.remove('active'));
        innerItems.forEach(item => item.classList.remove('active'));
        webpageTabs.forEach(tab => tab.classList.remove('active'));
        claimTabs.forEach(tab => tab.classList.remove('active'));
        //Add active
        hashMain.classList.add('active');
        selected.classList.add('active');
        selected.closest('.webpage--section').classList.add('active');
        if(selected.parentNode.classList.contains('claim--labels') && selected.closest('.webpage--pop-menu')) {
            selected.closest('.webpage--pop-menu').classList.add('active');
            let subcategory = selected.getAttribute('data-subcategory');
            let button = document.querySelector(`.webpage--sub-menu-links button[data-subcategory="${subcategory}"]`);
            let tabGroup = document.querySelector(`.claim--tabs[data-subcategory="${subcategory}"]`);
            let tab = document.querySelector(`.claim--tab[data-tab="${hash}"]`);
            button.classList.add('active');
            tabGroup.classList.add('active');
            tab.classList.add('active');
        } else if(selected.parentNode.classList.contains('claim--labels')) {
            console.log('claims tab not nested');
            let tab = document.querySelector(`.claim--tab[data-tab="${hash}"]`);
            tab.classList.add('active');
            tab.parentNode.classList.add('active');

        } else {
            console.log('webpage tab');
            let tab = document.querySelector(`.webpage--tab[data-tab="${hash}"]`);
            tab.classList.add('active');
        }
    } else {
        //Auto-select  tab without hashtag present
        document.querySelector('.webpage--main-menu-links a').classList.add('active');
        document.querySelector('.webpage--section').classList.add('active');
        document.querySelector('.webpage--section').querySelector('.webpage--sub-menu-links a').classList.add('active');
        document.querySelector('.webpage--section').querySelector('.webpage--tab').classList.add('active');
    }
}


function expandCanons(e) {
    e.classList.toggle('closed-branch');
    e.nextElementSibling.classList.toggle('closed-branch');
}


function expandAllCanons(e) {
    e.parentNode.querySelectorAll('.webpage--canon-expansion').forEach(button => {
        button.classList.remove('closed-branch');
    });
    e.parentNode.querySelectorAll('canonbranch').forEach(button => {
        button.classList.remove('closed-branch');
    });
}


function collapseAllCanons(e) {
    e.parentNode.querySelectorAll('.webpage--canon-expansion').forEach(button => {
        button.classList.add('closed-branch');
    });
    e.parentNode.querySelectorAll('canonbranch').forEach(button => {
        button.classList.add('closed-branch');
    });
}


function canonCollapse(e) {
    document.querySelectorAll('.webpage--canon-expansion').forEach(button => {
        button.classList.add('closed-branch');
    });
    document.querySelectorAll('canonbranch').forEach(button => {
        button.classList.add('closed-branch');
    });
}



function structureUpcomingFaces (data, infoClip = '#upcomingfaces') {
    console.log(data);
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
    document.querySelector(infoClip).insertAdjacentHTML('beforeend', html);
}


/******DISCORD WEBHOOKS *******/

function sendSortRequest(message) {
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/967898592922730556/ls_rZ4-t-Mz6UHrp2g5CA5hnELU5Y6WwYXFsr7EM0hO8JPPB224kjuUla_zv314ibR8A");

    request.setRequestHeader('Content-type', 'application/json');

    const params = {
        content: message
    }

    request.send(JSON.stringify(params));
}
function sendReserveRequest(message) {
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/967898737097723924/AleSNIkieXgwG1i7XL7CdLLaF7sTuEZfUcLXQMLoY3idT_1AZJww-XGt0r_YY4SbqNrN");

    request.setRequestHeader('Content-type', 'application/json');

    const params = {
        content: message
    }

    request.send(JSON.stringify(params));
}
function sendUpdateRequest(message) {
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/967898902684643398/mdDTpl1PiX7EJtEIrGQj0iGPHHf-C0wD-Te0nPz4_-gVafrVCfXUUWLwmnT1gw2-c8El");

    request.setRequestHeader('Content-type', 'application/json');

    const params = {
        content: message
    }

    request.send(JSON.stringify(params));
}



function memberTabs() {
    let innerTriggers = document.querySelectorAll('.ml--sub-menu .ml--sub-menu-links > button');

    let innerMenus = document.querySelectorAll('.ml--pop-menu');
    
    console.log(innerTriggers);

    //sub menu - on button click, open inner menu
    innerTriggers.forEach((trigger, index) => {
        trigger.addEventListener('click', e => {
            console.log(trigger);
            innerTriggers.forEach(trigger => trigger.classList.remove('active'));
            innerMenus.forEach(menu => menu.classList.remove('active'));
            e.currentTarget.classList.add('active');
            innerMenus[index].classList.add('active');
        });
    });
}