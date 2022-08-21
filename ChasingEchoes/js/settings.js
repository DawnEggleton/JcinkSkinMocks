const charFields = ['#field_27', '#field_11', '#field_12', '#field_13', '#field_14', '#field_15', '#field_16', '#field_18', '#field_19', '#field_20', '#field_28', '#field_29', '#field_30', '#field_32', '#field_33', '#field_34', '#field_35', '#field_36', '#field_37', '#field_38', '#field_39', '#field_40', '#field_41', '#field_42', '#field-birthday'];

const eqFields = ['#field_17', '#field_21', '#field_22', '#field_23', '#field_24', '#field_25', '#field_26', '#field_43', '#field_31'];

const hideAlways = ['#field-website', '#field-location', '#field-interests'];


const allHeaders = [
    {'title': 'General Information (Required)', 'insertBefore': '#field_1'}
];

const charHeaders = [
    {'title': 'Basics (Required)', 'insertBefore': '#field_27'},
    {'title': 'Details (Required)', 'insertBefore': '#field_28'},
    {'title': 'Links (Optional)', 'insertBefore': '#field_32'},
    {'title': 'Images (Required)', 'insertBefore': '#field_36'},
];

const eqHeaders = [
    {'title': 'Skills (Required)', 'insertBefore': '#field_21'},
    {'title': 'Horses (Required)', 'insertBefore': '#field_43'}
];

let fakeAccounts = [
    {
        name: `Lottie Fox`,
        id: parseInt(`2`),
        groupID: parseInt(`13`),
        groupName: `Industry`,
        imageTall: `https://picsum.photos/125/500`,
        imageWide: `https://picsum.photos/500/125`,
        type: `character`,
        face: `Amanda Tapping`,
        pronouns: `she/her`,
        age: parseInt(`47`),
        ageClass: `40s`,
        disciplines: `show jumping`,
        disciplinesArray: `show jumping`.split(', '),
        disciplinesClass: `show jumping`.split(', ').map(discipline => discipline.toLowerCase().replace(' ', "").replace('\/', "")),
        relStatus: `single`.toLowerCase().replace(' ', '').replace('\'', ''),
        overview: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        alias: `lux`.toLowerCase().replace(' ', "").replace('\/', ""),
        rawAlias: `lux`,
        memID: parseInt(`1`),
        memPronouns: `she/her`,
        timezone: `GMT-4`,
        frequency: `every 1 to 2 weeks`,
        limits: `Avoids detailed, mature sexual content`,
        joined: `month 00, 0000`,
        lastpost: `month 00, 0000, 00:00 am/pm`,
        writeLimits: `writes 3-2-3`,
    },
    {
        name: `Nikolas Kovac Test`,
        id: parseInt(`3`),
        groupID: parseInt(`9`),
        groupName: `International`,
        imageTall: `https://picsum.photos/125/900`,
        imageWide: `https://picsum.photos/900/125`,
        type: `character`,
        face: `Nikolai Frederick`,
        pronouns: `he/him`,
        age: parseInt(`21`),
        ageClass: `20s`,
        disciplines: `show jumping, eventing`,
        disciplinesArray: `show jumping, eventing`.split(', '),
        disciplinesClass: `show jumping, eventing`.split(', ').map(discipline => discipline.toLowerCase().replace(' ', "").replace('\/', "")),
        relStatus: `single`.toLowerCase().replace(' ', '').replace('\'', ''),
        overview: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        alias: `lux`.toLowerCase().replace(' ', "").replace('\/', ""),
        rawAlias: `lux`,
        memID: parseInt(`1`),
        memPronouns: `she/her`,
        timezone: `GMT-4`,
        frequency: `every 1 to 2 weeks`,
        limits: `Avoids detailed, mature sexual content`,
        joined: `month 00, 0000`,
        lastpost: `month 00, 0000, 00:00 am/pm`,
        writeLimits: `writes 3-2-3`,
    },
    {
        name: `Lux`,
        id: parseInt(`1`),
        groupID: parseInt(`4`),
        groupName: `Admin`,
        imageTall: `https://picsum.photos/125/600`,
        imageWide: `https://picsum.photos/600/125`,
        type: `writer`,
        face: ``,
        pronouns: ``,
        age: parseInt(``),
        ageClass: ``,
        disciplines: ``,
        disciplinesArray: ``.split(', '),
        disciplinesClass: ``.split(', ').map(discipline => discipline.toLowerCase().replace(' ', "").replace('\/', "")),
        relStatus: ``.toLowerCase().replace(' ', '').replace('\'', ''),
        overview: ``,
        alias: `lux`.toLowerCase().replace(' ', "").replace('\/', ""),
        rawAlias: `lux`,
        memID: parseInt(`1`),
        memPronouns: `she/her`,
        timezone: `GMT-4`,
        frequency: `every 1 to 2 weeks`,
        limits: `Avoids detailed, mature sexual content`,
        joined: `month 00, 0000`,
        lastpost: `month 00, 0000, 00:00 am/pm`,
        writeLimits: `writes 3-2-3`,
    },
];

fakeAccounts.forEach(account => {
    let accountName = ``;
    account.name.split(' ').forEach((part, i) => {
        if (i === 1 && i !== (account.name.split(' ').length - 1)) {
            accountName += `<span>${part}`;
        } else if (i === (account.name.split(' ').length - 1) && i !== 0 && i !== 1) {
            accountName += ` ${part}</span>`;
        } else if (i === (account.name.split(' ').length - 1) && i === 1) {
            accountName += `<span>${part}</span>`;
        } else {
            accountName += part;
        }
    });
    account.splitName = accountName;
});