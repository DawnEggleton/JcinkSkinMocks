//Toggles
setBrightness();
setSize();
document.querySelector('input[name="setting-brightness"]').addEventListener('change', e => {
    let value = e.target.value;
    localStorage.setItem('brightness', value);
    setBrightness();
});
document.querySelector('input[name="setting-size"]').addEventListener('change', e => {
    let value = e.target.value;
    localStorage.setItem('size', value);
    setSize();
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
        type: 'loop'
    });
    splide.mount();
});