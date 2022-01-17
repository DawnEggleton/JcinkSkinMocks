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
    //toggle css states
    document.querySelector('.controls.guestOnly').classList.toggle('active');
    document.querySelector('main').classList.toggle('controls-open');
    document.querySelector('nav').classList.toggle('controls-open');
    document.querySelector('header').classList.toggle('controls-open');
    setControlSizes('visitor');
}

function openControls() {
    //toggle css states
    document.querySelector('.controls.memOnly').classList.toggle('active');
    document.querySelector('main').classList.toggle('controls-open');
    document.querySelector('nav').classList.toggle('controls-open');
    document.querySelector('header').classList.toggle('controls-open');
    setControlSizes('member');
}

function setControlSizes(userType) {
    //find heights
    console.log(userType);
    let parent = document.querySelector('.controls.memOnly');
    if(userType === 'visitor') {
        parent = document.querySelector('.controls.guestOnly');
    }
    fullHeight = window.innerHeight - navHeight;
    let minusUser = fullHeight - parent.querySelector('.controls--user').clientHeight - 2;
    let smallScroll = minusUser - parent.querySelector('.controls--site-info-staff').clientHeight - 60;
    let largeScroll = minusUser - 200, imageHeight = 200;
    if (window.innerWidth > 1280) {
        largeScroll = minusUser;
        imageHeight = minusUser;
    }
    
    //set heights
    parent.querySelector('.controls--site').style.height = `${minusUser}px`;
    parent.querySelector('.controls--site-image').style.height = `${imageHeight}px`;
    parent.querySelectorAll('.controls--site-info .scroll').forEach(scroll => scroll.style.maxHeight = `${smallScroll}px`);

    if(userType === 'member') {
        parent.querySelector('.controls--site-links .scroll').style.maxHeight = `${largeScroll - 60}px`;
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

function adjustPostRow(diff) {
    console.log(diff);
}

function contentTabs(tabs, labels) {
    if(tabs.length === labels.length) {
        if(tabs.length > 1) {
            tabs[0].classList.add('active');
            labels[0].classList.add('active');
            labels.forEach((label, index) => {
                label.addEventListener('click', e => {
                    labels.forEach(label => label.classList.remove('active'));
                    e.currentTarget.classList.add('active');
                    let move = -100 * index;
                    tabs.forEach(tab => {
                        tab.style.left = `${move}%`;
                    });
                })
            })
        }
    } else {
        console.log('error! tab count does not equal label count');
    }
}