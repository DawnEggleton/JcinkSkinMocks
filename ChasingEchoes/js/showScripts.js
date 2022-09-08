/********************************
    Enter Show
********************************/
//set base line
let totalCost = 0;
document.querySelector('#enter-cost').value = totalCost;
let entries = [];
loadShowList();
loadHorseList(document.querySelector('#enter-accountid').value);
loadPostFields(['#enter-commnum', '#enter-threadnum'], ['comms', 'threads']);

//run change scripts
document.querySelector('#enter-accountid').addEventListener('change', () => {
    loadHorseList(document.querySelector('#enter-accountid').value);
});
document.querySelector('#enter-horse').addEventListener('change', () => {
    let field = document.querySelector('#enter-horse');
    loadDisciplines(field.options[field.selectedIndex].innerText.toLowerCase());
});
document.querySelector('#enter-show').addEventListener('change', () => {
    let field = document.querySelector('#enter-horse');
    loadDisciplines(field.options[field.selectedIndex].innerText.toLowerCase());
});
document.querySelector('#enter-commnum').addEventListener('change', () => {
    loadPostFields(['#enter-commnum'], ['comms']);
});
document.querySelector('#enter-threadnum').addEventListener('change', () => {
    loadPostFields(['#enter-threadnum'], ['threads']);
});

//submit to sheet
document.querySelector('#form-enter').addEventListener('submit', e => {
    e.preventDefault();
    const url = `https://opensheet.elk.sh/1yV-kgpnrWzMF1f1GVXp9P4Fw1CorziU-hNHAvRSlfvM/Entries`;
    fetch(url)
    .then((response) => response.json())
    .then(data => {
        //check if horse-rider combo is already entered in the same show-discipline combo. horses cannot be entered in both green and at-level, so level check isn't necessary.
        let horse = document.querySelector('#enter-horse');
        let rider = document.querySelector('#enter-character');
        let show = document.querySelector('#enter-show');
        let disciplines = entries.map(entry => entry.Discipline);
        let horseCheck = data.filter(item => item.Horse === horse.options[horse.selectedIndex].innerText.toLowerCase());
        let riderCheck = horseCheck.filter(item => item.Rider === rider.value.toLowerCase().trim());
        let showCheck = riderCheck.filter(item => item.Show === show.options[show.selectedIndex].dataset.showName);
        let disciplineCheck = false;
        disciplines.forEach(discipline => {
            if(showCheck.filter(item => item.Discipline === discipline).length > 0) {
                disciplineCheck = true;
            }
        });

        //print warning if entry already exists
        if(disciplineCheck) {
            document.querySelector('.form--enter-warning').innerHTML = 'This horse/rider combination is already entered in this discipline for this show.';
        } else {
            //otherwise, continue with entry
            $('#form-enter button[type="submit"]').text('Submitting...');
            postEntry(data);
        }
    });
});

/********************************
    Run Show
********************************/
//set base line
loadRunList();

document.querySelector('#form-run').addEventListener('submit', e => {
    e.preventDefault();
    if(e.target.querySelector('button').innerText.toLowerCase().trim() === 'run') {
        fetch(`https://opensheet.elk.sh/1yV-kgpnrWzMF1f1GVXp9P4Fw1CorziU-hNHAvRSlfvM/CurrentResults`)
        .then((response) => response.json())
        .then(data => {
            let show = document.querySelector('#run-show').options[document.querySelector('#run-show').selectedIndex].innerText.toLowerCase().trim();
            let alreadyDone = data.filter(item => item.Show === show);
            if(alreadyDone.length > 0) {
                document.querySelector('.form--run-warning').innerHTML = 'This show has already been run! Please remove the entries from this show to update the runnable shows listing.';
            } else {
                runShow();
            }
        });
    } else if(e.target.querySelector('button').innerText.toLowerCase().trim() === 'update year-end results') {
        updateYearEnd();
    }
});