function formatSchedule(data) {
    let current = new Date();
    let active = data.filter(item => {
        let time = new Date(item.ShowDate);
        let difference = Math.floor(((time - current) / (1000*60*60*24)));
        return difference > 0;
    });
    active.sort((a, b) => {
        if (new Date(a.ShowDate) < new Date(b.ShowDate)) {
            return -1;
        } else if (new Date(a.ShowDate) > new Date(b.ShowDate)) {
            return 1;
        } else {
            return 0;
        }
    });
    let html = ``;
    active.forEach(show => {
        let showDate = new Date(show.ShowDate);
        showDate.setDate(showDate.getDate() - 1);
        const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
        html += `<div class="claims--item"><div class="claims--border">
            <b>${show.ShowName}</b>
            <span>Entries close ${months[showDate.getMonth()]} ${showDate.getDate()}, ${showDate.getFullYear()}, 11:59pm (GMT-4)</span>
        </div></div>`;
    });
    if (html === ``) {
        html = `<div class="claims--notice"><div class="claims--border">No upcoming shows.</div></div>`;
    }
    document.querySelector(`tag-tab[data-key="#schedule"]`).insertAdjacentHTML('beforeend', html);
}

function classBox(name, skills) {
	return `<b>${name}</b><span>${skills.split(', ')[0]}</span><span>${skills.split(', ')[1]}</span>`;
}
function classStart(discipline, cost) {
	return `<tag-lg data-align="left">${discipline}</tag-lg>
		<tag-sm data-align="left">Cost: $${cost} for division / $25 per class</tag-sm>
		<div class="show--classGrid static">
			<tag-xs data-align="left">class</tag-xs><tag-xs data-align="left">primary skill</tag-xs><tag-xs data-align="left">secondary skill</tag-xs>`;
}
function classEnd() {
	return `</div>`;
}

function newLabel(id, showname, type) {
    return `<a href="#${type}-show${id}">${showname} ${type}</a>`;
}
function newTabStart(id, type) {
    return `<tag-tab data-key="#${type}-show${id}">
    <div class="webpage--border">`;
}
function newTabEnd() {
    return `</div>
    </tag-tab>`;
}
function newShow(showname) {
    return `<tag-xl data-align="left">${showname}</tag-xl>`
}
function newLevel(level) {
    return `<tag-lg data-align="left">${level}</tag-lg>`
}
function newDisciplineStart(discipline) {
    return `<tag-md data-align="left">${discipline}</tag-md><div class="show--classGrid flexible">`
}
function newDisciplineEnd() {
    return `</div>`
}
function newClassStart(classname) {
    return `<div class="grid--item"><tag-xs data-align="left">${classname}</tag-xs>`
}
function newClassEnd() {
    return `</div>`
}
function horseRiderPair(group, id, rider, horse) {
    return `<div class="show--pair g-${group}"><a href="?showuser=${id}">${rider}</a> riding <b>${horse}</b></div>`;
}
function horseRiderPlacing(group, id, rider, horse, placing) {
    return `<div class="show--pair g-${group}"><span class="placing">${placing}</span><a href="?showuser=${id}">${rider}</a> riding <b>${horse}</b></div>`;
}
function horseRiderYearend(group, id, rider, horse, points) {
    return `<div class="show--pair yearend g-${group}"><span class="placing"></span><span><a href="?showuser=${id}">${rider}</a> riding <b>${horse}</b></span><b>${points} points</b></div>`;
}

function formatClasses(data) {
    let html = ``;
    data.sort((a, b) => {
        if (parseInt(a.ShowTypeID) < parseInt(b.ShowTypeID)) {
            return -1;
        } else if (parseInt(a.ShowTypeID) > parseInt(b.ShowTypeID)) {
            return 1;
        } else if (parseInt(a.DisciplineID) < parseInt(b.DisciplineID)) {
            return -1;
        } else if (parseInt(a.DisciplineID) > parseInt(b.DisciplineID)) {
            return 1;
        } else if (parseInt(a.ClassID) < parseInt(b.ClassID)) {
            return -1;
        } else if (parseInt(a.ClassID) > parseInt(b.ClassID)) {
            return 1;
        } else {
            return 0;
        }
    });
    data.forEach((showClass, i) => {
	//first
        if(i === 0) {
            html += `<div class="claims--notice"><div class="claims--border">`;
	    html += `<tag-xl data-align="left">${showClass.ShowType}</tag-xl>`;
            html += classStart(showClass.Discipline, showClass.DisciplineCost);
            html += classBox(showClass.ClassName, showClass.Skills);
        }
	//different show type
	//different discipline
	else if(data[i - 1].ShowTypeID !== showClass.ShowTypeID) {
            html += classEnd();
	    html += `<tag-xl data-align="left">${showClass.ShowType}</tag-xl>`;
            html += classStart(showClass.Discipline, showClass.DisciplineCost);
            html += classBox(showClass.ClassName, showClass.Skills);
        }
	//different discipline
	else if(data[i - 1].ShowType === showClass.ShowType && data[i - 1].Discipline !== showClass.Discipline) {
            html += classEnd();
            html += classStart(showClass.Discipline, showClass.DisciplineCost);
            html += classBox(showClass.ClassName, showClass.Skills);
        }
	//otherwise, just add class
	else {
	    html += classBox(showClass.ClassName, showClass.Skills);
	}
	//end
	if(data.length - 1 === i) {
            html += classEnd();
            html += `</div></div>`;
        }
    });
    document.querySelector(`tag-tab[data-key="#classlists"]`).insertAdjacentHTML('beforeend', html);
}

function formatEntries(data) {
    let newLabels = ``;
    let newTabs = ``;
    data.sort((a, b) => {
        if (a.ShowID < b.ShowID) {
            return -1;
        } else if (a.ShowID > b.ShowID) {
            return 1;
        } else if (a.LevelID < b.LevelID) {
            return -1;
        } else if (a.LevelID > b.LevelID) {
            return 1;
        } else if (a.DisciplineID < b.DisciplineID) {
            return -1;
        } else if (a.DisciplineID > b.DisciplineID) {
            return 1;
        } else if (a.ClassID < b.ClassID) {
            return -1;
        } else if (a.ClassID > b.ClassID) {
            return 1;
        } else if (a.Rider < b.Rider) {
            return -1;
        } else if (a.Rider > b.Rider) {
            return 1;
        } else if (a.Horse < b.Horse) {
            return -1;
        } else if (a.Horse > b.Horse) {
            return 1;
        } else {
            return 0;
        }
    });
    
    for(let i = 0; i < data.length; i++) {
        //first
        if ( i === 0 ) {
            newLabels += newLabel(data[i].ShowID, data[i].Show, 'entries');
            newTabs += newTabStart(data[i].ShowID, 'entries');
            newTabs += newShow(data[i].Show);
            newTabs += newLevel(data[i].Level);
            newTabs += newDisciplineStart(data[i].Discipline);
            newTabs += newClassStart(data[i].ClassName);
            newTabs += horseRiderPair(data[i].GroupID, data[i].AccountID, data[i].Rider, data[i].Horse);
        }
        //new show
        else if (data[i-1].ShowID !== data[i].ShowID) {
            newTabs += newClassEnd();
            newTabs += newDisciplineEnd();
            newTabs += newTabEnd();
            newLabels += newLabel(data[i].ShowID, data[i].Show, 'entries');
            newTabs += newTabStart(data[i].ShowID, 'entries');
            newTabs += newShow(data[i].Show);
            newTabs += newLevel(data[i].Level);
            newTabs += newDisciplineStart(data[i].Discipline);
            newTabs += newClassStart(data[i].ClassName);
            newTabs += horseRiderPair(data[i].GroupID, data[i].AccountID, data[i].Rider, data[i].Horse);
        }
        //new level
        else if (data[i-1].ShowID === data[i].ShowID && data[i-1].LevelID !== data[i].LevelID) {
            newTabs += newClassEnd();
            newTabs += newDisciplineEnd();
            newTabs += newLevel(data[i].Level);
            newTabs += newDisciplineStart(data[i].Discipline);
            newTabs += newClassStart(data[i].ClassName);
            newTabs += horseRiderPair(data[i].GroupID, data[i].AccountID, data[i].Rider, data[i].Horse);
        }
        //new discipline
        else if (data[i-1].ShowID === data[i].ShowID && data[i-1].LevelID === data[i].LevelID && data[i-1].DisciplineID !== data[i].DisciplineID) {
            newTabs += newClassEnd();
            newTabs += newDisciplineEnd();
            newTabs += newDisciplineStart(data[i].Discipline);
            newTabs += newClassStart(data[i].ClassName);
            newTabs += horseRiderPair(data[i].GroupID, data[i].AccountID, data[i].Rider, data[i].Horse);
        }
        //new class
        else if (data[i-1].ShowID === data[i].ShowID && data[i-1].LevelID === data[i].LevelID && data[i-1].DisciplineID === data[i].DisciplineID && data[i-1].ClassID !== data[i].ClassID) {
            newTabs += newClassEnd();
            newTabs += newClassStart(data[i].ClassName);
            newTabs += horseRiderPair(data[i].GroupID, data[i].AccountID, data[i].Rider, data[i].Horse);
        }
        //new horse rider pair
        else if (data[i-1].ShowID === data[i].ShowID && data[i-1].LevelID === data[i].LevelID && data[i-1].DisciplineID === data[i].DisciplineID && data[i-1].ClassID === data[i].ClassID) {
            newTabs += horseRiderPair(data[i].GroupID, data[i].AccountID, data[i].Rider, data[i].Horse);
        }
        //last
        if ( i === data.length - 1) {
            newTabs += newClassEnd();
            newTabs += newDisciplineEnd();
            newTabs += newTabEnd();
        }
    }

    document.querySelector('.webpage--menu tag-tab[data-category="upcoming"] tag-labelset').insertAdjacentHTML('beforeend', newLabels);

    document.querySelector('.webpage--content tag-tab[data-category="upcoming"] tag-tabset').insertAdjacentHTML('beforeend', newTabs);
}
function formatResults(data) {
    let newLabels = ``;
    let newTabs = ``;
    data.sort((a, b) => {
        if (a.ShowID < b.ShowID) {
            return -1;
        } else if (a.ShowID > b.ShowID) {
            return 1;
        } else if (a.LevelID < b.LevelID) {
            return -1;
        } else if (a.LevelID > b.LevelID) {
            return 1;
        } else if (a.DisciplineID < b.DisciplineID) {
            return -1;
        } else if (a.DisciplineID > b.DisciplineID) {
            return 1;
        } else if (a.ClassID < b.ClassID) {
            return -1;
        } else if (a.ClassID > b.ClassID) {
            return 1;
        } else if (a.Placing < b.Placing) {
            return -1;
        } else if (a.Placing > b.Placing) {
            return 1;
        } else {
            return 0;
        }
    });
    
    for(let i = 0; i < data.length; i++) {
        //first
        if ( i === 0 ) {
            newLabels += newLabel(data[i].ShowID, data[i].Show, 'results');
            newTabs += newTabStart(data[i].ShowID, 'results');
            newTabs += newShow(data[i].Show);
            newTabs += newLevel(data[i].Level);
            newTabs += newDisciplineStart(data[i].Discipline);
            newTabs += newClassStart(data[i].ClassName);
            newTabs += horseRiderPlacing(data[i].GroupID, data[i].AccountID, data[i].Rider, data[i].Horse, data[i].Placing);
        }
        //new show
        else if (data[i-1].ShowID !== data[i].ShowID) {
            newTabs += newClassEnd();
            newTabs += newDisciplineEnd();
            newTabs += newTabEnd();
            newLabels += newLabel(data[i].ShowID, data[i].Show, 'results');
            newTabs += newTabStart(data[i].ShowID, 'results');
            newTabs += newShow(data[i].Show);
            newTabs += newLevel(data[i].Level);
            newTabs += newDisciplineStart(data[i].Discipline);
            newTabs += newClassStart(data[i].ClassName);
            newTabs += horseRiderPlacing(data[i].GroupID, data[i].AccountID, data[i].Rider, data[i].Horse, data[i].Placing);
        }
        //new level
        else if (data[i-1].ShowID === data[i].ShowID && data[i-1].LevelID !== data[i].LevelID) {
            newTabs += newClassEnd();
            newTabs += newDisciplineEnd();
            newTabs += newLevel(data[i].Level);
            newTabs += newDisciplineStart(data[i].Discipline);
            newTabs += newClassStart(data[i].ClassName);
            newTabs += horseRiderPlacing(data[i].GroupID, data[i].AccountID, data[i].Rider, data[i].Horse, data[i].Placing);
        }
        //new discipline
        else if (data[i-1].ShowID === data[i].ShowID && data[i-1].LevelID === data[i].LevelID && data[i-1].DisciplineID !== data[i].DisciplineID) {
            newTabs += newClassEnd();
            newTabs += newDisciplineEnd();
            newTabs += newDisciplineStart(data[i].Discipline);
            newTabs += newClassStart(data[i].ClassName);
            newTabs += horseRiderPlacing(data[i].GroupID, data[i].AccountID, data[i].Rider, data[i].Horse, data[i].Placing);
        }
        //new class
        else if (data[i-1].ShowID === data[i].ShowID && data[i-1].LevelID === data[i].LevelID && data[i-1].DisciplineID === data[i].DisciplineID && data[i-1].ClassID !== data[i].ClassID) {
            newTabs += newClassEnd();
            newTabs += newClassStart(data[i].ClassName);
            newTabs += horseRiderPlacing(data[i].GroupID, data[i].AccountID, data[i].Rider, data[i].Horse, data[i].Placing);
        }
        //new horse rider pair
        else if (data[i-1].ShowID === data[i].ShowID && data[i-1].LevelID === data[i].LevelID && data[i-1].DisciplineID === data[i].DisciplineID && data[i-1].ClassID === data[i].ClassID) {
            newTabs += horseRiderPlacing(data[i].GroupID, data[i].AccountID, data[i].Rider, data[i].Horse, data[i].Placing);
        }
        //last
        if ( i === data.length - 1) {
            newTabs += newClassEnd();
            newTabs += newDisciplineEnd();
            newTabs += newTabEnd();
        }
    }

    document.querySelector('.webpage--menu tag-tab[data-category="results"] tag-labelset').insertAdjacentHTML('beforeend', newLabels);

    document.querySelector('.webpage--content tag-tab[data-category="results"] tag-tabset').insertAdjacentHTML('beforeend', newTabs);
}
function formatYearEnd(data) {
    let html = ``;
    data.sort((a, b) => {
        if (a.LevelID < b.LevelID) {
            return -1;
        } else if (a.LevelID > b.LevelID) {
            return 1;
        } else if (a.DisciplineID < b.DisciplineID) {
            return -1;
        } else if (a.DisciplineID > b.DisciplineID) {
            return 1;
        } else if (a.YearEndPoints > b.YearEndPoints) {
            return -1;
        } else if (a.YearEndPoints < b.YearEndPoints) {
            return 1;
        } else {
            return 0;
        }
    });
    
    for(let i = 0; i < data.length; i++) {
        //first
        if ( i === 0 ) {
            html += newLevel(data[i].Level);
            html += newDisciplineStart(data[i].Discipline);
            html += horseRiderYearend(data[i].GroupID, data[i].AccountID, data[i].Rider, data[i].Horse, data[i].YearEndPoints);
        }
        //new level
        else if (data[i-1].LevelID !== data[i].LevelID) {
            html += newDisciplineEnd();
            html += newLevel(data[i].Level);
            html += newDisciplineStart(data[i].Discipline);
            html += horseRiderYearend(data[i].GroupID, data[i].AccountID, data[i].Rider, data[i].Horse, data[i].YearEndPoints);
        }
        //new discipline
        else if (data[i-1].LevelID === data[i].LevelID && data[i-1].DisciplineID !== data[i].DisciplineID) {
            html += newDisciplineEnd();
            html += newDisciplineStart(data[i].Discipline);
            html += horseRiderYearend(data[i].GroupID, data[i].AccountID, data[i].Rider, data[i].Horse, data[i].YearEndPoints);
        }
        //new horse rider pair
        else if (data[i-1].LevelID === data[i].LevelID && data[i-1].DisciplineID === data[i].DisciplineID) {
            html += horseRiderYearend(data[i].GroupID, data[i].AccountID, data[i].Rider, data[i].Horse, data[i].YearEndPoints);
        }
        //last
        if ( i === data.length - 1) {
            html += newDisciplineEnd();
        }
    }

    document.querySelector('#clip-yearend').insertAdjacentHTML('beforeend', html);
}