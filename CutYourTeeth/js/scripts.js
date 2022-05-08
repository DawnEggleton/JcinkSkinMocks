/***********************************
	Global, Load ALWAYS
***********************************/
//Variables
//User CP Edit Profile Alterations
const toggleFields = [document.querySelector('#field_39_input'), document.querySelector('#field_55_input')];

const charOnly = ['#field_42', '#field_10', '#field_11', '#field_12', '#field_13', '#field_14', '#field_22', '#field_23', '#field_15', '#field_43', '#field_20', '#field_21', '#field_44', '#field_37', '#field_38', '#field_16', '#field_18', '#field_17', '#field_19', '#field_24', '#field_25', '#field_45', '#field_27', '#field_28', '#field_29', '#field_26', '#field_31', '#field_30', '#field_32', '#field_33', '#field_34', '#field_48', '#field_49', '#field_50', '#field_51', '#field_55', '#field_72', '#field_46', '#field_53'];
const memImg = ['#field_35', '#field_52', '#field_47', '#field_54'];
const basicImg = ['#field_46', '#field_53'];
const sideGrid = ['#field_56', '#field_57', '#field_58', '#field_59'];
const masonImg = ['#field_60', '#field_61', '#field_62', '#field_63'];
const lgMasonImg = ['#field_64', '#field_65', '#field_66', '#field_67', '#field_68', '#field_69', '#field_70', '#field_71'];


const allHeaders = [
    {'title': 'Player', 'insertBefore': '#field_1'},
    {'title': 'Images', 'insertBefore': '#field_55'},
];
const charHeaders = [
    {'title': 'Introduction', 'insertBefore': '#field_42'},
    {'title': 'Context', 'insertBefore': '#field_51'},
    {'title': 'Synopsis', 'insertBefore': '#field_24'},
    {'title': 'Relationships', 'insertBefore': '#field_27'},
    {'title': 'Links', 'insertBefore': '#field_31'},
];

const sliders = [
    $('#field_16_input'),
    $('#field_17_input'),
    $('#field_18_input'),
    $('#field_19_input')
];
let vals = [
    sliders[0].val(),
    sliders[1].val(),
    sliders[2].val(),
    sliders[3].val()
];

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
if($('body#idx').length > 0 || $('body#SC').length > 0) {
    document.querySelector('#recent-topics-clip').append(document.querySelector('#recent-topics'));
    document.querySelectorAll('.forum-links').forEach(linkList => {
	  let html = linkList.innerHTML;
	  linkList.nextElementSibling.innerHTML = html;
	  linkList.remove();
    });
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
    document.querySelectorAll('.forum-links').forEach(linkList => {
	  let html = linkList.innerHTML;
	  linkList.nextElementSibling.innerHTML = html;
	  linkList.remove();
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


//Posting only
if($('body#Post').length > 0) {
    document.querySelector('#topic-title input').setAttribute('placeholder', 'Topic Title');
    document.querySelector('#topic-desc input').setAttribute('placeholder', 'Topic Description');
    $('#post-options .pformright input').first().wrap('<label class="emoteWrap"></label>');
    $('.emoteWrap').append('<span><i class="fa-solid fa-check"></i></span> Enable Emojis');
    $('#post-options .pformright input').last().wrap('<label class="repWrap"></label>');
    $('.repWrap').append('<span><i class="fa-solid fa-check"></i></span> Enable Notifications');
    let save = $('.emoteWrap, .repWrap').detach();
    $('#post-options .pformright').empty().append(save);
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


//UCP Only
if($('body#UserCP').length > 0) {
    document.querySelector('#ucpmenu').innerHTML = `
    <button class="ucp-menu-toggle" onClick="openUserMenu(this)">
        <i class="fa-solid fa-ellipsis-vertical"></i>
    </button>
    <div class="ucp-menu scroll">
        <button class="ucp-menu-toggle" onClick="closeUserMenu(this)">
            <i class="fa-solid fa-times"></i>
        </button>
        <b>Account</b>
        <a href="user-edit.html">Edit Profile</a>
        <a href="user-avatar.html">Update Avatar</a>
        <a href="user-accounts.html">Sub-accounts</a>
        <a href="user-name.html">Edit Username</a>
        <a href="user-pass.html">Change Password</a>
        <a href="user-email.html">Update Email</a>
        <b>Tracking</b>
        <a href="user-alerts.html">Alerts</a>
        <a href="user-forums.html">Forums</a>
        <a href="user-topics.html">Topics</a>
        <b>Settings</b>
        <a href="user-boardset.html">Board</a>
        <a href="user-alertset.html">Alerts</a>
        <a href="user-emailset.html">Emails</a>
    </div>`;

    // If using menu replacement in live skin, remove the above and uncomment the below:
    /*
    document.querySelector('#ucpmenu').innerHTML = `<b>Account</b>
    <a href="?act=UserCP&CODE=01">Edit Profile</a>
    <a href="?act=UserCP&CODE=22">Update Avatar</a>
    <a href="?act=UserCP&CODE=54">Sub-accounts</a>
    <a href="?act=UserCP&CODE=52">Edit Username</a>
    <a href="?act=UserCP&CODE=28">Change Password</a>
    <a href="?act=UserCP&CODE=08">Update Email</a>
    <b>Tracking</b>
    <a href="?act=UserCP&CODE=alerts">Alerts</a>
    <a href="?act=UserCP&CODE=50">Forums</a>
    <a href="?act=UserCP&CODE=26">Topics</a>
    <b>Settings</b>
    <a href="?act=UserCP&CODE=04">Board</a>
    <a href="?act=UserCP&CODE=alerts_settings">Alerts</a>
    <a href="?act=UserCP&CODE=02">Emails</a>`;
    */



	//Edit Profile Edits
	if($('body.code-01').length > 0) {
	
		cpShift();
		splitProfile();
	
		toggleFields.forEach(toggle => {
			toggle.addEventListener('change', () => {
				cpShift();
				splitProfile();
			});
		});
		
		for (var i = 0; i < sliders.length; i++) {
			sliders[i].prop('type','range').attr({min:0,max:100,step:1}).after('<span class="fieldVal">unset</span>');
			sliders[i].next().attr('id',sliders[i].attr('id')).text(`${vals[i]}%`);
			if(vals[i] == '') {
				sliders[i].next().text('n/a');
			}
			
			$(sliders[i]).on('change', function(){
				this.setAttribute('value',this.value);
				vals[i] = this.value;
				this.nextSibling.innerHTML = `${vals[i]}%`;
			});
				
		}

        document.querySelectorAll('#ucpcontent .cp-sect input[type="text"]').forEach(input => {
            let label = input.getAttribute('id');
            if(document.querySelector('label[for="' + label + '"]')) {
                input.setAttribute('placeholder', document.querySelector('label[for="' + label + '"]').innerText);
            }
        });

        document.querySelectorAll('#ucpcontent .cp-sect textarea').forEach(input => {
            let label = input.getAttribute('id');
            if(document.querySelector('label[for="' + label + '"]')) {
                input.setAttribute('placeholder', document.querySelector('label[for="' + label + '"]').innerText);
            }
        });
	}
}


//ModCP Only
if($('body#modcp').length > 0) {
    document.querySelector('#modcp main > table:first-child > tbody > tr > td:first-child').innerHTML = `<b>Forums & Posts</b>
    <a href="mod-queue.html">Queue</a>
    <a href="mod-reported.html">Reported</a>
    <a href="mod-postlogs.html">Logs</a>
    <a href="mod-prune.html">Prune</a>
    <b>Users</b>
    <a href="mod-edit.html">Edit</a>
    <a href="mod-warn.html">Warn</a>
    <a href="mod-userlogs.html">Logs</a>
    <a href="mod-ip.html">IP Tools</a>
    <a href="mod-validate.html">Validaion</a>`;

    // If using menu replacement in live skin, remove the above and uncomment the below:
    /*
    document.querySelector('#modcp main > table:first-child > tbody > tr > td:first-child').innerHTML = `<b>Forums & Posts</b>
    <a href="?act=modcp&CODE=queue">Queue</a>
    <a href="?act=modcp&CODE=reported">Reported</a>
    <a href="?act=modcp&CODE=modlogs">Logs</a>
    <a href="?act=modcp&CODE=prune">Prune</a>
    <b>Users</b>
    <a href="?act=modcp&CODE=members">Edit</a>
    <a href="?act=modcp&CODE=warnpanel">Warn</a>
    <a href="?act=modcp&CODE=warnlogs">Logs</a>
    <a href="?act=modcp&CODE=ip">IP Tools</a>
    <a href="?act=modcp&CODE=validating">Validation</a>`
    */
}


//Login Only
if($('#Login').length > 0) {
    let textNodes = getAllTextNodes(document.querySelector('main'));
    textNodes.forEach(node => {
        const paragraph = document.createElement('p');
        node.after(paragraph);
        paragraph.appendChild(node);
    });
}


//Login Only
if($('#Reg').length > 0) {
    let textNodes = getAllTextNodes(document.querySelector('main > form'));
    textNodes.forEach(node => {
        const paragraph = document.createElement('p');
        node.after(paragraph);
        paragraph.appendChild(node);
    });
}