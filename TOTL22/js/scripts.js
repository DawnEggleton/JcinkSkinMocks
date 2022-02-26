//Adjust navstrip to remove nbsp
$('#navstrip').html($('#navstrip').html().replace(/(?:^(?:&nbsp;)+)|(?:(?:&nbsp;)+$)/g, ''));

//set anchorlink
let breadcrumbHeight;
setTimeout(() => {
    breadcrumbHeight = document.querySelector('.breadcrumb-nav').clientHeight;
    document.querySelectorAll('.anchorLink').forEach(link => {
        link.style.marginTop = `${(breadcrumbHeight + 40) * -1}px`;
    });
}, 400);
window.addEventListener('resize', () => {
    breadcrumbHeight = document.querySelector('.breadcrumb-nav').clientHeight;
    document.querySelectorAll('.anchorLink').forEach(link => {
        link.style.marginTop = `${(breadcrumbHeight + 40) * -1}px`;
    });
});

//Toggles & Cookies
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
    document.querySelector('body').classList.remove('smlFont');
} else {
    document.querySelector('body').classList.remove('lrgFont');
    document.querySelector('body').classList.add('smlFont');
}


//change deco borders
let headerHeight = document.querySelector('header').clientHeight || document.querySelector('main .header').clientHeight;
window.onscroll = function() {
    if (window.pageYOffset > (headerHeight - 140)) {
        document.querySelector('.breadcrumb-nav').classList.add('scrolled');
        if(document.querySelector('.webpage--main-menu')) {
            document.querySelector('.webpage--main-menu').classList.add('scrolled');
        }
    } else {
        document.querySelector('.breadcrumb-nav').classList.remove('scrolled');
        if(document.querySelector('.webpage--main-menu')) {
            document.querySelector('.webpage--main-menu').classList.remove('scrolled');
        }
    }
};


//replace code arrows with html entities
// Code Area
$('.main-nav--code pre textarea').each(function() {
    if($(this).text().trim().length > 0) {
        $(this).text(
            $(this).text().trim().replace(/<br>/ig, '').replace(/>/ig, '>').replace(/</ig, '<')
        );
    } else {
        $(this).parent().parent().remove();
    }
});


//calculate link scroll height
if($('.main-nav--content > .main-nav--code').length > 0) {
	let codeHeight = document.querySelector('.main-nav--content > .main-nav--code').clientHeight + 45;
	document.querySelector('.main-nav--links').style.height = `calc(100vh - ${codeHeight}px)`;
}


//copy code to clipboard
let clipboard = new Clipboard('.clipboard');
clipboard.on('success', function(e) {
    console.log(e);
});
clipboard.on('error', function(e) {
    console.log(e);
});
let clipcode = new Clipboard('.codeclick', {
    target: function(trigger) {
    return trigger.nextElementSibling;
    }
});
$("table[id='CODE-WRAP']").each(function() {
    var cc = $(this).find("td[id='CODE']").html();

    $(this).html(
        "<div class='codeblock'><div class='c-title codeclick'><b>Copy to clipboard</b></div><div class='codecon'><pre><code>"
        + cc +
        "</code></pre></div></div>"
    );
});



/******************
 PROFILE ONLY
 ******************/
if($('body#Profile').length > 0) {
    setTimeout(() => {
        document.querySelector('.profile--menu').style.top = `${breadcrumbHeight - 1}px`;
        let submenuHeight = document.querySelector('.profile--menu').clientHeight;
        document.querySelectorAll('.anchorLink').forEach(link => {
            link.style.marginTop = `${(breadcrumbHeight + submenuHeight + 40) * -1}px`;
        });
    }, 400);
    window.addEventListener('resize', () => {
        breadcrumbHeight = document.querySelector('.breadcrumb-nav').clientHeight;
        document.querySelectorAll('.anchorLink').forEach(link => {
            link.style.marginTop = `${(breadcrumbHeight + 40) * -1}px`;
        });
    });

    const labels = document.querySelectorAll('.tracker--labels button');
    const tabs = document.querySelectorAll('.tracker--tab');
    labels.forEach((label, index) => {
        label.addEventListener('click', e => {
            labels.forEach(label => label.classList.remove('active'));
            e.currentTarget.classList.add('active');
            tabs.forEach(tab => {
                tab.style.left = `${index * -100}%`;
            });
        });
    });

    tabs.forEach(tab => {
        tab.querySelector('.tracker--inner-labels .left').addEventListener('click', e=> {
            if(!e.currentTarget.classList.contains('active')) {
                e.currentTarget.classList.add('active');
                tab.querySelector('.right').classList.remove('active');
                tab.querySelectorAll('.tracker').forEach(innerTab => innerTab.style.left = '0');
            }
        });
        tab.querySelector('.tracker--inner-labels .right').addEventListener('click', e=> {
            if(!e.currentTarget.classList.contains('active')) {
                e.currentTarget.classList.add('active');
                tab.querySelector('.left').classList.remove('active');
                tab.querySelectorAll('.tracker').forEach(innerTab => innerTab.style.left = '-100%');
            }
        });
    });
}




/******************
 INDEX/SC ONLY
******************/
if($('body#idx').length > 0 || $('body#SC').length > 0) {
    $('#recent-topics-clip').append($('#recent-topics tbody').html());
    $('#recent-topics').remove();
}


/*****************
 Webpages ONLY
******************/

if($('body#Pages').length > 0) {
    setTimeout(() => {
        let submenuHeight = document.querySelector('.webpage--sub-menu').clientHeight;
        console.log(submenuHeight);
        document.querySelector('.webpage--sticky').style.top = `${breadcrumbHeight - 1}px`;
        document.querySelectorAll('.webpage--sub-menu').forEach(submenu => {
            submenu.style.top = `${breadcrumbHeight - 1}px`;
        });
        document.querySelectorAll('.webpage--pop-menu').forEach(submenu => {
            submenu.style.top = `${breadcrumbHeight + submenuHeight - 1}px`;
        });
        document.querySelectorAll('.webpage--section').forEach(section => {
            section.style.minHeight = `calc(100vh - ${breadcrumbHeight - 1}px)`;
        })
    }, 400);
}