function toggleFont() {
    document.body.classList.toggle('lgFont');
    if(document.body.classList.contains('lgFont')) {
        localStorage.setItem("SIZEMODE", "1");
    } else {
        localStorage.setItem("SIZEMODE", "0");
    }
}

function toggleMode() {
    document.body.classList.toggle('light');
    document.body.classList.toggle('dark');
    if(document.body.classList.contains('dark')) {
        localStorage.setItem("COLORMODE", "1");
    } else {
        localStorage.setItem("COLORMODE", "0");
    }
}

function openVisitor() {
    document.querySelector('.controls-guest').classList.toggle('active');
    let infoHeight = (window.innerHeight - navHeight - 70 - document.querySelector('.controls-guest .controls--user').clientHeight) / 2;
    document.querySelectorAll('.controls--site .scroll').forEach(info => {
        info.style.height = `${infoHeight}px`;
        if(info.scrollHeight > infoHeight) {
            info.style.paddingRight = `10px`;
        }
    });
}

function openControls() {
    document.querySelector('.controls').classList.toggle('active');
    if(document.querySelector('.controls').classList.contains('active')) {
        document.querySelectorAll('main > *').forEach(el => el.style.opacity = 0);
        document.querySelectorAll('header > *').forEach(el => el.style.opacity = 0);
    } else {
        document.querySelectorAll('main > *').forEach(el => el.style.opacity = '');
        document.querySelectorAll('header > *').forEach(el => el.style.opacity = '');
    }
    let linksHeight = window.innerHeight - navHeight - 30 - document.querySelector('.controls--user').clientHeight;
    let infoHeight = (window.innerHeight - navHeight - 70 - document.querySelector('.controls--user').clientHeight) / 2;
    document.querySelector('.controls--links .scroll').style.maxHeight = `${linksHeight}px`;
    document.querySelectorAll('.controls--site .scroll').forEach(info => {
        info.style.maxHeight = `${infoHeight}px`;
        if(info.scrollHeight > infoHeight) {
            info.style.paddingRight = `10px`;
        }
    });
    if(document.querySelector('.controls--links .scroll').scrollHeight > linksHeight) {
        document.querySelector('.controls--links .scroll').style.paddingRight = `10px`;
    }
}

function openMobileMenu() {
    document.querySelector('.ucp--menu-mobile').classList.add('active');
}

function closeMobileMenu() {
    document.querySelector('.ucp--menu-mobile').classList.remove('active');
}

function expandDesc(el) {
    if(el.classList.contains('active')) {
        el.classList.remove('active');
        el.parentNode.nextElementSibling.classList.remove('active');
    } else {
        el.classList.add('active');
        el.parentNode.nextElementSibling.classList.add('active');
    }
}