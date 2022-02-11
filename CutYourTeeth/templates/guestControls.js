const guestControlsTemplate = `
<div class="controls--user">
    <div class="controls--user-left">
        <a href="profile.html"><img src="http://placehold.it/100" /></a>
    </div>
    <div class="controls--user-right">
        <a class="name">Welcome to Play God!</a>
        <a href="?act=Reg&CODE=00">Register</a>
        <a href="?act=Login&CODE=00">Login</a>
    </div>
</div>
<div class="controls--site">
    <div class="controls--site-info">
        <div class="controls--site-info-intro">
            <div class="scroll">
                <b><i>Play God</i></b> is a dystopian powers roleplay set in the imaginary city of Davenport, Maine. Pulling inspiration from sources such as Six of Crows, X-Men, Blindspot, and Motherland: Fort Salem, we want to focus on the struggles of publicly emerging otherness and socioeconomic struggles in a safe, accepting atmosphere. Want to learn more? Check out our <a href="?act=Pages&amp;kid=guide">Guidebook</a> or pop into our <a href="https://discord.gg/9yw8VgeCJ2" target="_blank">Discord</a> and chat with us!
            </div>
        </div>
        <div class="controls--site-info-news">
            <div class="scroll">
                <p><b>dd.mm.yyyy</b> new skin! make sure to check the announcements for any changes you might need to make to your profiles!</p>
                <p><b>03.09.2021</b> grand opening!</p>
                <p><b>14.08.2021</b> soft opening!</p>
            </div>
        </div>
        <div class="controls--site-info-staff">
            <a href="?showuser=1"><span>Lux</span>Admin / Coder</a>
            <a href="?showuser=8"><span>Meriel</span> Mod</a>
            <a href="?showuser=5"><span>Quinn</span> Mod</a>
        </div>
    </div>
    <div class="controls--site-image">
        <img src="http://placehold.it/1000x2000" />
    </div>
</div>
`;

document.querySelector('.controls.guestOnly').innerHTML = guestControlsTemplate;