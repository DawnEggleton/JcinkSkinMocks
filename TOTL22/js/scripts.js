$(window).on('load', function() {
    if($('body#Pages').length === 0) {
        //document.querySelector('#loading').remove();
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
        <a href="?act=UserCP&CODE=01">Edit Profile</a>
        <a href="?act=UserCP&CODE=22">Update Avatar</a>
        <a href="?act=UserCP&CODE=54">Sub-accounts</a>
        <a href="?act=UserCP&CODE=52">Edit Username</a>
        <a href="?act=UserCP&CODE=28">Change Password</a>
        <a href="?act=UserCP&CODE=08">Update Email</a>
        <b>Messages</b>
        <a href="?act=Msg&CODE=01">Inbox</a>
        <a href="?act=Msg&CODE=04">Send Message</a>
        <b>Tracking</b>
        <a href="?act=UserCP&CODE=alerts">Alerts</a>
        <a href="?act=UserCP&CODE=50">Forums</a>
        <a href="?act=UserCP&CODE=26">Topics</a>
        <b>Settings</b>
        <a href="?act=UserCP&CODE=04">Board</a>
        <a href="?act=UserCP&CODE=alerts_settings">Alerts</a>
        <a href="?act=UserCP&CODE=02">Emails</a>
    </div>`;


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