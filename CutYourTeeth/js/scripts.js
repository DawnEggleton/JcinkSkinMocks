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
document.querySelector('.controls').style.top = `${navHeight - 10}px`;
document.querySelector('.controls').style.height = `${window.innerHeight - navHeight - 10}px`;
document.querySelector('.controls-guest').style.top = `${navHeight - 10}px`;
document.querySelector('.controls-guest').style.height = `${window.innerHeight - navHeight - 10}px`;


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