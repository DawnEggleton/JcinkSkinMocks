//Toggles
setBrightness();
setSize();
document.querySelectorAll('input[name="setting-brightness"]').forEach(slider => {
    slider.addEventListener('change', e => {
        let value = e.target.value;
        localStorage.setItem('brightness', value);
        setBrightness();
    });
});
document.querySelectorAll('input[name="setting-size"]').forEach(slider => {
    slider.addEventListener('change', e => {
        let value = e.target.value;
        localStorage.setItem('size', value);
        setSize();
    });
});

//sliders
document.addEventListener( 'DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.splide');
    sliders.forEach(slider => {
        if(slider.id) {
            var splide = new Splide(`#${slider.id}`, {
                type: 'loop',
                speed: '750'
            });
            splide.mount();
        }
    })
});

//Manual Links
document.querySelectorAll('.manual-links').forEach(linkset => {
    if(linkset.previousElementSibling.classList.contains('forum--image')) {
        linkset.previousElementSibling.previousElementSibling.querySelector('.forum--links .subforums').insertAdjacentHTML('beforeend', linkset.innerHTML);
        linkset.remove();
    } else {
        if(linkset.previousElementSibling.querySelector('.forum--links .subforums')) {
            linkset.previousElementSibling.querySelector('.forum--links .subforums').insertAdjacentHTML('beforeend', linkset.innerHTML);
            linkset.remove();
        } else {
            linkset.previousElementSibling.querySelector('.forum--links').insertAdjacentHTML('beforeend', linkset.innerHTML);
            linkset.remove();
        }
    }
});

//Manual Descriptions
document.querySelectorAll('.forum--text').forEach(text => {
    if(text.previousElementSibling.classList.contains('forum--image')) {
        text.previousElementSibling.previousElementSibling.querySelector('.forum--links .subforums').insertAdjacentHTML('afterbegin', `<p>${text.innerHTML}</p>`);
        text.remove();
    } else {
        text.previousElementSibling.querySelector('.forum--links').insertAdjacentHTML('afterbegin', `<p>${text.innerHTML}</p>`);
        text.remove();
    }
});

//Remove navstrip linebreaks
document.querySelectorAll('#navstrip ~ br').forEach(linebreak => linebreak.remove());

//Adjust navstrip to remove nbsp
$('#navstrip').html($('#navstrip').html().replace(/(?:^(?:&nbsp;)+)|(?:(?:&nbsp;)+$)/g, ''));

//easy to select account swap
document.querySelectorAll('select[name="sub_id"] option').forEach(account => {
    account.innerHTML = account.innerHTML.replace(/&nbsp;&nbsp;»/g,'');
});
document.querySelectorAll('#post_as_menu option').forEach(account => {
    account.innerHTML = account.innerHTML.replace(/&nbsp;&nbsp;»/g,'');
});

//tabs
if(document.querySelectorAll('tag-tabs').length > 0) {
    document.querySelectorAll('tag-tabs').forEach(tabset => {
        let labels = tabset.querySelectorAll('tag-label');
        let tabs = tabset.querySelectorAll('tag-tab');
        let secondary = tabset.dataset.secondary;
        let secondaryTabs;
        if(secondary) {
            secondaryTabs = document.querySelectorAll(`${secondary} > tag-tabset > tag-tab`);
            //functional tabs within tabs
            let innerSets = tabset.querySelectorAll('tag-tabset tag-labelset');
            innerSets.forEach((innerset, i) => {
                let innerLabels = innerset.querySelectorAll('tag-labelset > a');
                let innerTabs = secondaryTabs[i].querySelectorAll('tag-tab');
                innerLabels.forEach((label, i) => {
                    label.addEventListener('click', () => {
			let siblingLabels = label.parentNode.querySelectorAll('a');
			let siblingTabs = innerTabs[i].parentNode.querySelectorAll('tag-tab');
                        siblingLabels.forEach(label => label.classList.remove('is-active'));
                        siblingTabs.forEach(tab => {
                            tab.classList.remove('is-active');
                            tab.style.left = `${-100 * i}%`;
                        });
                        innerLabels[i].classList.add('is-active');
                        innerTabs[i].classList.add('is-active');
                    })
                });
            });
        }
        //regular tabs and moving the tab groups for secondary sets
        labels.forEach((label, i) => {
            label.addEventListener('click', () => {
                labels.forEach(label => label.classList.remove('is-active'));
                tabs.forEach(tab => {
                    tab.classList.remove('is-active');
                    tab.style.left = `${-100 * i}%`;
                });
                if(secondary) {
                    secondaryTabs.forEach(tab => {
                        tab.classList.remove('is-active');
                        tab.style.left = `${-100 * i}%`;
                    });
                }
                labels[i].classList.add('is-active');
                let autoLabel = document.querySelector(`tag-tab[data-category="${labels[i].dataset.category}"]`).querySelector('.is-active').getAttribute('href');
                window.location.hash = autoLabel;
                tabs[i].classList.add('is-active');
                if(secondary) {
                    secondaryTabs[i].classList.add('is-active');
                }
            })
        });
    });
}

//quick login
if(document.querySelector('body').classList.contains('g-2')) {
    if($('#quick-login').length) {
        $('#quick-login').appendTo('#quick-login-clip');
    } else {
        var main_url = location.href.split('?')[0];
        $.get(main_url, function (data) {
            $('#quick-login', data).appendTo('#quick-login-clip');
        });
    }
    document.querySelector('#quick-login input[name="UserName"]').setAttribute('placeholder', 'Username');
    document.querySelector('#quick-login input[name="PassWord"]').setAttribute('placeholder', 'Password');
} else {
    if(document.querySelector('#quick-login')) {
        document.querySelector('#quick-login').remove();
    }
    if(document.querySelector('#quick-login-clip')) {
        document.querySelector('#quick-login-clip').remove();
    }
}


//Popup Management
document.querySelectorAll('.popup').forEach(popup => {
    popup.addEventListener('click', () => {
        let modalTag = popup.dataset.modal,
            modals = document.querySelectorAll('.modal'),
            modal;
            console.log(modalTag);
            console.log(modals);
        for(let i = 0; i < modals.length; i++) {
            if(modals[i].dataset.modalBox === modalTag) {
                modal = modals[i];
                modal.classList.add('is-open');
            }
        }
    });
});
document.querySelectorAll('.modal').forEach(modal => {
    window.addEventListener('click', e => {
        if(e.target.classList.contains('modal') || e.target.classList.contains('modal--close') || e.target.parentNode.classList.contains('modal--close')) {
            modal.classList.remove('is-open');
        }
    });
});




/******************
 INDEX/SC ONLY
******************/
if($('body#idx').length > 0 || $('body#SC').length > 0) {
    //recent topics clip
    $('.stats--recent').append($('#recent-topics').html());
    $('#recent-topics').remove();
}


/****************
 UCP ONLY
*****************/
if($('body#UserCP').length > 0) {
    //wrap checkboxes
    if($('body.code-04').length <= 0) {
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => jQuery(checkbox).wrap('<label class="fancyInput"></label>'));
        document.querySelectorAll('.fancyInput').forEach(checkbox => checkbox.insertAdjacentHTML('beforeend', '<div><i class="fa-solid fa-check"></i></div>'));
    } else {
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => jQuery(checkbox).wrap('<label class="fancyInput"></label>'));
        document.querySelectorAll('.fancyInput').forEach(checkbox => checkbox.insertAdjacentHTML('beforeend', '<div><i class="fa-solid fa-check"></i></div><b>Is daylight savings time in effect?</b>'));
    }

    document.querySelector('#ucpmenu').innerHTML = `<div class="ucp--sticky">
    <b>Account</b>
    <div class="ucp--expandable ucp--menu-account is-open">
    <a href="?act=UserCP&CODE=01">Edit Profile</a>
    <a href="?act=UserCP&CODE=24">Update Avatar</a>
    <a href="?act=UserCP&CODE=54">Sub-accounts</a>
    <a href="?act=UserCP&CODE=52">Edit Username</a>
    <a href="?act=UserCP&CODE=28">Change Password</a>
    <a href="?act=UserCP&CODE=08">Update Email</a>
    </div>
    <b>Tracking</b>
    <div class="ucp--expandable ucp--menu-track is-open">
    <a href="?act=UserCP&CODE=alerts">Alerts</a>
    <a href="?act=UserCP&CODE=50">Forums</a>
    <a href="?act=UserCP&CODE=26">Topics</a>
    </div>
    <b>Settings</b>
    <div class="ucp--expandable ucp--menu-settings is-open">
    <a href="?act=UserCP&CODE=04">Board</a>
    <a href="?act=UserCP&CODE=alerts_settings">Alerts</a>
    <a href="?act=UserCP&CODE=02">Emails</a>
    </div>
    </div>`;

	//Edit Profile Edits
	if($('body.code-01').length > 0) {
        const toggleFields = [document.querySelector('#field_1_input'), document.querySelector('#field_27_input')];
	    $('#field-birthday').insertAfter('#field_14');
      
        cpShift();
        
        toggleFields.forEach(toggle => {
            toggle.addEventListener('change', () => {
                cpShift();
            });
        });
    }

    //ucp menu toggles
    setUCPMenus();
    window.addEventListener('resize', () => {
        setUCPMenus();
    });
    document.querySelectorAll('.ucp--sticky > b').forEach(toggle => {
        toggle.addEventListener('click', () => {
            let menu = toggle.nextElementSibling.classList;
            if(menu.contains('is-open')) {
                if(menu.contains('ucp--menu-account')) {
                    localStorage.setItem('ucpAccount', 'is-closed');
                } else if(menu.contains('ucp--menu-track')) {
                    localStorage.setItem('ucpTrack', 'is-closed');
                } else if(menu.contains('ucp--menu-settings')) {
                    localStorage.setItem('ucpSettings', 'is-closed');
                }
            } else if(menu.contains('is-closed')) {
                if(menu.contains('ucp--menu-account')) {
                    localStorage.setItem('ucpAccount', 'is-open');
                } else if(menu.contains('ucp--menu-track')) {
                    localStorage.setItem('ucpTrack', 'is-open');
                } else if(menu.contains('ucp--menu-settings')) {
                    localStorage.setItem('ucpSettings', 'is-open');
                }
            }
            setUCPMenus();
        });
    });

    //Forum Subscription edits
    if ($('body.code-50').length > 0) {
        document.querySelectorAll('#ucpcontent > .tableborder > table > tbody > tr > .darkrow3').forEach(category => category.parentNode.classList.add('ucp--cat-title')); 
    }

    //Topic Subscription edits
    if ($('body.code-26').length > 0) {
        document.querySelectorAll('#ucpcontent > form > .tableborder > table > tbody > tr > .darkrow3').forEach(category => category.parentNode.classList.add('ucp--cat-title')); 
    }
}


/****************
 PROFILE ONLY
*****************/
if($('body#Profile').length > 0) {
    const nameArray = document.querySelector('.profile--border h1').innerText.split(' ');
    if(nameArray.length > 1) {
        let alteredName = `${nameArray[0]}<span>`;
        for(let i = 0; i < nameArray.length - 1; i++) {
            alteredName += `${nameArray[i + 1]}`;
            if(i < nameArray.length - 2) {
                alteredName += ` `;
            }
        }
        alteredName += `</span>`;
        document.querySelector('.profile--border h1').innerHTML = alteredName;
    }
}


/****************
 POST VIEW ONLY
*****************/
if($('body#ST').length > 0) {
    let names = document.querySelectorAll('.post--header > a');
    names.forEach(name => {
        const nameArray = name.innerText.split(' ');
        if(nameArray.length > 1) {
            let alteredName = `${nameArray[0]}<span>`;
            for(let i = 0; i < nameArray.length - 1; i++) {
                alteredName += `${nameArray[i + 1]}`;
                if(i < nameArray.length - 2) {
                    alteredName += ` `;
                }
            }
            alteredName += `</span>`;
            name.innerHTML = alteredName;
        }
    });

    //tabs
    if(document.querySelectorAll('.post--aside').length > 0) {
        document.querySelectorAll('.post--aside').forEach(tabset => {
            let labels = tabset.querySelectorAll('.post--slider-label');
            let tabs = tabset.querySelectorAll('.post--slider-slide');
            labels.forEach((label, i) => {
                label.addEventListener('click', () => {
                    labels.forEach(label => label.classList.remove('is-active'));
                    tabs.forEach(tab => {
                        tab.classList.remove('is-active');
                        tab.style.left = `${-100 * i}%`;
                    });
                    labels[i].classList.add('is-active');
                    tabs[i].classList.add('is-active');
                    if(i !== 0) {
                        tabset.querySelector('.post--avatar').classList.add('effect-blur');
                    } else {
                        tabset.querySelector('.post--avatar').classList.remove('effect-blur')
                    }
                })
            });
        })
    }
    
    //auto-copy perma link
    let clippedURL = new Clipboard('.permalink');
    document.querySelectorAll('.permalink').forEach(link => {
        console.log(link);
        link.addEventListener('click', e => {
            console.log(e.currentTarget.querySelector('.note'));
            e.currentTarget.querySelector('.note').style.opacity = 1;
            setTimeout(() => {
                document.querySelectorAll('.note').forEach(note => note.style.opacity = 0);
            }, 3000);
        });
    });
}


/****************
 POSTING VIEW ONLY
*****************/
if($('body#Post').length > 0) {
    if(document.querySelector('body.code-00')) {
        document.querySelector('#topic-title input').setAttribute('placeholder', 'Topic Title');
        document.querySelector('#topic-desc input').setAttribute('placeholder', 'Topic Description');
    }
    document.querySelector('#bbcode-buttons').innerHTML = document.querySelector('#bbcode-buttons').innerHTML.replace(/&nbsp;/g,'');
    document.querySelector('#posting-form tr:last-child').innerHTML = document.querySelector('#posting-form tr:last-child').innerHTML.replace(/&nbsp;/g,'');
    document.querySelector('#post-icon-options .pformright').innerHTML = document.querySelector('#post-icon-options .pformright').innerHTML.replace(/&nbsp;/g,'');
    $('#post-options .pformright input').first().wrap('<label class="emoteWrap"></label>');
    $('.emoteWrap').append('<span><i class="fa-solid fa-check"></i></span> Enable Emojis');
    $('#post-options .pformright input').last().wrap('<label class="repWrap"></label>');
    $('.repWrap').append('<span><i class="fa-solid fa-check"></i></span> Enable Notifications');
    let save = $('.emoteWrap, .repWrap').detach();
    $('#post-options .pformright').empty().append(save);

    let textNodes = getAllTextNodes(document.querySelector('#post-icon-options .pformright'));
    textNodes.forEach(node => {
        const span = document.createElement('span');
        span.classList.add('macro--icon', 'macro--icon-none');
        node.after(span);
        span.appendChild(node);
    });
    document.querySelector('.macro--icon-none').innerHTML = '<span><i class="fa-solid fa-check"></i></span> No post icon';
    $('#post-icon-options .pformright input').each(function() {
        $(this).nextUntil('input').andSelf().wrapAll('<label class="label--post-icon"></label>');
    });
}


/****************
 LOGIN ONLY
*****************/
if($('#Login').length > 0) {
    let textNodes = getAllTextNodes(document.querySelector('main'));
    textNodes.forEach(node => {
        const paragraph = document.createElement('p');
        node.after(paragraph);
        paragraph.appendChild(node);
    });
    $('main').children().wrapAll(`<div class="login-page"><div class="login-page--border"></div></div>`);
    document.querySelector('input[name="UserName"]').setAttribute('placeholder', 'Username');
    document.querySelector('input[name="PassWord"]').setAttribute('placeholder', 'Password');
    $('input[name="CookieDate"][value="1"]').wrap('<label class="label--cookie-remember"></label>');
    $('.label--cookie-remember').append('<span><i class="fa-solid fa-check"></i></span> Yes (Not recommended for shared computers)');
    $('input[name="CookieDate"][value="0"]').wrap('<label class="label--cookie-forget"></label>');
    $('.label--cookie-forget').append('<span><i class="fa-solid fa-check"></i></span> No');
}


/****************
 REGISTER ONLY
*****************/
if($('#Reg').length > 0) {
    if(document.querySelectorAll('main > form').length > 0) {
        let row = document.querySelector('main > form > .tableborder > .tablepad > table > tbody > tr:first-child');
        let firstColumn = row.querySelector('td:first-child');
        let columns = row.querySelectorAll('td');
        let secondColumn = row.querySelector('td:last-child > div > table > tbody > tr > td').innerHTML;

        firstColumn.insertAdjacentHTML('beforeend', secondColumn);
    }

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

    if(document.querySelector('input[name="agree"][type="checkbox"]')) {
        $('input[name="agree"][type="checkbox"]').wrap('<label class="label--tosAgree"></label>');
        $('.label--tosAgree').append('<span><i class="fa-solid fa-check"></i></span> I agree to the terms of this registration, <b>I am at least 18 years of age,</b> and wish to proceed.');
    }

    if(document.querySelectorAll('legend')) {
        document.querySelectorAll('legend').forEach(legend => {
            if(!legend.querySelector('b')) {
                legend.innerHTML = `<b>${legend.innerHTML}</b>`;
            }
        })
    }
}


/****************
 MEMBER LIST ONLY
*****************/
if($('body#Members').length > 0) {
    window.addEventListener('scroll', () => {
        if(window.scrollY > 0) {
            document.querySelector('body').classList.add('is-scrolled');
        } else {
            document.querySelector('body').classList.remove('is-scrolled');
        }
    });
}


/****************
 WEBPAGES ONLY
*****************/
if($('body#Pages').length > 0) {
    window.addEventListener('scroll', () => {
        if(window.scrollY > 0) {
            document.querySelector('body').classList.add('is-scrolled');
        } else {
            document.querySelector('body').classList.remove('is-scrolled');
        }
    });

    //hash linking
    if (window.location.hash){
        //get hash
        let hash = $.trim( window.location.hash );
        let selected = document.querySelector(`.webpage--menu a[href="${hash}"]`);
        let selectedCategory = selected.parentNode.parentNode.parentNode.getAttribute('data-category');
        let hashMain = document.querySelector(`.webpage--menu tag-label[data-category="${selectedCategory}"]`);
        let hashCategory = document.querySelector(`.webpage--menu tag-tab[data-category="${selectedCategory}"]`);
        let hashTab = document.querySelector(`.webpage--content tag-tab[data-category="${selectedCategory}"]`);
        let hashContent = document.querySelector(`tag-tab[data-key="${hash}"]`);
        let submenuSiblings = Array.from(hashTab.parentNode.children);
        let categorySiblings = Array.from(hashCategory.parentNode.children);
        let tabSiblings = Array.from(hashContent.parentNode.children);
        let submenuIndex = submenuSiblings.indexOf.call(submenuSiblings, hashTab);
        let categoryIndex = categorySiblings.indexOf.call(categorySiblings, hashCategory);
        let tabIndex = tabSiblings.indexOf.call(tabSiblings, hashContent);
        //find the sub menu/inner menu link with the matching hash
        if (hash) {
            $(selected).trigger('click');
        }
        //select based on this

        //Tabs
        //Remove active from everything
        document.querySelectorAll('.webpage--menu tag-label').forEach(label => label.classList.remove('is-active'));
        document.querySelectorAll('.webpage--menu a').forEach(label => label.classList.remove('is-active'));
        document.querySelectorAll('.webpage tag-tab').forEach(label => label.classList.remove('is-active'));

        //Add active
        hashMain.classList.add('is-active');
        selected.classList.add('is-active');
        hashTab.classList.add('is-active');
        hashContent.classList.add('is-active');
        selected.parentNode.parentNode.parentNode.classList.add('is-active');
        submenuSiblings.forEach(sibling => sibling.style.left = `${-100 * submenuIndex}%`);
        categorySiblings.forEach(sibling => sibling.style.left = `${-100 * categoryIndex}%`);
        tabSiblings.forEach(sibling => sibling.style.left = `${-100 * tabIndex}%`);
    } else {
        //Auto-select  tab without hashtag present
        document.querySelector('.webpage--menu a[href="#etiquette"]').classList.add('is-active');
        document.querySelector('.webpage--menu a[href="#etiquette"]').parentNode.parentNode.parentNode.classList.add('is-active');
        document.querySelector('.webpage--menu tag-label[data-category="required"]').classList.add('is-active');
        document.querySelector('tag-tab[data-category="required"] .webpage--section tag-tabset tag-tab:first-child').classList.add('is-active');
    }

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
		if ( total === points) {
                	fetch(reserves)
	                .then((response) => response.json())
	                .then(data => {
	                    faceCheck = data.filter(item => item.Face === document.querySelector('#sort-face').value.toLowerCase().trim());
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
console.log(points);
console.log(total);
		if ( total === points) {

	                fetch(reserves)
	                .then((response) => response.json())
	                .then(data => {
	
	                    nameCheck = data.filter(item => item.Face === document.querySelector('#update-face').value.toLowerCase().trim());
	
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
}