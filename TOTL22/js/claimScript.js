//Group Change Event
let group = document.querySelector('#sort-group');
setGroup(group.options[group.selectedIndex].value);
group.addEventListener('change', () => {
    setGroup(group.options[group.selectedIndex].value);
});

//Abilities/Species Change Event
let absp = document.querySelector('#sort-abspexists');
setShowHide(absp.options[absp.selectedIndex].value, '.ifAbSp');
absp.addEventListener('change', () => {
    setShowHide(absp.options[absp.selectedIndex].value, '.ifAbSp');
});

//Animagus Change Event
let isAnimagus = document.querySelector('#sort-animagus');
setCheckShowHide(isAnimagus.checked, '.ifAnimagus');
isAnimagus.addEventListener('change', () => {
    setCheckShowHide(isAnimagus.checked, '.ifAnimagus');
});

//Were Change Event
let isWere = document.querySelector('#sort-were');
setCheckShowHide(isWere.checked, '.ifWere');
isWere.addEventListener('change', () => {
    setCheckShowHide(isWere.checked, '.ifWere');
});

//Species Change Event
let isVamp = document.querySelector('#sort-vamp');
let isVeela = document.querySelector('#sort-veela');
let isSpecies = (isVamp.checked || isVeela.checked);
setCheckShowHide(isSpecies, '.ifPercent');
isVamp.addEventListener('change', () => {
    isSpecies = (isVamp.checked || isVeela.checked);
    setCheckShowHide(isSpecies, '.ifPercent');
});
isVeela.addEventListener('change', () => {
    isSpecies = (isVamp.checked || isVeela.checked);
    setCheckShowHide(isSpecies, '.ifPercent');
});

//Canon Change Event
let canon = document.querySelector('#sort-canon');
setShowHide(canon.options[canon.selectedIndex].value, '.ifCanon');
setGroup(group.options[group.selectedIndex].value);
canon.addEventListener('change', () => {
    setShowHide(canon.options[canon.selectedIndex].value, '.ifCanon');
    setGroup(group.options[group.selectedIndex].value);
});

//Employed Change Event
let employed = document.querySelector('#sort-employed');
setShowHide(employed.options[employed.selectedIndex].value, '.ifJob');
employed.addEventListener('change', () => {
    setShowHide(employed.options[employed.selectedIndex].value, '.ifJob');
});

//Job Fields Load-in
let jobCount = document.querySelector('#sort-jobcount');
let jobClip = document.querySelector('.form--jobs-clip.form--sort');
if (jobCount.value !== 0) {
    for(let i = 0; i < jobCount.value; i++) {
        jobClip.insertAdjacentHTML('beforeend', addJobFields(i));
    }
} else {
    jobClip.innerHTML = '';
}

//Job Count Change
jobCount.addEventListener('change', e => {
    let currentCount = jobClip.querySelectorAll('.form--job-section').length;
    let newCount = parseInt(e.currentTarget.value);
    if (newCount > currentCount) {
        let difference = newCount - currentCount;
        for(let i = currentCount; i < newCount; i++) {
            jobClip.insertAdjacentHTML('beforeend', addJobFields(i));
        }
    } else if (currentCount > newCount) {
        let difference = currentCount - newCount;
        for(let i = 0; i < difference; i++) {
            document.querySelectorAll('.form--job-section')[currentCount - i - 1].remove();
            document.querySelectorAll('.form--job-sub-section')[currentCount - i - 1].remove();
            document.querySelectorAll('.form--job-line1')[currentCount - i - 1].remove();
            document.querySelectorAll('.form--job-line2')[currentCount - i - 1].remove();
        }
    }
});

//Uni Change Event
let unistudent = document.querySelector('#sort-unistudent');
setShowHide(unistudent.options[unistudent.selectedIndex].value, '.ifUni');
unistudent.addEventListener('change', () => {
    setShowHide(unistudent.options[unistudent.selectedIndex].value, '.ifUni');
});

//Hogwarts Year Change Event
let year = document.querySelector('#sort-hwyear');
setHogwartsYear(year.value);
year.addEventListener('change', e => {
    setHogwartsYear(year.value);
});

//Hogwarts Quidditch Change Event
let hwquid = document.querySelector('#sort-hwquidditch');
setShowHide(hwquid.options[hwquid.selectedIndex].value, '.ifHogwartsQuidditch');
hwquid.addEventListener('change', () => {
    setShowHide(hwquid.options[hwquid.selectedIndex].value, '.ifHogwartsQuidditch');
});

//Hogwarts Leadership Change Event
let hwlead = document.querySelector('#sort-hwlead');
setShowHide(hwlead.options[hwlead.selectedIndex].value, '.ifLeadership');
hwlead.addEventListener('change', () => {
    setShowHide(hwlead.options[hwlead.selectedIndex].value, '.ifLeadership');
});

//Claims submit
document.querySelector('#newsort').addEventListener('submit', e => {
    e.preventDefault();
    //submit changes
    document.querySelector('#newsort button[type="submit"]').innerText = 'Submitting...';
    document.querySelector('#newsort button[type="submit"]').setAttribute('disabled', true);

    //check if already on sheet
    const url = `https://opensheet.elk.sh/146rEeh3eiyftnC-9NXF29rgSPRLAhuG2gss_nWp_xxw/NewClaims`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        let idExists = data.filter(item => item.AccountID === document.querySelector('#sort-id').value).length > 0;
        
        if(idExists) {
            document.querySelector('#newsort #warning').innerHTML = `This character already exists on the sheet! Please use the update form instead.`;
        } else {
            //set up abilities & species
            let abSpString = ``;
            if(document.querySelector('#sort-abspexists').options[document.querySelector('#sort-abspexists').selectedIndex].value === 'y') {
                let checked = Array.prototype.slice.call(document.querySelectorAll(`input[name='sort-absp']:checked`)).map(box => box.value);
                for(let i = 0; i < checked.length; i++) {
                    if (checked[i] === 'animagus') {
                        checked[i] = `animagus (${document.querySelector('#sort-animagusform').value.toLowerCase().trim()})`;
                    }
                    if(checked[i] === 'veela' || checked[i] === 'vampire') {
                        let percent = document.querySelector('#sort-speciesamount').options[document.querySelector('#sort-speciesamount').selectedIndex].value;
                        checked[i] = `${checked[i]} (${percent})`;
                    }
                    if (checked[i] === 'were') {
                        checked[i] = `werecreature (${document.querySelector('#sort-weretype').value.toLowerCase().trim()})`;
                    }
                }
                abSpString = checked.join(`, `);
                if(document.querySelector('#sort-otherabsp').value.trim() !== ``) {
                    if(abSpString !== ``) {
                        abSpString += `, `;
                    }
                    abSpString += document.querySelector('#sort-otherabsp').value.trim();
                }
            }

            //set up jobs
            let jobs = ``;
            if(document.querySelector('#sort-employed').options[document.querySelector('#sort-employed').selectedIndex].value === 'y') {
                let jobCount = parseInt(document.querySelector('#sort-jobcount').value);
                for(let i = 0; i < jobCount; i++) {
                    let section = document.querySelector(`#sort-jobsection-${i}`).options[document.querySelector(`#sort-jobsection-${i}`).selectedIndex].innerText.toLowerCase();
                    let subsection = document.querySelector(`#sort-jobsubsection-${i}`).value.toLowerCase().trim();
                    let line1 = document.querySelector(`#sort-jobline1-${i}`).value.toLowerCase().trim();
                    let line2 = document.querySelector(`#sort-jobline2-${i}`).value.toLowerCase().trim();
                    if(i !== 0) {
                        jobs += `+`
                    }
                    jobs += `{"section":"${section}","subsection":"${subsection}","line1":"${line1}","line2":"${line2}"}`;
                }
            }

            //set up hogwarts classes
            let hogwartsClasses = ``;
            let characterGroup = document.querySelector('#sort-group').options[document.querySelector('#sort-group').selectedIndex].value;
            if(characterGroup === '7' || characterGroup === '9' || characterGroup === '14' || characterGroup === '16') {
                let year = document.querySelector('#sort-hwyear').options[document.querySelector('#sort-hwyear').selectedIndex].innerText.toLowerCase();
                if(year === 'first year' || year === 'second year') {
                    //only core and start classes
                    let astronomy = document.querySelector('#sort-astronomy').options[document.querySelector('#sort-astronomy').selectedIndex].innerText.toLowerCase();
                    let charms = document.querySelector('#sort-charms').options[document.querySelector('#sort-charms').selectedIndex].innerText.toLowerCase();
                    let dada = document.querySelector('#sort-dada').options[document.querySelector('#sort-dada').selectedIndex].innerText.toLowerCase();
                    let games = document.querySelector('#sort-games').options[document.querySelector('#sort-games').selectedIndex].innerText.toLowerCase();
                    let herbology = document.querySelector('#sort-herbology').options[document.querySelector('#sort-herbology').selectedIndex].innerText.toLowerCase();
                    let hom = document.querySelector('#sort-historyofmagic').options[document.querySelector('#sort-historyofmagic').selectedIndex].innerText.toLowerCase();
                    let literacy = document.querySelector('#sort-literacy').options[document.querySelector('#sort-literacy').selectedIndex].innerText.toLowerCase();
                    let theory = document.querySelector('#sort-magicaltheory').options[document.querySelector('#sort-magicaltheory').selectedIndex].innerText.toLowerCase();
                    let maths = document.querySelector('#sort-maths').options[document.querySelector('#sort-maths').selectedIndex].innerText.toLowerCase();
                    let potions = document.querySelector('#sort-potions').options[document.querySelector('#sort-potions').selectedIndex].innerText.toLowerCase();
                    let transfig = document.querySelector('#sort-transfiguration').options[document.querySelector('#sort-transfiguration').selectedIndex].innerText.toLowerCase();
                    let culture = document.querySelector('#sort-culture').options[document.querySelector('#sort-culture').selectedIndex].innerText.toLowerCase();
                    let cultureGrade = document.querySelector('#sort-culturegrade').options[document.querySelector('#sort-culturegrade').selectedIndex].innerText.toLowerCase();

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
                } else if(year === 'third year' || year === 'fourth year' || year === 'fifth year') {
                    //core and elective fields
                    let astronomy = document.querySelector('#sort-astronomy').options[document.querySelector('#sort-astronomy').selectedIndex].innerText.toLowerCase();
                    let charms = document.querySelector('#sort-charms').options[document.querySelector('#sort-charms').selectedIndex].innerText.toLowerCase();
                    let dada = document.querySelector('#sort-dada').options[document.querySelector('#sort-dada').selectedIndex].innerText.toLowerCase();
                    let games = document.querySelector('#sort-games').options[document.querySelector('#sort-games').selectedIndex].innerText.toLowerCase();
                    let herbology = document.querySelector('#sort-herbology').options[document.querySelector('#sort-herbology').selectedIndex].innerText.toLowerCase();
                    let hom = document.querySelector('#sort-historyofmagic').options[document.querySelector('#sort-historyofmagic').selectedIndex].innerText.toLowerCase();
                    let potions = document.querySelector('#sort-potions').options[document.querySelector('#sort-potions').selectedIndex].innerText.toLowerCase();
                    let transfig = document.querySelector('#sort-transfiguration').options[document.querySelector('#sort-transfiguration').selectedIndex].innerText.toLowerCase();

                    hogwartsClasses += `{"class":"astronomy","grade":"${astronomy}"}`;
                    hogwartsClasses += `+{"class":"charms","grade":"${charms}"}`;
                    hogwartsClasses += `+{"class":"dada","grade":"${dada}"}`;
                    hogwartsClasses += `+{"class":"games","grade":"${games}"}`;
                    hogwartsClasses += `+{"class":"herbology","grade":"${herbology}"}`;
                    hogwartsClasses += `+{"class":"historyOfMagic","grade":"${hom}"}`;
                    hogwartsClasses += `+{"class":"potions","grade":"${potions}"}`;
                    hogwartsClasses += `+{"class":"transfiguration","grade":"${transfig}"}`;

                    for(let i = 0; i < 4; i++) {
                        if(document.querySelector(`#sort-elec${i}`) && document.querySelector(`#sort-elec${i}`).options[document.querySelector(`#sort-elec${i}`).selectedIndex].value.toLowerCase() !== ``) {
                            let elec = document.querySelector(`#sort-elec${i}`).options[document.querySelector(`#sort-elec${i}`).selectedIndex].innerText.toLowerCase();
                            let grade = document.querySelector(`#sort-elec${i}grade`).options[document.querySelector(`#sort-elec${i}grade`).selectedIndex].innerText.toLowerCase();
                            hogwartsClasses += `+{"class":"${elec}","grade":"${grade}"}`;
                        }
                    }
                } else {
                    for(let i = 0; i < 8; i++) {
                        if(document.querySelector(`#sort-elec${i}`) && document.querySelector(`#sort-elec${i}`).options[document.querySelector(`#sort-elec${i}`).selectedIndex].value.toLowerCase() !== ``) {
                            if(i !== 0) {
                                hogwartsClasses += `+`;
                            }
                            let elec = document.querySelector(`#sort-elec${i}`).options[document.querySelector(`#sort-elec${i}`).selectedIndex].innerText.toLowerCase();
                            let grade = document.querySelector(`#sort-elec${i}grade`).options[document.querySelector(`#sort-elec${i}grade`).selectedIndex].innerText.toLowerCase();
                            hogwartsClasses += `{"class":"${elec}","grade":"${grade}"}`;
                        }
                    }
                }
            }

            //set up character
            let character = {
                "SubmissionType": "claims-submit",
                Timestamp: new Date(),
                Member: document.querySelector('#sort-alias').value.toLowerCase().trim(),
                Character: document.querySelector('#sort-character').value.toLowerCase().trim(),
                AccountID: document.querySelector('#sort-id').value.trim(),
                GroupName: document.querySelector('#sort-group').options[document.querySelector('#sort-group').selectedIndex].innerText.toLowerCase(),
                GroupID: document.querySelector('#sort-group').options[document.querySelector('#sort-group').selectedIndex].value,
                Face: document.querySelector('#sort-face').value.toLowerCase().trim(),
                AbilitiesSpecies: abSpString,
                Jobs: jobs,
                School: document.querySelector('#sort-uniname').value.toLowerCase().trim(),
                Program: document.querySelector('#sort-uniprogram').value.toLowerCase().trim(),
                UniversityYear: document.querySelector('#sort-uniyear').options[document.querySelector('#sort-uniyear').selectedIndex].innerText.toLowerCase() !== `(select)` ? document.querySelector('#sort-uniyear').options[document.querySelector('#sort-uniyear').selectedIndex].innerText.toLowerCase() : ``,
                HogwartsYear: document.querySelector('#sort-hwyear').options[document.querySelector('#sort-hwyear').selectedIndex].innerText.toLowerCase() !== `(select)` ? document.querySelector('#sort-hwyear').options[document.querySelector('#sort-hwyear').selectedIndex].innerText.toLowerCase() : ``,
                HogwartsClasses: hogwartsClasses,
                QuidditchPosition: document.querySelector('#sort-hwquidditchposition').value.toLowerCase().trim(),
                LeadershipPosition: document.querySelector('#sort-hwleadposition').options[document.querySelector('#sort-hwleadposition').selectedIndex].innerText.toLowerCase() !== `(select)` ? document.querySelector('#sort-hwleadposition').options[document.querySelector('#sort-hwleadposition').selectedIndex].innerText.toLowerCase() : ``,
                PreferredDorm: document.querySelector('#sort-hwdorm').value.trim(),
                BirthYear: document.querySelector('#sort-birth').value.trim(),
                DeathYear: document.querySelector('#sort-death').value.trim(),
                ReturnYear: document.querySelector('#sort-return').value.trim(),
                CanonRelation: document.querySelector('#sort-canonRelation').value.trim(),
            }

            return character;
        }
    }).then((character) => {
        //actual submission
        postClaims(character);

        //discord embed set up
        let embedTitle = `${capitalize(character.Member, [`'`, '-'])} has requested sorting for ${capitalize(character.Character, [`'`, '-'])}`;
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
        let groupColor;
        switch(character.GroupID) {
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
        let settings = {
            message: message,
            embedTitle: embedTitle,
            color: groupColor,
        };
        return settings;
    }).then((settings) => {
        //send discord message
        sendDiscordMessage(`webhook url`, settings.message, settings.embedTitle, null, settings.color);

        //after submission
        formReset('#newsort');
        document.querySelector('#newsort button[type="submit"]').innerText = 'Submit';
        document.querySelector('#newsort button[type="submit"]').removeAttribute('disabled');
        document.querySelector('#newsort #warning').innerHTML = `Your character has been submitted!`;
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });
});