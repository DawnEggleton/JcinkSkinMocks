const controls = `
<div class="nav--controls">
    <button onclick="toggleTheme()">
        <i class="fa-solid fa-moon lightOnly"></i>
        <i class="fa-solid fa-sun darkOnly"></i>
    </button>
    <button onclick="toggleSize()">
        <i class="fa-solid fa-magnifying-glass-plus smallOnly"></i>
        <i class="fa-solid fa-magnifying-glass-minus largeOnly"></i>
    </button>
    <hr>

    <a href="/" title="Join the Discord" class="guestOnly"><i class="fa-brand fa-discord"></i></a>
    <a href="/" title="Register" class="guestOnly"><i class="fa-solid fa-user-plus"></i></a>
    <a href="/" title="Login" class="guestOnly"><i class="fa-solid fa-sign-in"></i></a>
    <hr class="guestOnly">

    <a href="profile.html" title="View Profile" class="memOnly notMobile"><i class="fa-solid fa-user"></i></a>
    <a href="/" title="Control Panel" class="memOnly"><i class="fa-solid fa-gear"></i></a>
    <a href="/" title="Inbox" class="memOnly"><i class="fa-solid fa-envelope"></i></a>
    <a href="/" title="Alerts" class="memOnly"><i class="fa-solid fa-bell"></i></a>
    <a href="/" title="Logout" class="memOnly"><i class="fa-solid fa-power-off"></i></a>
    <hr class="memOnly">

    <a href="/admin.php" title="Admin Panel" target="_blank" class="staffOnly notMobile"><i class="fa-regular fa-screwdriver-wrench"></i></a>
    <a href="/mod.php" title="Mod Panel" class="staffOnly notMobile"><i class="fa-solid fa-gavel"></i></a>
    <hr class="staffOnly notMobile">

    <a href="#totop" title="Go to Top"><i class="fa-solid fa-angle-up"></i></a>
    <a href="#tobottom" title="Go to Bottom"><i class="fa-solid fa-angle-down"></i></a>
</div>
`;
document.querySelectorAll('.nav--controls').forEach(controlSet => {
    console.log(controlSet);
    controlSet.innerHTML = controls;
});