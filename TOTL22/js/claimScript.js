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
setCheckShowHide(isAnimagus.checked, '.ifAnimagus', document.querySelector('#newsort'));
isAnimagus.addEventListener('change', () => {
    setCheckShowHide(isAnimagus.checked, '.ifAnimagus', document.querySelector('#newsort'));
});
let isAnimagusEdit = document.querySelector('#update-animagus');
setCheckShowHide(isAnimagusEdit.checked, '.ifAnimagus-Add', document.querySelector('#newedit'));
isAnimagusEdit.addEventListener('change', () => {
    setCheckShowHide(isAnimagusEdit.checked, '.ifAnimagus-Add', document.querySelector('#newedit'));
});

//Were Change Event
let isWere = document.querySelector('#sort-were');
setCheckShowHide(isWere.checked, '.ifWere', document.querySelector('#newsort'));
isWere.addEventListener('change', () => {
    setCheckShowHide(isWere.checked, '.ifWere', document.querySelector('#newsort'));
});
let isWereEdit = document.querySelector('#update-were');
setCheckShowHide(isWereEdit.checked, '.ifWere-Add', document.querySelector('#newedit'));
isWereEdit.addEventListener('change', () => {
    setCheckShowHide(isWereEdit.checked, '.ifWere-Add', document.querySelector('#newedit'));
});

//Species Change Event
let isVamp = document.querySelector('#sort-vamp');
let isVeela = document.querySelector('#sort-veela');
let isSpecies = (isVamp.checked || isVeela.checked);
setCheckShowHide(isSpecies, '.ifPercent', document.querySelector('#newsort'));
isVamp.addEventListener('change', () => {
    isSpecies = (isVamp.checked || isVeela.checked);
    setCheckShowHide(isSpecies, '.ifPercent', document.querySelector('#newsort'));
});
isVeela.addEventListener('change', () => {
    isSpecies = (isVamp.checked || isVeela.checked);
    setCheckShowHide(isSpecies, '.ifPercent', document.querySelector('#newsort'));
});
let isVampEdit = document.querySelector('#update-vamp');
let isVeelaEdit = document.querySelector('#update-veela');
let isSpeciesEdit = (isVampEdit.checked || isVeelaEdit.checked);
setCheckShowHide(isSpeciesEdit, '.ifPercent-Add', document.querySelector('#newedit'));
isVampEdit.addEventListener('change', () => {
    isSpeciesEdit = (isVampEdit.checked || isVeelaEdit.checked);
    setCheckShowHide(isSpeciesEdit, '.ifPercent-Add', document.querySelector('#newedit'));
});
isVeelaEdit.addEventListener('change', () => {
    isSpeciesEdit = (isVampEdit.checked || isVeelaEdit.checked);
    setCheckShowHide(isSpeciesEdit, '.ifPercent-Add', document.querySelector('#newedit'));
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
        jobClip.insertAdjacentHTML('beforeend', addJobFields(i, 'sort'));
    }
} else {
    jobClip.innerHTML = '';
}
let jobCountEdit = document.querySelector('#update-jobcount');
let jobClipEdit = document.querySelector('.form--jobs-clip.form--update');
if (jobCountEdit.value !== 0) {
    for(let i = 0; i < jobCountEdit.value; i++) {
        jobClipEdit.insertAdjacentHTML('beforeend', addJobFields(i, 'update'));
    }
} else {
    jobClipEdit.innerHTML = '';
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
jobCountEdit.addEventListener('change', e => {
    let currentCount = jobClipEdit.querySelectorAll('.form--job-section').length;
    let newCount = parseInt(e.currentTarget.value);
    if (newCount > currentCount) {
        for(let i = currentCount; i < newCount; i++) {
            jobClipEdit.insertAdjacentHTML('beforeend', addJobFields(i, 'update'));
        }
    } else if (currentCount > newCount) {
        let difference = currentCount - newCount;
        for(let i = 0; i < difference; i++) {
            jobClipEdit.querySelectorAll('.form--job-section')[currentCount - i - 1].remove();
            jobClipEdit.querySelectorAll('.form--job-sub-section')[currentCount - i - 1].remove();
            jobClipEdit.querySelectorAll('.form--job-line1')[currentCount - i - 1].remove();
            jobClipEdit.querySelectorAll('.form--job-line2')[currentCount - i - 1].remove();
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

//Edit Options Change Status
let options = document.querySelectorAll('#newedit input[name="updateChoices"]');
setUpdateOptions();
options.forEach(option => {
    option.addEventListener('change', () => {
        setUpdateOptions();
    });
});
document.querySelector('#update-hwyear').addEventListener('change', () => {
    setHogwartsYearUpdate(document.querySelector('#update-hwyear').options[document.querySelector('#update-hwyear').selectedIndex].value);
});

//Edit ID Change
document.querySelector('#update-id').addEventListener('change', () => {
    setJobChange(document.querySelector('.form--jobschange-clip.form--update'));
    setJobRemove(document.querySelector('.form--jobsremove-clip.form--update'));
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
                abSpString = setAbilitiesSpecies('sort');
            }

            //set up jobs
            let jobs = ``;
            if(document.querySelector('#sort-employed').options[document.querySelector('#sort-employed').selectedIndex].value === 'y') {
                jobs = setNewJobs('sort');
            }

            //set up hogwarts classes
            let hogwartsClasses = ``;
            let characterGroup = document.querySelector('#sort-group');
            let characterYear = document.querySelector('#sort-hwyear');
            hogwartsClasses = setHogwartsClasses(characterGroup, characterYear, 'sort');

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
        let message = discordSortMessage(character);
        let groupColor = discordEmbedColor(character.GroupID);
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


//Edits submit
document.querySelector('#newedit').addEventListener('submit', e => {
    e.preventDefault();
    //submit changes
    document.querySelector('#newedit button[type="submit"]').innerText = 'Submitting...';
    document.querySelector('#newedit button[type="submit"]').setAttribute('disabled', true);

    //check if already on sheet
    const url = `https://opensheet.elk.sh/146rEeh3eiyftnC-9NXF29rgSPRLAhuG2gss_nWp_xxw/NewClaims`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        let idExists = data.filter(item => item.AccountID === document.querySelector('#update-id').value).length > 0;
        
        if(idExists) {
            //set up
            let character = data.filter(item => item.AccountID === document.querySelector('#update-id').value)[0];
            let message = [];

            //if group change
            if(document.querySelector('#choice-group').checked) {
                let newGroup = document.querySelector('#update-group').options[document.querySelector('#update-group').selectedIndex];
                character.GroupName = newGroup.innerText.toLowerCase().trim();
                character.GroupID = newGroup.value;
                message.push('group');
            }

            //if face change
            if(document.querySelector('#choice-face').checked) {
                let newFace = document.querySelector('#update-face').value.toLowerCase().trim();
                character.Face = newFace;
                message.push('face');
            }

            //if uni change
            if(document.querySelector('#choice-newuni').checked) {
                character.School = document.querySelector('#new-uniname').value.toLowerCase().trim();
                character.Program = document.querySelector('#new-uniprogram').value.toLowerCase().trim();
                character.UniversityYear = document.querySelector('#new-uniyear').options[document.querySelector('#new-uniyear').selectedIndex].innerText.toLowerCase().trim();
                message.push('university');
            }

            //if uni remove
            if(document.querySelector('#choice-removeuni').checked) {
                character.School = ``;
                character.Program = ``;
                character.UniversityYear = ``;
                message.push('university');
            }

            //if ability/species add
            if(document.querySelector('#choice-ability').checked) {
                let newAbSp = setAbilitiesSpecies('update');
                if(character.AbilitiesSpecies === '') {
                    character.AbilitiesSpecies = newAbSp;
                } else {
                    character.AbilitiesSpecies += `, ${newAbSp}`;
                }
                message.push('abilities/species');
            }

            //if job(s) change
            if(document.querySelector('#choice-changejob').checked) {
                let prevJobs = character.Jobs.split('+').map(item => JSON.parse(item));
                let line1changes = document.querySelectorAll('.form--jobschange-clip .form--job-line1 input');
                let line2changes = document.querySelectorAll('.form--jobschange-clip .form--job-line2 input');
                prevJobs.forEach((prevJob, i) => {
                    let newLine1 = line1changes[i].value.toLowerCase().trim();
                    let newLine2 = line2changes[i].value.toLowerCase().trim();
                    if(newLine1 !== `` && prevJob.line1 !== newLine1) {
                        prevJob.line1 = newLine1;
                    }
                    if(newLine2 !== `` && prevJob.line2 !== newLine2) {
                        prevJob.line2 = newLine2;
                    }
                });
                let jobs = prevJobs.map(job => JSON.stringify(job)).join('+');
                character.Jobs = jobs;
                message.push('jobs');
            }

            //if job(s) remove
            if(document.querySelector('#choice-removejob').checked) {
                let prevJobs = character.Jobs.split('+').map(item => JSON.parse(item));
                let removeJobs = Array.prototype.slice.call(document.querySelectorAll('.form--jobsremove-clip input')).map(removeJob => removeJob.checked);
                let jobs = prevJobs.filter((prevJob, i) => !removeJobs[i]).map(job => JSON.stringify(job)).join('+');
                character.Jobs = jobs;
                message.push('jobs');
            }

            //if job(s) add
            if(document.querySelector('#choice-newjob').checked) {
                let newJobs = setNewJobs('update');
                if(character.Jobs === '') {
                    character.Jobs = newJobs;
                } else {
                    character.Jobs += `+${newJobs}`;
                }
                message.push('jobs');
            }

            //if classes/grades change
            if(document.querySelector('#choice-classes').checked) {
                let characterGroup = document.querySelector('#update-group');
                let characterYear = document.querySelector('#update-hwyear');
                character.HogwartsClasses = setHogwartsClasses(characterGroup, characterYear, 'update');
                character.HogwartsYear = characterYear.options[characterYear.selectedIndex].innerText.toLowerCase().trim();
                message.push('classes');
            }

            //if quidditch add/change
            if(document.querySelector('#choice-quidditch').checked) {
                character.QuidditchPosition = document.querySelector('#update-hwquidditchposition').value.toLowerCase().trim();
                message.push('student quidditch');
            }

            //if leadership add/change
            if(document.querySelector('#choice-leadership').checked) {
                character.LeadershipPosition = document.querySelector('#update-hwleadposition').options[document.querySelector('#update-hwleadposition').selectedIndex].innerText.toLowerCase().trim();
                message.push('student leadership');
            }

            //if graduate hogwarts
            if(document.querySelector('#choice-graduate').checked) {
                character.HogwartsYear = ``;
                character.HogwartsClasses = ``;
                character.QuidditchPosition = ``;
                character.LeadershipPosition = ``;
                character.Dorm = ``;
                message.push('graduated hogwarts');
            }

            //set up character
            let newCharacter = {
                "SubmissionType": "claims-edit",
                Timestamp: character.Timestamp,
                Member: character.Member,
                Character: character.Character,
                AccountID: character.AccountID,
                GroupName: character.GroupName,
                GroupID: character.GroupID,
                Face: character.Face,
                AbilitiesSpecies: character.AbilitiesSpecies,
                Jobs: character.Jobs,
                School: character.School,
                Program: character.Program,
                UniversityYear: character.UniversityYear,
                HogwartsYear: character.HogwartsYear,
                HogwartsClasses: character.HogwartsClasses,
                QuidditchPosition: character.QuidditchPosition,
                LeadershipPosition: character.LeadershipPosition,
                Dorm: character.Dorm,
                Message: message,
            }
            return newCharacter;
        } else {
            document.querySelector('#newedit #warning').innerHTML = `This character doesn't exist yet! Please use the claims submission form instead.`;
        }
    }).then((character) => {
        //actual submission
        postClaims(character);

        //discord embed set up
        if(character) {
            let embedTitle = `${capitalize(character.Member, [`'`, '-'])} has updated the claims for ${capitalize(character.Character, [`'`, '-'])}`;
            let message = `**Updated:** ${character.Message.join(', ')}`;
            let groupColor = character.GroupID;
            let settings = {
                message: message,
                embedTitle: embedTitle,
                color: groupColor,
            };
            console.log(settings);
            return settings;
        }
    }).then((settings) => {
        //send discord message
        sendDiscordMessage(`webhook url`, settings.message, settings.embedTitle, null, settings.color);

        //after submission
        formReset('#newedit');
        document.querySelector('#newedit button[type="submit"]').innerText = 'Submit';
        document.querySelector('#newedit button[type="submit"]').removeAttribute('disabled');
        document.querySelector('#newedit #warning').innerHTML = `Edits have been completed!`;
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });
});