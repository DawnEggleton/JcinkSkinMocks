const desktopSlider = `<div class="splide__track">
<ul class="splide__list">
    <li class="splide__slide slide--title">
        <div class="splide__border">
            <h1>
                Chasing
                <span class="accent">Echoes</span>
                <span class="description">A site description in here like this</span>
            </h1>
        </div>
    </li>
    <li class="splide__slide slide--info">
        <div class="splide__border">
            <div class="info--summary">
                <div class="scroll">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </div>
            </div>
            <div class="info--staff">
                <div class="info--staff-member">
                    <img src="https://picsum.photos/500/125" />
                    <a href="?showuser=1"><span>A</span></a>
                </div>
                <div class="info--staff-member">
                    <img src="https://picsum.photos/500/100" />
                    <a href="?showuser=00"><span>B</span></a>
                </div>
                <div class="info--staff-member">
                    <img src="https://picsum.photos/500/150" />
                    <a href="?showuser=00"><span>C</span></a>
                </div>
            </div>
            <div class="info--news">
                <u>News Reel</u>
                <div class="scroll">
                    <a href="#">a linked announcement</a>
                </div>
            </div>
        </div>
    </li>
</ul>
</div>`;
document.querySelector('#desktop-splide').innerHTML = desktopSlider;

const mobileSlider = `<div class="splide__track">
<ul class="splide__list">
    <li class="splide__slide slide--title">
        <div class="splide__border">
            <h1>
                Chasing
                <span class="accent">Echoes</span>
                <span class="description">A site description in here like this</span>
            </h1>
        </div>
    </li>
    <li class="splide__slide slide--info">
        <div class="splide__border">
            <div class="info--summary">
                <div class="scroll">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </div>
            </div>
            <div class="info--news">
                <u>News Reel</u>
                <div class="scroll">
                    <a href="#">a linked announcement</a>
                </div>
            </div>
        </div>
    </li>
    <li class="splide__slide slide--staff">
        <div class="splide__border">
            <div class="info--staff">
                <div class="info--staff-member">
                    <img src="https://picsum.photos/500/125" />
                    <a href="?showuser=1"><span>A</span></a>
                </div>
                <div class="info--staff-member">
                    <img src="https://picsum.photos/500/100" />
                    <a href="?showuser=00"><span>B</span></a>
                </div>
                <div class="info--staff-member">
                    <img src="https://picsum.photos/500/150" />
                    <a href="?showuser=00"><span>C</span></a>
                </div>
            </div>
        </div>
    </li>
</ul>
</div>`;
document.querySelector('#mobile-splide').innerHTML = mobileSlider;

const desktopMenu = `<div class="nav--popout">
<div class="main-menu">
    <button onClick="toggleMenu(this)">
        <i class="fa-solid fa-bars"></i>
        <i class="fa-solid fa-xmark"></i>
    </button>
    <div class="sub-menu">
        <a href="../webpage.html">guidebook</a>
        <a href="../webpage.html">claims</a>
        <a href="../webpage.html">members</a>
    </div>
</div>
</div>
<div id="navstrip" align="left">
<a href="../index.html">My Community</a>
</div>
<div class="nav--controls">
<a href="../index.html"><i class="fa-solid fa-home"></i></a>
<a href="../profile.html" class="memOnly"><i class="fa-solid fa-user"></i></a>
<button onclick="switchAccount(this)">
    <i class="fa-solid fa-arrow-right-arrow-left"></i>
    <i class="fa-solid fa-xmark"></i>
    <div class="nav--switch">
        <span id="subaccounts_menu">
            <form action="https://playedgod.jcink.net/index.php?&amp;act=Login&amp;CODE=01&amp;CookieDate=1" name="subswitch" method="POST">
            <input type="hidden" name="auth_key" value="67b665903a8fc5105c6bbb3892012108">
            <input type="hidden" name="UserName" value="subacct">
            <input type="hidden" name="PassWord" value="subacct">
            <input type="hidden" name="referer" value="">
            <select class="forminput" name="sub_id" onchange="this.form.submit()">
            <option value="------------" selected="selected">Switch Account</option>
            <option value="4">&nbsp;&nbsp;» Brennan Cormac </option><option value="43">&nbsp;&nbsp;» Cynbel Edevane </option><option value="2">&nbsp;&nbsp;» Hayden Donovan </option><option value="50">&nbsp;&nbsp;» Jesse Dunn </option><option value="45">&nbsp;&nbsp;» Madison Mckinley </option><option value="3">&nbsp;&nbsp;» Malcolm Murdock </option><option value="35">&nbsp;&nbsp;» Nikolas Kovac </option><option value="15">&nbsp;&nbsp;» Satiah El Masry </option><option value="36">&nbsp;&nbsp;» Sterling Di Mitri </option>
            </select>
            </form>
        </span>
    </div>
</button>
<a href="../usercp/user-edit.html" class="memOnly"><i class="fa-solid fa-gear"></i></a>
<a href="../usercp/user-inbox.html" class="memOnly"><i class="fa-solid fa-envelope"></i></a>
<a href="../usercp/user-alerts.html" class="memOnly"><i class="fa-solid fa-bell"></i></a>
<a href="../defaults/redirect.html" class="memOnly"><i class="fa-solid fa-power-off"></i></a>
<a href="../defaults/register1.html" class="guestOnly"><i class="fa-solid fa-user-plus"></i></a>
<a href="javascript:void(0)" class="guestOnly popup" data-modal="login"><i class="fa-solid fa-sign-in"></i></a>
<a href="#"><i class="fa-brand fa-discord"></i></a>
<div class="border-vertical"></div>
<a href="#" target="_blank" class="staffOnly"><i class="fa-solid fa-screwdriver-wrench"></i></a>
<div class="border-vertical staffOnly"></div>
<div class="nav--setting">
    <i class="fa-solid fa-sun-bright"></i>
    <input type="range" min="1" max="3" name="setting-brightness" />
</div>
<div class="nav--setting">
    <i class="fa-solid fa-text-size"></i>
    <input type="range" min="1" max="3" name="setting-size" />
</div>
</div>`;
document.querySelector('.nav--desktop').innerHTML = desktopMenu;

const mobileMenu = `<div class="nav--popout">
<div class="main-menu">
    <button onClick="toggleMenu(this)">
        <i class="fa-solid fa-bars"></i>
        <i class="fa-solid fa-xmark"></i>
    </button>
    <div class="sub-menu">
        <a href="../index.html">index</a>
        <a href="../webpage.html">guidebook</a>
        <a href="../webpage.html">claims</a>
        <a href="../members.html">members</a>
        <a href="#">Discord</a>
        <a href="#" target="_blank" class="staffOnly">Admin</a>
    </div>
</div>
</div>
<div class="nav--popout">
<div class="main-menu">
    <button onClick="toggleMenu(this)">
        <i class="fa-solid fa-user-gear"></i>
        <i class="fa-solid fa-xmark"></i>
    </button>
    <div class="sub-menu">
        <div class="nav--mobile-settings">
            <div class="nav--setting">
                <i class="fa-solid fa-sun-bright"></i>
                <input type="range" min="1" max="3" name="setting-brightness" />
            </div>
            <div class="nav--setting">
                <i class="fa-solid fa-text-size"></i>
                <input type="range" min="1" max="3" name="setting-size" />
            </div>
        </div>
        <span id="subaccounts_menu">
            <form action="https://playedgod.jcink.net/index.php?&amp;act=Login&amp;CODE=01&amp;CookieDate=1" name="subswitch" method="POST">
            <input type="hidden" name="auth_key" value="67b665903a8fc5105c6bbb3892012108">
            <input type="hidden" name="UserName" value="subacct">
            <input type="hidden" name="PassWord" value="subacct">
            <input type="hidden" name="referer" value="">
            <select class="forminput" name="sub_id" onchange="this.form.submit()">
            <option value="------------" selected="selected">Switch Account</option>
            <option value="4">&nbsp;&nbsp;» Brennan Cormac </option><option value="43">&nbsp;&nbsp;» Cynbel Edevane </option><option value="2">&nbsp;&nbsp;» Hayden Donovan </option><option value="50">&nbsp;&nbsp;» Jesse Dunn </option><option value="45">&nbsp;&nbsp;» Madison Mckinley </option><option value="3">&nbsp;&nbsp;» Malcolm Murdock </option><option value="35">&nbsp;&nbsp;» Nikolas Kovac </option><option value="15">&nbsp;&nbsp;» Satiah El Masry </option><option value="36">&nbsp;&nbsp;» Sterling Di Mitri </option>
            </select>
            </form>
        </span>
        <a href="../profile.html" class="memOnly">First Last</a>
        <a href="../usercp/user-edit.html" class="memOnly">Edit Profile</a>
        <a href="../usercp/user-inbox.html" class="memOnly">Inbox (0)</a>
        <a href="../usercp/user-alerts.html" class="memOnly">Alerts (0)</a>
        <a href="../defaults/login.html" class="memOnly">Logout</a>
        <a href="../defaults/register1.html" class="guestOnly">Register</a>
        <a href="../defaults/login.html" class="guestOnly">Login</a>
    </div>
</div>
</div>`;
document.querySelector('.nav--mobile').innerHTML = mobileMenu;