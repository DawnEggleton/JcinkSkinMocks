const charAll = ['#field_32', '#field_75', '#field_33', '#field_11', '#field_12', '#field_34', '#field_72', '#field_73', '#field_36', '#field_69', '#field_37', '#field_38', '#field_15', '#field_39', '#field_25', '#field_40', '#field_41', '#field_49', '#field_50', '#field_14', '#field_22', '#field_16', '#field_62', '#field_dob'];

const charTrad = ['#field_42', '#field_43', '#field_44', '#field_45', '#field_48', '#field_46', '#field_47', '#field_51', '#field_52', '#field_53', '#field_55', '#field_54', '#field_56', '#field_57', '#field_58', '#field_59'];

const hasFreeform = ['#field_60', '#field_61'];

const charBasic = ['#field_76', '#field_77'];


const allHeaders = [
    {'title': 'Images (Optional)', 'insertBefore': '#field_5'},
    {'title': 'Links (Directory Required)', 'insertBefore': '#field_18'},
    {'title': 'Player (Required)', 'insertBefore': '#field_8'},
    {'title': 'Other (Optional)', 'insertBefore': '#field_13'},
];

const charHeaders = [
    {'title': 'Basics (Required)', 'insertBefore': '#field_33'},
    {'title': 'Shipper (Required)', 'insertBefore': '#field_62'},
];

const tradHeaders = [
    {'title': 'Health (Required)', 'insertBefore': '#field_43'},
    {'title': 'Magic (Required)', 'insertBefore': '#field_49'},
    {'title': 'Personality (Required)', 'insertBefore': '#field_51'},
    {'title': 'Relationships (Required)', 'insertBefore': '#field_57'},
    {'title': 'Freeform (Required)', 'insertBefore': '#field_60'},
];

const simHeaders = [
    {'title': 'Relationships (Required)', 'insertBefore': '#field_76'},
    {'title': 'Cheatsheet (Required)', 'insertBefore': '#field_77'},
    {'title': 'Freeform (Required)', 'insertBefore': '#field_60'},
];

const basicHeaders = [
    {'title': 'Relationships (Required)', 'insertBefore': '#field_76'},
    {'title': 'Cheatsheet (Required)', 'insertBefore': '#field_77'},
];
        
let fakeAccounts = [
    {
        name: `salazar slytherin`,
        id: parseInt(`309`),
        groupID: parseInt(`4`),
        groupName: `Admin`,
        image: `https://files.jcink.net/uploads/lovetheadrenaline/ezgif_1_de0876af5db2.jpg`,
        type: `member`,
        bloodStatus: ``,
        age: parseInt(``),
        ageClass: ``,
        overview: ``.substring(0, 255) + `... <a href="?showuser=309#shipper">Read More</a>`,
        alias: `lux`.toLowerCase().replace(' ', "").replace('\/', ""),
        rawAlias: `lux`,
        pronouns: `she/her`,
        timezone: `gmt-5`,
        contact: `discord`,
        triggers: `No triggers`,
    },
    {
        name: `aiden mitchell`,
        id: parseInt(`838`),
        groupID: parseInt(`12`),
        groupName: `Ministry`,
        image: `https://64.media.tumblr.com/c19c57ee0ea881a26fa4e465e23e7b63/31edb05a278d2403-45/s1280x1920/c67d9d30056a4aa4237f25fdb34c29b0a578ab18.jpg`,
        type: `character`,
        bloodStatus: `halfblood`,
        age: parseInt(`38`),
        ageClass: `30s`,
        overview: `<h1>overview</h1><br>
        Aiden is... a mess. He dedicates himself wholly to his job for the sake of forgetting about his dead husband, except it's damn near impossible to forget when his husband died in the line of duty doing the <i>same job</i>. His coping capabilities is set at <i>nil</i>, what with rebound sex within two weeks of the funeral, not talking about it, keeping his husband's last name, and continuing to wear his wedding ring — even now, only taking it off when he's out with the intent of picking someone up. He's trying this dating thing again, and he is Not Keen <sup>tm</sup> but he's hoping it will get Autumn off his back. He's well-intentioned and damn good at his job, though, and if you exclude his <i>awful</i> decision making skills in the romance department, he's actually pretty bright and gives stellar advice. He just needs to.... listen to some of that advice himself.<br>
        <br>
        <h1>yes please</h1><br>
        <b>+</b> Allllll the one night stands, attempted dates, the whole nine-yards. make his life <i>awkward</i><br>
        <b>+</b> Some of the Mitchell sisters to invade his personal space?<br>
        <b>+</b> Coworkers to be his sole support system because, let's be honest, he's going to crack properly <i>someday</i><br>
        <b>+</b> Repeat offenders of minor stuff that feels an awful lot below hitwizard level of work yet falls under them anyway that he can sigh and shake his head over<br>
        <b>+</b> Maybe one of them is a kid he feels a little protective over? Cause I can 100% see it<br>
        <b>+</b> His husband's ex-partner for some drama<br>
        <br>
        <h1>no thanks</h1><br>
        <b>+</b> Open to most things, but there's a longer term romance in the works so no finals as yet`.substring(0, 500) + `... <a href="?showuser=838#shipper">Read More</a>`,
        alias: `lux`.toLowerCase().replace(' ', "").replace('\/', ""),
        rawAlias: `lux`,
        pronouns: `she/her`,
        timezone: `gmt-5`,
        contact: `discord`,
        triggers: `n/a`,
    },
    {
        name: `Mickey Rose`,
        id: parseInt(`819`),
        groupID: parseInt(`12`),
        groupName: `Ministry`,
        image: `https://64.media.tumblr.com/384519ea94965b8679e26a7d9f297d63/tumblr_pcby11JtSH1x5qfufo1_540.png`,
        type: `character`,
        bloodStatus: `pureblood`,
        age: parseInt(`34`),
        ageClass: `30s`,
        overview: `<center><h1>about</h1></center><br>
        <br>
        Hailing from America, Mickey is the classic case of middle child syndrome that did not too bad for himself. Growing up, he was always in the older shadow of his brother, Henry, but he loved him enough to not particularly mind. However, when his brother came out, his parents lost all fondness for him and thought it was a blight on the pureblood name of the Rose family. Since then, Mickey has been trying to balance his parents’ newfound expectations of him and what he actually wants to do in life.<br>
        <br>
        He enjoys his job as an Unspeakable well enough, but there’s a lot of things about his life his parents wouldn’t be pleased to hear about. Such as his obsession with old Hollywood Muggle movies, his affinity for dressing like Gonzo from the Muppets and the fact that his ex-fiancee is actually a lesbian but they’re still living together because they’re always going to be best friends. And on top of that, Mickey is having some serious doubts about his own sexuality but has told exactly no one about it. Which is a whole thing.<br>
        <br>
        <center><h1>wanted plots</h1></center><br>
        <br>
        Work friends. Give me fellow Unspeakables who have no idea how this multi-coloured American ended up in the Hall of Prophecies but they’ve learned to get along with him anyway.<br>
        Muggle friends. I’d particularly love for him to get along with a few Muggles that his parents wouldn’t approve of because, in all honesty, he’s a lot more fascinated by their culture than he is by anything wizardkind and I think it would be cute for him to nerd out over games consoles and pop culture.<br>
        Please give this guy a man to have crush on so he can hurry up and realise just how bisexual he is. I need it so bad.<br>
        <br>
        <center><h1>no thank you</h1></center><br>
        <br>
        No hard no’s here, I’m up for pretty much anything with Mickey!<br>`.substring(0, 500) + `... <a href="?showuser=819#shipper">Read More</a>`,
        alias: `roe`.toLowerCase().replace(' ', "").replace('\/', ""),
        rawAlias: `roe`,
        pronouns: `she/her`,
        timezone: `gmt`,
        contact: `discord`,
        triggers: `sexual assault, self harm and eating disorders `,
    },
    {
        name: `duncan o'donnelly-taggart`,
        id: parseInt(`58`),
        groupID: parseInt(`8`),
        groupName: `Hogwarts Staff`,
        image: `https://64.media.tumblr.com/c84f51ddbbab07c792a00af21815dd78/tumblr_pyljuakclp1vz2ghao8_400.jpg`,
        type: `character`,
        bloodStatus: `halfblood`,
        age: parseInt(`35`),
        ageClass: `30s`,
        overview: `<luxblock><br>
        <h1>Overview</h1><br>
        Duncan Taggart is the black sheep in his family. Never very athletic, always had his nose stuck in a book - and suffering, quietly, inside, the whole time. He became quite close to one of his older brothers after an almost-suicide attempt when he was fourteen. They have remained close, even though Duncan has spent nearly all of his adult life travelling the globe to help aide disaster zones, developing nations, and war zones and so has kind of been really absent. Overall, he's a quiet man who tends to keep a little more to himself. He's sensitive, and this is brought to an extreme by the trauma he's recently been through, reacting to more than just his intuition and other people's actions now (because nearly being blown up can do that to a person).<br>
        <br>
        He's only recently settled down at Hogwarts, so his near-death experience is absolutely still fresh in his mind. It doesn't help that he's a seer, and he sort of, in part, saw it coming. His abilities don't get him as many details as he'd like and are typically more than a little useless, but he still often regrets not "listening" to them more. He's trying to, now, but it's overwhelming and so he's sidled away to somewhere quieter and more remote - Hogwarts - with a dog that is, technically, an emotional support animal, not that he's admitted that to anyone. All they know is that he is <i>never</i> without Elliot, which the students tend to enjoy at least.<br>
        <br>
        <h1>Friends</h1><br>
        Although quiet, Duck is a fairly social person. He doesn't like to talk much, necessarily, and he doesn't really like large crowds because of the noise, but he <i>does</i> enjoy being near other people. Even large groups, honestly - it's not the number of people that does him in, it's the <i>volume</i>, and that's something he's working on. He just hasn't gotten very far with it. That said, the more comfortable he is in his surroundings, the more social and outgoing he will be. He's very used to being around anyone who's rambunctious, given that's the majority of his family, so that certainly won't be an issue for him. Honestly, the boy just needs some friends. He's awfully lonely and he doesn't do super well alone. People to listen, to just <i>be there</i> for him, is all he really needs. In return, he'll happily do the same - he might even have some words of wisdom to share, after all his years of travel. He's certainly seen plenty.<br>
        <br>
        <h1>Foes</h1><br>
        Duck isn't the sort to end up making a lot of enemies. He sticks to himself and he's pretty quiet when he doesn't. Sure, he's just not going to mesh with some people - and that's okay, and he knows that's okay. It doesn't bother him. He'll stay polite and civil with them, regardless of the situation, because he doesn't really know any other way. He's used to having to avoid or defuse a rough situation, and he does the exact same in his adult life.<br>
        <br>
        <h1>Flames</h1><br>
        Sort of new to the scene in this regard, Duck was never really in a position to be in a relationship with anyone. He grew up in an abusive situation, which meant he didn't really have the time or energy to even consider dating (never mind the fact that, even then, he knew he was gay - and that his parents wouldn't approve). After that, he was travelling the world trying to help repair the damage from others for well over a decade, and not staying in one place for very long <i>also</i> isn't very conducive to a relationship. Needless to say, when I say <i>new</i>, he is <i>very</i> new. He's tentative and awkward and uncertain and he certainly won't <i>intentionally</i> make the first move (although an accidental comment or two could definitely slip free).<br>
        <br>
        He isn't exactly <i>closeted</i>, perse - that would mean intentionally not telling anyone, after all - he just... doesn't tend to mention his sexuality unless it actually becomes a topic of conversation, either, so that could definitely cause a bit of confusion here and there as well (though, given his general ineptitude with the dating scene, that's likely to be minimal).<br>
        <br>
        Patience is something pretty important when dating him; less so before the incident, but now it's definitely vital. He's a little jumpy, a little cautious about a lot of things, and it's something that could very easily frustrate someone who isn't willing to wait and help him work through his issues post-trauma. Honestly, it probably sort of means he might not be in the best place to even <i>enter</i> a relationship, but he's somewhat in denial that it's as big of a problem as it is, so... that also wouldn't stop him.<br>
        </luxblock>`.substring(0, 500) + `... <a href="?showuser=838#shipper">Read More</a>`,
        alias: `lux`.toLowerCase().replace(' ', "").replace('\/', ""),
        rawAlias: `lux`,
        pronouns: `she/her`,
        timezone: `gmt-5`,
        contact: `discord`,
        triggers: `n/a`,
    },
    {
        name: `aran o'donnelly-taggart`,
        id: parseInt(`63`),
        groupID: parseInt(`6`),
        groupName: `Adults`,
        image: `https://i.pinimg.com/564x/dc/eb/45/dceb450b975d891c60c3f23703c3e36a.jpg`,
        type: `character`,
        bloodStatus: `pureblood`,
        age: parseInt(`35`),
        ageClass: `30s`,
        overview: `If you read all of Aran's freeform, <a href="https://gfycat.com/limpingnicehorseshoebat">here</a>, <a href="https://imgur.com/TEFLAja">have</a> <a href="https://i.imgur.com/gallery/14QJ3Mv.jpg">some</a> <a href="https://66.media.tumblr.com/a274596927c59db2579fe2d6ba590f7b/tumblr_pny0lusEZz1xgom7zo2_250.gif">eye</a> <a href="https://66.media.tumblr.com/f29cc3c83c36ec707e54bd82bfb72c93/tumblr_pquk2fmMbC1wwb2aso2_400.gif">bleach</a>. <a href="http://i.imgur.com/LpwWjww.gifv">And</a> <a href="https://66.media.tumblr.com/6b70a101628412350af84d68ff350ed6/tumblr_mznbxgiT1E1s2yegdo1_400.gif">some</a> <a href="https://66.media.tumblr.com/2fae7689ba31ae5443f9e1d19d4e031c/tumblr_n8jxbpnVlR1scyhcso1_500.gif">more</a>.  <br>
        <br>
        Anyway. Aran here owns the bookshop in Hogsmeade, and is usually accompanied by his kneazle-cat hybrid who likes to follow him down to work from his house on the outskirts of town. He's Northern Irish technically, but moved to New York when he was young for reasons he doesn't actually know yet (there's a want ad coming). After graduating from Aitkenhead Academy, he went to work for MACUSA as an Auror, and after the war he transferred to the British ministry as he began to realise that his relationship with his mother wasn't normal or healthy. He started therapy when a lot of repressed memories began to show up, and after a year or two he quit and bought the bookshop.  <br>
        <br>
        He was groomed, abused and raped by his mother well into his twenties after she caught him kissing a boy in an effort to fix him. His father, when he found out, sent Aran to a conversion camp and his mother to a wellness retreat - this would be a pattern that was repeated until he was an adult. In the last year, Aran's been going back and forth between Hogsmeade and New York as his parents were put on trial for their abuse of him. His father is now serving a life sentence and his mother is being held on a secure psychiatric unit in the states as she's severely mentally unwell.  <br>
        <br>
        Therapy has done a lot for Aran, but he's still deeply traumatized and dealing with repressed memories surfacing near constantly. Though he's a natural leader, with strong instincts and quick reflexes, he's also an incredibly volatile person with a super short temper. He's learned enough coping skills to manage it, but his first reflex is still to punch stuff and he tends to just walk away from stuff when he's pissed. Which is most of the time.  <br>
        <br>
        He's pretty anti-social, and generally comes across as really grumpy. All he really wants is a quiet life without getting into fights anymore, and the only way he really knows how to do that at the minute is to mostly avoid people. He does have a charming and somewhat flirtatious side to him, but it rarely comes out these days given the whole. Trauma thing. <br>
        <h1>friends</h1><br>
        Aran doesn't have all that many friends - he left most of them behind when he transferred to the British ministry, and he hasn't made much effort since moving to Hogsmeade. He's kind of a mystery to the locals in all honesty, and he likes it that way - it means they leave him alone. But he could really do with some people in his life who are persistent enough to try and get through to him without being like...super pushy and pissing him off. He definitely needs some good influences in his life who can encourage him to be a better person and like. Make him feel better about himself. <br>
        <h1>foes<br>
        Honestly, this is so easy. He's volatile, aggressive when provoked, and has a history of violence. Most of the time he avoids confrontation by straight up walking away, which does come across as super rude, but occasionally he still slips and winds up resorting to violence. He's also kind of a grumpy bastard who generally avoids people, which probably drives some people nuts, and he walked out on his job at MACUSA and the British Ministry with very little warning so there could be potential for a grudge there. <br>
        </h1><h1>flames</h1><br>
        Aran is currently on a self-imposed dating ban after being hit with a normal meter reset by his therapist that monogamy does, in fact, involve not having sex with other people. In short, he has a very screwed up view of relationships that he's still working on with his therapist. He's always been a bit of a flirt who gets around, but he's also an incredibly considerate boyfriend who's super supportive and affectionate. He was just raised with the idea that sex with other people didn't count if there was no emotional connection which obviously isn't true. Hence the dating ban.  <br>
        <br>
        Any romantic relationship with Aran would have to be a super slow burn as he continues to work through his issues. Honestly, there's a not insignificant chance that he would actively go out and date someone else because he'd be too terrified of fucking it up and he'd want to know he <i>could</i> date without cheating - and yes, it's kind of a shitty thing to use someone as a test run, he's aware, but it's a plot I'd be really interested in exploring with him. He's also still dealing with coming to terms with his sexuality after being forced into conversion camp as a teenager, so relationships with men are a particularly tricky minefield - he has a history of one night stands that would send him into a shame spiral, but he's trying to like. Not actively hate himself. It's a work in progress.`.substring(0, 500) + `... <a href="?showuser=819#shipper">Read More</a>`,
        alias: `bea`.toLowerCase().replace(' ', "").replace('\/', ""),
        rawAlias: `bea`,
        pronouns: `she/her`,
        timezone: `gmt`,
        contact: `pm/discord`,
        triggers: `please tag for emotional abuse and body horror. please do not ask me to get involved in any closeted relationships plots - if i want one, i will suggest it with certain provisions. please do not refer to me or my characters as babygirl, ever.`,
    }
];



/******DISCORD WEBHOOKS *******/

function sendSortRequest(message) {
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/967898592922730556/ls_rZ4-t-Mz6UHrp2g5CA5hnELU5Y6WwYXFsr7EM0hO8JPPB224kjuUla_zv314ibR8A");

    request.setRequestHeader('Content-type', 'application/json');

    const params = {
        content: message
    }

    request.send(JSON.stringify(params));
}
function sendReserveRequest(message) {
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/967898737097723924/AleSNIkieXgwG1i7XL7CdLLaF7sTuEZfUcLXQMLoY3idT_1AZJww-XGt0r_YY4SbqNrN");

    request.setRequestHeader('Content-type', 'application/json');

    const params = {
        content: message
    }

    request.send(JSON.stringify(params));
}
function sendUpdateRequest(message) {
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/967898902684643398/mdDTpl1PiX7EJtEIrGQj0iGPHHf-C0wD-Te0nPz4_-gVafrVCfXUUWLwmnT1gw2-c8El");

    request.setRequestHeader('Content-type', 'application/json');

    const params = {
        content: message
    }

    request.send(JSON.stringify(params));
}