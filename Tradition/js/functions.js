function scrollFunction() {
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        document.querySelector('.nav--top').classList.add('scrolled');
    } else {
        document.querySelector('.nav--top').classList.remove('scrolled');
    }
} 

function toggleFont() {
    document.body.classList.toggle('lrgFont');
    if(document.body.classList.contains('lrgFont')) {
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

function toggleMenu() {
    document.body.classList.toggle('push');
    document.querySelector('.menuToggle').classList.toggle('fa-bars');
    document.querySelector('.menuToggle').classList.toggle('fa-times');

    if(window.innerWidth < 720) {
        adjustPopoutHeight();
    }
}

function adjustPopoutHeight() {
	let navBox = document.querySelector('.nav--popout');
	let navScroll = document.querySelector('.nav--popout--links > div.scroll');
	let topNav = document.querySelector('.nav--top');
	let topHeight = topNav.clientHeight + 1;
    
    navBox.style.height = "calc(100vh - " + topHeight + "px)";
    navBox.style.gridTemplateRows = "250px calc(100vh - 264px - " + topHeight + "px)";
    navScroll.style.height = "calc(80vh - 264px - " + topHeight + "px)";
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
    let latest = el.parentNode.parentNode.querySelector('.forum--latest'),
        links = el.parentNode.parentNode.querySelector('.forum--subs'),
        descText = el.parentNode.parentNode.querySelector('.forum--text'),
        desc = el.parentNode.parentNode.querySelector('.forum--desc'),
        descNone = el.parentNode.parentNode.querySelector('.forum--none.none-desc'),
        linkNone = el.parentNode.parentNode.querySelector('.forum--none.none-links'),
        linkButton = el.parentNode.parentNode.querySelector('.fa-link'),
        infoButton = el.parentNode.parentNode.querySelector('.fa-info');
    //if latest is showing, hide latest and show description or none
    if(!latest.classList.contains('hide')) {
        toggleHide(latest);
        toggleHide(infoButton);
        toggleHide(infoButton.nextElementSibling);
        if(descText !== null && descText.innerText.length > 0) {
            toggleHide(desc);
        } else {
            toggleHide(descNone);
        }
    }
    //if description is showing, hide and show latest
    else if (!desc.classList.contains('hide')) {
        toggleHide(latest);
        toggleHide(desc);
        toggleHide(infoButton);
        toggleHide(infoButton.nextElementSibling);
    }
    //if description none is showing, hide and show latest
    else if (!descNone.classList.contains('hide')) {
        toggleHide(latest);
        toggleHide(descNone);
        toggleHide(infoButton);
        toggleHide(infoButton.nextElementSibling);
    }
    //if links is showing, hide and show description or none
    else if (!links.classList.contains('hide')) {
        toggleHide(links);
        toggleHide(infoButton);
        toggleHide(infoButton.nextElementSibling);
        toggleHide(linkButton);
        toggleHide(linkButton.nextElementSibling);
        if(descText !== null && descText.innerText.length > 0) {
            toggleHide(desc);
        } else {
            toggleHide(descNone);
        }
    }
    //if link none is showing, hide and show description or none
    else if (!linkNone.classList.contains('hide')) {
        toggleHide(linkNone);
        toggleHide(infoButton);
        toggleHide(infoButton.nextElementSibling);
        toggleHide(linkButton);
        toggleHide(linkButton.nextElementSibling);
        if(descText !== null && descText.innerText.length > 0) {
            toggleHide(desc);
        } else {
            toggleHide(descNone);
        }

    }
}

function showLinks(el) {
    let latest = el.parentNode.parentNode.querySelector('.forum--latest'),
        links = el.parentNode.parentNode.querySelector('.forum--subs'),
        manualLinks = el.parentNode.parentNode.querySelector('.forum--links'),
        autoLinks = el.parentNode.parentNode.querySelector('.subforums'),
        desc = el.parentNode.parentNode.querySelector('.forum--desc'),
        descNone = el.parentNode.parentNode.querySelector('.forum--none.none-desc'),
        linkNone = el.parentNode.parentNode.querySelector('.forum--none.none-links'),
        linkButton = el.parentNode.parentNode.querySelector('.fa-link'),
        infoButton = el.parentNode.parentNode.querySelector('.fa-info'),
        linksExist = false;

    if(manualLinks !== null && manualLinks.querySelectorAll('a').length > 0) {
        linksExist = true;
    }
    if(autoLinks !== null && autoLinks.querySelectorAll('a').length > 0) {
        linksExist = true;
    }

    //if latest is showing, hide latest and show links or none
    if(!latest.classList.contains('hide')) {
        toggleHide(latest);
        toggleHide(linkButton);
        toggleHide(linkButton.nextElementSibling);
        if (linksExist) {
            toggleHide(links);
        } else {
            toggleHide(linkNone);
        }
    }
    //if links is showing, hide and show latest
    else if (!links.classList.contains('hide')) {
        toggleHide(latest);
        toggleHide(links);
        toggleHide(linkButton);
        toggleHide(linkButton.nextElementSibling);
    }
    //if links none is showing, hide and show latest
    else if (!linkNone.classList.contains('hide')) {
        toggleHide(latest);
        toggleHide(linkNone);
        toggleHide(linkButton);
        toggleHide(linkButton.nextElementSibling);
    }
    //if desc is showing, hide and show links or none
    else if (!desc.classList.contains('hide')) {
        toggleHide(desc);
        toggleHide(infoButton);
        toggleHide(infoButton.nextElementSibling);
        toggleHide(linkButton);
        toggleHide(linkButton.nextElementSibling);
        if (linksExist) {
            toggleHide(links);
        } else {
            toggleHide(linkNone);
        }
    }
    //if desc none is showing, hide and show links or none
    else if (!descNone.classList.contains('hide')) {
        toggleHide(descNone);
        toggleHide(infoButton);
        toggleHide(infoButton.nextElementSibling);
        toggleHide(linkButton);
        toggleHide(linkButton.nextElementSibling);
        if (linksExist) {
            toggleHide(links);
        } else {
            toggleHide(linkNone);
        }
    }
}

function toggleHide(item) {
    item.classList.toggle('hide');
}

function swapList() {
    document.querySelectorAll('.online-swap > i').forEach(icon => icon.classList.toggle('hide'));
    document.querySelectorAll('.stats--online > div').forEach(list => list.classList.toggle('hide'));
}


function sortList(el) {
    let sort = el.getAttribute('data-sort');
    accounts.sort((a, b) => {
        a = a[sort];
        b = b[sort];
        if (a < b) {
        return -1;
        }
        if (a > b) {
        return 1;
        }
        return 0;
    });
    populatePage();
}

function populatePage() {
    let html = ``;
    for (let i = 0; i < accounts.length; i++) {
    html += `<div class="members--member">
    <span class="name">${accounts[i].name}</span>
    <span class="alias">${accounts[i].alias}</span>
    <span class="age">${accounts[i].age}</span>
    <span class="face">${accounts[i].face}</span>
    </div>`;
    }
    document.querySelector('#memberList').innerHTML = html;
}

function filterFunction(input, target, itemtype) {
    // Declare variables
    var filter, items = [];
    filter = $(input).val().toLowerCase();
    $(target).each(function() {
            items.push($(this));
    });

    // Loop through all list items, and hide those who don't match the search query
    for (let i = 0; i < items.length; i++) {
        if (items[i].text().toLowerCase().indexOf(filter) > -1) {
            items[i].parents('.members--member').removeClass(itemtype + 'Different');
        } else {
            items[i].parents('.members--member').addClass(itemtype + 'Different');
        }
    }
}