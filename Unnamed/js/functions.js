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
    alert('Visitor toggle');
}

function openControls() {
    document.querySelector('.controls').classList.toggle('active');
    let linksHeight = window.innerHeight - navHeight - 30 - document.querySelector('.controls--user').clientHeight;
    document.querySelector('.controls--links .scroll').style.maxHeight = `${linksHeight}px`;
    if(document.querySelector('.controls--links .scroll').scrollHeight > linksHeight) {
        document.querySelector('.controls--links .scroll').style.paddingRight = '10px';
    }
}