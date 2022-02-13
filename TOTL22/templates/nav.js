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
        <a href="/">Custom Links</a>
        <a href="/">Come After</a>
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