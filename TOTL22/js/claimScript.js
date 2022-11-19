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
        for(let i = 0; i < difference; i++) {
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