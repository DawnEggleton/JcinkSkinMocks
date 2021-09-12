// Menu Change on Scroll
window.onscroll = function() { scrollFunction() };


// Scroll Links
let linkBox = document.querySelector('.nav--popout--links').clientHeight;
let linkInner = document.querySelector('.nav--popout--links > div').clientHeight;
if(linkInner >= linkBox) {
    document.querySelector('.nav--popout--links > div').classList.add('scroll');
}


// Code Area
console.log($('.nav--code--hide pre code').html());
$('.nav--code--hide pre code').html(
    $('.nav--code--hide pre code').html().replace(/<br>/ig, '').replace(/>/ig, '&gt;').replace(/</ig, '&lt;')
);



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