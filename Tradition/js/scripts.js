/***********************************
	Global, Load ALWAYS
***********************************/

//Toggles
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
} else {
    document.querySelector('body').classList.remove('lrgFont');
}

// Menu Change on Scroll
window.onscroll = function() { scrollFunction() };


// Scroll Links
let linkBox = document.querySelector('.nav--popout--links').clientHeight;
let linkInner = document.querySelector('.nav--popout--links > div').clientHeight;
if(linkInner >= linkBox) {
    document.querySelector('.nav--popout--links > div').classList.add('scroll');
}


// Code Area
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


/***********************************
	Index Or Topic List Only
***********************************/
if($('body#idx').length > 0 || $('body#SF').length > 0) {
	//two tone forum titles
	document.querySelectorAll('.forum--content h3').forEach(forumTitle => {
	    spanLastWords(forumTitle);
	});


	//remove all forum macros from subforum lists
	document.querySelectorAll('a.subforums-macro').forEach(link => {
	    link.remove();
	});
	
	
	//add manual links to subforum link list
	document.querySelectorAll('.forum--links').forEach(linkSet => {
	    let links = linkSet.innerHTML,
	        subs = linkSet.parentNode.parentNode.querySelector('.forum--subs');
	    subs.insertAdjacentHTML('beforeend', links);
	});
	
	
	//append custom forum image to image block
	$('.forum--desc').each(function() {
	    let image = `<img src="${defaultImages.forum}" />`;
	    if($(this).children('img').length > 0) {
	        image = $(this).children('img')[0];
	    }
	    let imageBlock = $(this).parent().parent().prev().children()[0];
	    imageBlock.innerHTML = '';
            $(image).appendTo(imageBlock);
	});
}


/***********************************
	Index Only
***********************************/
if($('body#idx').length > 0) {
	//append recent topics
	$('#recent-topics').appendTo('#recent-topics-clip');
}


/***********************************
	Post View Only
***********************************/
if($('body#ST').length > 0) {
	//remove comma from topic description
	$('.topic-desc').each(function () {
	    let string = $(this).text();
	    let newString = string.replace('[', `<span class="threadDate">`).replace(']', `</span>`);
	    $(this).html(newString);
	});

	//two tone account names
	document.querySelectorAll('.post--name').forEach(name => {
	    spanLastWords(name);
	});
}


/***********************************
	Profile Only
***********************************/
if($('body#Profile').length > 0) {
	//two tone account names
	document.querySelectorAll('main h1').forEach(name => {
	    spanLastWords(name);
	});

	
	//adjust padding on last section before player
	$('.profile--player').prev().css({'padding-bottom': '30px'});
}


/***********************************
	Webpages Only
***********************************/
if($('body#Pages').length > 0) {
	console.log('webpage');
	document.querySelectorAll('.webpage--menu b').forEach(navHeader => {
		navHeader.addEventListener('click', e => {
			$(e.target).toggleClass('active');
		});
	});

	document.querySelectorAll('.webpage--collapse a').forEach(item => {
		item.addEventListener('click', e => {
			changeContent(e);
		});
	});
	if (window.location.hash){
	    let hash = $.trim( window.location.hash );
	    if (hash) {
	        $(hash).trigger('click');
	    }
	    let hashSelect = hash.split('#')[1];
	    let hashLabel = $('#tab-' + hashSelect);
	    let hashTab = $('#tab-' + hashSelect + '-box');
		let hashSection = hashLabel.parent().prev();
	
	    //Tabs
	    $('.webpage--collapse a, .webpage--tab, .webpage--menu b').removeClass('active');
	    hashLabel.addClass('active');
	    hashTab.addClass('active');
	    hashSection.addClass('active');
	} else {
	    //Auto-select  tab without hashtag present
	    $('.webpage--menu').first().children('b').first().addClass('active');
	    $('.webpage--collapse').first().children('a').first().addClass('active');
	    $('.webpage--tab').first().addClass('active');
	}
}