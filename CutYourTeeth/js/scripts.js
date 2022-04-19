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


//Main Profile only
if($('body#Profile').length > 0) {
    //member account only scripts
    if('<!-- |g_id| -->' == '4' || '<!-- |g_id| -->' == '6' || '<!-- |field_39| -->' == 'member') {
        document.querySelector('.prof.charOnly').remove();

        // SUBACCOUNTS PROFILE DISPLAY SCRIPT (ABC ORDER) by tonya aka wildflower
        $('select[name=showuser] option').each(function () {
            if ($(this).val() != `-------------------`) {
                let id = $(this).val();
                let name = $(this).text().replace(`»`, ``).trim();
                let imageDiv = `<div class="prof--sub-image" style="background:url(https://files.jcink.net/uploads2/playedgod//av-${id}.png), url(https://files.jcink.net/uploads2/playedgod//av-${id}.gif), url(https://files.jcink.net/uploads2/playedgod//av-${id}.jpg), url(https://files.jcink.net/uploads2/playedgod//av-${id}.jpeg), url(https://files.jcink.net/uploads2/playedgod/2021/Screenshot_2021_08_14_at_17_43_09_Play_God.png); background-size: cover; background-position: center;"></div>`;

                $('#prof--subs').append(`<div class="prof--sub">${imageDiv}<b>${name}</b><a href="?showuser=${id}">view profile</a></div>`);
            }
        });

        function Alpha(a, b) {
            return $(`b`, a).text() > $(`b`, b).text() ? 1 : -1;
        }
        
        $('#prof--subs div.prof--sub').sort(Alpha).appendTo('#prof--subs');
    } else {
        document.querySelector('.prof.memOnly').remove();

        contentTabs('.charOnly .prof--tab', '.charOnly .prof--label', 'v');

        //Print href to links
        if(`<!-- |field_31| -->` != `` && `<!-- |field_31| -->` != `<i>No Information</i>`) {
        document.querySelector('.link-dev').setAttribute('href', `<!-- |field_31| -->`);
        }
        if(`<!-- |field_30| -->` != `` && `<!-- |field_30| -->` != `<i>No Information</i>`) {
        document.querySelector('.link-track').setAttribute('href', `<!-- |field_30| -->`);
        }
        if(`<!-- |field_32| -->` != `` && `<!-- |field_32| -->` != `<i>No Information</i>`) {
        document.querySelector('.link-want').setAttribute('href', `<!-- |field_32| -->`);
        }
        if(`<!-- |field_34| -->` != `` && `<!-- |field_34| -->` != `<i>No Information</i>`) {
        document.querySelector('.link-custom').setAttribute('href', `<!-- |field_34| -->`);
        }

        //print correct image layout
        if('<!-- |field_55| -->' == 'Unset' || '<!-- |field_55| -->' == 'Single' || '<!-- |field_55| -->' == '') {
        document.querySelector('.prof--image').innerHTML = `
            <img src="<!-- |field_46| -->" style="object-position: <!-- |field_53| -->;" />
        `;
        } else if ('<!-- |field_55| -->' == 'Left Grid') {
        document.querySelector('.prof--image').classList.add('lGrid')
        document.querySelector('.prof--image').innerHTML = `
            <img src="<!-- |field_56| -->" class="mainImg" />
            <img src="<!-- |field_57| -->" class="wideImg" />
            <img src="<!-- |field_58| -->" />
            <img src="<!-- |field_59| -->" />
        `;
        } else if ('<!-- |field_55| -->' == 'Right Grid') {
        document.querySelector('.prof--image').classList.add('rGrid')
        document.querySelector('.prof--image').innerHTML = `
            <img src="<!-- |field_56| -->" class="mainImg" />
            <img src="<!-- |field_57| -->" class="wideImg" />
            <img src="<!-- |field_58| -->" />
            <img src="<!-- |field_59| -->" />
        `;
        } else if ('<!-- |field_55| -->' == 'Masonry') {
        document.querySelector('.prof--image').classList.add('mason')
        document.querySelector('.prof--image').innerHTML = `
            <img src="<!-- |field_60| -->" />
            <img src="<!-- |field_61| -->" />
            <img src="<!-- |field_62| -->" />
            <img src="<!-- |field_63| -->" />
        `;
        } else if ('<!-- |field_55| -->' == 'Large Masonry') {
        document.querySelector('.prof--image').classList.add('lgMason')
        document.querySelector('.prof--image').innerHTML = `
            <img src="<!-- |field_64| -->" />
            <img src="<!-- |field_65| -->" />
            <img src="<!-- |field_66| -->" />
            <img src="<!-- |field_67| -->" />
            <img src="<!-- |field_68| -->" />
            <img src="<!-- |field_69| -->" />
            <img src="<!-- |field_70| -->" />
            <img src="<!-- |field_71| -->" />
        `;
        }

        //print group label
        if('<!-- |g_id| -->' == '9' ||
        '<!-- |g_id| -->' == '10' ||
        '<!-- |g_id| -->' == '11' ||
        '<!-- |g_id| -->' == '12' ||
        '<!-- |g_id| -->' == '13' ) {
            document.querySelector('#groupClip').innerHTML = 'city district';
        } else {
            document.querySelector('#groupClip').innerHTML = 'group';
        }

        //print abilities/limits/skills/weaknesses
        if('<!-- |field_51| -->' == 'yes' ) {
        document.querySelector('#skillClip').innerHTML = 'abilities';
        document.querySelector('#weakClip').innerHTML = 'limitations';
        } else {
        document.querySelector('#skillClip').innerHTML = 'skills';
        document.querySelector('#weakClip').innerHTML = 'weaknesses';
        }

        //print freeform overflow
        if(`<!-- |field_45| -->` != `` && `<!-- |field_45| -->` != `<i>No Information</i>`) {
        document.querySelector('#freeClip').innerHTML = `<!-- |field_45| -->`;
        }

        //calculate and append age
        bYear = `<!-- |field_49| -->`;
        bDay = `<!-- |field_50| -->`;
        switch (`<!-- |field_48| -->`) {
        case 'January':
            bMonth = 1;
            break;
        case 'February':
            bMonth = 2;
            break;
        case 'March':
            bMonth = 3;
            break;
        case 'April':
            bMonth = 4;
            break;
        case 'May':
            bMonth = 5;
            break;
        case 'June':
            bMonth = 6;
            break;
        case 'July':
            bMonth = 7;
            break;
        case 'August':
            bMonth = 8;
            break;
        case 'September':
            bMonth = 9;
            break;
        case 'October':
            bMonth = 10;
            break;
        case 'November':
            bMonth = 11;
            break;
        case 'December':
            bMonth = 12;
            break;
        default:
            bMonth = -1;
            break;
        }
        if(year != '') {
        if(month < bMonth || (month == bMonth && day < bDay)) {
            age = `${year - 1 - bYear} years old`;
        } else {
            age = `${year - bYear} years old`;
        }
        } else {
        age = 'Immortal'
        }
        $('#ageClip').html(age);
    }


    // print ratings
    if('<!-- |field_5| -->' == 'none') {
        $('.rate-l').html('0');
    } else if('<!-- |field_5| -->' == 'mild') {
        $('.rate-l').html('1');
    } else if('<!-- |field_5| -->' == 'with limits') {
        $('.rate-l').html('2');
    }else if('<!-- |field_5| -->' == 'all') {
        $('.rate-l').html('3');
    }

    if('<!-- |field_6| -->' == 'none') {
        $('.rate-s').html('0');
    } else if('<!-- |field_6| -->' == 'mild') {
        $('.rate-s').html('1');
    } else if('<!-- |field_6| -->' == 'with limits') {
        $('.rate-s').html('2');
    }else if('<!-- |field_6| -->' == 'all') {
        $('.rate-s').html('3');
    }

    if('<!-- |field_7| -->' == 'none') {
        $('.rate-v').html('0');
    } else if('<!-- |field_7| -->' == 'mild') {
        $('.rate-v').html('1');
    } else if('<!-- |field_7| -->' == 'with limits') {
        $('.rate-v').html('2');
    }else if('<!-- |field_7| -->' == 'all') {
        $('.rate-v').html('3');
    }
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


    $('.web-slideTab').on('click', function() {
        let num = $(this).index();
        let percent = num * 100;
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $(this).parent().siblings('.web-slideBoxes').children().css({'left': (-1 * percent) + '%'});
    });


    $('.map-tab').on('click', function() {
        let selector = $(this).attr('id');
        $('.map-tab').removeClass('active');
        $(this).addClass('active');
        $('.web-maps').toggleClass('landmarks');
    });
    
    $descriptionReg = $(".region-desc");
    $descriptionLand = $(".landmark-desc");
    
    $('.landmark').hover(function(e) {
        let loc = $(this).attr('data-hover');
        let region = $(this).attr('data-region');
        $descriptionLand.attr('class', 'landmark-desc active ' + region);
        $descriptionLand.html(loc);
    }, function() {
        $descriptionLand.removeClass('active');
    });
    
    $('.region').hover(function(e) {
        let loc = $(this).attr('data-hover');
        let region = $(this).attr('data-region');
        $descriptionReg.attr('class', 'region-desc active ' + region);
        $descriptionReg.html(loc);
    }, function() {
        $descriptionReg.removeClass('active');
    });
}