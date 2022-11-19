function setGroup(id) {
    let form = document.querySelector('#newsort');
    switch (id) {
        case '7':
        case '9':
        case '14':
        case '16':
            form.querySelectorAll('.ifStudent').forEach(field => field.classList.remove('hide'));
            form.querySelectorAll('.ifAdult, .ifJob, .ifUni').forEach(field => field.classList.add('hide'));
            break;
        case '17':
            form.querySelectorAll('.ifStudent, .ifCore, .ifStart, .ifElec, .ifUpper, .ifLeadershipPossible, .ifQuidditch, .ifLeadership').forEach(field => field.classList.add('hide'));
            form.querySelectorAll('.ifAdult').forEach(field => field.classList.remove('hide'));
            let canon = document.querySelector('#sort-canon');
            setShowHide(canon.options[canon.selectedIndex].value, '.ifReturn');
            break;
            case '18':
            case '15':
            case '8':
            case '12':
            case '11':
            case '13':
            case '6':
            form.querySelectorAll('.ifStudent, .ifCore, .ifStart, .ifElec, .ifUpper, .ifLeadershipPossible, .ifQuidditch, .ifLeadership').forEach(field => field.classList.add('hide'));
            form.querySelectorAll('.ifAdult').forEach(field => field.classList.remove('hide'));
            break;
        default:
            break;
    }
}
function setShowHide(value, classList) {
    let form = document.querySelector('#newsort');
    switch (value) {
        case 'y':
            form.querySelectorAll(classList).forEach(field => field.classList.remove('hide'));
            break;
        default:
            form.querySelectorAll(classList).forEach(field => field.classList.add('hide'));
            break;
    }
}
function addJobFields(i) {
    let html = `<label class="form--job-section">
        <strong>Job Section</strong>
        <select name="sort-jobsection-${i}" id="sort-jobsection-${i}">
            <option value="">(select)</option>
            <option value="hogwarts">Hogwarts Castle</option>
            <option value="ministry">Ministry of Magic</option>
            <option value="mungos">St. Mungo's</option>
            <option value="sports">Professional Sports</option>
            <option value="prophet">The Daily Prophet</option>
            <option value="diagon">Diagon Alley</option>
            <option value="horizon">Horizon Alley</option>
            <option value="knockturn">Knockturn Alley</option>
            <option value="mythic">Mythic Alley</option>
            <option value="wizardlondon">Wizarding London (Other)</option>
            <option value="mugglelondon">Muggle London (Other)</option>
            <option value="hogsmeade">Hogsmeade</option>
            <option value="ilkley">Ilkley</option>
            <option value="elsewhere">Elsewhere</option>
            <option value="selfemployed">Self-Employed</option>
        </select>
    </label>
    <label class="form--job-sub-section">
        <strong>
            Job Sub-Section
            <button onclick="openHelp(this)" type="button">
                <i class="fa-solid fa-circle-question"></i>
                <i class="fa-solid fa-circle-xmark"></i>
            </button>
        </strong>
        <i class="help">Equivalent to the grouping underneath the main tab. For example, in the Ministry, these are overarching departments. In Diagon Alley, these are individual businesses. For Professional sports players, ensure it mentions the league/level, if applicable, as well as the sport they play (e.g., British &amp; Irish Quidditch League or International Soccer). REQUIRED unless self-employed.</i>
        <input type="text" name="sort-jobsubsection-${i}" id="sort-jobsubsection-${i}" placeholder="Job Subsection">
    </label>
    <label class="form--job-line1">
        <strong>
            Job Info - Line 1
            <button onclick="openHelp(this)" type="button">
                <i class="fa-solid fa-circle-question"></i>
                <i class="fa-solid fa-circle-xmark"></i>
            </button>
        </strong>
        <i class="help">Unless one of the following applies, this line is reserved for the job title/position of your character. Exceptions are: for Ministry personnel, if they are part of a specific sub-division or team under the overall department (e.g., the Hitwizard Team within Magical Law Enforcement), this team label goes here; for Hogwarts teaching staff, place their speciality; for Quidditch players, please name their team; or, if they are self-employed and have a specific business name. In these instances, place the job title/position in <b>line 2</b>.</i>
        <input type="text" name="sort-jobline1-${i}" id="sort-jobline1-${i}" placeholder="Job Info - Line 1, see help for specifics">
    </label>
    <label class="form--job-line2">
        <strong>
            Job Info - Line 2
            <button onclick="openHelp(this)" type="button">
                <i class="fa-solid fa-circle-question"></i>
                <i class="fa-solid fa-circle-xmark"></i>
            </button>
        </strong>
        <i class="help">Not applicable for characters who are not one of the exception in Line 1 above or are house-specific Hogwarts Staff (e.g., a House Parent). For those exceptions: for Ministry personnel or self-employed individuals, place their job title/position; for Hogwarts teaching staff, place the years they teach (e.g, Years One to Three); for Quidditch, use their position on the team. Additionally, if your character is Hogwarts Staff and is house-specific, please place the house affiliation.</i>
        <input type="text" name="sort-jobline2-${i}" id="sort-jobline2-${i}" placeholder="Job Info - Line 2, see help for specifics">
    </label>`;
    return html;
}
function setHogwartsYear(year) {
    console.log(year);
    let reqClip = document.querySelector('.form--reqclass-clip.form--sort');
    let elecClip = document.querySelector('.form--elecclass-clip.form--sort');
    switch(year) {
        case '1':
        case '2':
            document.querySelectorAll('.ifElec').forEach(field => field.classList.add('hide'));
            document.querySelectorAll('.ifLeadershipPossible').forEach(field => field.classList.add('hide'));
            reqClip.innerHTML = '';
            elecClip.innerHTML = '';
            reqClip.insertAdjacentHTML('beforeend', addStartClasses());
            reqClip.insertAdjacentHTML('beforeend', addCoreClasses());
            break;
        case '3':
        case '4':
            document.querySelectorAll('.ifElec').forEach(field => field.classList.remove('hide'));
            document.querySelectorAll('.ifLeadershipPossible').forEach(field => field.classList.add('hide'));
            reqClip.innerHTML = '';
            elecClip.innerHTML = '';
            reqClip.insertAdjacentHTML('beforeend', addCoreClasses());
            elecClip.insertAdjacentHTML('beforeend', addElecClasses(4));
            break;
        case '5':
            document.querySelectorAll('.ifElec').forEach(field => field.classList.remove('hide'));
            document.querySelectorAll('.ifLeadershipPossible').forEach(field => field.classList.remove('hide'));
            reqClip.innerHTML = '';
            elecClip.innerHTML = '';
            reqClip.insertAdjacentHTML('beforeend', addCoreClasses());
            elecClip.insertAdjacentHTML('beforeend', addElecClasses(4));
            break;
        case '6':
        case '7':
            document.querySelectorAll('.ifElec').forEach(field => field.classList.remove('hide'));
            document.querySelectorAll('.ifLeadershipPossible').forEach(field => field.classList.remove('hide'));
            reqClip.innerHTML = '';
            elecClip.innerHTML = '';
            elecClip.insertAdjacentHTML('beforeend', addElecClasses(8));
            break;
        default:
            break;
    }
}
function addStartClasses() {
    let html = `
    <h3 class="fullWidth"><hr>Introductory Classes<hr></h3>
    <label>
        <strong>Culture Class</strong>
        <select name="sort-culture" id="sort-culture">
        <option value="">(select)</option>
        <option value="muggle">Muggle Studies</option>
        <option value="wizarding">Wizarding Culture</option>
        </select>
    </label>
    <label>
        <strong>Culture Grade</strong>
        <select name="sort-culturegrade" id="sort-culturegrade">
        <option value="">(select)</option>
        <option value="o">Outstanding</option>
        <option value="e">Exceeds Expectations</option>
        <option value="a">Acceptable</option>
        <option value="p">Poor</option>
        <option value="d">Dreadful</option>
        <option value="t">Troll</option>
        </select>
    </label>
    <label>
        <strong>Literacy</strong>
        <select name="sort-literacy" id="sort-literacy">
        <option value="">(select)</option>
        <option value="o">Outstanding</option>
        <option value="e">Exceeds Expectations</option>
        <option value="a">Acceptable</option>
        <option value="p">Poor</option>
        <option value="d">Dreadful</option>
        <option value="t">Troll</option>
        </select>
    </label>
    <label>
        <strong>Magical Theory</strong>
        <select name="sort-magicaltheory" id="sort-magicaltheory">
        <option value="">(select)</option>
        <option value="o">Outstanding</option>
        <option value="e">Exceeds Expectations</option>
        <option value="a">Acceptable</option>
        <option value="p">Poor</option>
        <option value="d">Dreadful</option>
        <option value="t">Troll</option>
        </select>
    </label>
    <label>
        <strong>Maths</strong>
        <select name="sort-maths" id="sort-maths">
        <option value="">(select)</option>
        <option value="o">Outstanding</option>
        <option value="e">Exceeds Expectations</option>
        <option value="a">Acceptable</option>
        <option value="p">Poor</option>
        <option value="d">Dreadful</option>
        <option value="t">Troll</option>
        </select>
    </label>`;
    return html;
}
function addCoreClasses() {
    let html = `
    <h3 class="fullWidth"><hr>Core Classes<hr></h3>
    <label>
        <strong>Astronomy</strong>
        <select name="sort-astronomy" id="sort-astronomy">
        <option value="">(select)</option>
        <option value="o">Outstanding</option>
        <option value="e">Exceeds Expectations</option>
        <option value="a">Acceptable</option>
        <option value="p">Poor</option>
        <option value="d">Dreadful</option>
        <option value="t">Troll</option>
        </select>
    </label>
    <label>
        <strong>Charms</strong>
        <select name="sort-charms" id="sort-charms">
        <option value="">(select)</option>
        <option value="o">Outstanding</option>
        <option value="e">Exceeds Expectations</option>
        <option value="a">Acceptable</option>
        <option value="p">Poor</option>
        <option value="d">Dreadful</option>
        <option value="t">Troll</option>
        </select>
    </label>
    <label>
        <strong>Defence Against the Dark Arts</strong>
        <select name="sort-dada" id="sort-dada">
        <option value="">(select)</option>
        <option value="o">Outstanding</option>
        <option value="e">Exceeds Expectations</option>
        <option value="a">Acceptable</option>
        <option value="p">Poor</option>
        <option value="d">Dreadful</option>
        <option value="t">Troll</option>
        </select>
    </label>
    <label>
        <strong>Games</strong>
        <select name="sort-games" id="sort-games">
        <option value="">(select)</option>
        <option value="o">Outstanding</option>
        <option value="e">Exceeds Expectations</option>
        <option value="a">Acceptable</option>
        <option value="p">Poor</option>
        <option value="d">Dreadful</option>
        <option value="t">Troll</option>
        </select>
    </label>
    <label>
        <strong>Herbology</strong>
        <select name="sort-herbology" id="sort-herbology">
        <option value="">(select)</option>
        <option value="o">Outstanding</option>
        <option value="e">Exceeds Expectations</option>
        <option value="a">Acceptable</option>
        <option value="p">Poor</option>
        <option value="d">Dreadful</option>
        <option value="t">Troll</option>
        </select>
    </label>
    <label>
        <strong>History of Magic</strong>
        <select name="sort-historyofmagic" id="sort-historyofmagic">
        <option value="">(select)</option>
        <option value="o">Outstanding</option>
        <option value="e">Exceeds Expectations</option>
        <option value="a">Acceptable</option>
        <option value="p">Poor</option>
        <option value="d">Dreadful</option>
        <option value="t">Troll</option>
        </select>
    </label>
    <label>
        <strong>Potions</strong>
        <select name="sort-potions" id="sort-potions">
        <option value="">(select)</option>
        <option value="o">Outstanding</option>
        <option value="e">Exceeds Expectations</option>
        <option value="a">Acceptable</option>
        <option value="p">Poor</option>
        <option value="d">Dreadful</option>
        <option value="t">Troll</option>
        </select>
    </label>
    <label>
        <strong>Transfiguration</strong>
        <select name="sort-transfiguration" id="sort-transfiguration">
        <option value="">(select)</option>
        <option value="o">Outstanding</option>
        <option value="e">Exceeds Expectations</option>
        <option value="a">Acceptable</option>
        <option value="p">Poor</option>
        <option value="d">Dreadful</option>
        <option value="t">Troll</option>
        </select>
    </label>`;
    return html;
}
function addElecClasses(count) {
    let html = ``;
    for(let i = 0; i < count; i++) {
        html += `<label>
        <strong>Course</strong>
        <select name="sort-elec${i}" id="sort-elec${i}">
            <option value="">(select)</option>
            <option class="hide ifUpper" value="alchemy">Alchemy</option>
            <option value="runes">Ancient Runes</option>
            <option class="hide ifUpper" value="ancientstudies">Ancient Studies</option>
            <option value="arithmancy">Arithmancy</option>
            <option value="art">Art</option>
            <option class="hide ifUpper" value="astronomy">Astronomy</option>
            <option value="comc">Care of Magical Creatures</option>
            <option class="hide ifUpper" value="charms">Charms</option>
            <option class="hide ifUpper" value="dada">Defence Against the Dark Arts</option>
            <option value="divination">Divination</option>
            <option class="hide ifUpper" value="games">Games</option>
            <option class="hide ifUpper" value="ghoulstudies">Ghoul Studies</option>
            <option class="hide ifUpper" value="herbology">Herbology</option>
            <option class="hide ifUpper" value="historyofmagic">History of Magic</option>
            <option value="magicaltheory">Magical Theory</option>
            <option value="mugglestudies">Muggle Studies</option>
            <option value="music">Music</option>
            <option class="hide ifUpper" value="potions">Potions</option>
            <option class="hide ifUpper" value="transfiguration">Transfiguration</option>
            <option class="hide ifUpper" value="xylomancy">Xylomancy</option>
        </select>
    </label>
    <label>
        <strong>Grade</strong>
        <select name="sort-elec${i}grade" id="sort-elec${i}grade">
        <option value="">(select)</option>
        <option value="o">Outstanding</option>
        <option value="e">Exceeds Expectations</option>
        <option value="a">Acceptable</option>
        <option value="p">Poor</option>
        <option value="d">Dreadful</option>
        <option value="t">Troll</option>
        </select>
    </label>`
    }
    return html;
}