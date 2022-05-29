$(window).on('load', function() {
    if($('body#Pages').length === 0) {
        if(document.querySelector('#loading')) {
            document.querySelector('#loading').remove();
        }
    }
});

//Adjust navstrip to remove nbsp
$('#navstrip').html($('#navstrip').html().replace(/(?:^(?:&nbsp;)+)|(?:(?:&nbsp;)+$)/g, ''));

//set anchorlink
let breadcrumbHeight;
setTimeout(() => {
    breadcrumbHeight = document.querySelector('.breadcrumb-nav').clientHeight;
    document.querySelectorAll('.anchorLink').forEach(link => {
        link.style.marginTop = `${(breadcrumbHeight + 40) * -1}px`;
    });
}, 400);
window.addEventListener('resize', () => {
    breadcrumbHeight = document.querySelector('.breadcrumb-nav').clientHeight;
    document.querySelectorAll('.anchorLink').forEach(link => {
        link.style.marginTop = `${(breadcrumbHeight + 40) * -1}px`;
    });
});

//Toggles & Cookies
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
    document.querySelector('body').classList.remove('smlFont');
} else {
    document.querySelector('body').classList.remove('lrgFont');
    document.querySelector('body').classList.add('smlFont');
}


//change deco borders
let headerHeight = document.querySelector('header').clientHeight || document.querySelector('main .header').clientHeight;
window.onscroll = function() {
    if (window.pageYOffset > (headerHeight - 140)) {
        document.querySelector('.breadcrumb-nav').classList.add('scrolled');
        if(document.querySelector('.webpage--main-menu')) {
            document.querySelector('.webpage--main-menu').classList.add('scrolled');
        }
    } else {
        document.querySelector('.breadcrumb-nav').classList.remove('scrolled');
        if(document.querySelector('.webpage--main-menu')) {
            document.querySelector('.webpage--main-menu').classList.remove('scrolled');
        }
    }
};


//replace code arrows with html entities
// Code Area
$('.main-nav--code pre textarea').each(function() {
    if($(this).text().trim().length > 0) {
        $(this).text(
            $(this).text().trim().replace(/<br>/ig, '').replace(/>/ig, '>').replace(/</ig, '<')
        );
    } else {
        $(this).parent().parent().remove();
    }
});


//calculate link scroll height
if($('.main-nav--content > .main-nav--code').length > 0) {
	let codeHeight = document.querySelector('.main-nav--content > .main-nav--code').clientHeight + 45;
	document.querySelector('.main-nav--links').style.height = `calc(100vh - ${codeHeight}px)`;
}


//copy code to clipboard
let clipboard = new Clipboard('.clipboard');
clipboard.on('success', function(e) {
    console.log('clipboard success: ' + e);
});
clipboard.on('error', function(e) {
    console.log('clipboard error: ' + e);
});
let clipcode = new Clipboard('.codeclick', {
    target: function(trigger) {
    return trigger.nextElementSibling;
    }
});
$("table[id='CODE-WRAP']").each(function() {
    var cc = $(this).find("td[id='CODE']").html();

    $(this).html(
        "<div class='codeblock'><div class='c-title codeclick'><b>Copy to clipboard</b></div><div class='codecon'><pre><code>"
        + cc +
        "</code></pre></div></div>"
    );
});



/******************
 PROFILE ONLY
 ******************/
if($('body#Profile').length > 0) {
    setTimeout(() => {
        document.querySelector('.profile--menu').style.top = `${breadcrumbHeight - 2}px`;
        let submenuHeight = document.querySelector('.profile--menu').clientHeight;
        document.querySelectorAll('.anchorLink').forEach(link => {
            link.style.marginTop = `${(breadcrumbHeight + submenuHeight + 40) * -1}px`;
        });
    }, 400);
    window.addEventListener('resize', () => {
        breadcrumbHeight = document.querySelector('.breadcrumb-nav').clientHeight;
        document.querySelectorAll('.anchorLink').forEach(link => {
            link.style.marginTop = `${(breadcrumbHeight + 40) * -1}px`;
        });
    });

    const labels = document.querySelectorAll('.tracker--labels button');
    const tabs = document.querySelectorAll('.tracker--tab');
    labels.forEach((label, index) => {
        label.addEventListener('click', e => {
            labels.forEach(label => label.classList.remove('active'));
            e.currentTarget.classList.add('active');
            tabs.forEach(tab => {
                tab.style.left = `${index * -100}%`;
            });
        });
    });

    tabs.forEach(tab => {
        tab.querySelector('.tracker--inner-labels .left').addEventListener('click', e=> {
            if(!e.currentTarget.classList.contains('active')) {
                e.currentTarget.classList.add('active');
                tab.querySelector('.right').classList.remove('active');
                tab.querySelectorAll('.tracker').forEach(innerTab => innerTab.style.left = '0');
            }
        });
        tab.querySelector('.tracker--inner-labels .right').addEventListener('click', e=> {
            if(!e.currentTarget.classList.contains('active')) {
                e.currentTarget.classList.add('active');
                tab.querySelector('.left').classList.remove('active');
                tab.querySelectorAll('.tracker').forEach(innerTab => innerTab.style.left = '-100%');
            }
        });
    });
}




/******************
 INDEX/SC ONLY
******************/
if($('body#idx').length > 0 || $('body#SC').length > 0) {
    $('#recent-topics-clip').append($('#recent-topics tbody').html());
    $('#recent-topics').remove();
}


/*****************
 Webpages ONLY
******************/

if($('body#Pages').length > 0) {
    setTimeout(() => {
        let mainMenuHeight = document.querySelector('.webpage--main-menu').clientHeight;
        if(window.innerWidth > 1024) {
            document.querySelector('.webpage--sticky').style.top = `${breadcrumbHeight - 1}px`;
            document.querySelector('.webpage--main-menu').style.top = `0px`;
            document.querySelectorAll('.webpage--menu-sticky').forEach(submenu => {
                submenu.style.top = `${breadcrumbHeight - 1}px`;
            });
            document.querySelectorAll('.webpage--section').forEach(section => {
                section.style.minHeight = `calc(100vh - ${breadcrumbHeight - 1}px)`;
            });
        } else {
            document.querySelector('.webpage--sticky').style.top = `0px`;
            document.querySelector('.webpage--main-menu').style.top = `${breadcrumbHeight - 2}px`;
            document.querySelectorAll('.webpage--menu-sticky').forEach(submenu => {
                submenu.style.top = `${breadcrumbHeight + mainMenuHeight - 2}px`;
            });
            document.querySelectorAll('.webpage--section').forEach(section => {
                section.style.minHeight = `calc(100vh - ${breadcrumbHeight + mainMenuHeight - 2}px)`;
            });
        }
    }, 400);

    window.addEventListener('resize', () => {
        setTimeout(() => {
            mainMenuHeight = document.querySelector('.webpage--main-menu').clientHeight;
            if(window.innerWidth > 1024) {
                document.querySelector('.webpage--sticky').style.top = `${breadcrumbHeight - 1}px`;
                document.querySelector('.webpage--main-menu').style.top = `0px`;
                document.querySelectorAll('.webpage--menu-sticky').forEach(submenu => {
                    submenu.style.top = `${breadcrumbHeight - 1}px`;
                });
                document.querySelectorAll('.webpage--section').forEach(section => {
                    section.style.minHeight = `calc(100vh - ${breadcrumbHeight - 1}px)`;
                });
            } else {
                document.querySelector('.webpage--sticky').style.top = `0px`;
                document.querySelector('.webpage--main-menu').style.top = `${breadcrumbHeight - 1}px`;
                document.querySelectorAll('.webpage--menu-sticky').forEach(submenu => {
                    submenu.style.top = `${breadcrumbHeight + mainMenuHeight - 2}px`;
                });
                document.querySelectorAll('.webpage--section').forEach(section => {
                    section.style.minHeight = `calc(100vh - ${breadcrumbHeight + mainMenuHeight - 2}px)`;
                });
            }
        }, 400);
    });


    document.querySelector('#sort-group').addEventListener('change', () => {
        let selected = document.querySelector('#sort-group').options[document.querySelector('#sort-group').selectedIndex].value;
        checkCanon();
        switch (selected) {
            case '18':
            case '15':
            case '8':
            case '12':
            case '11':
            case '13':
            case '6':
                showFields('.ifAdult');
                hideFields('.ifStudent, .ifLower, .ifUpper, .ifLeadership, .ifLeadershipPossible, .ifQuidditch, .ifElec, .ifStart, .ifCore');
                checkEmployed();
                removeRequired('#sort-hogwartsyear');
                addRequired('#sort-employed');
                addRequired('#sort-universitystudent');
                break;
            case '17':
                showFields('.ifAdult');
                hideFields('.ifStudent, .ifLower, .ifUpper, .ifLeadership, .ifLeadershipPossible, .ifQuidditch, .ifElec, .ifStart, .ifCore');
                checkEmployed();
                removeRequired('#sort-hogwartsyear');
                addRequired('#sort-employed');
                addRequired('#sort-universitystudent');
                break;
            case '7':
            case '9':
            case '14':
            case '16':
                hideFields('.ifAdult, .ifJob');
                showFields('.ifStudent');
                checkYear();
                checkLeadPos();
                checkQuid();   
                addRequired('#sort-hogwartsyear');
                removeRequired('#sort-employed');
                removeRequired('#sort-universitystudent');
                break;
            default:
                break;
        }  
    });

    //Ability change
    document.querySelector('#sort-abilityexists').addEventListener('change', () => {
        let selected = document.querySelector('#sort-abilityexists').options[document.querySelector('#sort-abilityexists').selectedIndex].value;
        if(selected == 'y') {
            showFields('.ifAbilities');
        } else {
            hideFields('.ifAbilities');
        }
    });
    document.querySelector('#sort-animagus').addEventListener('change', () => {
        if(document.querySelector('#sort-animagus').checked) {
            showFields('.ifAnimagus');
        } else {
            hideFields('.ifAnimagus');
        }
    })

    //Species change
    document.querySelector('#sort-species').addEventListener('change', () => {
        let selected = document.querySelector('#sort-species').options[document.querySelector('#sort-species').selectedIndex].value;
        if(selected == 'veela') {
            showFields('.ifVeela');
        } else {
            hideFields('.ifVeela');
        }
    });

    //Employed change
    document.querySelector('#sort-employed').addEventListener('change', () => {
        checkEmployed();
    });

    //University change
    document.querySelector('#sort-universitystudent').addEventListener('change', () => {
        checkUniversity();
    });

    //Year standing change
    document.querySelector('#sort-hogwartsyear').addEventListener('change', () => {
        checkYear();
    });

    //Student leadership change
    document.querySelector('#sort-leadership').addEventListener('change', () => {
        checkLeadPos();
    });

    //Student quidditch change
    document.querySelector('#sort-quidditch').addEventListener('change', () => {
        checkQuid();
    });

    //Canon change
    document.querySelector('#sort-canon').addEventListener('change', () => {
        checkCanon();
    });


    let instance = [];
    //submit form - send data if character does not exist, stop submission if they do
    document.querySelector('#sort').addEventListener('submit', e => {
        e.preventDefault();
        const url = `https://opensheet.elk.sh/1MQsi3iyJDhtlSiLRvOvmYxiBWZBHjCr7QGbnXyb_u-s/Sheet1`;
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


    document.querySelector('#wipadd').addEventListener('submit', e => {
        e.preventDefault();
        const url = `https://opensheet.elk.sh/1W-Ffhi7pIe4X1X_tt1SoYaasEewx7Hk5IPd5EJZllOI/Sheet1`;
            fetch(url)
            .then((response) => response.json())
            .then(data => {
                let face = $("#wip-face").val();
                instance = data.filter(item => item.Face.toLowerCase() === face.toLowerCase());
                if(instance.length === 1) {
                    document.querySelector('#wip-warning').innerHTML = `${instance[0].Member} is already making a character using ${face}. Sorry!`;
                } else if (instance.length === 0) {
                    postToWIP();
                    $('button[type="submit"]').text('Submitting...');
                }
            });
    });
}




/******************
 Topic List ONLY
******************/
if($('body#SF').length > 0) {
    document.querySelectorAll('.category.subforums .redirect').forEach(redirectForum => redirectForum.remove());
    if(document.querySelector('.category.subforums .category--rows').innerText.trim() === '') {
        document.querySelector('.category.subforums').remove();
    }
    document.querySelectorAll('.topic--extras').forEach(extra => {
        if(extra.innerText.trim() === '') {
            extra.querySelector('hr').remove();
        }
    });
}




/******************
 Topic View ONLY
******************/
if($('body#ST').length > 0) {
    let descript = $('.topic-desc').html();
    if (descript != undefined) {
      var newDescript = descript.replace(", ", "");
      $('.topic-desc').html(newDescript);
    }
    
    document.querySelectorAll('.post--header-inner > a').forEach(name => {
        let newName = capitalize(name.innerHTML, [`'`, `-`]);
        name.innerHTML = newName;
    });

    let top = document.querySelector('.breadcrumb-nav').clientHeight;
    document.querySelectorAll('.post--header').forEach(header => header.style.top = `${top}px`);
    if($(window).innerWidth() >= 1024) {
        document.querySelectorAll('.post--controls-inner').forEach(controls => controls.style.top = `${top + 15}px`);
    } else {
        document.querySelectorAll('.post--controls-inner').forEach(controls => controls.style.top = `0`);
    }
    $(window).on('resize', function() {
        if($(window).innerWidth() >= 1024) {
            document.querySelectorAll('.post--controls-inner').forEach(controls => controls.style.top = `${top + 15}px`);
        } else {
            document.querySelectorAll('.post--controls-inner').forEach(controls => controls.style.top = `0`);
        }
    });
    document.querySelectorAll('.post--sticky').forEach(sticky => {
        let header = sticky.parentElement.parentElement.parentElement.querySelector('.post--header').clientHeight;
        sticky.style.height = `calc(100vh - ${header + top + 59}px)`;
        sticky.style.top = `${top + header + 34}px`;
    });
    //remove charOnly from member accounts
    document.querySelectorAll('.post.g-4 .charOnly').forEach(item => item.remove());
    document.querySelectorAll('.post.g-3.acc-Member .charOnly').forEach(item => item.remove());
    document.querySelectorAll('.post.g-1.acc-Member .charOnly').forEach(item => item.remove());
    document.querySelectorAll('.post.g-5.acc-Member .charOnly').forEach(item => item.remove());
    document.querySelectorAll('.post.g-2 .memOnly').forEach(item => item.remove());

    //carousel for mini
    let carousels = document.querySelectorAll('.post--carousel');
    let carouselControls = document.querySelectorAll('.post--carousel-controls');
    let carouselArrows = document.querySelectorAll('.post--carousel-arrows');

    carousels.forEach((carousel, i) => {
        let activeSlide = 0;
        let controls = carouselControls[i];
        let arrows = carouselArrows[i];
        controls.querySelectorAll('button').forEach((button, index) => {
            button.addEventListener('click', () => {
                controls.querySelectorAll('button').forEach(button => {
                    button.classList.remove('active-slide');
                });
                button.classList.add('active-slide');
                let slides = carousel.querySelectorAll('.post--slide');
                slides.forEach(slide => {
                    slide.classList.remove('active-slide');
                    slide.style.left = `-${index * 100}%`;
                });
                slides[index].classList.add('active-slide');
                if(index !== 0) {
                    carousel.parentElement.querySelector('img').style.filter = `blur(3px)`;
                    carousel.parentElement.querySelector('img').style.opacity = `0.25`;
                    carousel.parentElement.querySelector('img').style.transform = `scale(1.05)`;
                } else {
                    carousel.parentElement.querySelector('img').style.filter = `blur(0)`;
                    carousel.parentElement.querySelector('img').style.opacity = `1`;
                    carousel.parentElement.querySelector('img').style.transform = `scale(1)`;
                }
                activeSlide = index;
            });
        });
        arrows.querySelectorAll('.post--carousel-arrow').forEach(arrow => {
            arrow.addEventListener('click', () => {
                let slides = carousel.querySelectorAll('.post--slide');
                let buttons = carouselControls[i].querySelectorAll('button');
                slides.forEach(slide => slide.classList.remove('active-slide'));
                if(arrow.classList.contains('arrow-left')) {
                    if(activeSlide !== 0) {
                        activeSlide -= 1;
                    } else {
                        activeSlide = slides.length - 1;
                    }
                }
                if(arrow.classList.contains('arrow-right')) {
                    if(activeSlide !== slides.length - 1) {
                        activeSlide += 1;
                    } else {
                        activeSlide = 0;
                    }
                }
                slides[activeSlide].classList.add('active-slide');
                slides.forEach(slide => slide.style.left = `-${activeSlide * 100}%`);
                if(activeSlide !== 0) {
                    carousel.parentElement.querySelector('img').style.filter = `blur(3px)`;
                    carousel.parentElement.querySelector('img').style.opacity = `0.25`;
                    carousel.parentElement.querySelector('img').style.transform = `scale(1.05)`;
                } else {
                    carousel.parentElement.querySelector('img').style.filter = `blur(0)`;
                    carousel.parentElement.querySelector('img').style.opacity = `1`;
                    carousel.parentElement.querySelector('img').style.transform = `scale(1)`;
                }
                buttons.forEach(button => {
                    button.classList.remove('active-slide');
                });
                buttons[activeSlide].classList.add('active-slide');
            })
        });
    });

    let clippedURL = new Clipboard('.post-link');
    document.querySelectorAll('.post-link').forEach(link => {
        link.addEventListener('click', e => {
            e.currentTarget.querySelector('.note').style.opacity = 1;
            setTimeout(() => {
                document.querySelectorAll('.note').forEach(note => note.style.opacity = 0);
            }, 3000);
        });
    });
}




//UCP Only

if($('body#UserCP').length > 0 || $('body#Msg').length > 0) {
    setTimeout(() => {
        breadcrumbHeight = document.querySelector('.breadcrumb-nav').clientHeight;
        document.querySelector('#ucpmenu').style.top = `${breadcrumbHeight}px`;
    }, 400);
    document.querySelector('#ucpmenu').innerHTML = `
    <div class="ucp--menu">
        <div class="ucp--main-menu">
            <button class="go-left" onclick="moveLeft(this,'.ucp--main-menu-links')">
                <i class="fa-light fa-angles-left"></i>
            </button>
            <div class="ucp--main-menu-links">
                <button data-subcategory="account">Account</button>
                <button data-subcategory="messages">Messages</button>
                <button data-subcategory="tracking">Tracking</button>
                <button data-subcategory="settings">Settings</button>
            </div>
            <button class="go-right" onclick="moveRight(this,'.ucp--main-menu-links')">
                <i class="fa-light fa-angles-right"></i>
            </button>
        </div>
        <div class="ucp--sub-menu">
            <button class="go-left" onclick="moveLeft(this,'.ucp--sub-menu-links')">
                <i class="fa-light fa-angles-left"></i>
            </button>
            <div class="ucp--sub-menu-links claim--labels" data-filter-group="account">
                <a href="user-edit.html">Edit Profile</a>
                <a href="user-avatar.html">Update Avatar</a>
                <a href="user-accounts.html">Sub-accounts</a>
                <a href="user-name.html">Edit Username</a>
                <a href="user-pass.html">Change Password</a>
                <a href="user-email.html">Update Email</a>
            </div>
            <button class="go-right" onclick="moveRight(this,'.ucp--sub-menu-links')">
                <i class="fa-light fa-angles-right"></i>
            </button>
        </div>
        <div class="ucp--sub-menu">
            <button class="go-left" onclick="moveLeft(this,'.ucp--sub-menu-links')">
                <i class="fa-light fa-angles-left"></i>
            </button>
            <div class="ucp--sub-menu-links claim--labels" data-filter-group="messages">
                <a href="user-inbox.html">Inbox</a>
                <a href="user-message.html">Send Message</a>
            </div>
            <button class="go-right" onclick="moveRight(this,'.ucp--sub-menu-links')">
                <i class="fa-light fa-angles-right"></i>
            </button>
        </div>
        <div class="ucp--sub-menu">
            <button class="go-left" onclick="moveLeft(this,'.ucp--sub-menu-links')">
                <i class="fa-light fa-angles-left"></i>
            </button>
            <div class="ucp--sub-menu-links claim--labels" data-filter-group="tracking">
                <a href="user-alerts.html">Alerts</a>
                <a href="user-forums.html">Forums</a>
                <a href="user-topics.html">Topics</a>
            </div>
            <button class="go-right" onclick="moveRight(this,'.ucp--sub-menu-links')">
                <i class="fa-light fa-angles-right"></i>
            </button>
        </div>
        <div class="ucp--sub-menu">
            <button class="go-left" onclick="moveLeft(this,'.ucp--sub-menu-links')">
                <i class="fa-light fa-angles-left"></i>
            </button>
            <div class="ucp--sub-menu-links claim--labels" data-filter-group="settings">
                <a href="user-boardset.html">Board</a>
                <a href="user-alertset.html">Alerts</a>
                <a href="user-emailset.html">Emails</a>
            </div>
            <button class="go-right" onclick="moveRight(this,'.ucp--sub-menu-links')">
                <i class="fa-light fa-angles-right"></i>
            </button>
        </div>
    </div>`;

    /*
    document.querySelector('#ucpmenu').innerHTML = `
    <div class="ucp--menu">
        <div class="ucp--main-menu">
            <button class="go-left" onclick="moveLeft(this,'.ucp--main-menu-links')">
                <i class="fa-light fa-angles-left"></i>
            </button>
            <div class="ucp--main-menu-links">
                <button data-subcategory="account" class="active">Account</button>
                <button data-subcategory="messages">Messages</button>
                <button data-subcategory="tracking">Tracking</button>
                <button data-subcategory="settings">Settings</button>
            </div>
            <button class="go-right" onclick="moveRight(this,'.ucp--main-menu-links')">
                <i class="fa-light fa-angles-right"></i>
            </button>
        </div>
        <div class="ucp--sub-menu active">
            <button class="go-left" onclick="moveLeft(this,'.ucp--sub-menu-links')">
                <i class="fa-light fa-angles-left"></i>
            </button>
            <div class="ucp--sub-menu-links claim--labels" data-filter-group="account">
                <a href="?act=UserCP&CODE=01">Edit Profile</a>
                <a href="?act=UserCP&CODE=22">Update Avatar</a>
                <a href="?act=UserCP&CODE=54">Sub-accounts</a>
                <a href="?act=UserCP&CODE=52">Edit Username</a>
                <a href="?act=UserCP&CODE=28">Change Password</a>
                <a href="?act=UserCP&CODE=08">Update Email</a>
            </div>
            <button class="go-right" onclick="moveRight(this,'.ucp--sub-menu-links')">
                <i class="fa-light fa-angles-right"></i>
            </button>
        </div>
        <div class="ucp--sub-menu">
            <button class="go-left" onclick="moveLeft(this,'.ucp--sub-menu-links')">
                <i class="fa-light fa-angles-left"></i>
            </button>
            <div class="ucp--sub-menu-links claim--labels" data-filter-group="messages">
                <a href="?act=Msg&CODE=01">Inbox</a>
                <a href="?act=Msg&CODE=04">Send Message</a>
            </div>
            <button class="go-right" onclick="moveRight(this,'.ucp--sub-menu-links')">
                <i class="fa-light fa-angles-right"></i>
            </button>
        </div>
        <div class="ucp--sub-menu">
            <button class="go-left" onclick="moveLeft(this,'.ucp--sub-menu-links')">
                <i class="fa-light fa-angles-left"></i>
            </button>
            <div class="ucp--sub-menu-links claim--labels" data-filter-group="tracking">
                <a href="?act=UserCP&CODE=alerts">Alerts</a>
                <a href="?act=UserCP&CODE=50">Forums</a>
                <a href="?act=UserCP&CODE=26">Topics</a>
            </div>
            <button class="go-right" onclick="moveRight(this,'.ucp--sub-menu-links')">
                <i class="fa-light fa-angles-right"></i>
            </button>
        </div>
        <div class="ucp--sub-menu">
            <button class="go-left" onclick="moveLeft(this,'.ucp--sub-menu-links')">
                <i class="fa-light fa-angles-left"></i>
            </button>
            <div class="ucp--sub-menu-links claim--labels" data-filter-group="settings">
                <a href="?act=UserCP&CODE=04">Board</a>
                <a href="?act=UserCP&CODE=alerts_settings">Alerts</a>
                <a href="?act=UserCP&CODE=02">Emails</a>
            </div>
            <button class="go-right" onclick="moveRight(this,'.ucp--sub-menu-links')">
                <i class="fa-light fa-angles-right"></i>
            </button>
        </div>
    </div>`;
    */

    let menuTriggers = document.querySelectorAll('.ucp--main-menu-links > button');

    let menuSections = document.querySelectorAll('.ucp--sub-menu');

    //sub menu - on button click, open inner menu
    menuTriggers.forEach((trigger, index) => {
        trigger.addEventListener('click', e => {
            console.log(trigger);
            menuTriggers.forEach(trigger => trigger.classList.remove('active'));
            menuSections.forEach(menu => menu.classList.remove('active'));
            e.currentTarget.classList.add('active');
            menuSections[index].classList.add('active');
        });
    });
    if($('body#Msg').length > 0) {
        if(document.querySelector('body').classList.contains('code-01') ||
        document.querySelector('body').classList.contains('code-04')){
            menuTriggers[1].classList.add('active');
            menuSections[1].classList.add('active');
        }
    } else {
        if(document.querySelector('body').classList.contains('code-alerts') ||
        document.querySelector('body').classList.contains('code-50') ||
        document.querySelector('body').classList.contains('code-26')) {
            menuTriggers[2].classList.add('active');
            menuSections[2].classList.add('active');
        } else if(document.querySelector('body').classList.contains('code-04') ||
        document.querySelector('body').classList.contains('code-alerts_settings') ||
        document.querySelector('body').classList.contains('code-02')) {
            menuTriggers[3].classList.add('active');
            menuSections[3].classList.add('active');
        } else {
            menuTriggers[0].classList.add('active');
            menuSections[0].classList.add('active');
        }
    }


	//Edit Profile Edits
	if($('body.code-01').length > 0) {
        const toggleFields = [document.querySelector('#field_74_input'), document.querySelector('#field_75_input')];
      
        cpShift();
        
        toggleFields.forEach(toggle => {
            toggle.addEventListener('change', () => {
                cpShift();
            });
        });

        document.querySelectorAll('#ucpcontent form[name="theForm"] input[type="text"]').forEach(input => {
            let label = input.getAttribute('id');
        if(document.querySelector('label[for="' + label + '"]')) {
                input.setAttribute('placeholder', document.querySelector('label[for="' + label + '"]').innerText.toLowerCase());
        }
        });

        document.querySelectorAll('#ucpcontent form[name="theForm"] textarea').forEach(input => {
            let label = input.getAttribute('id');
        if(document.querySelector('label[for="' + label + '"]')) {
                input.setAttribute('placeholder', document.querySelector('label[for="' + label + '"]').innerText.toLowerCase());
        }
        });
	}

    //forum subs
    if($('body.code-50').length > 0) {
        document.querySelectorAll('.row1:nth-child(3)').forEach(row => {
            if(row.innerText == '1') {
                row.innerText = `${row.innerHTML} topic`;
            } else {
                row.innerText = `${row.innerHTML} topics`;
            }
        });
        document.querySelectorAll('.row1:nth-child(4)').forEach(row => {
            if(row.innerText == '1') {
                row.innerText = `${row.innerHTML} reply`;
            } else {
                row.innerText = `${row.innerHTML} replies`;
            }
        });
    }

    //topic subs
    if($('body.code-26').length > 0) {
        document.querySelectorAll('.row3:nth-child(3)').forEach(row => {
            if(row.innerText == '1') {
                row.innerText = `${row.innerHTML} reply`;
            } else {
                row.innerText = `${row.innerHTML} replies`;
            }
        });
        document.querySelectorAll('.row3:nth-child(4)').forEach(row => {
            if(row.innerText == '1') {
                row.innerText = `${row.innerHTML} view`;
            } else {
                row.innerText = `${row.innerHTML} views`;
            }
        });
    }
}




//Posting only
if($('body#Post').length > 0) {
    if(document.querySelector('body.code-00')) {
        document.querySelector('#topic-title input').setAttribute('placeholder', 'Topic Title');
        document.querySelector('#topic-desc input').setAttribute('placeholder', 'Topic Description');
    }
    $('#post-options .pformright input').first().wrap('<label class="emoteWrap"></label>');
    $('.emoteWrap').append('<span><i class="fa-solid fa-check"></i></span> Enable Emojis');
    $('#post-options .pformright input').last().wrap('<label class="repWrap"></label>');
    $('.repWrap').append('<span><i class="fa-solid fa-check"></i></span> Enable Notifications');
    let save = $('.emoteWrap, .repWrap').detach();
    $('#post-options .pformright').empty().append(save);
    document.querySelector('#bbcode-buttons').innerHTML = document.querySelector('#bbcode-buttons').innerHTML.replace(/&nbsp;/g,'');
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


//Register Only
if($('#Reg').length > 0) {
    let textNodes = getAllTextNodes(document.querySelector('main > form'));
    if(textNodes) {
        textNodes.forEach(node => {
            const paragraph = document.createElement('p');
            node.after(paragraph);
            paragraph.appendChild(node);
        });
    }

    if(document.querySelector('input[name="read_tos"][type="checkbox"]')) {
        $('input[name="read_tos"][type="checkbox"]').wrap('<label class="tosWrap"></label>');
        $('.tosWrap').append(document.querySelector('.tosWrap + b'));
    }

    if(document.querySelector('input[name="allow_admin_mail"][type="checkbox"]')) {
        $('input[name="allow_admin_mail"][type="checkbox"]').wrap('<label class="staffWrap"></label>');
        $('.staffWrap').append('<span><i class="fa-solid fa-check"></i></span> Receive email from staff');
        $('input[name="allow_member_mail"][type="checkbox"]').wrap('<label class="memWrap"></label>');
        $('.memWrap').append('<span><i class="fa-solid fa-check"></i></span> Receive email from other members');
        $('.staffWrap').parent().addClass('notifications');
    }

    if(document.querySelectorAll('legend')) {
        document.querySelectorAll('legend').forEach(legend => {
            if(!legend.querySelector('b')) {
                legend.innerHTML = `<b>${legend.innerHTML}</b>`;
            }
        })
    }
}