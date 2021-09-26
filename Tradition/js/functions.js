function scrollFunction() {
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        document.querySelector('.nav--top').classList.add('scrolled');
    } else {
        document.querySelector('.nav--top').classList.remove('scrolled');
    }
} 

function toggleFont() {
    document.body.classList.toggle('lrgFont');
}
function toggleMode() {
    document.body.classList.toggle('light');
    document.body.classList.toggle('dark');
}
function toggleMenu() {
    document.body.classList.toggle('push');
    document.querySelector('.menuToggle').classList.toggle('fa-bars');
    document.querySelector('.menuToggle').classList.toggle('fa-times');
}
function openSwitch(el) {
    let html = el.innerHTML;
    let parent = document.querySelector('.nav--top-ucp--switcher');
    let closed = `<i class="fas fa-exchange-alt"></i>`;

    if(html == closed) {
        parent.innerHTML = `<select><option>account switcher</option></select><button onclick="openSwitch(this)" title="switch accounts"><i class="fas fa-times"></i></button>`;
    } else {
        parent.innerHTML = `<button onclick="openSwitch(this)" title="switch accounts"><i class="fas fa-exchange-alt"></i></button>`;
    }
}
function popoutCode() {
    toggleHide(document.querySelector('.nav--code--show'));
    toggleHide(document.querySelector('.nav--code--hide'));
}
function highlightCode() {
    let clipcodeQuick = new Clipboard('.copyQuick', {
        target: function(trigger) {
        return trigger.nextElementSibling.nextElementSibling;
        }
    });
}

function spanLastWords(el) {
    let first = el.innerText.split(' ')[0], remainder = '';
    if(el.innerText.split(' ').length > 1) {
        remainder = el.innerText.substring(el.innerText.indexOf(" ") + 1);
    }
    el.innerHTML = `${first} <span>${remainder}</span>`;
}

function showDescription(el) {
    let latest = el.parentNode.parentNode.querySelector('.forum--latest');
    let links = el.parentNode.parentNode.querySelector('.forum--subs');
    let desc = el.parentNode.parentNode.querySelectorAll('.forum--text');
    if(latest.classList.contains('hide') && !links.classList.contains('hide')) {
        toggleHide(el.parentNode.parentNode.querySelector('.forum--subs'));
        toggleHide(el.parentNode.parentNode.querySelector('.fa-link'));
        toggleHide(el.parentNode.parentNode.querySelector('.fa-link').nextElementSibling);
        toggleHide(el.parentNode.parentNode.querySelector('.fa-info'));
        toggleHide(el.parentNode.parentNode.querySelector('.fa-info').nextElementSibling);
        if (desc.length > 0) {
            toggleHide(el.parentNode.parentNode.querySelector('.forum--desc'));
        } else {
            toggleHide(el.parentNode.parentNode.querySelector('.forum--none'));
        }
    } else {
        toggleHide(el.parentNode.parentNode.querySelector('.forum--latest'));
        toggleHide(el.parentNode.parentNode.querySelector('.fa-info'));
        toggleHide(el.parentNode.parentNode.querySelector('.fa-info').nextElementSibling);
        if (desc.length > 0) {
            toggleHide(el.parentNode.parentNode.querySelector('.forum--desc'));
        } else {
            toggleHide(el.parentNode.parentNode.querySelector('.forum--none'));
        }
    }
}

function showLinks(el) {
    let latest = el.parentNode.parentNode.querySelector('.forum--latest');
    let desc = el.parentNode.parentNode.querySelector('.forum--desc');
    let links = el.parentNode.parentNode.querySelectorAll('.forum--links');
    let subs = el.parentNode.parentNode.querySelectorAll('.subforums');
    console.log(links);
    console.log(subs);
    if(latest.classList.contains('hide') && !desc.classList.contains('hide')) {
        toggleHide(el.parentNode.parentNode.querySelector('.forum--desc'));
        toggleHide(el.parentNode.parentNode.querySelector('.fa-link'));
        toggleHide(el.parentNode.parentNode.querySelector('.fa-link').nextElementSibling);
        toggleHide(el.parentNode.parentNode.querySelector('.fa-info'));
        toggleHide(el.parentNode.parentNode.querySelector('.fa-info').nextElementSibling);
        if (links.length > 0 || subs.length > 0) {
            toggleHide(el.parentNode.parentNode.querySelector('.forum--subs'));
        } else {
            toggleHide(el.parentNode.parentNode.querySelector('.forum--none'));
        }
    } else {
        toggleHide(el.parentNode.parentNode.querySelector('.forum--latest'));
        toggleHide(el.parentNode.parentNode.querySelector('.fa-link'));
        toggleHide(el.parentNode.parentNode.querySelector('.fa-link').nextElementSibling);
        if (links.length > 0 || subs.length > 0) {
            toggleHide(el.parentNode.parentNode.querySelector('.forum--subs'));
        } else {
            toggleHide(el.parentNode.parentNode.querySelector('.forum--none'));
        }
    }
}

function toggleHide(el) {
    el.classList.toggle('hide');
}