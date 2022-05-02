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
    document.querySelector('#ucpmenu').innerHTML = `<b>Account</b>
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
    <a href="user-emailset.html">Emails</a>`;

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
}


//Store Only
if($('body#store').length > 0) {
    document.querySelector('#ucpmenu').innerHTML = `<b>Personal</b>
    <a href="store-inventory.html">Inventory</a>
    <a href="store-sendmoney.html">Send Money</a>
    <a href="store-senditem.html">Send Item</a>
    <b>Shop</b>
    <a href="store-category.html">Category Name</a>
    <b class="staffOnly">Staff</b>
    <a href="store-fine.html" class="staffOnly">Fine</a>
    <a href="store-editpoints.html" class="staffOnly">Edit Points</a>
    <a href="store-edititems.html" class="staffOnly">Edit Inventory</a>`;

    // If using menu replacement in live skin, remove the above and uncomment the below:
    /*
    document.querySelector('#ucpmenu').innerHTML = `<b>Personal</b>
    <a href="?act=store&CODE=inventory">Inventory</a>
    <a href="?act=store&code=donate_money">Send Money</a>
    <a href="?act=store&code=donate_item">Send Item</a>
    <b>Shop</b>
    <a href="?act=store&code=shop&category=5">Appreciation</a>
    <a href="?act=store&code=shop&category=2">Education</a>
    <a href="?act=store&code=shop&category=6" class="staffOnly">Events</a>
    <a href="?act=store&code=shop&category=1">Features & Occupations</a>
    <a href="?act=store&code=shop&category=7" class="staffOnly">Longevity</a>
    <a href="?act=store&code=shop&category=9" class="staffOnly">Posting</a>
    <a href="?act=store&code=shop&category=8" class="staffOnly">Productivity</a>
    <a href="?act=store&code=shop&category=3">Relationship Status</a>
    <a href="?act=store&code=shop&category=4">Traits & Other</a>
    <b class="staffOnly">Staff</b>
    <a href="?act=store&code=fine" class="staffOnly">Fine</a>
    <a href="?act=store&code=edit_points" class="staffOnly">Edit Points</a>
    <a href="?act=store&code=edit_inventory" class="staffOnly">Edit Inventory</a>`;
    */
}


//Store Only
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