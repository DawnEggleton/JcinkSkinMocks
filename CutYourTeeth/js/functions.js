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

function contentTabs(tabSelector, labelSelector, direction) {
    let tabs = document.querySelectorAll(tabSelector);
    let labels = document.querySelectorAll(labelSelector);
    if(tabs.length === labels.length) {
        if(tabs.length > 1) {
            tabs[0].classList.add('active');
            labels[0].classList.add('active');
            labels.forEach((label, index) => {
                label.addEventListener('click', e => {
                    labels.forEach(label => label.classList.remove('active'));
                    e.currentTarget.classList.add('active');
                    let move = -100 * index;
                    if(direction === 'h') {
                        tabs.forEach(tab => {
                            tab.style.left = `${move}%`;
                        });
                    } else if(direction === 'v') {
                        tabs.forEach(tab => {
                            tab.style.top = `${move}%`;
                        });
                    }
                })
            })
        }
    } else {
        console.log('error! tab count does not equal label count');
    }
}

function toggleFilters() {
    document.querySelector('.ml--top button.toggle-filter').classList.toggle('filtersOpen');
    document.querySelector('.ml--filters').classList.toggle('filtersOpen');
    document.querySelector('.ml--top button.toggle-sort').classList.remove('sortOpen');
    document.querySelector('.ml--sort').classList.remove('sortOpen');
}

function toggleSort() {
    document.querySelector('.ml--top button.toggle-filter').classList.remove('filtersOpen');
    document.querySelector('.ml--filters').classList.remove('filtersOpen');
    document.querySelector('.ml--top button.toggle-sort').classList.toggle('sortOpen');
    document.querySelector('.ml--sort').classList.toggle('sortOpen');
}

function capitalize(str, separators) {
    separators = separators || [ ' ' ];
    var regex = new RegExp('(^|[' + separators.join('') + '])(\\w)', 'g');
    return str.replace(regex, function(x) { return x.toUpperCase(); });
}



function addRequired(field) {
    document.querySelector(field).setAttribute('required', true);
}
function removeRequired(field) {
    document.querySelector(field).removeAttribute('required');   
}
function showFields(fields) {
    document.querySelectorAll(fields).forEach(field => {
        field.classList.remove('hide');
    });
}
function hideFields(fields) {
    document.querySelectorAll(fields).forEach(field => {
        field.classList.add('hide');
    });
}

function structureFaceClaim (data, infoClip = '#faces') {
    data.sort((a, b) => {
        aValue = a.Face;
        bValue = b.Face;
        if (aValue < bValue) {
            return -1;
        } else if (aValue > bValue) {
            return 1;
        } else {
            return 0;
        }
    });
    let html = ``;
    data.forEach((character, i) => {
        if(i === 0) {
            html += claimHeader(character.Face[0]);
            html += characterBox(character.AccountID, character.GroupID, character.Face, [character.Character, character.Member]);
        } else if(data[i - 1].Face[0] !== character.Face[0]) {
            html += claimHeader(character.Face[0]);
            html += characterBox(character.AccountID, character.GroupID, character.Face, [character.Character, character.Member]);
        } else {
            html += characterBox(character.AccountID, character.GroupID, character.Face, [character.Character, character.Member]);
        }
    });
    document.querySelector(infoClip).insertAdjacentHTML('beforeend', html);
}

function claimHeader(title) {
    return `<h3 class="fullWidth"><hr />${title}<hr /></h3>`;
}

function claimSubheader(title) {
    return `<h4 class="fullWidth"><hr />${title}<hr /></h4>`;
}

function characterBox(id, group, bold, lines = []) {
    let box = `<a href="?showuser=${id}" class="claim--item g-${group}">
    <b>${bold}</b>`;
    if(lines.length > 0) {
        lines.forEach(line => {
            box += `<span>${line}</span>`;
        });
    }
    box += `</a>`;
    return box;
}

function postToGoogle(formtype = 'POST') {
    let member = $("#sort-member").val().toLowerCase();
    let character = $("#sort-character").val().toLowerCase();
    let accountID = $("#sort-id").val();
    let group = $("#sort-group").find(":selected").text().toLowerCase();
    let groupID = $("#sort-group").val();
    let face = $("#sort-face").val().toLowerCase();
    let power1 = $("#sort-power1").val().toLowerCase();
    let power2 = $("#sort-power1").val().toLowerCase();
    let power3 = $("#sort-power1").val().toLowerCase();
    let employer = $("#sort-company").val().toLowerCase();
    let location = $("#sort-joblocation").find(":selected").val().toLowerCase();
    let career = $("#sort-position").val().toLowerCase();
    let program = $("#sort-program").val().toLowerCase();
    let canon = $("#sort-canon").find(":selected").val();
    let allegiance = $("#sort-allegiance").find(":selected").val();
    let role = $("#sort-role").val().toLowerCase();
    let message = `**${member}** has requested sorting for **${character}**.\n**View Profile:** https://playedgod.jcink.net/?showuser=${accountID}\n`;
    if(canon === 'y') {
        message += `**Allegiance:** ${allegiance}\n`;
        message += `**Role:** ${role}\n`;
        message += `\`\`\`<a href="showuser=${accountID}" class="g-${groupID}">Played by ${character}</a>\`\`\``;
    }
  
    $.ajax({
      url: `https://script.google.com/macros/s/AKfycbwwxDZR9UXX3wH6hvYlmeNbD-vNgSiBNLR9vrbOnj4OYWvQuY7oqy4ORNftt_7aT2a4/exec`,   
      data: {
        "Member": member,
        "Character": character,
        "AccountID": accountID,
        "GroupName": group,
        "GroupID": groupID,
        "Face": face,
        "Power1": power1,
        "Power2": power2,
        "Power3": power3,
        "Employer": employer,
        "Location": location,
        "Career": career,
        "Program": program,
      },
      method: formtype,
      type: formtype,
      dataType: "json", 
      success: function () {
          console.log('form submitted successfully');
          sendSortRequest(message);
          document.querySelector('#warning').innerHTML = 'Success! Your character has been added to the sheet.';
      },
      error: function (jqXHR, textStatus, errorThrown) {
          console.log('error xhr: ' + jqXHR.status);
          console.log('error status: ' + textStatus);
          console.log('error text: ' + errorThrown);
          document.querySelector('#warning').innerHTML = `Whoops! The sheet connection didn't quite work. Please refresh the page and try again! If this persists, please open the console (ctrl + shift + J) and let Lux know the error xhr, error status, and error text values.`;
      },
      complete: function () {
          formReset();
          $('button[type="submit"]').text('Submit');
      }
    });
  
    return false;
}

function postToReserve(formtype = 'POST') {
    let member = $("#reserve-member").val().toLowerCase();
    let face = $("#reserve-face").val().toLowerCase();
    let message = `**${member}** has reserved **${face}**.`;
  
    $.ajax({
      url: `https://script.google.com/macros/s/AKfycbzY7h7UH6xLsZgpuoFVdWUPS31a9Ev0t0Yn4pxgjjMeCXaPS7TvM6ie4JEwfovsB65gzw/exec`,   
      data: {
        "Member": member,
        "Face": face,
      },
      method: formtype,
      type: formtype,
      dataType: "json", 
      success: function () {
          console.log('form submitted successfully');
          sendReserveRequest(message);
          document.querySelector('#warning-reserves').innerHTML = 'Success! Your character has been added to the sheet.';
      },
      error: function (jqXHR, textStatus, errorThrown) {
          console.log('error xhr: ' + jqXHR.status);
          console.log('error status: ' + textStatus);
          console.log('error text: ' + errorThrown);
          document.querySelector('#warning-reserves').innerHTML = `Whoops! The sheet connection didn't quite work. Please refresh the page and try again! If this persists, please open the console (ctrl + shift + J) and let Lux know the error xhr, error status, and error text values.`;
      },
      complete: function () {
        $('#reserve').trigger('reset');
          $('button[type="submit"]').text('Submit');
      }
    });
  
    return false;
}

function postToUpdate(formtype = 'POST') {
    let member = $("#update-member").val().toLowerCase();
    let character = $("#update-character").val().toLowerCase();
    let face = $("#update-face").val().toLowerCase();
    let power1 = $("#update-power1").val().toLowerCase();
    let power2 = $("#update-power1").val().toLowerCase();
    let power3 = $("#update-power1").val().toLowerCase();
    let employer = $("#update-company").val().toLowerCase();
    let location = $("#update-joblocation").find(":selected").val().toLowerCase();
    let career = $("#update-position").val().toLowerCase();
    let program = $("#update-program").val().toLowerCase();
    let allegiance = $("#update-allegiance").find(":selected").text().toLowerCase();
    let role = $("#update-role").val().toLowerCase();
    let message = `**${member}** has requested updates/additions to the claims list for **${character}**.`;
    if(face) {
        message += `\n**Face:** ${face}`;
    }
    if(power1) {
        message += `\n**Powers:** ${power1}`;
    }
    if(power2) {
        message += `, ${power2}`;
    }
    if(power3) {
        message += `, ${power2}`;
    }
    if(employer) {
        message += `\n**Employment:** Works for *${employer}* (located in forum ${location}) as ${career}`;
    }
    if(program) {
        message += `\n**University Program:** ${program}`;
    }
    if(allegiance) {
        message += `\n**Canon Addition:** Aligned with ${allegiance} as ${role}`;
    }
    if(document.querySelector('input[value="unemploy"]:checked')) {
        message += `\nAnd remove from employment claims.`
    }
    
    sendUpdateRequest(message);
    $('#update').trigger('reset');
}
function sendSortRequest(message) {
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/965361289700462693/khcio9iJC4dYKOGP8Mn8_5WNPNLvesu96dE1F7jdOSNSANVEXGzSMaNiHpBrA19NDq4z");

    request.setRequestHeader('Content-type', 'application/json');

    const params = {
        username: "Site Notifications",
        avatar_url: "https://files.jcink.net/uploads2/playedgod/2021/bust_min.png",
        content: message
    }

    request.send(JSON.stringify(params));
}
function sendReserveRequest(message) {
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/965379200976556042/pwWq2vj00H_Mfbvy5nPy0zVDsYsM1jwqrcXaVxhiA-X9f0JzQEo1bz7SaZoNTZ5B7oRr");

    request.setRequestHeader('Content-type', 'application/json');

    const params = {
        content: message
    }

    request.send(JSON.stringify(params));
}
function sendUpdateRequest(message) {
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/965397095639048212/JYuWMzUQtCd4MTdfYH5K0Z0KsNyd9LKE2HLu_nAGhuoCHjo5sNvNhv3ofjau6_RltJHV");

    request.setRequestHeader('Content-type', 'application/json');

    const params = {
        content: message
    }

    request.send(JSON.stringify(params));
}


function formReset() {
    $('#sort').trigger('reset');
    hideFields('.ifJob, .ifMeta, .ifStudent, .ifCanon');
    removeRequired('#sort-company');
    removeRequired('#sort-joblocation');
    removeRequired('#sort-position');
    removeRequired('#sort-power1');
    removeRequired('#sort-program');
    removeRequired('#sort-allegiance');
    removeRequired('#sort-role');
}

function webpageTabs() {
    let mainItems = document.querySelectorAll('.webpage--main-menu a');
    let menuSections = document.querySelectorAll('.webpage--sub-menu-section');
    let subItems = document.querySelectorAll('.webpage--sub-menu-section a');
    let tabs = document.querySelectorAll('.webpage--tab');

    //main menu - on click, change submenu
    mainItems.forEach((item, index) => {
        item.addEventListener('click', e => {
            mainItems.forEach(item => item.classList.remove('active'));
            e.currentTarget.classList.add('active');
            menuSections.forEach(item => item.classList.remove('active'));
            menuSections[index].classList.add('active');
        });
    });

    //sub menu - on click, change content
    subItems.forEach((item, index) => {
        item.addEventListener('click', e => {
            subItems.forEach(item => item.classList.remove('active'));
            e.currentTarget.classList.add('active');
            tabs.forEach(item => item.classList.remove('active'));
            tabs[index].classList.add('active');
        });
    });


    if (window.location.hash){
        //get hash
        let hash = $.trim( window.location.hash );
        let selected = document.querySelector(`.webpage--sub-menu-section a[href="${hash}"]`);
        let selectedCategory = selected.dataset.category;
        //find the sub menu/inner menu link with the matching hash
        if (hash) {
            $(selected).trigger('click');
        }
        //select based on this
        let hashMain = document.querySelector(`.webpage--main-menu a[data-group="${selectedCategory}"]`);
        let hashSection = document.querySelector(`.webpage--sub-menu-section[data-category="${selectedCategory}"]`);
        let hashContent = document.querySelector(`.webpage--tab[data-tab="${hash}"]`);

        //Tabs
        //Remove active from everything
        mainItems.forEach(item => item.classList.remove('active'));
        menuSections.forEach(item => item.classList.remove('active'));
        subItems.forEach(item => item.classList.remove('active'));
        tabs.forEach(item => item.classList.remove('active'));
        //Add active
        hashMain.classList.add('active');
        selected.classList.add('active');
        hashSection.classList.add('active');
        hashContent.classList.add('active');
    } else {
        //Auto-select tab without hashtag present
        document.querySelector('.webpage--main-menu a').classList.add('active');
        document.querySelector('.webpage--sub-menu-section').classList.add('active');
        document.querySelector('.webpage--sub-menu-section a').classList.add('active');
        document.querySelector('.webpage--tab').classList.add('active');
    }


    checkJob();
    checkCanon();
    checkStudent();
    checkMeta();

    //set up form hide/shows
    document.querySelector('#sort-job').addEventListener('change', () => {
        checkJob();
    });
    document.querySelector('#sort-canon').addEventListener('change', () => {
        checkCanon();
    });
    document.querySelector('#sort-student').addEventListener('change', () => {
        checkStudent();
    });
    document.querySelector('#sort-meta').addEventListener('change', () => {
        checkMeta();
    });
}


function checkJob() {
    let selected = $("#sort-job").find(":selected").val();
    if(selected != 'y') {
        hideFields(`.ifJob`);
        removeRequired('#sort-company');
        removeRequired('#sort-joblocation');
        removeRequired('#sort-position');
    } else {
        showFields(`.ifJob`);
        addRequired('#sort-company');
        addRequired('#sort-joblocation');
        addRequired('#sort-position');
    }
}
function checkMeta() {
    let selected = $("#sort-meta").find(":selected").val();
    if(selected != 'y') {
        hideFields(`.ifMeta`);
        removeRequired('#sort-power1');
    } else {
        showFields(`.ifMeta`);
        addRequired('#sort-power1');
    }
}
function checkStudent() {
    let selected = $("#sort-student").find(":selected").val();
    if(selected != 'y') {
        hideFields(`.ifStudent`);
        removeRequired('#sort-program');
    } else {
        showFields(`.ifStudent`);
        addRequired('#sort-program');
    }
}
function checkCanon() {
    let selected = $("#sort-canon").find(":selected").val();
    if(selected != 'y') {
        hideFields(`.ifCanon`);
        removeRequired('#sort-allegiance');
        removeRequired('#sort-role');
    } else {
        showFields(`.ifCanon`);
        addRequired('#sort-allegiance');
        addRequired('#sort-role');
    }
}

function openHelp(e) {
    e.classList.toggle('show');
    e.parentNode.parentNode.parentNode.querySelector('.help').classList.toggle('show');
}

function structureReserves(data) {
    let current = new Date();
    let active = data.filter(item => {
        let time = new Date(item.Timestamp);
        let difference = Math.floor(((current - time) / (1000*60*60*24)));
        return difference < 8;
    });
    active.sort((a, b) => {
        aValue = a.Face;
        bValue = b.Face;
        if (aValue < bValue) {
            return -1;
        } else if (aValue > bValue) {
            return 1;
        } else {
            return 0;
        }
    });
    let html = ``;
    active.forEach(reserve => {
        let resDate = new Date(reserve.Timestamp);
        resDate.setDate(resDate.getDate() + 7);
        const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october',	'november', 'december'];
        html += `<div class="claim-item">
            <b>${reserve.Face}</b>
            <span>Reserved by ${reserve.Member}</span>
            <span>Expires ${months[resDate.getMonth()]} ${resDate.getDate()}, ${resDate.getFullYear()}</span>
        </div>`;
    });
    document.querySelector('#clip-reserves').insertAdjacentHTML('beforeend', html);
}
function structureFaces(data) {
    data.sort((a, b) => {
        aValue = a.Face;
        bValue = b.Face;
        if (aValue < bValue) {
            return -1;
        } else if (aValue > bValue) {
            return 1;
        } else {
            return 0;
        }
    });
    let html = ``;
    data.forEach(character => {
        html += `<a class="g-${character.groupID}" href="?showuser=${character.AccountID}">
            <div class="claim-item">
                <b>${character.Face}</b>
                <span>Played by ${character.Member}</span>
            </div>
        </a>`;
    });
    document.querySelector('#clip-faces').insertAdjacentHTML('beforeend', html);
}
function structureJobs(data) {
    let employed = data.filter(item => item.Employer);
    let students = data.filter(item => item.Program);
    console.log(employed);
    console.log(students);
}
function structurePowers(data) {
    let metas = data.filter(item => item.Power1);
    metas.sort((a, b) => {
        aValue = a.Character;
        bValue = b.Character;
        if (aValue < bValue) {
            return -1;
        } else if (aValue > bValue) {
            return 1;
        } else {
            return 0;
        }
    });
    let html = ``;
    metas.forEach(character => {
        html += `<a class="g-${character.groupID}" href="?showuser=${character.AccountID}">
            <div class="claim-item">
                <b>${character.Character}</b>
                <span>${character.Power1}</span>
                <span>${character.Power2}</span>
                <span>${character.Power3}</span>
            </div>
        </a>`;
    });
    document.querySelector('#clip-powers').insertAdjacentHTML('beforeend', html);
}