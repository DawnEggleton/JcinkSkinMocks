/***********************************
	Global, Load ALWAYS
***********************************/

//Toggles
/* Original Cookie Script by Essi - sourced.jcink.net */
if(localStorage.getItem("COLORMODE") == "1" || (localStorage.getItem("COLORMODE") === null && (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches))) {
    document.querySelector('body').classList.add('dark');
    document.querySelector('body').classList.remove('light');
} else {
    document.querySelector('body').classList.add('light');
    document.querySelector('body').classList.remove('dark');
}
if(localStorage.getItem("SIZEMODE") == "1") {
    document.querySelector('body').classList.add('lrgFont');
} else {
    document.querySelector('body').classList.remove('lrgFont');
}


//Adjust navstrip to remove nbsp
$('#navstrip').html($('#navstrip').html().replace(/(?:^(?:&nbsp;)+)|(?:(?:&nbsp;)+$)/g, ''));


//Set styles for user controls
let navHeight = document.querySelector('nav').clientHeight;
let fullHeight = window.innerHeight - navHeight;
document.querySelector('.controls.memOnly').style.top = `${navHeight}px`;
document.querySelector('.controls.memOnly').style.height = `${fullHeight}px`;
document.querySelector('.controls.guestOnly').style.top = `${navHeight}px`;
document.querySelector('.controls.guestOnly').style.height = `${fullHeight}px`;


//change nav styles
window.onscroll = function() {
    if (window.pageYOffset > 50) {
        document.querySelector('nav').classList.add('scrolled');
    } else {
        document.querySelector('nav').classList.remove('scrolled');
    }
};


//append recent topics
if($('body#idx').length > 0) {
    document.querySelector('#recent-topics-clip').append(document.querySelector('#recent-topics'));
}


//add anchor to guidebook
if($('.f-3').length > 0) {
    document.querySelector('.f-3').setAttribute('name', 'learn-more');
}


//window resize functions
window.addEventListener('resize', () => {
    if(document.querySelector('.controls.memOnly').classList.contains('active')) {
        setControlSizes('member');
    } else if(document.querySelector('.controls.guestOnly').classList.contains('active')) {
        setControlSizes('visitor');
    }

    if(window.innerWidth < 1024) {
        document.querySelector('.controls.memOnly').classList.remove('active');
        document.querySelector('.controls.guestOnly').classList.remove('active');
        document.querySelector('main').classList.remove('controls-open');
        document.querySelector('nav').classList.remove('controls-open');
        document.querySelector('header').classList.remove('controls-open');
    } else {
        document.querySelector('.ucp--menu-mobile').classList.remove('active');
    }
});


//Topic Lists Only
if($('body#SF').length > 0) {

    $('.topic--desc').each(function () {
        let string = $(this).text();
        let newString = string.replace('[', `<span class="threadDate">`).replace(']', `</span>`);
        $(this).html(newString);
    });

}


//Post view only
if($('body#ST').length > 0) {
    $('main > table:first-of-type').before($('main > .tableborder > .maintitle'));
    $('.topic-title-space').before($('.postlinksbar strong a:first-child'));

    $('.topic-desc').each(function () {
        let string = $(this).text();
        let newString = string.replace('[', `<span class="threadDate">`).replace(']', `</span>`);
        $(this).html(newString);
    });
}


//Webpage only
if($('body#Pages').length > 0) {
    document.querySelector('#sort').addEventListener('submit', e => {
        e.preventDefault();
        const url = `https://opensheet.elk.sh/1kaQnQ4tiHE1mJ9HM7F0qcelJpiRvfWOd5pM2avW4NRo/Claims`;
        fetch(url)
        .then((response) => response.json())
        .then(data => {
            instance = data.filter(item => item.AccountID === document.querySelector('#sort-id').value);
            if(instance.length === 1) {
                console.log('update form info');
                document.querySelector('#warning').innerHTML = 'This character already exists in the claims! Please <a href="/">update your claims</a> instead.';
            } else if (instance.length === 0) {
                postToGoogle('POST');
                $('button[type="submit"]').text('Submitting...');
            } else {
                console.log('Error! Multiple instances of id');
                document.querySelector('#warning').innerHTML = 'Whoops! Somehow your character is already on the sheet - more than once! Please contact a member of staff to update the sheet.';
            }
        });
    });
    document.querySelector('#reserve').addEventListener('submit', e => {
        e.preventDefault();
        const url = `https://opensheet.elk.sh/1VuKUhdeB_l_YRWS79Mim7sgIY_mXFZh2VmmRSdC1Na0/Reserves`;
        fetch(url)
        .then((response) => response.json())
        .then(data => {
            postToReserve('POST');
        });
    });
    document.querySelector('#update').addEventListener('submit', e => {
        e.preventDefault();
        postToUpdate('POST');
    });
    
    let inputs = document.querySelectorAll('input[name="update-type"]');
    let sections = document.querySelectorAll('.updateField');
    inputs.forEach(input => {
        input.addEventListener('change', () => {
            sections.forEach(section => section.classList.add('hide'));
            let selected = document.querySelectorAll('input[name="update-type"]:checked');
            selected.forEach(checked => {
                switch(checked.value) {
                    case 'face':
                        document.querySelectorAll('.ifFace').forEach(field => field.classList.remove('hide'));
                        break;
                    case 'location':
                        document.querySelectorAll('.ifMoved').forEach(field => field.classList.remove('hide'));
                        break;
                    case 'power':
                        document.querySelectorAll('.ifPower').forEach(field => field.classList.remove('hide'));
                        break;
                    case 'job':
                        document.querySelectorAll('.ifJobUpdate').forEach(field => field.classList.remove('hide'));
                        break;
                    case 'uni':
                        document.querySelectorAll('.ifUni').forEach(field => field.classList.remove('hide'));
                        break;
                    case 'canon':
                        document.querySelectorAll('.ifCanonAdd').forEach(field => field.classList.remove('hide'));
                        break;
                    default:
                        console.log(checked.value);
                        break;
                }
            })
        });
    });
}