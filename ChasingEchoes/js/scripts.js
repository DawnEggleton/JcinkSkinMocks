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
    //Header Slider
    document.addEventListener( 'DOMContentLoaded', function() {
        var desktopSplide = new Splide('#desktop-splide', {
            type: 'loop',
            speed: '750'
        });
        desktopSplide.mount();
        var mobileSplide = new Splide('#mobile-splide', {
            type: 'loop',
            speed: '750'
        });
        mobileSplide.mount();
    });

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