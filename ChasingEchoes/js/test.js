function calculateNewSkills (characters, winner) {
    let character = characters.filter(item => item.Character === winner.rider)[0];
    let skills = {
        handling: parseInt(character.Handling),
        training: parseInt(character.Training),
        equitation: parseInt(character.Equitation),
        jumping: parseInt(character.Jumping),
        western: parseInt(character.Western),
        other: parseInt(character.Other)
    }

    console.log(character);
    console.log(skills);
    let classes = data.filter(item => item.Discipline.split(', ')[0] === winner.discipline);
    let skillChoices = [];
    classes.forEach(indClass => {
        skillChoices.push(indClass.Skills);
    });
    skillChoices = skillChoices.join(', ').split(', ');
    skillChoices = [...new Set(skillChoices)];
    for(let i = 0; i < 2; i++) {
        let randNum = Math.floor(Math.random() * skillChoices.length);
        let chosenSkill = skillChoices[randNum];
        skills[chosenSkill]++;
    }
    console.log(skills);
    //updateSkills(character, skills);
}
function updateSkills(character, skills) {
    $.ajax({
        url: `https://script.google.com/macros/s/AKfycbwM7UbGB6Jagw72dt3Z7KlRyCgnlFMDA_Cd_B5kYJYmnFspbYwTa2186qjADZ9HsSWtDA/exec`,   
        data: {
            "SubmissionType": "update-skillpoints",
            "Character": character.Character,
            "Handling": skills.handling,
            "Training": skills.training,
            "Equitation": skills.equitation,
            "Jumping": skills.jumping,
            "Western": skills.western,
            "Other": skills.other
        },
        method: 'POST',
        type: 'POST',
        async: false,
        dataType: "json", 
        success: function () {
            //sendSortRequest(message);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('error');
            document.querySelector('.form--run-warning').innerHTML = `Whoops! The sheet connection didn't quite work. Please refresh the page and try again! If this persists, please open the console (ctrl + shift + J) and send Lux a screenshot of what's there.`;
        },
        complete: function () {
            console.log(`skills editted for ${rider}`);
            console.log(originalSkills);
            console.log('became')
            console.log(skills);
        }
    });
}
function updateYearEnd() {
    $('#form-run button[type="submit"]').text('Updating...');

    let show = document.querySelector('#run-show').options[document.querySelector('#run-show').selectedIndex].innerText.toLowerCase().trim();
    let showType = document.querySelector('#run-show').options[document.querySelector('#run-show').selectedIndex].dataset.showType;

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
                let divisionResults = {
                    winners: [],
                    reserves: []
                };

                let points = calculateDivisionChampsWithHorse(showResults);
                for(const level in points) {
                    for(const discipline in points[level]) {
                        let divisionWinner = showResults.filter(result => {
                            return result.Horse === points[level][discipline][0].horse
                                && result.Level === level
                                && result.Discipline === discipline;
                        });
                        addDivisionResults(show, level, discipline, divisionWinner[0].Rider, divisionWinner[0].Horse, 1);
                        divisionResults.winners.push({rider: divisionWinner[0].Rider, discipline: discipline});
                        if(points[level][discipline].length > 1) {
                            let divisionReserve = showResults.filter(result => {
                                return result.Horse === points[level][discipline][1].horse
                                    && result.Level === level
                                    && result.Discipline === discipline;
                            });
                            addDivisionResults(show, level, discipline, divisionReserve[0].Rider, divisionReserve[0].Horse, 2);
                            divisionResults.reserves.push({rider: divisionReserve[0].Rider, discipline: discipline});
                        }
                    }
                }

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
                            } else if (a.Horse > b.Horse) {
                                return 1;
                            } else {
                                return 0;
                            }
                        });


                        for(let i = 0; i < combo.length; i++) {
				if ((i === 0 && combo.length > 1) ||
				    (i > 0 && combo[i - 1].Rider === combo[i].Rider && combo[i - 1].Horse !== combo[i].Horse) ||
				    i > 0 && combo[i - 1].Rider !== combo[i].Rider && combo[i - 1].Horse !== combo[i].Horse) {
                                	rider = combo[i].Rider;
	                                horse = combo[i].Horse;
	                                accountID = combo[i].AccountID;
	                                groupID = combo[i].GroupID;
	                                showPoints = points[level][discipline].filter(item => item.rider === rider && item.horse === horse)[0].points;
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
                    /*
                    $.ajax({
                        url: `https://script.google.com/macros/s/AKfycbxapM6MLHTZZwf59kI6P05IVGJ1pNo2Q4STSmVmCSxeW9068QgWkEab8DYc-diaMrc6/exec`,   
                        data: {
                            "SubmissionType": "update-yearend",
                            "Show": show,
                            "ShowType": showType,
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
			async: false,
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
                    */
                });
                return divisionResults;
            }).then(divisionResults => {
                console.log(divisionResults);
                fetch(`https://opensheet.elk.sh/1x6ZjvfoBDksT1H09aLM40hWgaTWbvSDfWVumHqnOHL8/HumanClaims`)
                .then((response) => response.json())
                .then(characters => {
                    fetch(`https://opensheet.elk.sh/1yV-kgpnrWzMF1f1GVXp9P4Fw1CorziU-hNHAvRSlfvM/ClassList`)
                    .then((response) => response.json())
                    .then(data => {
                        divisionResults.winners.forEach(winner => {
                            calculateNewSkills(characters, winner);
                        });
                    });
                });
            });
        });
    }, 1000 * 1);
}