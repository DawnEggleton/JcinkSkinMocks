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
    account.innerHTML = account.innerHTML.replace(/&nbsp;&nbsp;??/g,'');
});
document.querySelectorAll('#post_as_menu option').forEach(account => {
    account.innerHTML = account.innerHTML.replace(/&nbsp;&nbsp;??/g,'');
});

//tabs
if(document.querySelectorAll('tag-tabs').length > 0) {
    document.querySelectorAll('tag-tabs').forEach(tabset => {
        let labels = tabset.querySelectorAll('tag-label');
        let tabs = tabset.querySelectorAll('tag-tab');
        labels.forEach((label, i) => {
            label.addEventListener('click', () => {
                labels.forEach(label => label.classList.remove('is-active'));
                tabs.forEach(tab => {
                    tab.classList.remove('is-active');
                    tab.style.left = `${-100 * i}%`;
                });
                labels[i].classList.add('is-active');
                tabs[i].classList.add('is-active');
            })
        });
    })
}




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