function setBrightness() {
    if(localStorage.getItem('brightness') !== null) {
        switch(localStorage.getItem('brightness')) {
            case '1':
                document.querySelector('body').classList.remove('light');
                document.querySelector('body').classList.remove('medium');
                document.querySelector('body').classList.add('dark');
                break;
            case '2':
                document.querySelector('body').classList.remove('light');
                document.querySelector('body').classList.add('medium');
                document.querySelector('body').classList.remove('dark');
                break;
            case '3':
            default:
                document.querySelector('body').classList.add('light');
                document.querySelector('body').classList.remove('medium');
                document.querySelector('body').classList.remove('dark');
                break;
        }
    } else {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.querySelector('body').classList.remove('light');
            document.querySelector('body').classList.remove('medium');
            document.querySelector('body').classList.add('dark');
            localStorage.setItem('brightness', '1');
        } else {
            document.querySelector('body').classList.add('light');
            document.querySelector('body').classList.remove('medium');
            document.querySelector('body').classList.remove('dark');
            localStorage.setItem('brightness', '3');
        }
    }
    document.querySelectorAll('input[name="setting-brightness"]').forEach(slider => slider.value = localStorage.getItem('brightness'));
}
function setSize() {
    if(localStorage.getItem('size') !== null) {
        switch(localStorage.getItem('size')) {
            case '1':
                document.querySelector('body').classList.add('smFont');
                document.querySelector('body').classList.remove('mdFont');
                document.querySelector('body').classList.remove('lgFont');
                break;
            case '2':
                document.querySelector('body').classList.remove('smFont');
                document.querySelector('body').classList.add('mdFont');
                document.querySelector('body').classList.remove('lgFont');
                break;
            case '3':
            default:
                document.querySelector('body').classList.remove('smFont');
                document.querySelector('body').classList.remove('mdFont');
                document.querySelector('body').classList.add('lgFont');
                break;
        }
    } else {
        document.querySelector('body').classList.add('smFont');
        document.querySelector('body').classList.remove('mdFont');
        document.querySelector('body').classList.remove('lgFont');
        localStorage.setItem('size', '1');
    }
    document.querySelectorAll('input[name="setting-size"]').forEach(slider => slider.value = localStorage.getItem('size'));
}

function toggleMenu(e) {
    let menu = e.parentNode.parentNode;
    if (menu.classList.contains('is-open')) {
        menu.classList.remove('is-open');
    } else {
        document.querySelectorAll('.nav--popout').forEach(menu => {
            menu.classList.remove('is-open');
        });
        menu.classList.add('is-open');
    }
}

function switchAccount(e) {
    e.classList.toggle('is-open');
}