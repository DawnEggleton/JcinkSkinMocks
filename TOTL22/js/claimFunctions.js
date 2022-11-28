function postClaims(char) {
    $.ajax({
        url: `https://script.google.com/macros/s/AKfycbyazB9ExMJDak85zdm4Nz0_eGSOQfJnKSTBtCj_ejva-3KBJxUIgFCWHwp8zM2ivjKP/exec`,   
        data: char,
        method: 'POST',
        type: 'POST',
        dataType: "json", 
        async: false,
        success: function () {
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('error');
        },
        complete: function () {
            console.log('request complete');
        }
    });
}
function formReset(form) {
    $(form).trigger('reset');
    let formObj = document.querySelector(form);
    formObj.querySelectorAll('.ifStudent, .ifCore, .ifStart, .ifElec, .ifUpper, .ifLeadershipPossible, .ifHogwartsQuidditch, .ifLeadership, .ifAdult, .ifJob, .ifUni, .ifCanon, .ifReturn').forEach(field => field.classList.add('hide'));
    formObj.querySelectorAll('input[name="sort-absp"]').forEach(box => box.checked = false);
}
function sendDiscordMessage(webhook, message, embedTitle, notification = null, color = null) {
    const request = new XMLHttpRequest();
    request.open("POST", webhook);

    request.setRequestHeader('Content-type', 'application/json');

    const params = {
  	"content": notification,
	  "embeds": [
	    {
	      "title": embedTitle,
	      "description": message,
	      "color": color
	    }
	  ],
	  "attachments": []
	};

    request.send(JSON.stringify(params));
}
function discordEmbedColor (groupID) {
    switch(groupID) {
        case `6`: //adults
            groupColor = `11749717`;
            break;
        case `7`: //gryffindor
            groupColor = `9644591`;
            break;
        case `8`: //hogwarts
            groupColor = `6379161`;
            break;
        case `9`: //hufflepuff
            groupColor = `12031093`;
            break;
        case `11`: //press
            groupColor = `11568724`;
            break;
        case `12`: //ministry
            groupColor = `5146238`;
            break;
        case `13`: //quidditch
            groupColor = `9601693`;
            break;
        case `14`: //ravenclaw
            groupColor = `4283278`;
            break;
        case `15`: //healers
            groupColor = `5798739`;
            break;
        case `16`: //slytherin
            groupColor = `2972477`;
            break;
        case `17`: //returners
            groupColor = `5933463`;
            break;
        case `18`: //entertainment
            groupColor = `5413538`;
            break;
        default:
            groupColor = null;
            break;
    }
}
function discordSortMessage(character) {
    let message = `**View Profile: <https://totl.jcink.net/?showuser=${character.AccountID}>**
    **Sort Into:** ${capitalize(character.GroupName, [`'`, '-'])}`;
    if(character.PreferredDorm !== ``) {
        message += `
        **Preferred Dorm:** ${character.PreferredDorm}`;
    }
    if(character.CanonRelation !== ``) {
        let canonCode = ``;
        let firstName = character.Character.split(' ')[0];
        let lastName = character.Character.split(' ').filter((item, i) => i !== 0).join(' ');
        let formattedName = `${lastName.toUpperCase()}, ${firstName.toLowerCase()}`;
        let primaryJob = `unemployed`;
        if(character.Jobs && character.Jobs !== ``) {
            let job = character.Jobs.split('+').map(job => JSON.parse(job))[0];
            if(job.line2 && job.line2 !== ``) {
                primaryJob = job.line2;
            } else {
                primaryJob = job.line1;
            }
        }
        if(character.GroupID === '17') {
            canonCode = `<a href="?showuser=${character.AccountID}" class="g-${character.GroupID}"><b>${formattedName}.</b></a> ${primaryJob}. b. ${character.BirthYear}. d. ${character.DeathYear}. r. ${character.ReturnYear}. ${character.Member}.<br>`;
        } else {
            canonCode = `<a href="?showuser=${character.AccountID}" class="g-${character.GroupID}"><b>${formattedName}.</b></a> ${primaryJob}. b. ${character.BirthYear}. ${character.Member}.<br>`;
        }
        message += `
        **Relation to Canon:**
        `;
        message += '```' + character.CanonRelation + '```';
        message += `
        **Canon Code:**
        `;
        message += '```' + canonCode + '```';
    }
    return message;
}
function setHogwartsClasses(group, year, formType) {
    let hogwartsClasses = ``;
    let characterGroup = group.options[group.selectedIndex].value.trim();
    if(characterGroup === '7' || characterGroup === '9' || characterGroup === '14' || characterGroup === '16') {
        let characterYear = year.options[year.selectedIndex].innerText.toLowerCase();
        if(characterYear === 'first year' || characterYear === 'second year') {
            //only core and start classes
            let astronomy = document.querySelector(`#${formType}-astronomy`).options[document.querySelector(`#${formType}-astronomy`).selectedIndex].innerText.toLowerCase();
            let charms = document.querySelector(`#${formType}-charms`).options[document.querySelector(`#${formType}-astronocharmsmy`).selectedIndex].innerText.toLowerCase();
            let dada = document.querySelector(`#${formType}-dada`).options[document.querySelector(`#${formType}-dada`).selectedIndex].innerText.toLowerCase();
            let games = document.querySelector(`#${formType}-games`).options[document.querySelector(`#${formType}-games`).selectedIndex].innerText.toLowerCase();
            let herbology = document.querySelector(`#${formType}-herbology`).options[document.querySelector(`#${formType}-herbology`).selectedIndex].innerText.toLowerCase();
            let hom = document.querySelector(`#${formType}-historyofmagic`).options[document.querySelector(`#${formType}-historyofmagic`).selectedIndex].innerText.toLowerCase();
            let literacy = document.querySelector(`#${formType}-literacy`).options[document.querySelector(`#${formType}-literacy`).selectedIndex].innerText.toLowerCase();
            let theory = document.querySelector(`#${formType}-magicaltheory`).options[document.querySelector(`#${formType}-magicaltheory`).selectedIndex].innerText.toLowerCase();
            let maths = document.querySelector(`#${formType}-maths`).options[document.querySelector(`#${formType}-maths`).selectedIndex].innerText.toLowerCase();
            let potions = document.querySelector(`#${formType}-potions`).options[document.querySelector(`#${formType}-potions`).selectedIndex].innerText.toLowerCase();
            let transfig = document.querySelector(`#${formType}-transfiguration`).options[document.querySelector(`#${formType}-transfiguration`).selectedIndex].innerText.toLowerCase();
            let culture = document.querySelector(`#${formType}-culture`).options[document.querySelector(`#${formType}-culture`).selectedIndex].innerText.toLowerCase();
            let cultureGrade = document.querySelector(`#${formType}-culturegrade`).options[document.querySelector(`#${formType}-culturegrade`).selectedIndex].innerText.toLowerCase();

            hogwartsClasses += `{"class":"astronomy","grade":"${astronomy}"}`;
            hogwartsClasses += `+{"class":"charms","grade":"${charms}"}`;
            hogwartsClasses += `+{"class":"dada","grade":"${dada}"}`;
            hogwartsClasses += `+{"class":"games","grade":"${games}"}`;
            hogwartsClasses += `+{"class":"herbology","grade":"${herbology}"}`;
            hogwartsClasses += `+{"class":"historyOfMagic","grade":"${hom}"}`;
            hogwartsClasses += `+{"class":"literacy","grade":"${literacy}"}`;
            hogwartsClasses += `+{"class":"magicalTheory","grade":"${theory}"}`;
            hogwartsClasses += `+{"class":"maths","grade":"${maths}"}`;
            hogwartsClasses += `+{"class":"potions","grade":"${potions}"}`;
            hogwartsClasses += `+{"class":"transfiguration","grade":"${transfig}"}`;
            hogwartsClasses += `+{"class":"${culture}","grade":"${cultureGrade}"}`;
        } else if(characterYear === 'third year' || characterYear === 'fourth year' || characterYear === 'fifth year') {
            //core and elective fields
            let astronomy = document.querySelector(`#${formType}-astronomy`).options[document.querySelector(`#${formType}-astronomy`).selectedIndex].innerText.toLowerCase();
            let charms = document.querySelector(`#${formType}-charms`).options[document.querySelector(`#${formType}-astronocharmsmy`).selectedIndex].innerText.toLowerCase();
            let dada = document.querySelector(`#${formType}-dada`).options[document.querySelector(`#${formType}-dada`).selectedIndex].innerText.toLowerCase();
            let games = document.querySelector(`#${formType}-games`).options[document.querySelector(`#${formType}-games`).selectedIndex].innerText.toLowerCase();
            let herbology = document.querySelector(`#${formType}-herbology`).options[document.querySelector(`#${formType}-herbology`).selectedIndex].innerText.toLowerCase();
            let hom = document.querySelector(`#${formType}-historyofmagic`).options[document.querySelector(`#${formType}-historyofmagic`).selectedIndex].innerText.toLowerCase();
            let potions = document.querySelector(`#${formType}-potions`).options[document.querySelector(`#${formType}-potions`).selectedIndex].innerText.toLowerCase();
            let transfig = document.querySelector(`#${formType}-transfiguration`).options[document.querySelector(`#${formType}-transfiguration`).selectedIndex].innerText.toLowerCase();

            hogwartsClasses += `{"class":"astronomy","grade":"${astronomy}"}`;
            hogwartsClasses += `+{"class":"charms","grade":"${charms}"}`;
            hogwartsClasses += `+{"class":"dada","grade":"${dada}"}`;
            hogwartsClasses += `+{"class":"games","grade":"${games}"}`;
            hogwartsClasses += `+{"class":"herbology","grade":"${herbology}"}`;
            hogwartsClasses += `+{"class":"historyOfMagic","grade":"${hom}"}`;
            hogwartsClasses += `+{"class":"potions","grade":"${potions}"}`;
            hogwartsClasses += `+{"class":"transfiguration","grade":"${transfig}"}`;

            for(let i = 0; i < 4; i++) {
                if(document.querySelector(`#${formType}-elec${i}`) && document.querySelector(`#${formType}-elec${i}`).options[document.querySelector(`#${formType}-elec${i}`).selectedIndex].value.toLowerCase() !== ``) {
                    let elec = document.querySelector(`#${formType}-elec${i}`).options[document.querySelector(`#${formType}-elec${i}`).selectedIndex].innerText.toLowerCase();
                    let grade = document.querySelector(`#${formType}-elec${i}grade`).options[document.querySelector(`#${formType}-elec${i}grade`).selectedIndex].innerText.toLowerCase();
                    hogwartsClasses += `+{"class":"${elec}","grade":"${grade}"}`;
                }
            }
        } else {
            for(let i = 0; i < 8; i++) {
                if(document.querySelector(`#${formType}-elec${i}`) && document.querySelector(`#${formType}-elec${i}`).options[document.querySelector(`#${formType}-elec${i}`).selectedIndex].value.toLowerCase() !== ``) {
                    if(i !== 0) {
                        hogwartsClasses += `+`;
                    }
                    let elec = document.querySelector(`#${formType}-elec${i}`).options[document.querySelector(`#${formType}-elec${i}`).selectedIndex].innerText.toLowerCase();
                    let grade = document.querySelector(`#${formType}-elec${i}grade`).options[document.querySelector(`#${formType}-elec${i}grade`).selectedIndex].innerText.toLowerCase();
                    hogwartsClasses += `{"class":"${elec}","grade":"${grade}"}`;
                }
            }
        }
    }
    return hogwartsClasses;
}
function setAbilitiesSpecies(formType) {
    let abSpString = ``;
    let checked = Array.prototype.slice.call(document.querySelectorAll(`input[name='${formType}-absp']:checked`)).map(box => box.value);
    for(let i = 0; i < checked.length; i++) {
        if (checked[i] === 'animagus') {
            checked[i] = `animagus (${document.querySelector(`#${formType}-animagusform`).value.toLowerCase().trim()})`;
        }
        if(checked[i] === 'veela' || checked[i] === 'vampire') {
            let percent = document.querySelector(`#${formType}-speciesamount`).options[document.querySelector(`#${formType}-speciesamount`).selectedIndex].value;
            checked[i] = `${checked[i]} (${percent})`;
        }
        if (checked[i] === 'were') {
            checked[i] = `werecreature (${document.querySelector(`#${formType}-weretype`).value.toLowerCase().trim()})`;
        }
    }
    abSpString = checked.join(`, `);
    if(document.querySelector(`#${formType}-otherabsp`).value.trim() !== ``) {
        if(abSpString !== ``) {
            abSpString += `, `;
        }
        abSpString += document.querySelector(`#${formType}-otherabsp`).value.trim();
    }
    return abSpString;
}
function setNewJobs(formType) {
    let jobs = ``;
    let jobCount = parseInt(document.querySelector(`#${formType}-jobcount`).value);
    for(let i = 0; i < jobCount; i++) {
        let section = document.querySelector(`#${formType}-jobsection-${i}`).options[document.querySelector(`#${formType}-jobsection-${i}`).selectedIndex].innerText.toLowerCase();
        let subsection = document.querySelector(`#${formType}-jobsubsection-${i}`).value.toLowerCase().trim();
        let line1 = document.querySelector(`#${formType}-jobline1-${i}`).value.toLowerCase().trim();
        let line2 = document.querySelector(`#${formType}-jobline2-${i}`).value.toLowerCase().trim();
        if(i !== 0) {
            jobs += `+`
        }
        jobs += `{"section":"${section}","subsection":"${subsection}","line1":"${line1}","line2":"${line2}"}`;
    }
    return jobs;
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