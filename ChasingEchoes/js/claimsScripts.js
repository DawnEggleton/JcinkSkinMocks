//sorting form
let fields = [document.querySelector('#sort-employed'), document.querySelector('#sort-group')];
let classes = ['.is-employed', '.is-competitive'];
let jobFields = [document.querySelector('#sort-jobnum')];
let jobTypes = ['sort'];
loadHides(fields, classes);
loadJobFields(jobFields, jobTypes);
document.querySelector('#sort-employed').addEventListener('change', () => {
    loadHides(fields, classes);
    jobFields.forEach(field => {
        field.value = 0;
    });
    loadJobFields(jobFields, jobTypes);
});
document.querySelector('#sort-group').addEventListener('change', () => {
    loadHides(fields, classes);
});
document.querySelector('#sort-jobnum').addEventListener('change', e => {
    loadJobFields(jobFields, jobTypes);
});
document.querySelector('#form-sort').addEventListener('submit', e => {
    e.preventDefault();
    const url = `https://opensheet.elk.sh/1x6ZjvfoBDksT1H09aLM40hWgaTWbvSDfWVumHqnOHL8/HumanClaims`;
    const reserves = `https://opensheet.elk.sh/1x6ZjvfoBDksT1H09aLM40hWgaTWbvSDfWVumHqnOHL8/Reserves`;
    fetch(url)
    .then((response) => response.json())
    .then(data => {
        idCheck = data.filter(item => item.AccountID === document.querySelector('#sort-accountid').value);
        nameCheck = data.filter(item => item.Character.toLowerCase().trim() === document.querySelector('#sort-character').value.toLowerCase().trim());

        if(idCheck.length === 1) {

            document.querySelector('.form--sort-warning').innerHTML = 'This character already exists in the claims! Please <a href="/">update your claims</a> instead.';

        } else if (nameCheck.length === 1) {

            document.querySelector('.form--sort-warning').innerHTML = 'This name already exists on site. Please double check that it matches your account name exactly to prevent any confusion in the claims.';

        } else if (idCheck.length === 0 && nameCheck.length === 0) {
    let groupID = document.querySelector('#sort-group').options[document.querySelector('#sort-group').selectedIndex].value;
    let handling = parseInt(document.querySelector('#sort-handling').value.trim());
    let training = parseInt(document.querySelector('#sort-training').value.trim());
    let equitation = parseInt(document.querySelector('#sort-equitation').value.trim());
    let jumping = parseInt(document.querySelector('#sort-jumping').value.trim());
    let western = parseInt(document.querySelector('#sort-western').value.trim());
    let other = parseInt(document.querySelector('#sort-other').value.trim());
    let total = handling + training + equitation + jumping + western + other;
    let points;
    if (groupID === '9') { points = 40; }
    else if (groupID === '10') {points = 25; }
    else if (groupID === '11') {points = 15; }
    else if (groupID === '12') {points = 10; }
    else {points = 0; total = 0; }
    if ( total === points) {
                fetch(reserves)
                .then((response) => response.json())
                .then(data => {
                    nameCheck = data.filter(item => item.Face === document.querySelector('#sort-face').value.toLowerCase().trim());

            let current = new Date();
            let faceCheck = nameCheck.filter(item => {
                let time = new Date(item.Timestamp);
                let difference = Math.floor(((current - time) / (1000*60*60*24)));
                return difference < 8;
            });
            console.log(faceCheck);
            console.log(nameCheck);
                    if(faceCheck.length > 0 && faceCheck[0].Member === document.querySelector('#sort-member').value.toLowerCase().trim() && faceCheck[0].Face === document.querySelector('#sort-face').value.toLowerCase().trim()) {
                        console.log('send message to staff discord logs');
                        postClaims();
                        $('#form-sort button[type="submit"]').text('Submitting...');
                    } else if (faceCheck.length > 0 && faceCheck[0].Member !== document.querySelector('#sort-member').value.toLowerCase().trim() && faceCheck[0].Face === document.querySelector('#sort-face').value.toLowerCase().trim()) {
                        document.querySelector('.form--sort-warning').innerHTML = 'This face is already reserved by a different member. Sorry!';
                    } else {
                        postClaims();
                        $('#form-sort button[type="submit"]').text('Submitting...');
                    }
                });
    } else {
        let difference = total - points;
        if (difference < 0) {
                    document.querySelector('.form--sort-warning').innerHTML = `Your skill points do not total up to the correct amount. Please add ${difference * -1} points.`;
        } else {
                    document.querySelector('.form--sort-warning').innerHTML = `Your skill points do not total up to the correct amount. Please remove ${difference} points.`;
        }
    }

        } else {

            document.querySelector('.form--sort-warning').innerHTML = 'Whoops! Somehow your character is already on the sheet - more than once! Please contact a member of staff to fix the sheet.';

        }
    });
});

//update claims
loadUpdateForm();
document.querySelectorAll('#form-update .form--choices input[type="checkbox"]').forEach(option => { 
    option.addEventListener('change', e => {
        loadUpdateForm();
    });
});
document.querySelector('#form-update').addEventListener('submit', e => {
    e.preventDefault();
    const url = `https://opensheet.elk.sh/1x6ZjvfoBDksT1H09aLM40hWgaTWbvSDfWVumHqnOHL8/HumanClaims`;
    const reserves = `https://opensheet.elk.sh/1x6ZjvfoBDksT1H09aLM40hWgaTWbvSDfWVumHqnOHL8/Reserves`;
    fetch(url)
    .then((response) => response.json())
    .then(data => {

        idCheck = data.filter(item => item.AccountID === document.querySelector('#update-accountid').value);
        faceCheck = [];
        if(document.querySelector('#update-face').value) {
            faceCheck = data.filter(item => item.Face === document.querySelector('#update-face').value);
        }

        if(idCheck.length === 1 && faceCheck.length === 0) {

            let character = data.filter(item => item.AccountID === document.querySelector('#update-accountid').value);
    let groupID = document.querySelector('#update-group').options[document.querySelector('#update-group').selectedIndex].value;
    let handling = parseInt(document.querySelector('#update-handling').value.trim());
    let training = parseInt(document.querySelector('#update-training').value.trim());
    let equitation = parseInt(document.querySelector('#update-equitation').value.trim());
    let jumping = parseInt(document.querySelector('#update-jumping').value.trim());
    let western = parseInt(document.querySelector('#update-western').value.trim());
    let other = parseInt(document.querySelector('#update-other').value.trim());
    let total = handling + training + equitation + jumping + western + other;
    let points;
    if (groupID === '9') { points = 40; }
    else if (groupID === '10') {points = 25; }
    else if (groupID === '11') {points = 15; }
    else if (groupID === '12') {points = 10; }
    else {points = 0; total = 0; }

    if ( total === points) {

                fetch(reserves)
                .then((response) => response.json())
                .then(data => {

                    reserveCheck = data.filter(item => item.Face === document.querySelector('#update-face').value.toLowerCase().trim());

            let current = new Date();
            let nameCheck = reserveCheck.filter(item => {
                let time = new Date(item.Timestamp);
                let difference = Math.floor(((current - time) / (1000*60*60*24)));
                return difference < 8;
            });

                    if(nameCheck.length > 0 && nameCheck[0].Member === document.querySelector('#update-member').value.toLowerCase().trim() && nameCheck[0].Face === document.querySelector('#update-face').value.toLowerCase().trim()) {

                        console.log('send message to staff discord logs');
                        updateClaims(character);
                        $('#form-update button[type="submit"]').text('Submitting...');

                    } else if (nameCheck.length > 0 && nameCheck[0].Member !== document.querySelector('#update-member').value.toLowerCase().trim() && nameCheck[0].Face === document.querySelector('#update-face').value.toLowerCase().trim()) {

                        document.querySelector('.form--update-warning').innerHTML = 'This face is already reserved by a different member. Sorry!';

                    } else {

                        updateClaims(character);
                        $('#form-update button[type="submit"]').text('Submitting...');

                    }
                });

    } else {
        let difference = total - points;
        if (difference < 0) {
                    document.querySelector('.form--update-warning').innerHTML = `Your skill points do not total up to the correct amount. Please add ${difference * -1} points.`;
        } else {
                    document.querySelector('.form--update-warning').innerHTML = `Your skill points do not total up to the correct amount. Please remove ${difference} points.`;
        }
    }
        } else if (faceCheck.length !== 0) {

            document.querySelector('.form--update-warning').innerHTML = `This face is already in use, sorry!`;

        } else if (idCheck.length === 0) {

            document.querySelector('.form--update-warning').innerHTML = `This character doesn't exist in our records. Make sure to submit them for sorting first!`;

        } else {

            document.querySelector('.form--update-warning').innerHTML = 'Whoops! Somehow your character is already on the sheet - more than once! Please contact a member of staff to fix the sheet.';

        }
    });
});

//horse registration form
let discFields = [document.querySelector('#horse-discnum')];
let discTypes = ['horse'];
loadDisciplineFields(discFields, discTypes);
document.querySelector('#horse-discnum').addEventListener('change', e => {
    loadDisciplineFields(discFields, discTypes);
});
document.querySelector('#form-horse').addEventListener('submit', e => {
    e.preventDefault();
    const url = `https://opensheet.elk.sh/1x6ZjvfoBDksT1H09aLM40hWgaTWbvSDfWVumHqnOHL8/HorseClaims`;
    fetch(url)
    .then((response) => response.json())
    .then(data => {
        nameCheck = data.filter(item => item.ShowName.toLowerCase().trim() === document.querySelector('#horse-showname').value.toLowerCase().trim());
        if(nameCheck.length === 1) {
            document.querySelector('.form--horse-warning').innerHTML = 'This horse already exists in the claims! Please <a href="/">update your claims</a> instead.';
        } else if (nameCheck.length === 0) {
            postHorse();
            $('#form-horse button[type="submit"]').text('Submitting...');
        } else {
            document.querySelector('.form--horse-warning').innerHTML = 'Whoops! Somehow this horse is already on the sheet - more than once! Please contact a member of staff to fix the sheet.';
        }
    });
});

//update horses
loadUpdateForm('#form-horseedit');
document.querySelectorAll('#form-horseedit .form--choices input[type="checkbox"]').forEach(option => { 
    option.addEventListener('change', e => {
        loadUpdateForm('#form-horseedit');
    });
});
document.querySelector('#form-horseedit').addEventListener('submit', e => {
    e.preventDefault();
    const url = `https://opensheet.elk.sh/1x6ZjvfoBDksT1H09aLM40hWgaTWbvSDfWVumHqnOHL8/HorseClaims`;
    fetch(url)
    .then((response) => response.json())
    .then(data => {
        nameCheck = data.filter(item => item.ShowName === document.querySelector('#horseedit-showname').value.toLowerCase().trim());
        if(nameCheck.length === 1) {
            let horse = data.filter(item => item.ShowName === document.querySelector('#horseedit-showname').value.toLowerCase().trim());
            updateHorse(horse);
            $('#form-horseedit button[type="submit"]').text('Submitting...');
        } else if (idCheck.length === 0) {
            document.querySelector('.form--horseedit-warning').innerHTML = `This character doesn't exist in our records. Make sure to submit them for sorting first!`;
        } else {
            document.querySelector('.form--horseedit-warning').innerHTML = 'Whoops! Somehow your character is already on the sheet - more than once! Please contact a member of staff to fix the sheet.';
        }
    });
});

//make reservation
document.querySelector('#reserve').addEventListener('submit', e => {
    e.preventDefault();
    const url = `https://opensheet.elk.sh/1x6ZjvfoBDksT1H09aLM40hWgaTWbvSDfWVumHqnOHL8/Reserves`;
    fetch(url)
    .then((response) => response.json())
    .then(data => {
        nameCheck = data.filter(item => item.Face === document.querySelector('#reserve-face').value.toLowerCase().trim());
        if(nameCheck.length === 1) {
            let current = new Date();
            let time = new Date(nameCheck[0].Timestamp);
            let difference = Math.floor(((current - time) / (1000*60*60*24)));
            if(difference < 8) {
                document.querySelector('.form--reserve-warning').innerHTML = 'This face is already reserved. Sorry!';
            } else if (nameCheck[0].Member === document.querySelector('#reserve-member').value.toLowerCase().trim()) {
                document.querySelector('.form--reserve-warning').innerHTML = `You have already made a reserve on this face previously. You're still welcome to make your character using this face, but the face will be first-come-first-serve and, if reserved or used by another member before you are done your profile, you will have to find another face upon sorting.`;
            } else {
                postReserve();
                $('#reserve button[type="submit"]').text('Submitting...');
            }
        } else if (nameCheck.length === 0) {
            postReserve();
            $('#reserve button[type="submit"]').text('Submitting...');
        } else {
            document.querySelector('.form--reserve-warning').innerHTML = 'Whoops! Somehow your character is already on the sheet - more than once! Please contact a member of staff to fix the sheet.';
        }
    });
});

//breed foal
document.querySelector('#form-foal').addEventListener('submit', e => {
    e.preventDefault();
    const url = `https://opensheet.elk.sh/1x6ZjvfoBDksT1H09aLM40hWgaTWbvSDfWVumHqnOHL8/HorseClaims`;
    fetch(url)
    .then((response) => response.json())
    .then(data => {
        nameCheck = data.filter(item => item.ShowName.toLowerCase().trim() === document.querySelector('#foal-showname').value.toLowerCase().trim());
        if(nameCheck.length === 1) {
            document.querySelector('.form--foal-warning').innerHTML = 'This horse already exists in the claims! Please <a href="#edithorse">update your claims</a> instead.';
        } else if (nameCheck.length === 0) {
            postFoal();
            $('#form-foal button[type="submit"]').text('Submitting...');
        } else {
            document.querySelector('.form--foal-warning').innerHTML = 'Whoops! Somehow this horse is already on the sheet - more than once! Please contact a member of staff to fix the sheet.';
        }
    });
});