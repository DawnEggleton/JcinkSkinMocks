const nav = `
<div class="main-nav--content">
    <div class="main-nav--code">
        <button onclick="highlightCode()" class="copyQuick">copy</button>
        <pre><textarea class="scroll">
            [dohtml]<span class="tia"><div class="sslp-wrap">
            <ib><img src="https://66.media.tumblr.com/9074b35bba3490d236eb2846125b1eaf/tumblr_pylocn5E0D1vz2ghao8_1280.jpg"></ib>
            <h2>if you're gonna love her, leave her wild</h2>
            <div class="sslp-scroll">

            Content

            </div><tag>
            for @[name]
            </tag></div></span>[/dohtml]
        </textarea></pre>
        <hr>
    </div>
    <div class="main-nav--links scroll">
        <a href="webpage.html">Guidebook</a>
        <a href="post.html">Codes</a>
        <a href="profile.html" class="mobileOnly memOnly">Profile</a>
        <a href="/" class="memOnly">Discord</a>
        <a href="/" class="staffOnly mobileOnly">Admin Panel</a>
        <a href="/" class="staffOnly mobileOnly">Mod Panel</a>
        <a href="claim-faces.html">Faces</a>
        <a href="claim-abilities.html">abilities</a>
        <a href="claim-jobs.html">jobs</a>
        <a href="claim-university.html">universities</a>
        <a href="claim-classes.html">classes</a>
        <a href="claim-dorms.html">dorms</a>
        <a href="claim-leadership.html">leadership</a>
        <a href="claim-quidditch.html">quidditch</a>
    </div>
</div>
<div class="main-nav--trigger-bar">
    <button onclick="toggleMenu()">
        <div class="bars"></div>
        Menu
    </button>

    <div class="nav--controls mobileOnly"></div>
</div>
`;

document.querySelector('.main-nav').innerHTML = nav;