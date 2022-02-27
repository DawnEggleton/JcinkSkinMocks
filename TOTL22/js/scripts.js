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
        document.querySelectorAll('.webpage--menu-sticky').forEach(submenu => {
            submenu.style.top = `${breadcrumbHeight - 1}px`;
        });
        document.querySelectorAll('.webpage--section').forEach(section => {
            section.style.minHeight = `calc(100vh - ${breadcrumbHeight - 1}px)`;
        })
    }, 400);


    document.querySelector('#sort-group').addEventListener('change', () => {
        let selected = document.querySelector('#sort-group').options[document.querySelector('#sort-group').selectedIndex].value;
        switch (selected) {
            case '18':
            case '15':
            case '8':
            case '12':
            case '11':
            case '13':
            case '6':
                showFields('.ifAdult');
                hideFields('.ifStudent, .ifLower, .ifUpper, .ifLeadership, .ifLeadershipPossible, .ifQuidditch, .ifElec, .ifStart, .ifCore');
                checkEmployed();
                removeRequired('#sort-hogwartsyear');
                addRequired('#sort-employed');
                addRequired('#sort-universitystudent');
                break;
            case '17':
                showFields('.ifAdult');
                hideFields('.ifStudent, .ifLower, .ifUpper, .ifLeadership, .ifLeadershipPossible, .ifQuidditch, .ifElec, .ifStart, .ifCore');
                checkEmployed();
                removeRequired('#sort-hogwartsyear');
                addRequired('#sort-employed');
                addRequired('#sort-universitystudent');
                break;
            case '7':
            case '9':
            case '14':
            case '16':
                hideFields('.ifAdult, .ifJob');
                showFields('.ifStudent');
                checkYear();
                checkLeadPos();
                checkQuid();   
                addRequired('#sort-hogwartsyear');
                removeRequired('#sort-employed');
                removeRequired('#sort-universitystudent');
                break;
            default:
                break;
        }  
    });

    //Ability change
    document.querySelector('#sort-abilityexists').addEventListener('change', () => {
        let selected = document.querySelector('#sort-abilityexists').options[document.querySelector('#sort-abilityexists').selectedIndex].value;
        if(selected == 'y') {
            showFields('.ifAbilities');
        } else {
            hideFields('.ifAbilities');
        }
    });
    document.querySelector('#sort-animagus').addEventListener('change', () => {
        if(document.querySelector('#sort-animagus').checked) {
            showFields('.ifAnimagus');
        } else {
            hideFields('.ifAnimagus');
        }
    })

    //Species change
    document.querySelector('#sort-species').addEventListener('change', () => {
        let selected = document.querySelector('#sort-species').options[document.querySelector('#sort-species').selectedIndex].value;
        if(selected == 'veela') {
            showFields('.ifVeela');
        } else {
            hideFields('.ifVeela');
        }
    });

    //Employed change
    document.querySelector('#sort-employed').addEventListener('change', () => {
        checkEmployed();
    });

    //University change
    document.querySelector('#sort-universitystudent').addEventListener('change', () => {
        checkUniversity();
    });

    //Year standing change
    document.querySelector('#sort-hogwartsyear').addEventListener('change', () => {
        checkYear();
    });

    //Student leadership change
    document.querySelector('#sort-leadership').addEventListener('change', () => {
        checkLeadPos();
    });

    //Student quidditch change
    document.querySelector('#sort-quidditch').addEventListener('change', () => {
        checkQuid();
    });


    let instance = [];
    //update instance on change to reduce delay
    document.querySelector('#sort-id').addEventListener('change', () => {
        const url = `https://opensheet.elk.sh/1oxsI5jK9YnNMjo2DI_ocoP0DEPwG-yFJhS7HsRRyBQU/Info`;
        let accountID = $("#sort-id").val();
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            instance = data.filter(item => item.AccountID == accountID);
            console.log(instance);
            if(instance.length === 1) {
                console.log('update');
            } else if (instance.length === 0) {
                console.log('add');
            } else {
                console.log('error! multiple ids exist');
            }
        });
    });
    //submit form - send data if character does not exist, stop submission if they do
    document.querySelector('#sort').addEventListener('submit', e => {
        e.preventDefault();
        if(instance.length === 1) {
            console.log('update');
            document.querySelector('#warning').innerHTML = 'This character already exists in the claims! Please <a href="">update your claims</a> instead.';
        } else if (instance.length === 0) {
            postToGoogle('POST');
            $('button[type="submit"]').val('Submitting...');
        } else {
            console.log('error! multiple instances of id');
        }
    });

}