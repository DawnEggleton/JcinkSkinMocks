function toggleMenu() {
    document.querySelector('body').classList.toggle('nav-open');
}


function highlightCode() {
    console.log('clicked');
    let clipcodeQuick = new Clipboard('.copyQuick', {
        target: function(trigger) {
            console.log(trigger.nextElementSibling);
            return trigger.nextElementSibling.querySelector('textarea');
        }
    });
}


function toggleSize() {
    document.body.classList.toggle('smlFont');
    document.body.classList.toggle('lrgFont');
    if(document.body.classList.contains('lrgFont')) {
        localStorage.setItem("SIZEMODE", "1");
    } else {
        localStorage.setItem("SIZEMODE", "0");
    }
}


function toggleTheme() {
    document.body.classList.toggle('light');
    document.body.classList.toggle('dark');
    if(document.body.classList.contains('dark')) {
        localStorage.setItem("COLORMODE", "1");
    } else {
        localStorage.setItem("COLORMODE", "0");
    }
}

function capitalize(str, separators) {
    separators = separators || [ ' ' ];
    var regex = new RegExp('(^|[' + separators.join('') + '])(\\w)', 'g');
    return str.replace(regex, function(x) { return x.toUpperCase(); });
}




/* SORTING FORM FUNCTIONS */
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
function checkEmployed() {
    let selected = document.querySelector('#sort-employed').options[document.querySelector('#sort-employed').selectedIndex].value;
    if(selected == 'y') {
        showFields('.ifJob');
        addRequired('#sort-jobtitle');
    } else {
        hideFields('.ifJob');
        removeRequired('#sort-jobtitle');
    }
}
function checkUniversity() {
    let selected = document.querySelector('#sort-universitystudent').options[document.querySelector('#sort-universitystudent').selectedIndex].value;
    if(selected == 'y') {
        showFields('.ifUni');
        addRequired('#sort-universityname');
        addRequired('#sort-universityprogram');
        addRequired('#sort-universityyear');
    } else {
        hideFields('.ifUni');
        removeRequired('#sort-universityname');
        removeRequired('#sort-universityprogram');
        removeRequired('#sort-universityyear');
    }
}
function checkYear() {
    let selected = document.querySelector('#sort-hogwartsyear').options[document.querySelector('#sort-hogwartsyear').selectedIndex].value;
    switch (selected) {
        case '1':
        case '2':
            showFields('.ifCore, .ifStart');
            hideFields('.ifLower, .ifLeadershipershipPossible, .ifUpper, .ifElec');
            break;
        case '3':
        case '4':
            showFields('.ifLower, .ifElec, .ifCore');
            hideFields('.ifLeadershipershipPossible, .ifUpper, .ifStart');
            break;
        case '5':
            showFields('.ifLeadershipershipPossible, .ifLower, .ifElec, .ifCore');
            hideFields('.ifUpper, .ifStart');
            break;
        case '6':
        case '7':
            showFields('.ifLeadershipershipPossible, .ifUpper, .ifElec');
            hideFields('.ifLower, .ifStart, .ifCore');
            break;
        default:
            hideFields('.ifLower, .ifUpper, .ifLeadership, .ifLeadershipershipPossible, .ifQuidditch, .ifElec, .ifStart, .ifCore');
            break;
    } 
}
function checkLeadPos() {
    let selected = document.querySelector('#sort-leadership').options[document.querySelector('#sort-leadership').selectedIndex].value;
    if(selected == 'y') {
        showFields('.ifLeadership');
    } else {
        hideFields('.ifLeadership');
    }  
}
function checkQuid() {
    let selected = document.querySelector('#sort-quidditch').options[document.querySelector('#sort-quidditch').selectedIndex].value;
    if(selected == 'y') {
        showFields('.ifQuidditch');
    } else {
        hideFields('.ifQuidditch');
    }  
}

function structureFaceClaim (data) {
    data.sort(function(a, b) {
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
            html += `<h3 class="fullWidth">${character.Face[0]}</h3>`;
            html += `<div class="claim--item g-${character.GroupID}">
                <b>${character.Face}</b>
                <span>${character.Character}</span>
                <span>Played by ${character.Member}</span>
                </div>`;
        } else if(data[i - 1].Face[0] !== character.Face[0]) {
            html += `<h3 class="fullWidth">${character.Face[0]}</h3>`;
            html += `<div class="claim--item g-${character.GroupID}">
                <b>${character.Face}</b>
                <span>${character.Character}</span>
                <span>Played by ${character.Member}</span>
                </div>`;
        } else {
            html += `<div class="claim--item g-${character.GroupID}">
                <b>${character.Face}</b>
                <span>${character.Character}</span>
                <span>Played by ${character.Member}</span>
                </div>`;
        }
    });
    document.querySelector('#faces').innerHTML = html;
}

function structureUniClaim (data) {
    let students = data.filter(item => item.School);
    students.sort(function(a, b) {
        aValue = a.School;
        bValue = b.School;
        aName = a.Character;
        bName = b.Character;
        if (aValue < bValue) {
            return -1;
        } else if (aValue > bValue) {
            return 1;
        } else if (aName < bName) {
                return -1;
        } else if (aName > bName) {
            return 1;
        } else {
            return 0;
        }
    });
    let html = ``;
    students.forEach((character, i) => {
        if(i === 0) {
            html += `<h3 class="fullWidth">${character.School}</h3>`;
            html += `<div class="claim--item g-${character.GroupID}">
                <b>${character.Face}</b>
                <span>${character.Character}</span>
                <span>Played by ${character.Member}</span>
                </div>`;
        } else if(students[i - 1].School !== character.School) {
            html += `<h3 class="fullWidth">${character.School}</h3>`;
            html += `<div class="claim--item g-${character.GroupID}">
                <b>${character.Face}</b>
                <span>${character.Character}</span>
                <span>Played by ${character.Member}</span>
                </div>`;
        } else {
            html += `<div class="claim--item g-${character.GroupID}">
                <b>${character.Face}</b>
                <span>${character.Character}</span>
                <span>Played by ${character.Member}</span>
                </div>`;
        }
    });
    document.querySelector('#university').innerHTML = html;
}
                

function postToGoogle() {
  let member = $("#sort-member").val().toLowerCase();
  let character = $("#sort-character").val().toLowerCase();
  let accountID = $("#sort-id").val();
  let group = $("#sort-group").find(":selected").text().toLowerCase();
  let groupID = $("#sort-group").val();
  let face = $("#sort-face").val().toLowerCase();
  let checkboxes = document.querySelectorAll('input[name="abilities"]:checked'), values = [];
  Array.prototype.forEach.call(checkboxes, function(el) {
      let value = el.value;
      if(value == 'animagus') {
          value = `${value} (${document.querySelector("#sort-animagusform").value.toLowerCase()})`;
      }
      values.push(value);
  });
  if($('#sort-otherability').val()) {
      values.push($('#sort-otherability').val().toLowerCase());
  }
  let abilities = values.join(', ');
  let species = $("#sort-species").find(":selected").val();
  if(species == `Not Applicable`) {species = '';}
  let veelablood = $("#sort-veelablood").val();
  if(veelablood == `(select)`) {veelablood = '';}
  let jobsection = $("#sort-jobsection").find(":selected").text().toLowerCase();
  if(jobsection == `(select)`) {jobsection = '';}
  let jobsubsection = $("#sort-jobsubsection").val().toLowerCase();
  let jobtitle = $("#sort-jobtitle").val().toLowerCase();
  let jobnotes = $("#sort-jobnotes").val().toLowerCase();
  let school = $("#sort-universityname").val().toLowerCase();
  let program = $("#sort-universityprogram").val().toLowerCase();
  let universityyear = $("#sort-universityyear").find(":selected").text().toLowerCase();
  if(universityyear == `(select)`) {universityyear = '';}
  let hogwartsyear = $("#sort-hogwartsyear").find(":selected").text().toLowerCase();
  if(hogwartsyear == `(select)`) {hogwartsyear = '';}
  let astronomy = $("#sort-astronomy").find(":selected").text().toLowerCase();
  if(astronomy == `(select)`) {astronomy = '';}
  let charms = $("#sort-charms").find(":selected").text().toLowerCase();
  if(charms == `(select)`) {charms = '';}
  let dada = $("#sort-dada").find(":selected").text().toLowerCase();
  if(dada == `(select)`) {dada = '';}
  let games = $("#sort-games").find(":selected").text().toLowerCase();
  if(games == `(select)`) {games = '';}
  let herbology = $("#sort-herbology").find(":selected").text().toLowerCase();
  if(herbology == `(select)`) {herbology = '';}
  let historyofmagic = $("#sort-historyofmagic").find(":selected").text().toLowerCase();
  if(historyofmagic == `(select)`) {historyofmagic = '';}
  let literacy = $("#sort-literacy").find(":selected").text().toLowerCase();
  if(literacy == `(select)`) {literacy = '';}
  let magicaltheory = $("#sort-magicaltheory").find(":selected").text().toLowerCase();
  if(magicaltheory == `(select)`) {magicaltheory = '';}
  let maths = $("#sort-maths").find(":selected").text().toLowerCase();
  if(maths == `(select)`) {maths = '';}
  let potions = $("#sort-potions").find(":selected").text().toLowerCase();
  if(potions == `(select)`) {potions = '';}
  let transfiguration = $("#sort-transfiguration").find(":selected").text().toLowerCase();
  if(transfiguration == `(select)`) {transfiguration = '';}
  let culture = $("#sort-culture").find(":selected").text().toLowerCase();
  if(culture == `(select)`) {culture = '';}
  let culturegrade = $("#sort-culturegrade").find(":selected").text().toLowerCase();
  if(culturegrade == `(select)`) {culturegrade = '';}
  let elec1 = $("#sort-elec1").find(":selected").text().toLowerCase();
  if(elec1 == `(select)`) {elec1 = '';}
  let elec1grade = $("#sort-elec1grade").find(":selected").text().toLowerCase();
  if(elec1grade == `(select)`) {elec1grade = '';}
  let elec2 = $("#sort-elec2").find(":selected").text().toLowerCase();
  if(elec2 == `(select)`) {elec2 = '';}
  let elec2grade = $("#sort-elec2grade").find(":selected").text().toLowerCase();
  if(elec2grade == `(select)`) {elec2grade = '';}
  let elec3 = $("#sort-elec3").find(":selected").text().toLowerCase();
  if(elec3 == `(select)`) {elec3 = '';}
  let elec3grade = $("#sort-elec3grade").find(":selected").text().toLowerCase();
  if(elec3grade == `(select)`) {elec3grade = '';}
  let elec4 = $("#sort-elec4").find(":selected").text().toLowerCase();
  if(elec4 == `(select)`) {elec4 = '';}
  let elec4grade = $("#sort-elec4grade").find(":selected").text().toLowerCase();
  if(elec4grade == `(select)`) {elec4grade = '';}
  let elec5 = $("#sort-elec5").find(":selected").text().toLowerCase();
  if(elec5 == `(select)`) {elec5 = '';}
  let elec5grade = $("#sort-elec5grade").find(":selected").text().toLowerCase();
  if(elec5grade == `(select)`) {elec5grade = '';}
  let elec6 = $("#sort-elec6").find(":selected").text().toLowerCase();
  if(elec6 == `(select)`) {elec6 = '';}
  let elec6grade = $("#sort-elec6grade").find(":selected").text().toLowerCase();
  if(elec6grade == `(select)`) {elec6grade = '';}
  let elec7 = $("#sort-elec7").find(":selected").text().toLowerCase();
  if(elec7 == `(select)`) {elec7 = '';}
  let elec7grade = $("#sort-elec7grade").find(":selected").text().toLowerCase();
  if(elec7grade == `(select)`) {elec7grade = '';}
  let elec8 = $("#sort-elec8").find(":selected").text().toLowerCase();
  if(elec8 == `(select)`) {elec8 = '';}
  let elec8grade = $("#sort-elec8grade").find(":selected").text().toLowerCase();
  if(elec8grade == `(select)`) {elec8grade = '';}
  let quidditchposition = $("#sort-quidditchposition").val().toLowerCase();
  let leadershipposition = $("#sort-leadershipposition").find(":selected").text().toLowerCase();
  if(leadershipposition == `(select)`) {leadershipposition = '';}

  $.ajax({
    url: "https://docs.google.com/forms/u/1/d/e/1FAIpQLSdHej9BAllha02vmUwmNvXWlWpX_0ECX-zUq3bLO5gmSU3PBw/formResponse?embedded=true",
      
    //add your google form generated numbers below which are also the 'names' of your inputs     
    data: {
      "entry.1432517820": member,
      "entry.107957704": character,
      "entry.1642550285": accountID,
      "entry.143362062": group,
      "entry.1355686451": groupID,
      "entry.1726668460": face,
      "entry.622253808": abilities,
      "entry.994119699": (species === `Not Applicable`) ? `` : species,
      "entry.2106914261": (veelablood === `(selected)`) ? `` : veelablood,
      "entry.794218756": (jobsection === `(selected)`) ? `` : jobsection,
      "entry.13065058": jobsubsection,
      "entry.437548501": jobtitle,
      "entry.1508899464": jobnotes,
      "entry.1260116484": school,
      "entry.1662751314": program,
      "entry.876623337": (universityyear === `(selected)`) ? `` : universityyear,
      "entry.2066116776": (hogwartsyear === `(selected)`) ? `` : hogwartsyear,
      "entry.183274541": (astronomy === `(selected)`) ? `` : astronomy,
      "entry.1490442733": (charms === `(selected)`) ? `` : charms,
      "entry.1393178788": (dada === `(selected)`) ? `` : dada,
      "entry.967152081": (games === `(selected)`) ? `` : games,
      "entry.1098395938": (herbology === `(selected)`) ? `` : herbology,
      "entry.1697474133": (historyofmagic === `(selected)`) ? `` : historyofmagic,
      "entry.1903652715": (literacy === `(selected)`) ? `` : literacy,
      "entry.484032441": (magicaltheory === `(selected)`) ? `` : magicaltheory,
      "entry.135635464": (maths === `(selected)`) ? `` : maths,
      "entry.1264662180": (potions === `(selected)`) ? `` : potions,
      "entry.1035411565": (transfiguration === `(selected)`) ? `` : transfiguration,
      "entry.2142142079": (culture === `(selected)`) ? `` : culture,
      "entry.698903169": (culturegrade === `(selected)`) ? `` : culturegrade,
      "entry.1299686648": (elec1 === `(selected)`) ? `` : elec1,
      "entry.768681073": (elec1grade === `(selected)`) ? `` : elec1grade,
      "entry.671470831": (elec2 === `(selected)`) ? `` : elec2,
      "entry.483899832": (elec2grade === `(selected)`) ? `` : elec2grade,
      "entry.1377650876": (elec3 === `(selected)`) ? `` : elec3,
      "entry.261216209": (elec3grade === `(selected)`) ? `` : elec3grade,
      "entry.530618541": (elec4 === `(selected)`) ? `` : elec4,
      "entry.1632241456": (elec4grade === `(selected)`) ? `` : elec4grade,
      "entry.1399421084": (elec5 === `(selected)`) ? `` : elec5,
      "entry.1123859686": (elec5grade === `(selected)`) ? `` : elec5grade,
      "entry.223598383": (elec6 === `(selected)`) ? `` : elec6,
      "entry.1859311863": (elec6grade === `(selected)`) ? `` : elec6grade,
      "entry.76064911": (elec7 === `(selected)`) ? `` : elec7,
      "entry.1321648888": (elec7grade === `(selected)`) ? `` : elec7grade,
      "entry.1638810127": (elec8 === `(selected)`) ? `` : elec8,
      "entry.1094021435": (elec8grade === `(selected)`) ? `` : elec8grade,
      "entry.1227238528": quidditchposition,
      "entry.878358884": leadershipposition
    },
    method: "POST",
    type: "POST",
    dataType: "json", 
    success: function () {
      console.log('success');
    },
    error: function (data) {
      console.log('error');
    },
    complete: function () {
        $('#sort').trigger('reset');
        hideFields('.ifAdult, .ifJob, .ifStudent, .ifLower, .ifUpper, .ifLeadership, .ifLeadershipPossible, .ifQuidditch, .ifElec, .ifStart, .ifCore, .ifAbilities, .ifAnimagus, .ifVeela');
        checkYear();
        checkLeadPos();
        checkQuid();   
        removeRequired('#sort-hogwartsyear');
        removeRequired('#sort-employed');
        removeRequired('#sort-universitystudent');
        $('button[type="submit"]').val('Submit');
        document.querySelector('#warning').innerHTML = 'Success! Your character has been added to the sheet.';
    }
  });

  return false;
}