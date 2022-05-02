const header = `
<div class="header">
    <div class="header--deco">
        <div class="header--deco-accent left"></div>
        <div class="header--deco-accent right"></div>
        <h1>Turn on the Light</h1>
        <p>a post-potter site currently in february 2006</p>
    </div>
</div>
<div class="header--info">
    <div class="header--calendar"></div>
    <div class="header--intro">
        <b>Welcome!</b>
        <p>We're a trio-era Harry Potter site set eight years after the Battle of Hogwarts. The wizarding world is trying to repair itself, but the veil in the department of mysteries is acting strangely, and nobody quite knows what to expect. Please register an OOC account, and then your characters as First Last, case doesn't matter!</p>
    </div>
    <div class="header--staff">
        <b>Staff</b>
        <a href="?showuser=1" class="g-9" title="Bea"><i class="th th-badger-o"></i></a>
        <a href="?showuser=305" class="g-14" title="Amy"><i class="th th-eagle-o"></i></a>
        <a href="?showuser=309" class="g-16" title="Lux"><i class="sf sf-snake-o"></i></a>
        <a href="?showuser=" class="g-7" title="Open"><i class="th th-lion-o"></i></a>
    </div>
</div>
`;

document.querySelector('header').innerHTML = header;