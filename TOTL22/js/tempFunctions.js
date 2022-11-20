function formatJob(section, subsection, line1, line2) {
    let string = `{"section":"${section}","subsection":"${subsection}","line1":"${line1}","line2":"${line2}"}`;
    return string;
}
function sheetTransfer() {
    const url = `https://opensheet.elk.sh/146rEeh3eiyftnC-9NXF29rgSPRLAhuG2gss_nWp_xxw/OriginalClaims`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        let array = data.map(item => {
            //Set new abilities/species string
            let abSpString = ``;
            if(item.Abilities !== `` && item.Abilities !== undefined) {
                abSpString += item.Abilities;
            }
            if (item.Species !== `` && item.Species !== undefined) {
                if(item.Species === 'veela' && abSpString !== ``) {
                    abSpString += `, veela (${item.VeelaBlood})`;
                } else if(item.Species === 'veela' && abSpString === ``) {
                    abSpString += `veela (${item.VeelaBlood})`;
                } else if(item.Species !== 'veela' && abSpString === ``) {
                    abSpString += item.Species;
                } else {
                    abSpString += `, ${item.Species}`;
                }
            }
            
            //Set new jobs string
            let jobs = ``;
            if(item.JobSection !== `` && item.JobSection !== undefined) {
                jobs += formatJob(item.JobSection, item.JobSubsection, item.JobTitle, item.JobNotes);
            }
            if(item.Job2Section !== `` && item.Job2Section !== undefined) {
                jobs += `+`;
                jobs += formatJob(item.Job2Section, item.Job2Subsection, item.Job2Title, item.Job2Notes);
            }
            if(item.Job3Section !== `` && item.Job3Section !== undefined) {
                jobs += `+`;
                jobs += formatJob(item.Job3Section, item.Job3Subsection, item.Job3Title, item.Job3Notes);
            }
            if(item.JobSection !== `` && item.Job4Section !== undefined) {
                jobs += `+`;
                jobs += formatJob(item.Job4Section, item.Job4Subsection, item.Job4Title, item.Job4Notes);
            }

            //Set Hogwarts Classes
            let hogwartsClasses = ``;
            if(item.HogwartsYear === 'first year' || item.HogwartsYear === 'second year') {
                //only core and start classes
                hogwartsClasses += `{"class":"astronomy","grade":"${item.Astronomy}"}`;
                hogwartsClasses += `+{"class":"charms","grade":"${item.Charms}"}`;
                hogwartsClasses += `+{"class":"dada","grade":"${item.DADA}"}`;
                hogwartsClasses += `+{"class":"games","grade":"${item.Games}"}`;
                hogwartsClasses += `+{"class":"herbology","grade":"${item.Herbology}"}`;
                hogwartsClasses += `+{"class":"historyOfMagic","grade":"${item.HistoryOfMagic}"}`;
                hogwartsClasses += `+{"class":"literacy","grade":"${item.Literacy}"}`;
                hogwartsClasses += `+{"class":"magicalTheory","grade":"${item.MagicalTheory}"}`;
                hogwartsClasses += `+{"class":"maths","grade":"${item.Maths}"}`;
                hogwartsClasses += `+{"class":"potions","grade":"${item.Potions}"}`;
                hogwartsClasses += `+{"class":"transfiguration","grade":"${item.Transfiguration}"}`;
                hogwartsClasses += `+{"class":"${item.Culture}","grade":"${item.CultureGrade}"}`;
            } else if(item.HogwartsYear === 'third year' || item.HogwartsYear === 'fourth year' || item.HogwartsYear === 'fifth year') {
                //core and elective fields
                hogwartsClasses += `{"class":"astronomy","grade":"${item.Astronomy}"}`;
                hogwartsClasses += `+{"class":"charms","grade":"${item.Charms}"}`;
                hogwartsClasses += `+{"class":"dada","grade":"${item.DADA}"}`;
                hogwartsClasses += `+{"class":"games","grade":"${item.Games}"}`;
                hogwartsClasses += `+{"class":"herbology","grade":"${item.Herbology}"}`;
                hogwartsClasses += `+{"class":"historyOfMagic","grade":"${item.HistoryOfMagic}"}`;
                hogwartsClasses += `+{"class":"potions","grade":"${item.Potions}"}`;
                hogwartsClasses += `+{"class":"transfiguration","grade":"${item.Transfiguration}"}`;
                if(item.Elec1 !== undefined && item.Elec1 !== ``) {
                    hogwartsClasses += `+{"class":"${item.Elec1}","grade":"${item.Elec1Grade}"}`;
                }
                if(item.Elec2 !== undefined && item.Elec2 !== ``) {
                    hogwartsClasses += `+{"class":"${item.Elec2}","grade":"${item.Elec2Grade}"}`;
                }
                if(item.Elec3 !== undefined && item.Elec3 !== ``) {
                    hogwartsClasses += `+{"class":"${item.Elec3}","grade":"${item.Elec3Grade}"}`;
                }
                if(item.Elec4 !== undefined && item.Elec4 !== ``) {
                    hogwartsClasses += `+{"class":"${item.Elec4}","grade":"${item.Elec4Grade}"}`;
                }
            } else {
                //electives only
                if(item.Elec1 !== undefined && item.Elec1 !== ``) {
                    hogwartsClasses += `{"class":"${item.Elec1}","grade":"${item.Elec1Grade}"}`;
                }
                if(item.Elec2 !== undefined && item.Elec2 !== ``) {
                    hogwartsClasses += `+{"class":"${item.Elec2}","grade":"${item.Elec2Grade}"}`;
                }
                if(item.Elec3 !== undefined && item.Elec3 !== ``) {
                    hogwartsClasses += `+{"class":"${item.Elec3}","grade":"${item.Elec3Grade}"}`;
                }
                if(item.Elec4 !== undefined && item.Elec4 !== ``) {
                    hogwartsClasses += `+{"class":"${item.Elec4}","grade":"${item.Elec4Grade}"}`;
                }
                if(item.Elec5 !== undefined && item.Elec5 !== ``) {
                    hogwartsClasses += `+{"class":"${item.Elec5}","grade":"${item.Elec5Grade}"}`;
                }
                if(item.Elec6 !== undefined && item.Elec6 !== ``) {
                    hogwartsClasses += `+{"class":"${item.Elec6}","grade":"${item.Elec6Grade}"}`;
                }
                if(item.Elec7 !== undefined && item.Elec7 !== ``) {
                    hogwartsClasses += `+{"class":"${item.Elec7}","grade":"${item.Elec7Grade}"}`;
                }
                if(item.Elec8 !== undefined && item.Elec8 !== ``) {
                    hogwartsClasses += `+{"class":"${item.Elec8}","grade":"${item.Elec8Grade}"}`;
                }
            }

            //Set Values
            let formatted = {
                "SubmissionType": "claims-transfer",
                Timestamp: item.Timestamp,
                Member: item.Member,
                Character: item.Character,
                AccountID: item.AccountID,
                GroupName: item.GroupName,
                GroupID: item.GroupID,
                Face: item.Face,
                AbilitiesSpecies: abSpString,
                Jobs: jobs,
                School: item.School,
                Program: item.Program,
                UniversityYear: item.UniversityYear,
                HogwartsYear: item.HogwartsYear,
                HogwartsClasses: hogwartsClasses,
                QuidditchPosition: item.QuidditchPosition,
                LeadershipPosition: item.LeadershipPosition,
            };
            
            return formatted;
        });

        document.querySelector('#transfer').innerText = 'Transfering...';
        
        array.forEach(char => {
            postClaims(char);
        });

        document.querySelector('#transfer').innerText = 'Transfers complete';

    });
}