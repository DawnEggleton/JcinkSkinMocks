const navTemplate = `
<div id="navstrip" align="left">
    <a href="../index.html">Play God</a>
</div>

<!--Desktop Menu-->
<div class="ucp desktopOnly">
    <ul class="ucp--menu">
        <li>
            <a href="webpage.html">Guide</a>
            <ul>
                <span>
                    <li><a href="../webpage.html#premise">Premise</a></li>
                    <li><a href="../webpage.html#etiquette">Etiquette</a></li>
                    <li><a href="../webpage.html#timeline">Timeline</a></li>
                    <li><a href="../webpage.html#setting">Setting</a></li>
                    <li><a href="../webpage.html#canons">Canons</a></li>
                    <li><a href="../webpage.html#claims">Claims</a></li>
                </span>
            </ul>
        </li>
        <li><a href="#">Discord</a></li>
        <li>
            Settings
            <ul>
                <span>
                    <li>
                        <button onclick="toggleMode()">
                            <span class="darkOnly">Lighter</span>
                            <span class="lightOnly">Darker</span>
                        </button>
                    </li>
                    <li>
                        <button onclick="toggleFont()">
                            <span class="smallOnly">Larger Font</span>
                            <span class="largeOnly">Smaller Font</span>
                        </button>
                    </li>
                </span>
            </ul>
        </li>
        <li class="staffOnly">
            Staff
            <ul class="staff">
                <span>
                    <li><a href="#">Admin CP</a></li>
                    <li><a href="../modcp/mod.html">Mod CP</a></li>
                    <li><a href="https://docs.google.com/spreadsheets/d/1egWN7GbLdcKs_T9eKQTE0viNMbua7b7A5ebbBUpyPMo/edit#gid=0">Activity</a></li>
                </span>
            </ul>
        </li>
    </ul>
    <button onclick="openVisitor()" class="guestOnly"><i class="fas fa-bars"></i></button>
    <button onclick="openControls()" class="memOnly"><i class="fas fa-bars"></i></button>
</div>

<!--Mobile Menu-->
<div class="ucp mobileTablet">
    <button onclick="openMobileMenu()"><i class="fas fa-bars"></i></button>
    <ul class="ucp--menu-mobile">
        <button class="close" onclick="closeMobileMenu()"><i class="fas fa-times"></i>close</button>
        <div class="scroll">
            <li class="name">Navigation</li>
            <li>
                <a href="../webpage.html">Guide</a>
                <ul>
                    <span>
                        <li><a href="../webpage.html#premise">Premise</a></li>
                        <li><a href="../webpage.html#etiquette">Etiquette</a></li>
                        <li><a href="../webpage.html#timeline">Timeline</a></li>
                        <li><a href="../webpage.html#setting">Setting</a></li>
                        <li><a href="../webpage.html#canons">Canons</a></li>
                        <li><a href="../webpage.html#claims">Claims</a></li>
                    </span>
                </ul>
            </li>
            <li><a href="#">Discord</a></li>
            <li>
                <button onclick="toggleMode()">
                    <span class="darkOnly">Lighter</span>
                    <span class="lightOnly">Darker</span>
                </button>
            </li>
            <li>
                <button onclick="toggleFont()">
                    <span class="smallOnly">Larger Font</span>
                    <span class="largeOnly">Smaller Font</span>
                </button>
            </li>
            <li><a href="" class="staffOnly">Admin CP</a></li>
            <li><a href="" class="staffOnly">Mod CP</a></li>
            <hr>
            <li class="name memOnly"><a href="">First Last</a></li>
            <li class="memOnly">
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
            </li>
            <li class="memOnly"><a href="../usercp/user-edit.html">Edit Profile</a></li>
            <li class="memOnly"><a href="../usercp/user-alerts.html">Alerts (0)</a></li>
            <li class="memOnly"><a href="../defaults/logout.html">Logout</a></li>
            <li class="name guestOnly">Visitor</li>
            <li class="guestOnly"><a href="../defaults/register.html">Register</a></li>
            <li class="guestOnly"><a href="../defaults/login.html">Login</a></li>
            <hr class="memOnly">
            <li class="name memOnly">Personal Links</li>
            <li class="memOnly"><a href="">Personal</a></li>
            <li class="memOnly"><a href="">Links</a></li>
            <li class="memOnly"><a href="">Here</a></li>
        </div>
    </ul>
</div>
`;

document.querySelector('nav').innerHTML = navTemplate;