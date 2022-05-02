const memControlsTemplate = `
<div class="controls--user">
    <div class="controls--user-left">
        <a href="../profile.html"><img src="https://64.media.tumblr.com/b8fb1f7acf637dd06f881a35b253f132/tumblr_p8q8bhKscU1qee9ito4_400.gif" /></a>
        <span id="subaccounts_menu">
            <form action="https://playedgod.jcink.net/index.php?&amp;act=Login&amp;CODE=01&amp;CookieDate=1" name="subswitch" method="POST">
                <input type="hidden" name="auth_key" value="67b665903a8fc5105c6bbb3892012108">
                <input type="hidden" name="UserName" value="subacct">
                <input type="hidden" name="PassWord" value="subacct">
                <input type="hidden" name="referer" value="">
                <select class="forminput" name="sub_id" onchange="this.form.submit()">
                    <option value="------------" selected="selected">Switch Account</option>
                    <option value="4">&nbsp;&nbsp;» Brennan Cormac </option>
                    <option value="43">&nbsp;&nbsp;» Cynbel Edevane </option>
                    <option value="2">&nbsp;&nbsp;» Hayden Donovan </option>
                    <option value="3">&nbsp;&nbsp;» Malcolm Murdock </option>
                    <option value="35">&nbsp;&nbsp;» Nikolas Kovac </option>
                    <option value="15">&nbsp;&nbsp;» Satiah El Masry </option>
                    <option value="36">&nbsp;&nbsp;» Sterling Di Mitri </option>
                </select>
            </form>
        </span>
    </div>
    <div class="controls--user-right">
        <a href="../profile.html" class="name">Duncan O'Donnelly-Taggart</a>
        <a href="../usercp/user-home.html">Controls</a>
        <a href="../usercp/user-alerts.html">Alerts (0)</a>
        <a href="../defaults/logout.html">Logout</a>
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
    <div class="controls--site-links">
        <div class="scroll">
            <a href="">personal</a>
            <a href="">links</a>
            <a href="">here</a>
            <a href="">personal</a>
            <a href="">links</a>
            <a href="">here</a>
            <a href="">personal</a>
            <a href="">links</a>
            <a href="">here</a>
            <a href="">personal</a>
            <a href="">links</a>
            <a href="">here</a>
            <a href="">personal</a>
            <a href="">links</a>
            <a href="">here</a>
            <a href="">personal</a>
            <a href="">links</a>
            <a href="">here</a>
            <a href="">personal</a>
            <a href="">links</a>
            <a href="">here</a>
            <a href="">personal</a>
            <a href="">links</a>
            <a href="">here</a>
        </div>
    </div>
    <div class="controls--site-image">
        <img src="https://64.media.tumblr.com/15d61296fb9a2be5823e270fea99197e/tumblr_p001tgoDJo1tlgqkgo4_540.png" />
    </div>
</div>
`;

document.querySelector('.controls.memOnly').innerHTML = memControlsTemplate;