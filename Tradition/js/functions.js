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
        console.log('open');
        parent.innerHTML = `<select><option>account switcher</option></select><button onclick="openSwitch(this)" title="switch accounts"><i class="fas fa-times"></i></button>`;
    } else {
        console.log('close');
        parent.innerHTML = `<button onclick="openSwitch(this)" title="switch accounts"><i class="fas fa-exchange-alt"></i></button>`;
    }
}
function popoutCode() {
    document.querySelector('.nav--code--show').classList.toggle('hide');
    document.querySelector('.nav--code--hide').classList.toggle('hide');
}
function highlightCode() {
    let clipcodeQuick = new Clipboard('.copyQuick', {
        target: function(trigger) {
        return trigger.nextElementSibling.nextElementSibling;
        }
    });
}