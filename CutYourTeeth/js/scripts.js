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


//Set styles for user controls
let navHeight = document.querySelector('nav').clientHeight;
let fullHeight = window.innerHeight - navHeight;
document.querySelector('.controls.memOnly').style.top = `${navHeight}px`;
document.querySelector('.controls.memOnly').style.height = `${fullHeight}px`;
document.querySelector('.controls.memOnly').style.backgroundPosition = `0 -${navHeight}px`;
document.querySelector('.controls.guestOnly').style.top = `${navHeight}px`;
document.querySelector('.controls.guestOnly').style.height = `${fullHeight}px`;
document.querySelector('.controls.guestOnly').style.backgroundPosition = `0 -${navHeight}px`;


//change nav styles
window.onscroll = function() {
    if (window.pageYOffset > 50) {
        document.querySelector('nav').classList.add('scrolled');
    } else {
        document.querySelector('nav').classList.remove('scrolled');
    }
};


//append recent topics
document.querySelector('#recent-topics-clip').append(document.querySelector('#recent-topics'));


//add anchor to guidebook
document.querySelector('.f-3').setAttribute('name', 'learn-more');


//smooth scrolling anchors by name
$('a[href^="#"]').click(function () {
    $('html, body').animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top - $('nav').height()
    }, 750);

    return false;
});


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
        document.querySelector('nav').classList.remove('controls-open');
    } else {
        document.querySelector('.ucp--menu-mobile').classList.remove('active');
    }
})