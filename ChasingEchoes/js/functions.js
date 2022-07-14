
function setBrightness() {
    if(localStorage.getItem('brightness') !== null) {
        switch(localStorage.getItem('brightness')) {
            case '1':
                document.querySelector('body').classList.remove('light');
                document.querySelector('body').classList.remove('medium');
                document.querySelector('body').classList.add('dark');
                document.querySelectorAll('input[name="setting-brightness]').forEach(slider => slider.value = 1);
                break;
            case '2':
                document.querySelector('body').classList.remove('light');
                document.querySelector('body').classList.add('medium');
                document.querySelector('body').classList.remove('dark');
                document.querySelectorAll('input[name="setting-brightness]').forEach(slider => slider.value = 2);
                break;
            case '3':
            default:
                document.querySelector('body').classList.add('light');
                document.querySelector('body').classList.remove('medium');
                document.querySelector('body').classList.remove('dark');
                document.querySelectorAll('input[name="setting-brightness]').forEach(slider => slider.value = 1);
                break;
        }
    } else {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.querySelector('body').classList.remove('light');
            document.querySelector('body').classList.remove('medium');
            document.querySelector('body').classList.add('dark');
            document.querySelectorAll('input[name="setting-brightness]').forEach(slider => slider.value = 1);
            localStorage.setItem('brightness', '1');
        } else {
            document.querySelector('body').classList.add('light');
            document.querySelector('body').classList.remove('medium');
            document.querySelector('body').classList.remove('dark');
            document.querySelectorAll('input[name="setting-brightness]').forEach(slider => slider.value = 3);
            localStorage.setItem('brightness', '3');
        }
    }
}
function setSize() {
    if(localStorage.getItem('size') !== null) {
        switch(localStorage.getItem('size')) {
            case '1':
                document.querySelector('body').classList.add('smFont');
                document.querySelector('body').classList.remove('mdFont');
                document.querySelector('body').classList.remove('lgFont');
                document.querySelectorAll('input[name="setting-size]').forEach(slider => slider.value = 1);
                document.querySelectorAll('input[name="setting-size]').forEach(slider => slider.value = 1);
                break;
            case '2':
                document.querySelector('body').classList.remove('smFont');
                document.querySelector('body').classList.add('mdFont');
                document.querySelector('body').classList.remove('lgFont');
                document.querySelectorAll('input[name="setting-size]').forEach(slider => slider.value = 2);
                break;
            case '3':
            default:
                document.querySelector('body').classList.remove('smFont');
                document.querySelector('body').classList.remove('mdFont');
                document.querySelector('body').classList.add('lgFont');
                document.querySelectorAll('input[name="setting-size]').forEach(slider => slider.value = 3);
                break;
        }
    } else {
        document.querySelector('body').classList.add('smFont');
        document.querySelector('body').classList.remove('mdFont');
        document.querySelector('body').classList.remove('lgFont');
        document.querySelectorAll('input[name="setting-size]').forEach(slider => slider.value = 1);
        localStorage.setItem('size', '1');
    }
}

function toggleMenu(e) {
    let menu = e.parentNode.parentNode;
    if (menu.classList.contains('is-open')) {
        menu.classList.remove('is-open');
    } else {
        menu.classList.add('is-open');
    }
}