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


document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide('.splide', {
        type: 'loop',
        speed: '750'
    });
    splide.mount();
});