function loadHorseList(accountid) {
    fetch(`https://opensheet.elk.sh/1x6ZjvfoBDksT1H09aLM40hWgaTWbvSDfWVumHqnOHL8/HorseClaims`)
    .then((response) => response.json())
    .then(data => {
        let horses = data.filter(item => item.AccountID === accountid);
        let options = `<option value="">(select)</option>`;
        horses.forEach(horse => {
            let value = horse.ShowName.replace(/\s/g, "");
            options += `<option value="${value}">${capitalize(horse.ShowName)}</option>`;
        });
        document.querySelector('#enter-horse').innerHTML = options;
    });
}
function loadShowList() {
    fetch(`https://opensheet.elk.sh/1yV-kgpnrWzMF1f1GVXp9P4Fw1CorziU-hNHAvRSlfvM/ShowSchedule`)
    .then((response) => response.json())
    .then(data => {

        let current = new Date();
        let active = data.filter(item => {
            let time = new Date(item.ShowDate);
            let difference = Math.floor(((time - current) / (1000*60*60*24)));
            return difference > 0 && difference < 14;
        });
        active.sort((a, b) => {
            if (new Date(a.ShowDate) < new Date(b.ShowDate)) {
                return -1;
            } else if (new Date(a.ShowDate) > new Date(b.ShowDate)) {
                return 1;
            } else {
                return 0;
            }
        });

        let options = `<option value="">(select)</option>`;
        active.forEach(show => {
            let value = show.ShowName.replace(/\s/g, "");
            options += `<option value="${value}" data-show-name="${show.ShowName}" data-show-id="${show.ShowID}" data-show-type-id="${show.ShowTypeID}">${capitalize(show.ShowName)} - Runs ${show.DisplayDate}</option>`;
        });
        document.querySelector('#enter-show').innerHTML = options;
    });
}
function loadRunList() {
    fetch(`https://opensheet.elk.sh/1yV-kgpnrWzMF1f1GVXp9P4Fw1CorziU-hNHAvRSlfvM/Entries`)
    .then((response) => response.json())
    .then(data => {
        let options = `<option value="">(select)</option>`;
        let showsInit = data.map(item => item.Show);
        let shows = [...new Set(showsInit)];
        shows.forEach(show => {
            let value = show.replace(/\s/g, "");
            options += `<option value="${value}" data-show-name="${show}" data-show-id="${data.filter(item => item.Show === show)[0].ShowID}">${capitalize(show)}</option>`;
        });
        document.querySelector('#run-show').innerHTML = options;
    });
}
function loadDisciplines(horseName) {
    fetch(`https://opensheet.elk.sh/1x6ZjvfoBDksT1H09aLM40hWgaTWbvSDfWVumHqnOHL8/HorseClaims`)
    .then((response) => response.json())
    .then(data => {
        //get horse data
        let horse = data.filter(item => item.ShowName === horseName)[0];
	if(horse) {
        	let disciplinesList = horse.Disciplines.split('+');
	        let disciplines = disciplinesList.map(discipline => JSON.parse(discipline));
	        let disciplinesArray = disciplines.map(discipline => discipline.discipline);
	        let classLists = [];
	        fetch(`https://opensheet.elk.sh/1yV-kgpnrWzMF1f1GVXp9P4Fw1CorziU-hNHAvRSlfvM/ClassList`)
	        .then((response) => response.json())
	        .then(data => {
	            //get list of classes and filter to classes which exist for disciplines the horse knows
	            classLists = data.filter(item => disciplinesArray.includes(item.Discipline));
	console.log(classLists);
		    let show = document.querySelector('#enter-show').options[document.querySelector('#enter-show').selectedIndex];
		    let showType = show.dataset.showTypeId;
		    let showClasses = classLists.filter(list => list.ShowTypeID === showType);
	console.log(showClasses);
		    
	
	            //get discipline labels for only disciplines that have classes
	            availableDisciplines = data.map(item => item.Discipline);
	            uniqueDisciplines = [...new Set(availableDisciplines)];
	            disciplineLabels = disciplinesArray.filter(item => uniqueDisciplines.includes(item));
	
	            //generate class checkboxes
	            let classChoices = ``;
		    if(showClasses.length > 0) {
		            showClasses.forEach((showClass, i) => {
		                if(i === 0) {
		                    classChoices += classSetBoxStart(showClass.Discipline, showClass.DisciplineCost);
		                    classChoices += classSetIndividual(showClass.Discipline, showClass.ClassName, showClass.Skills, showClass.DisciplineID, showClass.ClassID);
		                } else if(showClasses[i - 1].Discipline !== showClass.Discipline && showClasses.length - 1 !== i) {
		                    classChoices += classSetBoxEnd();
		                    classChoices += classSetBoxStart(showClass.Discipline, showClass.DisciplineCost);
		                    classChoices += classSetIndividual(showClass.Discipline, showClass.ClassName, showClass.Skills, showClass.DisciplineID, showClass.ClassID);
		                } else if(showClasses[i - 1].Discipline !== showClass.Discipline && showClasses.length - 1 === i) {
		                    classChoices += classSetBoxEnd();
		                    classChoices += classSetBoxStart(showClass.Discipline, showClass.DisciplineCost);
		                    classChoices += classSetIndividual(showClass.Discipline, showClass.ClassName, showClass.Skills, showClass.DisciplineID, showClass.ClassID);
		                    classChoices += classSetBoxEnd();
		                } else if(data.length - 1 === i) {
		                    classChoices += classSetIndividual(showClass.Discipline, showClass.ClassName, showClass.Skills, showClass.DisciplineID, showClass.ClassID);
		                    classChoices += classSetBoxEnd();
		                } else {
		                    classChoices += classSetIndividual(showClass.Discipline, showClass.ClassName, showClass.Skills, showClass.DisciplineID, showClass.ClassID);
		                }
		            });
	            	    document.querySelector('#clip-classes').innerHTML = classChoices;
		    } else {
	            	    document.querySelector('#clip-classes').innerHTML = `<div class="form--warning">Select a horse and show to view available classes.</div>`;
		    }
	
	            //add all classes triggers
	            document.querySelectorAll('.form--all-check').forEach(allBox => {
	                allBox.addEventListener('change', e => {
	                    if(e.target.checked) {
	                        e.target.parentNode.parentNode.querySelectorAll('.form--subchoices input').forEach(option => {
	                            option.setAttribute('disabled', true);
	                        });
	                    } else {
	                        e.target.parentNode.parentNode.querySelectorAll('.form--subchoices input').forEach(option => {
	                            option.removeAttribute('disabled');
	                        });
	                    }
	                });
	            });
	
	            //add entry triggers
	            document.querySelectorAll('#clip-classes input').forEach(option => {
	                option.addEventListener('change', e => {
	
	                    //deal with cost
	                    if(e.target.checked) {
	                        totalCost += parseInt(e.target.value);
	                    } else {
	                        totalCost -= parseInt(e.target.value);
	                    }
	                    document.querySelector('#enter-cost').value = totalCost;
	                    document.querySelector('#clip-cost').innerText = totalCost;
	
	                    //create entry list for push
	                    if(e.target.checked) {
	                        if(e.target.dataset.className === 'all') {
	                            let disciplineClasses = e.target.parentNode.parentNode.querySelectorAll('.form--subchoices input');
	                            disciplineClasses.forEach(disciplineClass => {
	                                let entry = {
	                                    "Discipline": disciplineClass.dataset.disciplineName,
	                                    "ClassName": disciplineClass.dataset.className,
	                                    "PrimarySkill": disciplineClass.dataset.skills.split(', ')[0],
	                                    "SecondarySkill": disciplineClass.dataset.skills.split(', ')[1],
	                                    "DisciplineID": disciplineClass.dataset.disciplineId,
	                                    "ClassID": disciplineClass.dataset.classId
	                                };
	                                entries.push(entry);
	                            });
	                        } else {
	                            let entry = {
	                                "Discipline": e.target.dataset.disciplineName,
	                                "ClassName": e.target.dataset.className,
	                                "PrimarySkill": e.target.dataset.skills.split(', ')[0],
	                                "SecondarySkill": e.target.dataset.skills.split(', ')[1],
	                                "DisciplineID": e.target.dataset.disciplineId,
	                                "ClassID": e.target.dataset.classID
	                            };
	                            entries.push(entry);
	                        }
	                    } else {
	                        if(e.target.dataset.className === 'all') {
	                            let disciplineClasses = e.target.parentNode.parentNode.querySelectorAll('.form--subchoices input');
	                            disciplineClasses.forEach(disciplineClass => {
	                                entries = entries.filter(item => item.ClassName != disciplineClass.dataset.className);
	                            });
	                        } else {
	                            entries = entries.filter(item => item.ClassName != e.target.dataset.className);
	                        }
	                    }
	                });
	            });
	        });
	    } else {
	    	document.querySelector('#clip-classes').innerHTML = `<div class="form--warning">Select a horse and show to view available classes.</div>`;
	    }
    });
}
function loadPostFields(fields, types) {
    fields.forEach((field, i) => {
        if(types[i] === 'comms') {
            let max = parseInt(document.querySelector('#enter-commnum').value);
            let html = ``;
            for(let i = 0; i < max; i++) {
                html += `<label>
                    <tag-md data-align="left">Comm</tag-md>
                    <input name="enter-comm-${i}"
                            id="enter-comm-${i}"
                            placeholder="URL of Comm Post"
                            type="text"
                            required>
                </label>`;
            }
            document.querySelector('.form--comm-posts-fields').innerHTML = html;
        } else if (types[i] === 'threads') {
            let max = parseInt(document.querySelector('#enter-threadnum').value);
            let html = ``;
            for(let i = 0; i < max; i++) {
                html += `<label>
                    <tag-md data-align="left">Thread</tag-md>
                    <input name="enter-thread-${i}"
                            id="enter-thread-${i}"
                            placeholder="URL of Thread Post"
                            type="text"
                            required>
                </label>`;
            }
            document.querySelector('.form--thread-post-fields').innerHTML = html;
        }
    });
}

function classSetBoxStart(discipline, cost) {
    let disciplineCondensed = discipline.replace(/\s/g, "");
    let html = `<div class="form--discipline-group">
    <tag-md data-align="left">${discipline}</tag-md>
        <label>
            <input type="checkbox"
                class="form--all-check"
                name="enter-classes"
                id="class-all${disciplineCondensed}"
                value="${cost}"
                data-discipline-name="${discipline}"
                data-class-name="all">
            <strong class="checkbox">All</strong>
        </label>
    <div class="form--subchoices">`;
    return html;
}
function classSetBoxEnd() {
    return `</div></div>`;
}
function classSetIndividual(discipline, className, skills, disciplineID, classID) {
    let classCondensed = className.replace(/\s/g, "");
    return `<label>
        <input type="checkbox"
            name="enter-classes"
            id="class-${classCondensed}"
            value="25"
            data-discipline-name="${discipline}"
            data-class-name="${className}"
            data-skills="${skills}"
            data-discipline-id="${disciplineID}"
            data-class-id="${classID}">
        <strong class="checkbox">${className}</strong>
    </label>`;
}

function resetEnter() {
    document.querySelectorAll('.form--posts-fields').forEach(fieldset => fieldset.innerHTML = ``);
    document.querySelector('#clip-classes').innerHTML = ``;
    document.querySelectorAll('.form--discipline-group input').forEach(option => option.removeAttribute('disabled'));
    document.querySelector('#enter-cost').value = 0;
    document.querySelector('#clip-cost').innerText = 0;
}

function shuffleArray(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

function postEntry() {
    let humanClaims = `https://opensheet.elk.sh/1x6ZjvfoBDksT1H09aLM40hWgaTWbvSDfWVumHqnOHL8/HumanClaims`;
    let horseClaims = `https://opensheet.elk.sh/1x6ZjvfoBDksT1H09aLM40hWgaTWbvSDfWVumHqnOHL8/HorseClaims`;
    
    fetch(humanClaims)
    .then((response) => response.json())
    .then(data => {
        let character = data.filter(item => item.AccountID === document.querySelector('#enter-accountid').value.trim());
        return character;
    }).then(character => {
        let horseObject = [];
        fetch(horseClaims)
        .then((response) => response.json())
        .then(data => {
            horseObject = data.filter(item => item.ShowName === document.querySelector('#enter-horse').options[document.querySelector('#enter-horse').selectedIndex].innerText.toLowerCase().trim());
            return [horseObject, character];
        }).then(data => {
            //set training level if not green
            let character = data[1];
            let accountID = character[0].AccountID;
            let horseObject = data[0];
            let level = 'green';
            let levelID = 1;
            let groupID;
            if(document.querySelector('#enter-group').options[document.querySelector('#enter-group').selectedIndex].value !== 'green') {
                level = character[0].Group;
                switch(level) {
                    case 'schooling':
                        levelID = 2;
                        groupID = 12;
                        break;
                    case 'provincial':
                        levelID = 3;
                        groupID = 11;
                        break;
                    case 'national':
                        levelID = 4;
                        groupID = 10;
                        break;
                    case 'international':
                        levelID = 5;
                        groupID = 9;
                        break;
                    default:
                        break;
                }
            }
            let show = document.querySelector('#enter-show').options[document.querySelector('#enter-show').selectedIndex].dataset.showName;
            let showID = document.querySelector('#enter-show').options[document.querySelector('#enter-show').selectedIndex].dataset.showId;
            let rider = document.querySelector('#enter-character').value.toLowerCase().trim();
            let horse = document.querySelector('#enter-horse').options[document.querySelector('#enter-horse').selectedIndex].innerText.toLowerCase();
        
            let comms = document.querySelector('#enter-commnum').value || 0;
            let threads = document.querySelector('#enter-threadnum').value || 0;
            let trainingLevel, discipline, className, disciplineID, classID;
            let safeSubmit = false;

            //calculate skill point percentages
            let skillPoints = {
                "handling": parseInt(character[0].Handling) || 0,
                "training": parseInt(character[0].Training) || 0,
                "equitation": parseInt(character[0].Equitation) || 0,
                "jumping": parseInt(character[0].Jumping) || 0,
                "western": parseInt(character[0].Western) || 0,
                "other": parseInt(character[0].Other) || 0
            }
            let totalPoints = skillPoints.handling + skillPoints.training + skillPoints.equitation + skillPoints.jumping + skillPoints.western + skillPoints.other;
            let skills = {
                "handling": Math.round((skillPoints.handling / totalPoints) * 100),
                "training": Math.round((skillPoints.training / totalPoints) * 100),
                "equitation": Math.round((skillPoints.equitation / totalPoints) * 100),
                "jumping": Math.round((skillPoints.jumping / totalPoints) * 100),
                "western": Math.round((skillPoints.western / totalPoints) * 100),
                "other": Math.round((skillPoints.other / totalPoints) * 100)
            }

            //then, set discipline, class, skills, training level
            //per class
            entries.forEach((entry, i) => {
                discipline = entry.Discipline;
                className = entry.ClassName;
                disciplineID = entry.DisciplineID;
                classID = entry.ClassID;

                skill1 = JSON.stringify({
                    "skill": entry.PrimarySkill,
                    "value": skills[entry.PrimarySkill]
                });
                skill2 = JSON.stringify({
                    "skill": entry.SecondarySkill,
                    "value": skills[entry.SecondarySkill]
                });
                let horseTraining = horseObject[0].Disciplines.split('+');
                horseTraining = horseTraining.map(discipline => JSON.parse(discipline));
                selectedDiscipline = horseTraining.filter(training => training.discipline === discipline);
                trainingLevel = selectedDiscipline[0].level;
                
                if((level === 'green' && trainingLevel !== 'trained') || level !== 'green') {
                    safeSubmit = true;
                }
                if(!safeSubmit) {
                    document.querySelector('.form--enter-warning').innerHTML = 'This horse cannot compete in green in this discipline, as they are already competition-ready.';
                } else {
                    $.ajax({
                        url: `https://script.google.com/macros/s/AKfycbxapM6MLHTZZwf59kI6P05IVGJ1pNo2Q4STSmVmCSxeW9068QgWkEab8DYc-diaMrc6/exec`,   
                        data: {
                            "SubmissionType": "enter-show",
                            "Level": level,
                            "Show": show,
                            "Discipline": discipline,
                            "ClassName": className,
                            "Rider": rider,
                            "Horse": horse,
                            "TrainingLevel": trainingLevel,
                            "Skill1": skill1,
                            "Skill2": skill2,
                            "Comms": comms,
                            "Threads": threads,
                            "LevelID": levelID,
                            "DisciplineID": disciplineID,
                            "ClassID": classID,
                            "AccountID": accountID,
                            "ShowID": showID,
                            "GroupID": groupID
                        },
                        method: 'POST',
                        type: 'POST',
                        dataType: "json", 
                        success: function () {
                            //sendSortRequest(message);
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            console.log('error');
                            document.querySelector('.form--enter-warning').innerHTML = `Whoops! The sheet connection didn't quite work. Please refresh the page and try again! If this persists, please open the console (ctrl + shift + J) and send Lux a screenshot of what's there.`;
                        },
                        complete: function () {
                            console.log(`class ${i} submitted`);
                        }
                    });
                    $(document).ajaxStop(function() {
                        $('#form-enter').trigger('reset');
                        resetEnter();
                        $('#form-enter button[type="submit"]').text('Submit');
                        document.querySelector('.form--enter-warning').innerHTML = 'Success! Your entries have been submitted.';
                        document.querySelector('tag-tab[data-key="#enter"]').scrollIntoView({ behavior: 'smooth', block: 'end'}); 
                    });
                }
    
            });
        });
    });
    
    return false;
}

function runShow() {
    $('#form-run button[type="submit"]').text('Running...');

    let show = document.querySelector('#run-show').options[document.querySelector('#run-show').selectedIndex].innerText.toLowerCase().trim();
    let showID = document.querySelector('#run-show').options[document.querySelector('#run-show').selectedIndex].dataset.showId;

    const url = `https://opensheet.elk.sh/1yV-kgpnrWzMF1f1GVXp9P4Fw1CorziU-hNHAvRSlfvM/Entries`;
    fetch(url)
    .then((response) => response.json())
    .then(data => {
        let showEntries = data.filter(item => item.Show === show);

        showEntries.sort((a,b) => {
            if (a.Level < b.Level) {
                return -1;
            } else if (a.Level > b.Level) {
                return 1;
            } else if (a.DisciplineID < b.DisciplineID) {
                return -1;
            } else if (a.DisciplineID > b.DisciplineID) {
                return 1;
            } else if (a.ClassID < b.ClassID) {
                return -1;
            } else if (a.ClassID > b.ClassID) {
                return 1;
            } else {
                return 0;
            }
        });
        
        let classes = [...new Set(showEntries.map(entry => entry.ClassName))];
        let results = [];
        
        classes.forEach(classObj => {
            let entries = showEntries.filter(item => item.ClassName === classObj);
            let levels = [...new Set(entries.map(entry => entry.Level))];
            
            levels.forEach(level => {
                let placings = [];
                let discipline, disciplineID, classID, trainingLevel, advancementBonus;
                let classLevelEntries = entries.filter(item => item.Level === level);

                //generate array of chances
                let chances = [];
                classLevelEntries.forEach(entry => {
                    discipline = entry.Discipline;
                    disciplineID = entry.DisciplineID;
                    classID = entry.ClassID;
                    levelID = entry.LevelID;
                    trainingLevel = entry.TrainingLevel;
                    advancementBonus = false;
                    if(trainingLevel === 'in-training'
                         || trainingLevel === 'pleasure'
                         || (level !== 'green' && trainingLevel === 'green')) {
                        advancementBonus = true;
                    }
                    let chance = 0;
    
                    //skill points
                    let skill1 = parseInt(JSON.parse(entry.Skill1).value);
                    let skill2 = parseInt(JSON.parse(entry.Skill2).value);
                    chance = ((skill1 + skill2) / 100) * 10;
    
                    //bonuses
                    let commsBonus = parseInt(entry.Comms) * 0.5;
                    let threadBonus = parseInt(entry.Threads);
                    chance += (commsBonus + threadBonus);
    
                    //cap/round
                    if (chance > 12) {
                        chance = 12;
                    } else {
                        chance = Math.round(chance);
                    }

                    //multiplier
                    if (level !== 'green' && trainingLevel === 'in-training') {
                        chance *= 0.25;
                    } else if (level !== 'green' && trainingLevel === 'pleasure'
                    || level === 'green' && trainingLevel === 'in-training') {
                        chance *= 0.5;
                    } else if (level !== 'green' && trainingLevel === 'green'
                    || level === 'green' && trainingLevel === 'pleasure') {
                        chance *= 0.75;
                    }
                    
                    for(let i = 0; i < chance; i++) {
                        chances.push({
                            "rider": entry.Rider,
                            "horse": entry.Horse,
                            "accountID": entry.AccountID,
                            "groupID": entry.GroupID,
                            "advancement": advancementBonus
                        });
                    }
                });
    
                //generate placings
                let randomChances = shuffleArray(chances);
                let maxPlacings = classLevelEntries.length;
                for(let i = 0; i < maxPlacings; i++) {
                    let place = Math.floor(Math.random() * randomChances.length);
                    placings[i] = randomChances[place];
                    randomChances = randomChances.filter(chance => chance.rider !== randomChances[place].rider);
                }
    
                results.push({
                    "show": show,
                    "showID": showID,
                    "discipline": discipline,
                    "disciplineID": disciplineID,
                    "level": level,
                    "levelID": levelID,
                    "className": classObj,
                    "classID": classID,
                    "placings": placings
                });
            });

        });
        results.forEach(result => {
            postResults(result);
        });
    });
}

function postResults(result) {
    let show = result.show;
    let showID = result.showID;
    let level = result.level;
    let levelID = result.levelID;
    let discipline = result.discipline;
    let disciplineID = result.disciplineID;
    let className = result.className;
    let classID = result.classID;
    let placings = result.placings;

    placings.forEach((placing, i) => {
        let rider = placing.rider;
        let horse = placing.horse;
        let accountID = placing.accountID;
        let groupID = placing.groupID;
        let placingValue = i + 1;
        let points;
        let advancement = placing.advancement;

        switch(placingValue) {
            case 1:
                points = 6 * placings.length;
                break;
            case 2:
                points = 4 * placings.length;
                break;
            case 3:
                points = 3 * placings.length;
                break;
            case 4:
                points = 2 * placings.length;
                break;
            case 5:
                points = 1 * placings.length;
                break;
            default:
                points = 0;
                break;
        }

        //values correct, now push to sheets
        $.ajax({
            url: `https://script.google.com/macros/s/AKfycbxapM6MLHTZZwf59kI6P05IVGJ1pNo2Q4STSmVmCSxeW9068QgWkEab8DYc-diaMrc6/exec`,   
            data: {
                "SubmissionType": "run-show",
                "Show": show,
                "ShowID": showID,
                "Level": level,
                "LevelID": levelID,
                "Discipline": discipline,
                "DisciplineID": disciplineID,
                "ClassName": className,
                "ClassID": classID,
                "Rider": rider,
                "Horse": horse,
                "Placing": placingValue,
                "Points": points,
                "Advancement": advancement,
                "GroupID": groupID,
                "AccountID": accountID
            },
            method: 'POST',
            type: 'POST',
            dataType: "json", 
            success: function () {
                //sendSortRequest(message);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log('error');
                document.querySelector('.form--enter-warning').innerHTML = `Whoops! The sheet connection didn't quite work. Please refresh the page and try again! If this persists, please open the console (ctrl + shift + J) and send Lux a screenshot of what's there.`;
            },
            complete: function () {
                console.log(`result submitted`);
            }
        });
        $(document).ajaxStop(function() {
            $('#form-run button[type="submit"]').text('Update Year-End Results');
            document.querySelector('.form--run-warning').innerHTML = 'Results have finished populating in the sheet. Please update the Year-End Results before navigating away from this page.';
        });

    });
}

function updateYearEnd() {
    $('#form-run button[type="submit"]').text('Updating...');

    let show = document.querySelector('#run-show').options[document.querySelector('#run-show').selectedIndex].innerText.toLowerCase().trim();

    const resultsURL = `https://opensheet.elk.sh/1yV-kgpnrWzMF1f1GVXp9P4Fw1CorziU-hNHAvRSlfvM/CurrentResults`;
    const yearendURL = `https://opensheet.elk.sh/1yV-kgpnrWzMF1f1GVXp9P4Fw1CorziU-hNHAvRSlfvM/YearEndResults`;
    setTimeout(() => {
        fetch(resultsURL)
        .then((response) => response.json())
        .then(results => {
            fetch(yearendURL)
            .then((response) => response.json())
            .then(data => {
    
                let showResults = results.filter(item => item.Show === show);
                let levels = [...new Set(showResults.map(item => item.Level))];
                let disciplines = [...new Set(showResults.map(item => item.Discipline))];
                let byLevel = [];
                let byDiscipline = [];
                let horseRiderDisciplines = [];
                
                levels.forEach(level => {
                    byLevel.push(showResults.filter(result => result.Level === level));
                });
                byLevel.forEach(levelArray => {
                    disciplines.forEach(discipline => {
                        byDiscipline.push(levelArray.filter(result => result.Discipline === discipline));
                    });
                });
                byDiscipline.forEach(combo => {
                    if(combo.length > 0) {
                        let level = combo[0].Level;
                        let levelID = combo[0].LevelID;
                        let discipline = combo[0].Discipline;
                        let disciplineID = combo[0].DisciplineID;
                        let rider, horse, showPoints = 0, advancementPoints = 0;
    
                        combo.sort((a,b) => {
                            if (a.Rider < b.Rider) {
                                return -1;
                            } else if (a.Rider > b.Rider) {
                                return 1;
                            } else if (a.Horse < b.Horse) {
                                return -1;
                            } else {
                                return 0;
                            }
                        });
    
                        for(let i = 0; i < combo.length; i++) {
                            if(i === 0 && combo.length > 1) {
                                rider = combo[i].Rider;
                                horse = combo[i].Horse;
                                accountID = combo[i].AccountID;
                                groupID = combo[i].GroupID;
                                showPoints += parseInt(combo[i].Points);
                                if(combo[i].Advancement === 'TRUE' && advancementPoints === 0) {
                                    advancementPoints = 1;
                                }
                            }
    
                            else if(i !== combo.length - 1 && combo[i - 1].Rider === combo[i].Rider && combo[i - 1].Horse === combo[i].Horse) {
                                showPoints += parseInt(combo[i].Points);
                            }
                            
                            else if(i !== combo.length - 1 && (combo[i - 1].Rider !== combo[i].Rider || combo[i - 1].Horse !== combo[i].Horse)) {
                                horseRiderDisciplines.push({
                                    "level": level,
                                    "levelID": levelID,
                                    "discipline": discipline,
                                    "disciplineID": disciplineID,
                                    "rider": rider,
                                    "horse": horse,
                                    "yearendPoints": showPoints,
                                    "advancementPoints": advancementPoints,
                                    "accountID": accountID,
                                    "groupID": groupID
                                });
                                showPoints = 0;
                                advancementPoints = 0;
                                rider = combo[i].Rider;
                                horse = combo[i].Horse;
                                accountID = combo[i].AccountID;
                                groupID = combo[i].GroupID;
                                showPoints += parseInt(combo[i].Points);
                                if(combo[i].Advancement === 'TRUE' && advancementPoints === 0) {
                                    advancementPoints = 1;
                                }
                            }
                            
                            else if(i === combo.length - 1 && combo.length > 1 && combo[i - 1].Rider === combo[i].Rider && combo[i - 1].Horse === combo[i].Horse) {
                                showPoints += parseInt(combo[i].Points);
                                horseRiderDisciplines.push({
                                    "level": level,
                                    "levelID": levelID,
                                    "discipline": discipline,
                                    "disciplineID": disciplineID,
                                    "rider": rider,
                                    "horse": horse,
                                    "yearendPoints": showPoints,
                                    "advancementPoints": advancementPoints,
                                    "accountID": accountID,
                                    "groupID": groupID
                                });
                                showPoints = 0;
                                advancementPoints = 0;
                            }
                            
                            else {
                                rider = combo[i].Rider;
                                horse = combo[i].Horse;
                                accountID = combo[i].AccountID;
                                groupID = combo[i].GroupID;
                                showPoints += parseInt(combo[i].Points);
                                if(combo[i].Advancement === 'TRUE' && advancementPoints === 0) {
                                    advancementPoints = 1;
                                }
                                horseRiderDisciplines.push({
                                    "level": level,
                                    "levelID": levelID,
                                    "discipline": discipline,
                                    "disciplineID": disciplineID,
                                    "rider": rider,
                                    "horse": horse,
                                    "yearendPoints": showPoints,
                                    "advancementPoints": advancementPoints,
                                    "accountID": accountID,
                                    "groupID": groupID
                                });
                                showPoints = 0;
                                advancementPoints = 0;
                            }
                        }
                    }
                });
    
                if(horseRiderDisciplines.length === 0) {
                    document.querySelector('.form--run-warning').innerHTML = 'The sheet needs a little more time to recognize the results were submitted! Try clicking the button again.';
                    $('#form-run button[type="submit"]').text('Update Year-End Results');
                    return null;
                }
                horseRiderDisciplines.forEach(pair => {
                    let existing = data.filter(item => item.Rider === pair.rider && item.Horse === pair.horse && item.Discipline === pair.discipline && item.Level === pair.level);
                    if(existing.length > 0) {
                        pair.yearendPoints += parseInt(existing[0].YearEndPoints);
                        pair.advancementPoints += parseInt(existing[0].Advancement);
                    }
                    console.log(pair);
                    $.ajax({
                        url: `https://script.google.com/macros/s/AKfycbxapM6MLHTZZwf59kI6P05IVGJ1pNo2Q4STSmVmCSxeW9068QgWkEab8DYc-diaMrc6/exec`,   
                        data: {
                            "SubmissionType": "update-yearend",
                            "Show": show,
                            "Level": pair.level,
                            "LevelID": pair.levelID,
                            "Discipline": pair.discipline,
                            "DisciplineID": pair.disciplineID,
                            "Rider": pair.rider,
                            "Horse": pair.horse,
                            "YearEndPoints": pair.yearendPoints,
                            "Advancement": pair.advancementPoints,
                            "AccountID": pair.accountID,
                            "GroupID": pair.groupID
                        },
                        method: 'POST',
                        type: 'POST',
                        dataType: "json", 
                        success: function () {
                            //sendSortRequest(message);
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            console.log('error');
                            document.querySelector('.form--run-warning').innerHTML = `Whoops! The sheet connection didn't quite work. Please refresh the page and try again! If this persists, please open the console (ctrl + shift + J) and send Lux a screenshot of what's there.`;
                        },
                        complete: function () {
                            console.log(`yearend submitted`);
                        }
                    });
                    $(document).ajaxStop(function() {
                        $('#form-run').trigger('reset');
                        $('#form-run button[type="submit"]').text('Run');
                        document.querySelector('.form--run-warning').innerHTML = 'Year-end results have been updated. You may navigate away from this page now.';
                        document.querySelector('tag-tab[data-key="#enter"]').scrollIntoView({ behavior: 'smooth', block: 'end'});
                    });
                });
            });
        });
    }, 1000 * 15);
}