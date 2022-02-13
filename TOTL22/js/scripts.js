//set anchorlink
let breadcrumbHeight = document.querySelector('.breadcrumb-nav').clientHeight - 12.5;
document.querySelectorAll('.anchorLink').forEach(link => {
    link.style.marginTop = `${(breadcrumbHeight + 20) * -1}px`;
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
let headerHeight = document.querySelector('header').clientHeight || document.querySelector('.profile--header').clientHeight;
window.onscroll = function() {
    if (window.pageYOffset > (headerHeight - 140)) {
        document.querySelector('.breadcrumb-nav').classList.add('scrolled');
    } else {
        document.querySelector('.breadcrumb-nav').classList.remove('scrolled');
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
let codeHeight = document.querySelector('.main-nav--content > .main-nav--code').clientHeight + 45;
document.querySelector('.main-nav--links').style.height = `calc(100vh - ${codeHeight}px)`;


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
    document.querySelector('.profile--menu').style.top = `${breadcrumbHeight}px`;
    let submenuHeight = document.querySelector('.profile--menu').clientHeight;
    document.querySelectorAll('.anchorLink').forEach(link => {
        link.style.marginTop = `${(breadcrumbHeight + submenuHeight + 20) * -1}px`;
    });
}