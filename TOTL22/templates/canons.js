const canonLinks = `
<a href="#abbott" data-category="canons">abbott</a>
<a href="#abercrombie" data-category="canons">abercrombie</a>
<a href="#ackerley" data-category="canons">ackerley</a>
<a href="#avery" data-category="canons">avery</a>
<a href="#babbling" data-category="canons">babbling</a>
<a href="#baddock" data-category="canons">baddock</a>
<a href="#barbary" data-category="canons">barbary</a>
<a href="#belby" data-category="canons">belby</a>
<a href="#bell" data-category="canons">bell</a>
<a href="#berrow" data-category="canons">berrow</a>
<a href="#black" data-category="canons">black</a>
<a href="#bletchley" data-category="canons">bletchley</a>
<a href="#bobbin" data-category="canons">bobbin</a>
<a href="#bole" data-category="canons">bole</a>
<a href="#bones" data-category="canons">bones</a>
<a href="#boot" data-category="canons">boot</a>
<a href="#branstone" data-category="canons">branstone</a>
<a href="#braithwaite" data-category="canons">braithwaite</a>
<a href="#brocklehurst" data-category="canons">brocklehurst</a>
<a href="#brown" data-category="canons">brown</a>
<a href="#bulstrode" data-category="canons">bulstrode</a>
<a href="#cadwallader" data-category="canons">cadwallader</a>
<a href="#carmichael" data-category="canons">carmichael</a>
<a href="#carrow" data-category="canons">carrow</a>
<a href="#cauldwell" data-category="canons">cauldwell</a>
<a href="#chang" data-category="canons">chang</a>
<a href="#clearwater" data-category="canons">clearwater</a>
<a href="#coote" data-category="canons">coote</a>
<a href="#corner" data-category="canons">corner</a>
<a href="#cornfoot" data-category="canons">cornfoot</a>
<a href="#crabbe" data-category="canons">crabbe</a>
<a href="#creevey" data-category="canons">creevey</a>
<a href="#cresswell" data-category="canons">cresswell</a>
<a href="#crumb" data-category="canons">crumb</a>
<a href="#davis" data-category="canons">davis</a>
<a href="#davies" data-category="canons">davies</a>
<a href="#delacour" data-category="canons">delacour</a>
<a href="#derrick" data-category="canons">derrick</a>
<a href="#diggle" data-category="canons">diggle</a>
<a href="#diggory" data-category="canons">diggory</a>
<a href="#dingle" data-category="canons">dingle</a>
<a href="#dobbs" data-category="canons">dobbs</a>
<a href="#doge" data-category="canons">doge</a>
<a href="#dolohov" data-category="canons">dolohov</a>
<a href="#dukemccormack" data-category="canons">duke-McCormack</a>
<a href="#dumbledore" data-category="canons">dumbledore</a>
<a href="#dunbar" data-category="canons">dunbar</a>
<a href="#death" data-category="canons">d'Eath</a>
<a href="#edgecombe" data-category="canons">edgecombe</a>
<a href="#entwhistle" data-category="canons">entwhistle</a>
<a href="#fancourt" data-category="canons">fancourt</a>
<a href="#fawcett" data-category="canons">fawcett</a>
<a href="#fawley" data-category="canons">fawley</a>
<a href="#filch" data-category="canons">filch</a>
<a href="#finchfletchley" data-category="canons">finch-Fletchley</a>
<a href="#finnigan" data-category="canons">finnigan</a>
<a href="#fletcher" data-category="canons">fletcher</a>
<a href="#flint" data-category="canons">flint</a>
<a href="#flitwick" data-category="canons">flitwick</a>
<a href="#flume" data-category="canons">flume</a>
<a href="#fortescue" data-category="canons">fortescue</a>
<a href="#frobisher" data-category="canons">frobisher</a>
<a href="#fudge" data-category="canons">fudge</a>
<a href="#goldstein" data-category="canons">goldstein</a>
<a href="#goyle" data-category="canons">goyle</a>
<a href="#granger" data-category="canons">granger</a>
<a href="#graves" data-category="canons">graves</a>
<a href="#greengrass" data-category="canons">greengrass</a>
<a href="#greyback" data-category="canons">greyback</a>
<a href="#hagrid" data-category="canons">hagrid</a>
<a href="#harper" data-category="canons">harper</a>
<a href="#higgs" data-category="canons">higgs</a>
<a href="#hooch" data-category="canons">hooch</a>
<a href="#hooper" data-category="canons">hooper</a>
<a href="#hopkins" data-category="canons">hopkins</a>
<a href="#johnson" data-category="canons">johnson</a>
<a href="#jones" data-category="canons">jones</a>
<a href="#jordan" data-category="canons">jordan</a>
<a href="#kirke" data-category="canons">kirke</a>
<a href="#krum" data-category="canons">krum</a>
<a href="#lestrange" data-category="canons">lestrange</a>
<a href="#li" data-category="canons">li</a>
<a href="#longbottom" data-category="canons">longbottom</a>
<a href="#lovegood" data-category="canons">lovegood</a>
<a href="#lupin" data-category="canons">lupin</a>
<a href="#macdonald" data-category="canons">macDonald</a>
<a href="#macmillan" data-category="canons">macMillan</a>
<a href="#macnair" data-category="canons">macNair</a>
<a href="#madley" data-category="canons">madley</a>
<a href="#malfoy" data-category="canons">malfoy</a>
<a href="#marchbanks" data-category="canons">marchbanks</a>
<a href="#mcdonald" data-category="canons">mcDonald</a>
<a href="#mcdougal" data-category="canons">mcDougal</a>
<a href="#mcgonagall" data-category="canons">mcGonagall</a>
<a href="#mclaggen" data-category="canons">mcLaggen</a>
<a href="#merrythought" data-category="canons">merrythought</a>
<a href="#midgeon" data-category="canons">midgeon</a>
<a href="#montague" data-category="canons">montague</a>
<a href="#montgomery" data-category="canons">montgomery</a>
<a href="#moon" data-category="canons">moon</a>
<a href="#mulciber" data-category="canons">mulciber</a>
<a href="#nott" data-category="canons">nott</a>
<a href="#ogden" data-category="canons">ogden</a>
<a href="#ollivander" data-category="canons">ollivander</a>
<a href="#orpington" data-category="canons">orpington</a>
<a href="#orpingtonbelby" data-category="canons">orpington-belby</a>
<a href="#parkinson" data-category="canons">parkinson</a>
<a href="#patil" data-category="canons">patil</a>
<a href="#peakes" data-category="canons">peakes</a>
<a href="#podmore" data-category="canons">podmore</a>
<a href="#pomfrey" data-category="canons">pomfrey</a>
<a href="#potter" data-category="canons">potter</a>
<a href="#pritchard" data-category="canons">pritchard</a>
<a href="#proudfoot" data-category="canons">proudfoot</a>
<a href="#pucey" data-category="canons">pucey</a>
<a href="#quirke" data-category="canons">quirke</a>
<a href="#robins" data-category="canons">robins</a>
<a href="#rookwood" data-category="canons">rookwood</a>
<a href="#rosier" data-category="canons">rosier</a>
<a href="#rosmerta" data-category="canons">rosmerta</a>
<a href="#rowle" data-category="canons">rowle</a>
<a href="#scamander" data-category="canons">scamander</a>
<a href="#scrimgeour" data-category="canons">scrimgeour</a>
<a href="#selwyn" data-category="canons">selwyn</a>
<a href="#shacklebolt" data-category="canons">shacklebolt</a>
<a href="#shunpike" data-category="canons">shunpike</a>
<a href="#sinistra" data-category="canons">sinistra</a>
<a href="#skeeter" data-category="canons">skeeter</a>
<a href="#sloper" data-category="canons">sloper</a>
<a href="#slughorn" data-category="canons">slughorn</a>
<a href="#smith" data-category="canons">smith</a>
<a href="#spinnet" data-category="canons">spinnet</a>
<a href="#sprout" data-category="canons">sprout</a>
<a href="#stebbins" data-category="canons">stebbins</a>
<a href="#stimpson" data-category="canons">stimpson</a>
<a href="#summerby" data-category="canons">summerby</a>
<a href="#summers" data-category="canons">summers</a>
<a href="#thomas" data-category="canons">thomas</a>
<a href="#thruston" data-category="canons">thruston</a>
<a href="#tonks" data-category="canons">tonks</a>
<a href="#towler" data-category="canons">towler</a>
<a href="#travers" data-category="canons">travers</a>
<a href="#tremlett" data-category="canons">tremlett</a>
<a href="#trelawney" data-category="canons">trelawney</a>
<a href="#turpin" data-category="canons">turpin</a>
<a href="#umbridge" data-category="canons">umbridge</a>
<a href="#urquart" data-category="canons">urquart</a>
<a href="#vaisey" data-category="canons">vaisey</a>
<a href="#vance" data-category="canons">vance</a>
<a href="#vane" data-category="canons">vane</a>
<a href="#vector" data-category="canons">vector</a>
<a href="#wagtail" data-category="canons">wagtail</a>
<a href="#warrington" data-category="canons">warrington</a>
<a href="#weasley" data-category="canons">weasley</a>
<a href="#whitby" data-category="canons">whitby</a>
<a href="#wood" data-category="canons">wood</a>
<a href="#yaxley" data-category="canons">yaxley</a>
<a href="#zabini" data-category="canons">zabini</a>
<a href="#zeller" data-category="canons">zeller</a>
`;
const canons = `
<!-- ABBOTT -->
<div class="webpage--tab" data-tab="#abbott">

<p>Pureblood. Welsh. Louise Abbott was killed by Death Eaters in October 1996. The family is distantly related to the Orpingtons through Gwendolyn.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>ABBOTT, anuerin.</b> occupation. b. 1930.<br>
m. <b>ORPINGTON, gwendolyn.</b> occupation. b. 1932.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonBranch>
    <b>ABBOTT, cian.</b> occupation. b. 1952.<br>
    m. <b><s>SAMUELS, louise.</s></b> b. 1952. d. 1996.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonBranch>
      <a href="?showuser=9" class="g-6"><b>ABBOTT, hannah.</b></a> owner of the green thumb. b. 1979. bea.<br>
    </canonBranch>

    <b>ABBOTT-LLYWARCH, rhys.</b> occupation. b. 1953.<br>
    m. <b>ABBOTT-LLYWARCH, dafydd.</b> occupation. b. 1950.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
      <a href="?showuser=522" class="g-6"><b>ABBOTT-LLYWARCH, gawain.</b></a> cursebreaker. b. 1978. roe.<br>
      <a href="?showuser=530" class="g-6"><b>ABBOTT-LLYWARCH, angharad.</b></a> cursebreaker. b. 1980. amy.<br><br>
      <b>ABBOTT-LLYWARCH, tristan.</b> occupation. b. 1982.<br>
    </canonbranch>

    <b><s>ABBOTT, aderyn.</s></b> b. 1955. d. 2004. <br>
    m. <b><s>AUSTEN, madoc.</s></b> b. 1954. d. 2004. <br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <a href="?showuser=1355" class="g-6"><b>AUSTEN, lance.</b></a> lawyer. b. 1977. lux. <br>
        <b>AUSTEN, saffir.</b> occupation. b. 1978.<br>
        <b>AUSTEN, rhian.</b> occupation. b. 1979.<br>
        <b>AUSTEN, bowen.</b> occupation. b. 1981.<br>
        <a href="?showuser=617" class="g-6"><b>AUSTEN, iona.</b></a> unemployed. b. 1984. bea.<br>
    </canonbranch>

    <b>ABBOTT, glyn.</b> occupation. b. 1956.<br>
    m. <b>MORTIMER, arwen.</b> occupation. b. 1958.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <b>ABBOTT, rhyd.</b> occupation. b. 1981.<br>
        <b>ABBOTT, mairwen.</b> occupation. b. 1982.<br>
        <a href="?showuser=9" class="g-6"><b>ABBOTT, owen.</b></a> archivist. student. b. 1984. bea.<br>
  w/ <a href="?showuser=639" class="g-6"><b>ROOKWOOD, bridget.</b></a> assistant archivist. b. 1985. amy.<br>
  <button class="webpage--canon-expansion" onClick="expandCanons(this)">
      <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
      <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
  </button>
  <canonbranch>
    <b>ABBOTT, arthur.</b> b. 2006. <br>
    <b>ABBOTT, charlotte.</b> b. 2006. <br>
  </canonbranch>
        <b>ABBOTT, ffion.</b> student. b. 1987.<br>
        <b>ABBOTT, eilonwy.</b> student. b. 1988.<br>
        <b>ABBOTT, llywellyn.</b> student. b. 1990.<br>
        <b>ABBOTT, celyn.</b> student. b. 1991. <br>
    </canonbranch>

    <a href="?showuser=336" class="g-12"><b>ABBOTT, morwenna</b></a> intelligence specialist. b. 1959. bells.<br>
    m. <b>ELLIS, lloyd.</b> occupation. b. 1957.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <b>ELLIS, bronwyn.</b> occupation. b. 1982.<br>
        <a href="?showuser=9" class="g-13"><b>ELLIS, bryn.</b></a> montrose magpies chaser. b. 1985. <br>
    </canonbranch>

    <b>ABBOTT, iwan.</b> occupation. b. 1960.<br>
    m. <b>BEVAN, una.</b> occupation. b. 1960.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <b>ABBOTT, taffy.</b> occupation. b. 1984.<br>
        <b>ABBOTT, art.</b> occupation. b. 1985.<br>
  <b>ABBOTT, mab.</b> occupation. b. 1986.<br>
        <b>ABBOTT, delia.</b> student. b. 1988.<br>
        <b>ABBOTT, gethin.</b> student. b. 1991. <br>
    </canonbranch>
</canonBranch>

</div>


<!-- ABERCROMBIE -->
<div class="webpage--tab" data-tab="#abercrombie">

<p>Halfblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>ABERCROMBIE, first.</b> occupation. b. year.<br>
m. <b>ABERCROMBIE, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>ABERCROMBIE, euan.</b> occupation. b. 1983-84. <br>
</canonbranch>

</div>


<!-- ACKERLEY -->
<div class="webpage--tab" data-tab="#ackerley">

<p>Pureblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>ACKERLEY, first.</b> occupation. b. year.<br>
m. <b>ACKERLEY, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>ACKERLEY, stewart.</b> occupation. b. 1982-83. <br>
</canonbranch>

</div>


<!-- AVERY -->
<div class="webpage--tab" data-tab="#avery">

<p>Pureblood. British. Clementine has a son, Richard, with Richard Rookwood. </p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>AVERY, ptolemy.</b> occupation. b. year.<br>
m. <b>AVERY, clementine.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
  <b>AVERY, henrietta.</b> occupation. b. year. <br>
  <a href="?showuser=1379" class="g-6"><b>AVERY, daisy.</b></a> figure skater. b. 1982. chels.<br>
  <b>AVERY, george.</b> occupation. b. 1982. <br>
  <b>AVERY, victoria.</b> occupation. b. year. 
</canonbranch>

</div>


<!-- BABBLING -->
<div class="webpage--tab" data-tab="#babbling">

<p>Pureblood. Barnabus had a long term relationship with Aella Mulciber, leading to their daughter Scylla. Barnabus went missing eleven years ago and has never returned. Griselda died after giving birth to Regena, and Robinson drank himself to death shrotly after. Roderick is currently incarcerated awaiting trial after the the returns of his wives revealed his lengthy criminal history and association with the Death Eaters. Ravenna Senior had a heart attack at the news. </p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>BABBLING, robert.</b> d. 1980. <br>
m. <b>BABBLING, ravenna.</b> d. 2005. <br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
  <b>BABBLING, first.</b> occupation. b. year.<br>
  m. <b>BABBLING, first.</b> occupation. b. year.<br>
  <button class="webpage--canon-expansion" onClick="expandCanons(this)">
      <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
      <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
  </button>
  <canonbranch>
    <b>BABBLING, barnabus.</b> investigative journalist. b. 1965.<br>
    w/ <b><s>MULCIBER, aella.</s></b> d. 1997. <br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
      <a href="?showuser=321" class="g-6"><b>MULCIBER, scylla.</b></a>. student. b. 1987. bells. <br>
    </canonbranch> 
      <b>BABBLING, bathsheda.</b> ancient runes professor. b. 1967-68. <br>
  </canonbranch>
  <b>BABBLING, robinson.</b> unspeakable. d. 1983. <br>
  m. <b>BASTARCHE, griselda.</b> socialite. d. 1983. <br>
  <button class="webpage--canon-expansion" onClick="expandCanons(this)">
      <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
      <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
  </button>
  <canonbranch>
    <b>BABBLING, russell.</b> occupation. b. 1959. d. 1996. r. 2005. <br>
    <b>BABBLING, ravenna.</b> occupation. b. 1962. <br>
    <b>BABBLING, roderick.</b> incarcerated. b. 1964. <br>
    m. <b>BABBLING, name.</b> occupation. b. year. d. 1996. r. 2005. <br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
      <b>BABBLING, madelyn.</b> occupation. b. 1984. <Br>
    </canonbranch>
    m. <a href="?showuser=1039" class="g-17"><b>BAUDELAIRE, celine.</b></a> unemployed. b. 1971. d. 1997. r. 2005. chels.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
      <b>BAUDELAIRE, adelaide.</b> student. b. 1990s. <br>
    </canonbranch>
    m. <b>BABBLING, name.</b> occupation. b. year. d. 1998. r. 2005. <br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
      <b>BABBLING, elias.</b> student. b. 1998. <br>
    </canonbranch>
    m. <b>HIGGS, millie.</b> occupation. b. year. <br>
    m. <a href="?showuser=981" class="g-6"><b>KEMPLE, zoe.</b></a> author. b. 1972. bea.<br>
    <b>BABBLING, roberta.</b> occupation. b. 1970. <br>
    <a href="?showuser=1186" class="g-6"><b>BABBLING, rosalin.</b></a> unemployed. b. 1977. bells.<br>
    <b>BABBLING, raphael.</b> occupation. b. 1979. <br>
    <b>BABBLING, regena.</b> b. 1983. d. 1983.<br>
  </canonbranch>
</canonbranch>
</div>


<!-- BADDOCK -->
<div class="webpage--tab" data-tab="#baddock">

<p>Pureblood. Violette is from an old American purebood family. Bram, Phaedra and Floretta are in a triad marriage, and Floretta carried their daughter Amélie.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>BADDOCK, conrad.</b> head of international magical cooperation. b. 1945.<br>
    m. <b>VAN RENSSELAER, violette.</b> socialite. b. 1950.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
  <b>BADDOCK, bram.</b> auror. b. 1972. <br>
  m. <a href="?showuser=1045" class="g-6"><b>WARRINGTON, phaedra.</b></a> unemployed. b. 1975. bells.<br>
  m. <a href="?showuser=1073" class="g-6"><b>ARCHAMBEAU, floretta.</b></a> patisserie chef. b. 1974. bea.<br>
  <button class="webpage--canon-expansion" onClick="expandCanons(this)">
      <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
      <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
  </button>
  <canonbranch>
    <b>BADDOCK, amélie</b>. b. 2001. <br>
  </canonbranch>
  <b>BADDOCK, juliette.</b> occupation. b. 1974. <br>
  <b>BADDOCK, rhys.</b> occupation. b. 1975-1976. <br>
        <b>BADDOCK, malcolm.</b> occupation. b. 1982-1983. <br>
  <b>BADDOCK, fiona.</b> occupation. b. 1989-1990. <br>
    </canonbranch>
</canonbranch>

</div>


<!-- BARBARY -->
<div class="webpage--tab" data-tab="#barbary">

<p>Halfblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>BARBARY, first.</b> occupation. b. year.<br>
m. <b>BARBARY, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>BARBARY, heathcote.</b> weird sisters guitarist. b. 1974. <br>
</canonbranch>

</div>


<!-- BELBY -->
<div class="webpage--tab" data-tab="#belby">

<p>Pureblood. Welsh/Greek. Damocles invented the wolfsbane potion. Nicodemus is married to Howell Orpington; they and their children are listed under the Orpington-Belbys.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>BELBY, michael.</b> occupation. b. 1927.<br>
m. <b>MELAS, clio.</b> occupation. b. 1930.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>BELBY, ajax.</b> occupation. b. 1949. <br>
    m. <b>FUDGE, felicia.</b> socialite. b. year. <br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
  <a href="?showuser=999" class="g-12"><b>BELBY, zosime.</b></a> senior investigating auror. b. 1974. amy.<br>
  <b>BELBY, chrysa.</b> occupation. b. 1977. <br> 
  <a href="?showuser=1245" class="g-6"><b>BELBY, stella.</b></a> student. b. 1980. roe.<br>
    </canonbranch>
    <b>BELBY, christos.</b> occupation. b. 1952. <br>
    m. <b>ABBOTT, catherine.</b> occupation. b. 1954. <br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <a href="?showuser=559" class="g-12"><b>BELBY, daniel.</b></a> citing commissioner. b. 1977. bea.<br>
        <b>BELBY, marcus.</b> occupation. b. 1978-79. <br>
        <b>BELBY, charlotte.</b> occupation. b. 1981-82. <br>
    </canonbranch>

    <b>BELBY, helene.</b> occupation. b. 1953. <br>


    <b>BELBY, leonidas.</b> occupation. b. 1956. <br>
    m. <b>MELIFLUA, isabelle.</b> occupation. b. 1957.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <b>BELBY, eugenie.</b> occupation. b. 1979. <br>
        <a href="?showuser=894" class="entertainment g-18"><b>BELBY, prudence.</b></a> actress. b. 1981. bea.<br>
        <b>BELBY, reuben.</b> occupation. b. 1981. <br>
        <b>BELBY, judith.</b> occupation. b. 1984. <br>
    </canonbranch>

    <b>BELBY, leta.</b> occupation. b. 1956. <br>

    <b>BELBY, nicodemus.</b> occupation. b. 1957. <br>
    m. <b>ORPINGTON, howell.</b> occupation. b. 1956.<br>

    <b>BELBY, damocles.</b> occupation. b. 1959. <br>

    <a href="?showuser=77" class="g-8"><b>BELBY, halcyon.</b></a> charms professor. hufflepuff deputy head. b. 1961. bea. <br>
    m. <a href="?showuser=320" class="g-8"><b>MAGILIVRAY, foirtchern.</b></a> ancient studies professor. b. 1961. meriel. 
</canonbranch>

</div>


<!-- BELL -->
<div class="webpage--tab" data-tab="#bell">

<p>Halfblood. English.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>BELL, duncan.</b> occupation. b. year.<br>
m. <b>BELL, first.</b> d. year. <br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=1418" class="g-12"><b>BELL, abigail.</b></a> personal secretary. b. 1979. amy.<br>
</canonbranch>
w/ <b>WHITECROSS, debbie.</b> occupation. b. year. 
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=488" class="g-13"><b>BELL, katie</b></a> chaser. b. 1979. roe.
</canonbranch>

</div>


<!-- BERROW -->
<div class="webpage--tab" data-tab="#berrow">

<p>Halfblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>BERROW, first.</b> occupation. b. year.<br>
m. <b>BERROW, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>BERROW, darious.</b> occupation. b. 1981-82. <br>
</canonbranch>

</div>


<!-- BLACK -->
<div class="webpage--tab" data-tab="#black">

<p>Pureblood. English.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>BLACK, orion.</b> d. 1979.<br>
m. <b>BLACK, walburga.</b> d. 1985.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=452" class="g-17"><b>BLACK, sirius</b></a> unemployed. b. 1959. d. 1996. r. 2004. roe.<br>
    <b>BLACK, regulus.</b> d. 1979.<br>
</canonbranch>

</div>


<!-- BLETCHLEY -->
<div class="webpage--tab" data-tab="#bletchley">

<p>Pureblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>BLETCHLEY, first.</b> occupation. b. year.<br>
m. <b>BLETCHLEY, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>BLETCHLEY, miles.</b> occupation. b. 1981-82.<br>
</canonbranch>

<b>BLETCHLEY, thanatos.</b> lawyer. b. 1957. d. 2003. <br>
m. <b>ARRAZQUITO, katherine.</b> socialite. b. 1961. <Br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
  <a href="?showuser=1049" class="g-6"><b>BLETCHLEY, amalthea.</b></a> sales assistant . b. 1980. bells.<br>
</canonbranch>
</div>


<!-- BOBBIN -->
<div class="webpage--tab" data-tab="#bobbin">

<p>Halfblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>BOBBIN, first.</b> occupation. b. year.<br>
m. <b>BOBBIN, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>BOBBIN, melinda.</b> occupation. b. 1978-79. <br>
</canonbranch>

</div>


<!-- BOLE -->
<div class="webpage--tab" data-tab="#bole">

<p>Halfblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>BOLE, first.</b> occupation. b. year.<br>
m. <b>BOLE, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>BOLE, lucien.</b> occupation. b. 1976-77. <br>
</canonbranch>

</div>


<!-- BONES -->
<div class="webpage--tab" data-tab="#bones">

<p>Pureblood. English. Edgar, Amelia and Robert are siblings. Their parents were killed by Voldemort in 1979. Edgar, Lucille, and their children were killed by Death Eaters in summer 1981. Amelia was killed by Voldemort in July 1996.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b><s>BONES, edgar.</s></b> d. 1981.<br>
m. <b><s>BLISHWICK, lucille.</s></b> d. 1981.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b><s>BONES, melissa.</s></b> d. 1981.<br>
    <b><s>BONES, edward.</s></b> d. 1981<br>
    <b><s>BONES, jessica.</s></b> d. 1981. <br>
</canonbranch>

<a href="?showuser=681" class="g-17"><b>BONES, amelia.</b></a> commissioner. b. 1955. d. 1996. r. 2004. amy.<br>

<b>BONES, robert.</b> occupation. b. 1955.<br>
m. <b>BELBY, catherine.</b> occupation. b. 1956 <br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=13" class="g-12"><b>BONES, susan.</b></a> helparr legal researcher. b. 1980. bea.<br>
</canonbranch>

</div>


<!-- BOOT -->
<div class="webpage--tab" data-tab="#boot">

<p>Halfblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>BOOT, first.</b> occupation. b. year.<br>
m. <b>BOOT, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>BOOT, terry.</b> occupation. b. 1979-80.<br>
</canonbranch>

</div>


<!-- BRANSTONE-->
<div class="webpage--tab" data-tab="#branstone">

<p>Halfblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>BRANSTONE, margery.</b> blacksmith. b. year.<br>
m. <b>BRANSTONE, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=1026" class="g-18"><b>BRANSTONE, freya.</b></a> presenter. b. 1978. chels.<br>
    <b>BRANSTONE, eleanor.</b> occupation. b. 1982-83.<br>
    <a href="?showuser=986" class="g-6"><b>BRANSTONE, charlotte.</b></a> secretary. b. 1984. bea.<br>
    <a href="?showuser=1025" class="g-14"><b>BRANSTONE, isla.</b></a> unemployed. b. 1989. chels.<br>
</canonbranch>

</div>


<!-- BRAITHWAITE -->
<div class="webpage--tab" data-tab="#braithwaite">

<p>Halfblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>BRAITHWAITE, marcus.</b> occupation. b. year.<br>
m. <b>NAVARRO, imelda.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>BRAITHWAITE, danilo.</b> occupation. b. year.<br>
    <a href="?showuser=618" class="g-11"><b>BRAITHWAITE, betty.</b></a> journalist. b. 1973. bea.<br>
    <b>BRAITHWAITE, althea.</b> occupation. b. year.<br>
    <b>BRAITHWAITE, corazon.</b> occupation. b. year.<br>
</canonbranch>

</div>


<!-- BROCKLEHURST-->
<div class="webpage--tab" data-tab="#brocklehurst">

<p>Halfblood. English. Oliver and Miller are brothers. Oliver and Harrison's children are adopted.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>BROCKLEHURST, oliver.</b> merlin college lecturer. b. 1951.<br>
m. <b>FIELDER, harrison.</b> supercon creator. b. 1948.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=515" class="g-6"><b>BROCKLEHURST, kirk</b></a> social worker. b. 1970. roe.<br>
    <b>BROCKLEHURST, sarah-jane.</b> dressmaker. b. 1974. <br>
    <b>BROCKLEHURST, luke.</b> unspeakable. b. 1977. <br>
    <a href="?showuser=516" class="g-6"><b>BROCKLEHURST, ripley.</b></a> clerk. b. 1983. roe.<br>
    <b>BROCKLEHURST, marty.</b> broom racer. b. 1984. <br>
    <a href="?showuser=1193" class="g-6"><b>BROCKLEHURST, eowyn.</b></a> student. b. 1986. bea.<br>
    <b>BROCKLEHURST, fox.</b> student. b. 1993. <br>
</canonbranch>

<b>BROCKLEHURST, miller.</b> occupation. b. 1954. <br>
m. <b>BROCKLEHURST, cleo.</b> occupation. b. 1955. <br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>BROCKLEHURST, heidi.</b> occupation. b. year. <br>
    <b>BROCKLEHURST, mandy.</b> occupation. b. 1980-81. <br>
    <b>BROCKLEHURST, bonnie.</b> occupation. b. year. <br>
</canonbranch>

</div>


<!-- BROWN -->
<div class="webpage--tab" data-tab="#brown">

<p>Pureblood. English. William was given up for adoption by his mother, unbeknownst to his father. Lavender was attacked by Fenrir Greyback in the Battle of Hogwarts and was killed. She was the first person to return through the veil.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>BROWN, thomas.</b> occupation. b. year. <br>
m. <b>BROWN, nicole.</b> occupation. b. year. <br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
  <b>BROWN, iris.</b> occupation. b. year. <br>
  <a href="?showuser=919" class="g-12"><b>BROWN, edwin.</b></a> hitwizard. b. 1975. bea.<br>
</canonbranch>
<b>BROWN, henry.</b> occupation. d. year.<br>
m. <b>BROWN, lilian.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=464" class="g-12"><b>BROWN, william.</b></a> adult social worker. b. 1978. roe. <br>
    <a href="?showuser=22" class="g-17"><b>BROWN, lavender.</b></a> divination collumnist for the daily prophet. b. 1979. d. 1998. r. 2003. bells.<br>
</canonbranch>

</div>


<!-- BULSTRODE -->
<div class="webpage--tab" data-tab="#bulstrode">

<p>Halfblood. English. Millicent is the result of Andrea's affair with a muggle man. She has never met her father and does not know his name.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>BULSTRODE, andrea.</b> occupation. b. year.<br>
w/ <b>unknown.</b><br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=35" class="g-6"><b>BULSTRODE, millicent.</b></a> group home owner. b. 1979. bells.<br>
</canonbranch>

</div>


<!-- CADWALLADER -->
<div class="webpage--tab" data-tab="#cadwallader">

<p>Halfblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>CADWALLADER, first.</b> occupation. b. year.<br>
m. <b>CADWALLADER, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>CADWALLADER, first.</b> occupation. b. 1985/earlier.<br>
</canonbranch>

</div>


<!-- CARMICHAEL -->
<div class="webpage--tab" data-tab="#carmichael">

<p>Muggleborn. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>CARMICHAEL, first.</b> occupation. b. year.<br>
m. <b>CARMICHAEL, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>CARMICHAEL, edward.</b> occupation. b. 1978-79. <br>
</canonbranch>

</div>


<!-- CARROW -->
<div class="webpage--tab" data-tab="#carrow">

<p>Pureblood. English. Amycus, Alecto, and Mygdon are siblings. Flora and Hestia are twins. Amycus, Alecto, and Mygdon are currently serving life sentences in Azkaban for crimes committed during the War and Rhea is under house arrest. Evangeline is a squib.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>ARROW, amycus.</b> occupation. b. 1954-55.<br>

<b>CARROW, alecto.</b> occupation. b. 1954-55.<br>
w/ <b>unknown.</b>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=317" class="g-6"><b>CARROW, evangeline.</b></a> part-time gardener. b. 1985. lux.<br>
</canonbranch>

<b>CARROW, mygdon.</b> occupation. b. 1956.<br>
m. <b>GOYLE, rhea.</b> occupation. b. 1956.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=11" class="g-6"><b>CARROW, hestia.</b></a> bartender/promoter. b. 1978. bea.<br>
    <b>CARROW, flora.</b> occupation. b. 1978. <br>
</canonbranch>

</div>


<!-- CAULDWELL -->
<div class="webpage--tab" data-tab="#cauldwell">

<p>Halfblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>CAULDWELL, first.</b> occupation. b. year.<br>
m. <b>CAULDWELL, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>CAULDWELL, owen.</b> occupation. b. 1982-83. <br>
</canonbranch>

</div>


<!-- CHANG -->
<div class="webpage--tab" data-tab="#chang">

<p>Pureblood. Korean. Cho stuck as a nickname for Mina based on an adminstrative error in her childhood. </p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>CHANG, beom-seok.</b> occupation. b. year.<br>
m. <b>CHO, hye-won.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=1035" class="g-12"><b>CHANG, mina.</b></a> lawyer. b. 1979. chels.<br>
</canonbranch>

</div>


<!-- CLEARWATER -->
<div class="webpage--tab" data-tab="#clearwater">

<p>Muggleborn. Augustine and Norman are siblings.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>CLEARWATER, norman.</b> occupation. b. year.<br>
m. <b>CLEARWATER, janette.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=476" class="g-11"><b>CLEARWATER, penelope.</b></a> photographer. b. 1976. roe.<br>
    <b>CLEARWATER, tallulah.</B> occupation. b. year. <br>
</canonbranch>
<b>CLEARWATER, augustine.</b> international liason officer. b. year. <br>
m. <b>GUZMAN, vicente.</b> international federation lawyer. b. year. <br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>GUZMAN, callista.</b> healer. b. year. <br>
    <b>ROJAS, isidora.</b> housewife. b. year. <br>
    <b>DIAZ, josefa.</b> food critic. b. year. <br>
    <a href="?showuser=582" class="g-15"><b>GUZMAN, mateo</b></a> veterinarian. b. 1967. roe.<br>
</canonbranch>

</div>


<!-- COOTE -->
<div class="webpage--tab" data-tab="#coote">

<p>Halfblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>COOTE, first.</b> occupation. b. year.<br>
m. <b>COOTE, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>COOTE, ritchie.</b> occupation. b. 1978-79. <br>
</canonbranch>

</div>


<!-- CORNER -->
<div class="webpage--tab" data-tab="#corner">

<p>Halfblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>CORNER, first.</b> occupation. b. year.<br>
m. <b>CORNER, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>CORNER, michael.</b> occupation. b. 1980-81. <br>
</canonbranch>

</div>


<!-- CORNFOOT -->
<div class="webpage--tab" data-tab="#cornfoot">

<p>Halfblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>CORNFOOT, first.</b> occupation. b. year.<br>
m. <b>CORNFOOT, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>CORNFOOT, stephen.</b> occupation. b. 1979-80. <br>
</canonbranch>

</div>


<!-- CRABBE -->
<div class="webpage--tab" data-tab="#crabbe">

<p>Pureblood. Vincent was killed in the Battle of Hogwarts. His father and Nolan are brothers. Additional family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>CRABBE, first.</b> occupation. b. year.<br>
m. <b>CRABBE, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b><s>CRABBE, vincent.</s></b> d. 1998. <br>
</canonbranch>
<b>CRABBE, nolan.</b> occupation. b. year. <br>
w/ <b>LASTNAME, first</b>. occupation.  b. year. <br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>CRABBE, heath</b>. occupation. b. 1980.
</canonbranch> 
m. <b>MIDGEON, daisy.</b> socialite. b. year. <br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>CRABBE, sapphire</b>. occupation. b. 1986.<br>
    <b>CRABBE, aloysius.</b> student. b. 1987. <br>
    <a href="?showuser=509" class="g-7"><b>CRABBE, victoria.</b></a> student. b. 1989. roe.<br>
</canonbranch>

</div>


<!-- CREEVEY -->
<div class="webpage--tab" data-tab="#creevey">

<p>Muggleborn. Colin was killed in the Battle of Hogwarts. Additional family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>CREEVEY, first.</b> occupation. b. year.<br>
m. <b>CREEVEY, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b><s>CREEVEY, colin.</s></b> d. 1998.<br>
    <b>CREEVEY, dennis.</b> occupation. b. 1981-82.<br>
</canonbranch>

</div>


<!-- CRESSWELL -->
<div class="webpage--tab" data-tab="#cresswell">

<p>Muggleborn. Dirk was killed by snatchers in March 1998. Additional family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b><s>CRESSWELL, dirk.</s></b> d. 1998.<br>
m. <b>CRESSWELL, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>CRESSWELL, first.</b> occupation. b. 1980-81. <br>
</canonbranch>

</div>


<!-- CRUMB -->
<div class="webpage--tab" data-tab="#crumb">

<p>Halfblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>CRUMB, first.</b> occupation. b. year.<br>
m. <b>CRUMB, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>CRUMB, gideon.</b> occupation. b. 1975. <br>
</canonbranch>

</div>


<!-- DAVIS -->
<div class="webpage--tab" data-tab="#davis">

<p>Halfblood. Henry had numrerous affairs throughout his marriage, leading to Sydney & Avery, and died shortly after the birth of his youngest children. Joan raised her children and her stepdaughters alone. Ethan died suddenly as a child, the year after his father.  </p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>DAVIS, first.</b> occupation. b. year.<br>
m. <b>DAVIS, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
  <b>DAVIS, first.</b> occupation. b. year.<br>
  m. <b>DAVIS, first.</b> occupation. b. year.<br>
  <button class="webpage--canon-expansion" onClick="expandCanons(this)">
      <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
      <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
  </button>
  <canonbranch>
    <b>DAVIS, tracey.</b> occupation. b. 1979-80. <br>
  </canonbranch>
</canonbranch>
<b><s>DAVIS, henry.</s></b> d. 1969. <Br>
m. <b>DAVIS, joan.</b> occupation. b. 1941. <br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>se
  <b><s>DAVIS, ethan.</s></b> b. 1962. d. 1970. <br>
  <a href="?showuser=1220" class="g-12"><b>DAVIS, spencer.</b></a> investigator. b. 1966. bea.<br>
  w/ <b>CORNHILL, mary.</b> occupation. b. year. <br>
  <button class="webpage--canon-expansion" onClick="expandCanons(this)">
      <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
      <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
  </button>
  <canonbranch>
    <b>DAVIS, carter.</b> student. b. 1988. <br>
  </canonbranch>
  m. <b><s>DAVIS, katie.</s></B> b. 1970. d. 2002.<br>
  <button class="webpage--canon-expansion" onClick="expandCanons(this)">
      <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
      <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
  </button>
  <canonbranch>
    <b>DAVIS, molly.</b> b. 1999. <br>
    <b>DAVIS, lucy.</b> b. 2002. <br>
  </canonbranch>
  <b>DAVIS, olivia.</b> occupation. b. 1968. <br>
</canonbranch>
w/ <b>LAST, first.</b> occupation. b. year. <br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
  <b>DAVIS, sydney.</b> occupation. b. 1964. <br>
</canonbranch>
w/ <b>LAST, first.</b> occupation. b. year. <br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
  <b>DAVIS, avery.</b> occupation. b. 1969. <br>
</canonbranch>

</div>
<!-- DAVIES -->
<div class="webpage--tab" data-tab="#davies">

<p>Halfblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>DAVIES, first.</b> occupation. b. year.<br>
m. <b>DAVIES, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>DAVIES, roger.</b> occupation. b. 1977-78. <br>
</canonbranch>

</div>


<!-- DELACOUR -->
<div class="webpage--tab" data-tab="#delacour">

<p>Pureblood. French. Apolline is half-veela. Fleur is married to Bill Weasley and is also listed under the Weasley family.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>DELACOUR, first.</b> occupation. b. year.<br>
m. <b>DELACOUR, apolline.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=396" class="g-6"><b>DELACOUR, fleur.</b></a> cursebreaker. b. 1977. chels. <br>
    <a href="?showuser=833" class="g-18"><b>DELACOUR, gabrielle.</b></a> actress / fashion model. b. 1985. roe.<br>
</canonbranch>

</div>


<!-- DERRICK -->
<div class="webpage--tab" data-tab="#derrick">

<p>Halfblood. The oldest daughter was born Kestrel Derrick, but currently goes by Diana Crawford. She is believed dead.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>DERRICK, merlin.</b> occupation. b. year.<br>
m. <b>ADAMS, margaret.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
  <a href="?showuser=906" class="ministry g-12"><b>CRAWFORD, diana.</b></a> field agent. b. 1969. lux.<br>
  <b>DERRICK, sparrow.</b> occupation. b. 1975. <br>
  <b>DERRICK, peregrine.</b> occupation. b. 1977. <br>
</canonbranch>

</div>


<!-- DIGGLE -->
<div class="webpage--tab" data-tab="#diggle">

<p>Halfblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>DIGGLE, first.</b> occupation. b. year.<br>
m. <b>DIGGLE, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>DIGGLE, dedalus.</b> occupation. b. 1964-65.<br>
</canonbranch>

</div>


<!-- DIGGORY -->
<div class="webpage--tab" data-tab="#diggory">

<p>Pureblood. Cedric was killed by Voledmort in July 1995. Additional family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>DIGGORY, amos.</b> department for the regulation & control of magical creatures. b. year.<br>
m. <b>DIGGORY, prudence.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b><s>DIGGORY, cedric.</s></b> d. 1995.<br>
    <a href="?showuser=611" class="g-13"><b>DIGGORY, jude.</b></a> chaser. b. 1984. bea.<br>
</canonbranch>

</div>


<!-- DINGLE -->
<div class="webpage--tab" data-tab="#dingle">

<p>Muggleborn. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>DINGLE, first.</b> occupation. b. year.<br>
m. <b>DINGLE, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>DINGLE, harold.</b> occupation. b. 1978-79.<br>
</canonbranch>

</div>


<!-- DOBBS -->
<div class="webpage--tab" data-tab="#dobbs">

<p>Halfblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>DOBBS, first.</b> occupation. b. year.<br>
m. <b>DOBBS, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>DOBBS, emma.</b> occupation. b. 1982-83.<br>
</canonbranch>

</div>


<!-- DOGE -->
<div class="webpage--tab" data-tab="#doge">

<p>Pureblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>DOGE, elphias.</b> special advisor to the wizengamot. b. 1881.<br>
m. <b>DOGE, name.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>DOGE, name.</b> occupation. b. year.<br>
</canonbranch>

</div>


<!-- DOLOHOV -->
<div class="webpage--tab" data-tab="#dolohov">

<p>Pureblood. Russian. Antonin is serving a lifetime sentence in Azkaban for crimes committed during the war. His sister Anastasiya married into the Flint family. Russian naming customs should be observed.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>DOLOHOV, first.</b> occupation. b. year.<br>
m. <b>DOLOHOV, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>DOLOHOV, antonin.</b> occupation. b. 1950-51.<br>
    <b>FLINT, anastasiya.</b> occupation. b. year.<br>
</canonbranch>

</div>


<!-- DUKE-MCCORMACK -->
<div class="webpage--tab" data-tab="#duke">

<p>Halfblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>DUKE, first.</b> occupation. b. year.<br>
m. <b>MCCORMACK, catriona.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>MCCORMACK, meaghan.</b> pride of portree keeper. b. 1968-69.<br>
    <b>DUKE, kirley.</b> weird sisters lead guitarist. b. 1971.<br>
</canonbranch>

</div>


<!-- DUMBLEDORE -->
<div class="webpage--tab" data-tab="#dumbledore">

<p>Pureblood. English. Albus, Aberforth, and Ariana are siblings. Ariana was killed in an accident in 1899. Albus was killed by Severus Snape in 1997.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b><s>DUMBLEDORE, albus.</s></b> d. 1997.<br>

<a href="?showuser=328" class="g-6"><b>DUMBLEDORE, aberforth.</b></a> hog's head owner. b. 1884. bea.<br>
m. <a href="?showuser=656" class="g-6"><b>DUMBLEDORE, charles.</b></a> chef/part owner. b. 1884. bells.<br>

<b><s>DUMBLEDORE, ariana.</s></b> d. 1899. <br>

</div>


<!-- DUNBAR -->
<div class="webpage--tab" data-tab="#dunbar">

<p>Halfblood. Ida is Italian/German and has an obsession with Arthurian legend, so all of her childrens' first names come from those legends. Fay and Gavin are fraternal twins. Avalon and Elaine are identical twins.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>DUNBAR, alexander.</b> occupation. b. year.<br>
m. <b>DUNBAR, ida.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>DUNBAR, fay.</b> auror. b. 1977.<br>
    <a href="?showuser=901" class="healers g-15"><b>DUNBAR, gavin.</b></a> junior healer. b. 1977. lux.<br>
    <b>DUNBAR, tristan.</b> entrepreneur. b. 1980-81.<br>
    <b>DUNBAR, arthur.</b> healer-in-training. b. 1983-84.<br>
    <b>DUNBAR, avalon.</b> occupation. b. 1985-86.<br>
    <b>DUNBAR, elaine.</b> occupation. b. 1985-86.<br>
    <a href="?showuser=902" class="hufflepuff g-9"><b>DUNBAR, nimue.</b></a> unemployed. b. 1989. lux.<br>
</canonbranch>

</div>


<!-- D'EATH -->
<div class="webpage--tab" data-tab="#death">

<p>Pureblood. Lorcan is part-vampire. How this manifests is up to player. Additional family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>D'EATH, lorcan.</b> singer. b. 1964.

</div>


<!-- EDGECOMBE -->
<div class="webpage--tab" data-tab="#edgecombe">

<p>Halfblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>EDGECOMBE, first.</b> occupation. b. year.<br>
m. <b>EDGECOMBE, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>EDGECOMBE, marietta.</b> occupation. b. 1978-79.<br>
</canonbranch>

</div>


<!-- ENTWHISTLE -->
<div class="webpage--tab" data-tab="#entwhistle">

<p>Muggleborn. family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>ENTWHISTLE, name.</b> occupation. b. year.<br>
m. <b>ENTWHISTLE, name.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>ENTWHISTLE, kevin</b> occupation. b. 1978-1979.<br>
</canonbranch>

</div>


<!-- FANCOURT -->
<div class="webpage--tab" data-tab="#fancourt">


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>FANCOURT, first.</b> occupation. b. year.<br>
m. <b>FANCOURT, perpetua.</b> d. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>FANCOURT, amadeus.</b> occupation. b. year.<br>
    m. <b>FANCOURT, albertine.</b> d. 1981.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <b>FANCOURT, cassandra.</b> occupation. b. 1971.<br>
        <a href="?showuser=531" class="g-11"><b>FANCOURT, ada.</b></a> advice columnist. b. 1975. Amy.
    </canonbranch>
</canonbranch>

</div>


<!-- FAWCETT -->
<div class="webpage--tab" data-tab="#fawcett">

<p>Halfblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>FAWCETT, freddy.</b> occupation. b. year.<br>
m. <b>FAWCETT, carla.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=1030" class="g-6"><b>FAWCETT, marlon.</b></a> unemployed. b. 1977. chels.<br>
    <b>FAWCETT, sophia.</b> occupation. b. 1980-81.<br>
    <a href="?showuser=779" class="quidditch g-13"><b>FAWCETT, audrey.</b></a> beater. b. 1982. chels.<br>
    <b>FAWCETT, marilyn.</b> occupation. b. year.<br>
</canonbranch>

</div>


<!-- FAWLEY -->
<div class="webpage--tab" data-tab="#fawley">

<p>Halfblood. English. The Fawley family is particularly complicated and there is more than one instance of second cousins having a relationship.</p>

<p>Samson Fawley had an affair with Sandra Walker during his marriage to Fiona, which resulted in Gabrielle. This did not become common knowledge until Gabrielle was an adult. Fiona also had a one night stand with Samson's brother Zachary, resulting in Cyrus. Cyrus was raised as Samson's son, and did not find out the truth until he was in his thirties.</p>

<p>Cyrus had a short relationship with his second cousin Claudia when they were teenagers. This resulted in their daughter Delilah. He also had a short affair with Amelia Watson, leading to their son Cain. He and his now wife Meghan also had custody of Delilah's younger half-brother Nathan for his teenage years. Meghan had three children from a previous relationship before marrying Cyrus who are listed.</p>

<p>Samuel's wife Alison died of an inoperable brain tumour. Their son, Thomas, is in a polyamorous relationship with Lisa, Sven, and Thad, and they are collectively raising their daughter Violet.</p>

<p>Zachary's first wife Naomi divorced him after the death of their son Bartholomew in a duelling accident. He married Louise Martin some time after. Their daughter Bethany was unexpected as Louise believed she was past childbearing age.</p>

<p>Malachi had a short relationship with Rachel Gardiner after the death of his first wife Diane.</p>

<p>Claudia Fawley had a short relationship as a teenager with her second cousin Cyrus. She later married Cassius Trappe, who died before their son Nathan was born. She also had a short lived-relationship with Ronan Bay, leading to their son Marcus. Claudia gave up parental rights to both her sons; Cyrus and his wife Meghan took Nathan in as a teenager, whilst Marcus has been raised by his father. Amanda and Benjamin Fawley are second cousins who married.</p>

<p>There is scope for this family to be expanded further. If an individual is unmarried or does not have children listed, it is possible to add another branch of the family. Please contact Bea for more information.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b><s>FAWLEY, michael.</s></b> b. 1880. d. 1954.<br>
m. <b><s>FAWLEY, louise.</s></b> b. 1882. d. 1962.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b><s>FAWLEY, jared.</s></b> b. 1903. d. 1981.<br>
    m. <b><s>FAWLEY, penelope.</s></b> b. 1904. d. 1979.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <b><s>FAWLEY, samson.</s></b> occupation. b. 1922. d. 1960.<br>
        m. <b>THOMASON, fiona.</b> occupation. b. 1925.<br>
        <button class="webpage--canon-expansion" onClick="expandCanons(this)">
            <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
            <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
        </button>
        <canonbranch>
            <b>FAWLEY, candace.</b> pub owner. b. 1950.<br>
            m. <b>GRAYSON, michael.</b> occupation. b. 1944.<br>
            <button class="webpage--canon-expansion" onClick="expandCanons(this)">
                <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
                <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
            </button>
            <canonbranch>
                <a href="?showuser=14" class="g-6"><b>FAWLEY, jacob.</b></a> bartender. b. 1971. bea.<br>
            </canonbranch>
        </canonbranch>

        w/ <b>WALKER, sandra.</b> occupation. b. 1932.<br>
        <button class="webpage--canon-expansion" onClick="expandCanons(this)">
            <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
            <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
        </button>
        <canonbranch>
            <b>WALKER, gabrielle.</b> occupation. b. 1953.<br>
            m. <b>TURNER, robert.</b> occupation. b. 1951.<br>
            <button class="webpage--canon-expansion" onClick="expandCanons(this)">
                <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
                <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
            </button>
            <canonbranch>
                <b>TURNER, maisie.</b> occupation. b. 1979.<br>
            </canonbranch>
        </canonbranch>
      
        <b>FAWLEY, andrew.</b> occupation. b. 1923.<br>
        m. <b>FAWLEY, deborah.</b> occupation. b. 1924.<br>
        <button class="webpage--canon-expansion" onClick="expandCanons(this)">
            <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
            <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
        </button>
        <canonbranch>
            <a href="?showuser=166" class="g-6"><b>FAWLEY, malachi.</b></a> cook. b. 1958. bea.<br>
            m. <b><s>WINTERS, diane.</s></b> occupation. b. 1959. d. 1993.<br>
            <button class="webpage--canon-expansion" onClick="expandCanons(this)">
                <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
                <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
            </button>
            <canonbranch>
                <a href="?showuser=195" class="g-7"><b>FAWLEY, abigail.</b></a> student. b. 1988. amy.<br>
            </canonbranch>
            w/ <b>GARDINER, rachel.</b> occupation. b. 1963.<br>
            <button class="webpage--canon-expansion" onClick="expandCanons(this)">
                <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
                <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
            </button>
            <canonbranch>
                <b>FAWLEY, liam.</b> student. b. 1990.<br>
            </canonbranch>

            <b>FAWLEY, elijah.</b> occupation. b. 1961. 
        </canonbranch>
      
        <b>FAWLEY, zachary.</b> occupation. b. 1925.<br>
        m. <b>WILSON, naomi.</b> occupation. b. 1925.<br>
        <button class="webpage--canon-expansion" onClick="expandCanons(this)">
            <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
            <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
        </button>
        <canonbranch>
            <b>FAWLEY, nathan.</b> occupation. b. 1950.<br>
            m. <b><s>HARTMAN, cilla</s></b>. d. 2000<br>
            <button class="webpage--canon-expansion" onClick="expandCanons(this)">
                <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
                <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
            </button>
            <canonbranch>
                <a href="?showuser=459" class="g-6"><b>FAWLEY, annabeth</b>.</a> waitress. b. 1983. roe. <br>
            </canonbranch>

            <b>FAWLEY, benjamin.</b> occupation. b. 1954.<br>
            m. <b>FAWLEY, amanda.</b> occupation. b. 1956.<br>

            <b><s>FAWLEY, bartholomew.</s></b> occupation. b. 1954. d. 1977.<br>

            <b>FAWLEY, samuel.</b> occupation. b. 1955.<br>
            m. <b><s>WOODS, alison.</s></b> occupation. b. 1956. d. 1984.<br>
            <button class="webpage--canon-expansion" onClick="expandCanons(this)">
                <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
                <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
            </button>
            <canonbranch>
                <b>FAWLEY, thomas.</b> stay-at-home dad. b. 1974.<br>
                w/ <a href="?showuser=42" class="g-11"><b>TURPIN, lisa.</b></a> Crime reporter for the daily prophet. b. 1979. bells.<br>
                w/ <b>SØRENSON, sven.</b> quiddith reporter for the prophet. b. 1977.<br>
                w/ <a href="?showuser=119" class="g-12"><b>POPE, thaddeus.</b></a> department of mysteries unspeakable. b. 1978. bea.<br>
                <button class="webpage--canon-expansion" onClick="expandCanons(this)">
                    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
                    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
                </button>
                <canonbranch>
                    <b>TURPIN-FAWLEY-SØRENSON-POPE, violet.</b> b. 2001.<br>
                    <b>TURPIN-FAWLEY-SØRENSON-POPE, harper.</b> b. 2004.<br>
                </canonbranch>
            </canonbranch>

            <a href="?showuser=534" class="g-8"><b>FAWLEY, tara.</b></a> Music Professor . b. 1958. Bells.<br>
        </canonbranch>
      
        w/ <b>THOMASON, fiona.</b> occupation. b. 1925.<br>
        <button class="webpage--canon-expansion" onClick="expandCanons(this)">
            <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
            <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
        </button>
        <canonbranch>
            <a href="?showuser=15" class="g-6"><b>FAWLEY, cyrus.</b></a> broom shop repair owner/criminal. b. 1948. bea.<br>
            w/ <b>FAWLEY, claudia.</b> occupation. b. 1949.<br>
            <button class="webpage--canon-expansion" onClick="expandCanons(this)">
                <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
                <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
            </button>
            <canonbranch>
                <a href="?showuser=350" class="g-6"><b>FAWLEY delilah.</b></a> occupation. b. 1966. amy. <br>
                w/ <a href="?showuser=204" class="g-6"><b>SUTTON, adrian.</b></a> winged horses breeder. b. 1965. bea. <br>
                <button class="webpage--canon-expansion" onClick="expandCanons(this)">
                    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
                    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
                </button>
                <canonbranch>
                    <a href="?showuser=505" class="g-6"><b>SUTTON, sophie.</b></a> ilkley cinema employee. b. 1981. chels<br>
                    <a href="?showuser=331" class="g-6"><b>SUTTON, alex.</b></a> unemployed. b. 1984. bea.<br> 
                </canonbranch>
            </canonbranch>

            w/ <b>WATSON, amelia.</b> occupation. b. 1958.<br>
            <button class="webpage--canon-expansion" onClick="expandCanons(this)">
                <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
                <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
            </button>
            <canonbranch>
                <a href="?showuser=17" class="g-7"><b>FAWLEY, cain.</b></a> student. b. 1988. bea.<br>
            </canonbranch>

            m. <a href="?showuser=412" class="g-6"><b>BARTON, meghan.</b></a> Owner/Farmer. b. 1955. Bells.<br>
            <button class="webpage--canon-expansion" onClick="expandCanons(this)">
                <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
                <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
            </button>
            <canonbranch>
                <a href="?showuser=662" class="g-6"><b>BAY, aaron.</b></a> construction worker. b. 1972. roe.<br>
                <b>BAY, harriet.</b> occupation. b. year.<br>
                <b>BAY, hannah.</b> occupation. b. year.<br>
            </canonbranch>
        </canonbranch>
      
        m. <b>MARTIN, louise.</b> occupation. b. 1928.<br>
        <button class="webpage--canon-expansion" onClick="expandCanons(this)">
            <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
            <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
        </button>
        <canonbranch>
            <a href="?showuser=219" class="g-6"><b>FAWLEY, bethany.</b></a> bartender b. 1973. bells.<br>
        </canonbranch>
      
        <b>FAWLEY, ezra.</b> occupation. b. 1928.<br>
        m. <b>FAWLEY, georgia.</b> occupation. b. 1929.<br>
        <button class="webpage--canon-expansion" onClick="expandCanons(this)">
            <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
            <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
        </button>
        <canonbranch>
            <b>FAWLEY, theo.</b> occupation. b. 1953.<br>
            m. <b><s>SMITH, mary-anne.</s></b> d. 1982.<br>
            <button class="webpage--canon-expansion" onClick="expandCanons(this)">
                <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
                <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
            </button>
            <canonbranch>
                <a href="?showuser=273" class="g-13"><b>FAWLEY, emmalina.</b></a> holyhead harpies reserve seeker. b. 1979. lux.<br>
            </canonbranch>

      <b>FAWLEY, jessica.</b> occupation. b. 1956.<br>
      w/ <b>KIRKE, robert.</b> occupation. b. year. <br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
      <a href="?showuser=629" class="g-6"><b>FAWLEY, greyson.</b></a> broom mechanic. b. 1971. roe.<br>
    </canonbranch>
            <b>FAWLEY, catherine.</b> occupation. b. 1957.<br>
        </canonbranch>
      
        <b>FAWLEY, tobias.</b> occupation. b. 1931.<br>
        m. <b>FAWLEY, charlotte.</b> occupation. b. 1932.<br>
        <button class="webpage--canon-expansion" onClick="expandCanons(this)">
            <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
            <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
        </button>
        <canonbranch>
        <a href="?showuser=616" class="g-6"><b>FAWLEY, lilith.</b></a> forger & fence. b. 1955. bea.<br>
            <button class="webpage--canon-expansion" onClick="expandCanons(this)">
                <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
                <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
            </button>
            <canonbranch>
                <b>FAWLEY, jonathon.</b> occupation. b. 1973.<br>
                w/ <b>SMITH, fiona.</b> occupation. b. 1973-74.<br> 
                <button class="webpage--canon-expansion" onClick="expandCanons(this)">
                    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
                    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
                </button>
                <canonbranch>
                    <a href="?showuser=277" class="g-7"><b>FAWLEY, seth.</b></a> unemployed. b. 1989. bea.<br>
                    <a href="?showuser=492" class="g-7"><b>FAWLEY, rosie.</b></a> student. b. 1993. roe.<br>
                </canonbranch>
                m. <b>FAWLEY, juliette.</b> occupation. b. 1975. <br>
                <button class="webpage--canon-expansion" onClick="expandCanons(this)">
                    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
                    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
                </button>
                <canonbranch>
                    <b>FAWLEY, elizabeth.</b> b. 2004. 
                </canonbranch>

                <b>FAWLEY, matthew.</b> occupation. b. 1975.<br>
                <a href="?showuser=822" class="g-6"><b>FAWLEY, mark.</b></a> portkey supplier. b. 1976. roe.<br>
                <b>FAWLEY, lucas.</b> occupation. b. 1979.<br>
            </canonbranch>
        </canonbranch>
    </canonbranch>

    <b><s>FAWLEY, benjamin.</s></b> b. 1905. d. 1980.<br>
    m. <b><s>FAWLEY, jessica.</s></b> b. 1906. d. 1975.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <b>FAWLEY, peter.</b> occupation. b. 1925.<br>
        m. <b>FAWLEY, kathleen.</b> occupation. b. 1928.<br>
        <button class="webpage--canon-expansion" onClick="expandCanons(this)">
            <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
            <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
        </button>
        <canonbranch>
            <b>FAWLEY, claudia.</b> occupation. b. 1949.<br>
            w/ <a href="?showuser=15" class="g-6"><b>FAWLEY, cyrus.</b></a> broom shop repair owner/criminal. b. 1948. bea.<br>
            <button class="webpage--canon-expansion" onClick="expandCanons(this)">
                <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
                <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
            </button>
            <canonbranch>
              <a href="?showuser=350" class="g-6"><b>FAWLEY delilah.</b></a> vineyard manager. b. 1966. amy. <br>
              w/ <a href="?showuser=204" class="g-6"><b>SUTTON, adrian.</b></a> winged horses breeder. b. 1965. bea. <br>
              <button class="webpage--canon-expansion" onClick="expandCanons(this)">
                  <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
                  <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
              </button>
              <canonbranch>
                  <a href="?showuser=505" class="g-6"><b>SUTTON, sophie.</b></a> ilkley cinema employee. b. 1981. chels<br>
                  <a href="?showuser=331" class="g-6"><b>SUTTON, alex.</b></a> unemployed. b. 1984. bea. <br>
              </canonbranch>
            </canonbranch>

            m. <b><s>TRAPPE, cassius.</s></b> occupation. d. 1980.<br>
            <button class="webpage--canon-expansion" onClick="expandCanons(this)">
                <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
                <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
            </button>
            <canonbranch>
                <b>FAWLEY, nathan.</b> occupation. b. 1980.<br>
            </canonbranch>

            w/ <b>BAY, ronan.</b> occupation. b. 1963.<br>
            <button class="webpage--canon-expansion" onClick="expandCanons(this)">
                <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
                <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
            </button>
            <canonbranch>
                <b>BAY, marcus.</b> student. b. 1990.<br>
            </canonbranch>
        </canonbranch>

        <b>FAWLEY, solomon.</b> fence. b. 1927.<br>
  m. <b>DE LA TORRE, griselda.</b> b. 1930. d. 1990. <br>
  <button class="webpage--canon-expansion" onClick="expandCanons(this)">
      <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
      <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
  </button>
  <canonbranch>
    <b>FAWLEY, silas.</b> art forger. b. 1944. <br>
    <b>FAWLEY, jessamine.</b> fence. b. 1948. <br>
    <a href="?showuser=1325" class="g-6"><b>FAWLEY-MACKENZIE, thomasina.</b></a> head chef and owner . b. 1952. bells.<br>
    m. <b>MACKENZIE, cathal.</b> musician. b. 1950. d. 2004. <Br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
      <b>FAWLEY-MACKENZIE, fionnuala.</b> student. b. 1988. <br>
      <b>FAWLEY-MACKENZIE, sorcha.</b> student. b. 1990. <br>
      <b>FAWLEY-MACKENZIE, una.</b> student. b. 1990. <br>
    </canonbranch>
  </canonbranch>
        <b>FAWLEY, edward.</b> occupation. b. 1928.<br>
        m. <b>FAWLEY, marianne.</b> occupation. b. 1930.<br>
        <button class="webpage--canon-expansion" onClick="expandCanons(this)">
            <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
            <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
        </button>
        <canonbranch>
            <b>FAWLEY, david.</b> occupation. b. 1958.<br>
            <b>FAWLEY, braden.</b> occupation. b. 1958.<br>
            <a href="?showuser=157" class="g-6"><b>FAWLEY, adaline.</b></a> con artist. b. 1969. lux.<br>
        </canonbranch>

        <b>FAWLEY, callum.</b> occupation. b. 1931.<br>
        m. <b>FAWLEY, verity.</b> occupation. b. 1932.<br>
        <button class="webpage--canon-expansion" onClick="expandCanons(this)">
            <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
            <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
        </button>
        <canonbranch>
            <b>FAWLEY, amanda.</b> occupation. b. 1956.<br>
            m. <b>FAWLEY, benjamin.</b> occupation. b. 1954.<br>
        </canonbranch>
    </canonbranch>
</canonbranch>

</div>


<!-- FENWICK -->
<div class="webpage--tab" data-tab="#fenwick">

<p>Halfblood. Benjamin was killed in the first war. </p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>FENWICK, leander.</b> d. year.<br>
m. <b>FENWICK, cressida.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
  <b>FENWICK, benjamin.</b> d. year<br>
  <b>FENWICK, elliot.</b> occupation. b. year. <br>
  <a href="?showuser=718" class="g-6"><b>FENWICK, khione.</b></a> magical theory professor. b. 1960. amy.<br>
</canonbranch>

</div>

<!-- FILCH -->
<div class="webpage--tab" data-tab="#filch">

<p>Halfblood. Family up to player. Argus is a squib</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>FILCH, first.</b> occupation. b. year.<br>
m. <b>FILCH, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>FILCH, argus.</b> occupation. b. 1950-51.<br>
</canonbranch>

</div>


<!-- FINCH-FLETCHLEY -->
<div class="webpage--tab" data-tab="#finch">

<p>Muggleborn. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>FINCH-FLETCHLEY, first.</b> occupation. b. year.<br>
m. <b>FINCH-FLETCHLEY, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>FINCH-FLETCHLEY, justin.</b> occupation. b. 1979-80.<br>
</canonbranch>

</div>


<!-- FINNIGAN -->
<div class="webpage--tab" data-tab="#finnigan">

<p>Halfblood. Northern Irish. Mr. Finnigan is a muggle. Additional family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>FINNIGAN, padraig.</b> occupation. b. year.<br>
m. <b>HORTESE, arabella.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=454" class="g-6"><b>FINNIGAN, seamus</b></a> broom maker. b. 1980. roe.<br>
</canonbranch>

</div>


<!-- FLETCHER -->
<div class="webpage--tab" data-tab="#fletcher">

<p>Halfblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>FLETCHER, mundungus.</b> occupation. b. 1952-53.<br>

</div>


<!-- FLINT -->
<div class="webpage--tab" data-tab="#flint">

<p>Pureblood. English/Russian. Quintus and Callisto both died in the aftermath of the war. Anastasiya is the sister of Antonin Dolohov, and raised her daughter in Russia. Lucia and Atticus are currently under the guardianship of their aunt Junia, after Marcus Sr. and Rose were both arrested following the Battle of Hogwarts. Rose is serving a life sentence and Marcus Sr. has another five years to serve. Aloysius is also serving a life sentence.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b><s>FLINT, quintus.</s></b> d. year.<br>
m. <b><s>GREENGRASS, callisto.</s></b> d. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>FLINT, marcus sr.</b> incarcerated. b. 1955.<br>
    m. <b>PARKINSON, rose.</b> incarcerated. b. 1957.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <b>FLINT, marcus.</b> occupation. b. 1974-75.<br>
        <a href="?showuser=34" class="g-13"><b>FLINT, lucia.</b></a> pro beater. b. 1986. bea.<br>
        <b>FLINT, atticus.</b> student. b. 1988.<br>
    </canonbranch>

    <b>FLINT, aloysius.</b> occupation. b. year.<br>
    m. <b>DOLOHOVA, anastasiya.</b> occupation. b. year.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <a href="?showuser=40" class="g-12"><b>FLINT, esfir.</b></a> assistant russian representative for magical cooperation . b. 1982. bells.<br>
    </canonbranch>

    <b>FLINT, junia.</b> occupation. b. 1957.<br>
</canonbranch>

</div>


<!-- FLITWICK -->
<div class="webpage--tab" data-tab="#flitwick">

<p>Halfblood. Filius is part goblin. Additional family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>FLITWICK, filius.</b> charms professor & ravenclaw head of house. b. 1942-42.<br>

</div>


<!-- FLUME -->
<div class="webpage--tab" data-tab="#flume">


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>FLUME, ambrosius.</b> occupation. b. year.<br>
m. <b>FLUME, regina.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>FLUME, rochester.</b> occupation. b. year.<br>
    <b>FLUME, marlowe.</b> occupation. b. year.<br>
    <a href="?showuser=756" class="g-6 adults"><b>FLUME, darcy.</b></a> manager. b. 1980. chels.<br>
    <b>FLUME, wentworth.</b> occupation. b. year.<br>
    <b>FLUME, blythe.</b> occupation. b. year.<br>
</canonbranch>

</div>


<!-- FORTESCUE-->
<div class="webpage--tab" data-tab="#fortescue">

<p>Halfblood. Italian. Florean was killed by Death Eaters in late 1996 after being kidnapped. Lucrezia was kidnapped and raped in the first war by Fenrir Greyback, resulting in Fiorella. She has since moved to Italy and Fiorella has taken over the ice cream parlour.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>FORTESCUE, first.</b> occupation. b. year.<br>
m. <b>FORTESCUE, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=483" class="g-17"><b>FORTESCUE, florean.</b></a> unemployed. b. 1950. d. 1996. r. 2004. bea.<br>

    <a href="?showuser=348" class="g-6"><b>FORTESCUE, lucrezia</b></a> Spell Maker. b. 1960. Bells.<br>
    w/ <b>GREYBACK, fenrir.</b> b. 1944-45.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <a href="?showuser=23" class="g-6"><b>FORTESCUE, fiorella.</b></a> spell maker & owner of fortescue's. b. 1980. bells. <br>
    </canonbranch>
</canonbranch>

</div>


<!-- FROBISHER -->
<div class="webpage--tab" data-tab="#frobisher">

<p>Halfblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>FROBISHER, first.</b> occupation. b. year.<br>
m. <b>FROBISHER, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=619" class="g-11"><b>FROBISHER, victoria.</b></a> advice columnist. b. 1982. bea.<br>
</canonbranch>

</div>


<!-- FUDGE -->
<div class="webpage--tab" data-tab="#fudge">

<p>Pureblood. Cornelius was previously minister for magic.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>FUDGE, julius.</b> occupation. b. year. <br>
m. <b>WARRINGTON, arabella.</b> occupation. b. year. <br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>FUDGE, olympia</b>. occupation. b. 1976. <br>

    <a href="?showuser=126" class="g-6"><b>FUDGE, leopold.</b></a> spell inventor. b. 1979. bea. <br>
    w/ <a href="?showuser=514" class="g-6"><b>CASTLE, lucinda.</b></a> baker. b. 1979. roe.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <b>CASTLE-FUDGE, daisy.</b> b. 1998<br>
    </canonbranch>
</canonbranch>

<b>FUDGE, cornelius.</b> occupation. b. 1945-46.<br>
m. <b>FUDGE, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=194" class="g-6"><b>FUDGE, cornelia</b></a> proprietor. b. 1977. amy.<br>
    w/ <b>LAST, first</b>. occupation. b. year. <br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <b>FUDGE, arthur.</b> b. year. <br>
    </canonbranch>
</canonbranch>

<b>FUDGE, gaius</b>. occupation. b. year. <br>
w/ <b>EVANS, molly</b>. occupation. b. year. <br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>EVANS, callum.</b> student. b. 1987.<br>
</canonbranch>
m. <b>MELIFLUA, cassandra.</b> occupation. b. year. <br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=240" class="g-13"><b>FUDGE, benedict.</b></a> student. b. 1987. bea. <br>
    <a href="?showuser=550" class="g-14"><b>FUDGE, tabitha</b></a> student. b. 1989. roe.
</canonbranch>

</div>


<!-- GOLDSTEIN -->
<div class="webpage--tab" data-tab="#goldstein">

<p>Halfblood. Jewish. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>GOLDSTEIN, herman.</b> college arithmancy professor. b. year.<br>
m. <b>RYDER, eliza.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>GOLDSTEIN, anthony.</b> occupation. b. 1979-80.<br>
    <b>GOLDSTEIN, eleanor.</b> composer. b. year.<br>
</canonbranch>

<b>GOLDSTEIN, adam.</b> american national quidditch coach. b. year.<br>
<b>SANDINGTON, nerys.</b> broadway actress. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>GOLDSTEIN, merrick.</b> composer. b. year.<br>
    <b>GOLDSTEIN, olive.</b> composer. b. year.<br>
    <a href="?showuser=536" class="g-8"><b>Agatha Goldstein</b></a> arithmancy professor. b. 1977. roe.<br>
    m. <a href="?showuser=767" class="g-13"><b>GOLDSTEIN, stella.</b></a> assistant coach. b.1976. chels.<br>
</canonbranch>

</div>


<!-- GOYLE -->
<div class="webpage--tab" data-tab="#goyle">

<p>Pureblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>GOYLE, first.</b> occupation. b. year.<br>
m. <b>GOYLE, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>GOYLE, gregory.</b> occupation. b. 1979-80.<br>
</canonbranch>

</div>


<!-- GRANGER -->
<div class="webpage--tab" data-tab="#granger">

<p>Muggleborn. Biracial & English. Hermione did not restore her parents' memories; they are still living in Australia.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>GRANGER, david.</b> dentist. b. year.<br>
m. <b>GRANGER, deborah.</b> dentist. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=55" class="g-12"><b>GRANGER, hermione.</b></a> ministry legislator. b. 1979. amy.<br>
</canonbranch>

</div>


<!-- GRAVES -->
<div class="webpage--tab" data-tab="#graves">

<p>Halfblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>GRAVES, leo.</b> presumed dead. <br>
m. <b>GRAVES, rebecca.</b> presumed dead<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>graves, harvey.</b> occupation. b. year. <br>
    m. <b>graves, first.</b> occupation. b. year. <br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <a href="?showuser=368" class="g-18"><b>GRAVES, merton.</b></a> cellist. b. 1978. bea.<br>
        <a href="?showuser=46" class="g-18"><b>GRAVES, truly.</b></a> weird sisters manager, writer, & cover cellist. b. 1979. bells.<br>
    </canonbranch>

    <a href="?showuser=351" class="g-15"><b>GRAVES, theodora.</b></a> medical examiner. b. 1964. amy. 
</canonbranch>

</div>


<!-- GREENGRASS -->
<div class="webpage--tab" data-tab="#greengrass">

<p>Pureblood. English. Elizabeth died in childbirth with her third pregnancy. Ladon was killed in the Battle of Hogwarts.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>GREENGRASS, warren.</b> b. 1925. d. 1980. <br>
m. <b>PARKINSON, elisabetta.</b> b. 1930. d. 1977. <br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
  <a href="?showuser=974" class="g-6"><b>GREENGRASS-MACNAIR, peregrine.</b></a> civil rights lawyer . b. 1952. bells.<br>
  m. <a href="?showuser=929" class="g-6"><b>GREENGRASS-MACNAIR, elspeth.</b></a> lobbyist. b. 1952. bea.<br>
  <b>GREENGRASS, ladon.</b> d. 1998.<br>
  m. <b>CROUCH, elizabeth.</b> d. 1987.<br>
  <button class="webpage--canon-expansion" onClick="expandCanons(this)">
      <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
      <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
  </button>
  <canonbranch>
       <a href="?showuser=5" class="g-6"><b>GREENGRASS, daphne.</b></a> philanthropist. b. 1980. bea.<br>
       <a href="?showuser=816" class="g-15"><b>GREENGRASS, astoria.</b></a> trainee healer. b. 1982. roe.<br>
  </canonbranch>
</canonbranch>
</div>


<!-- GREYBACK -->
<div class="webpage--tab" data-tab="#greyback">

<p>Halfblood. Fenrir is serving a life sentence in Azkaban for crimes committed during the War and is a werewolf. Additional family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>GREYBACK, fenrir.</b> b. 1944-45.<br>

</div>


<!-- HAGRID -->
<div class="webpage--tab" data-tab="#hagrid">

<p>Pureblood/giant. Hagrid is a half-giant and has stepped down from his teaching position.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>HAGRID, rubeus.</b> hogwarts groundskeeper. b. 1928.<br>

</div>


<!-- HARPER -->
<div class="webpage--tab" data-tab="#harper">

<p>Halfblood. English. Daphne committed suicide while she and Eddison were in the process of separating.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>HARPER, matthew.</b> occupation. b. 1926.<br>
m. <b>WARRINGTON, lucia.</b> occupation. b. 1928.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=120" class="g-18"><b>DAVIS-HARPER, frederick.</b></a> songwriter. b. 1951. bea.<br>
    m. <a href="?showuser=50" class="g-8"><b>DAVIS-HARPER, albert.</b></a> divination professor & deputy head of slytherin. b. 1953. bells.<br>
</canonbranch>

<b>HARPER, edward.</b> occupation. b. year.<br>
m. <b>HARPER, jessica.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=139" class="g-12"><b>HARPER, eddison.</b></a> social worker. b. 1955. bells.<br>
    m. <b><s>GRANTHAM, daphne.</s></b> b. 1955. d. 1993.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <b>HARPER, wyatt.</b> occupation. b. 1980-81.<br>
        <a href="?showuser=247" class="g-6"><b>HARPER, lucille.</b></a> unemployed. b. 1987. bells.<br>
        <a href="?showuser=497" class="g-6"><b>HARPER, luca.</b></a> student. b. 1987. roe.
    </canonbranch>
</canonbranch>

<b>HARPER, james.</b> occupation. b. 1936.<br>
m. <b>HARPER, deborah.</b> occupation. b. 1939.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=302" class="g-12"><b>HARPER, lorcan.</b></a> magical forensics. b. 1964. bea. <br>
  w/ <a href="?showuser=351" class="g-15"><b>GRAVES, theodora.</b></a> medical examiner. b. 1964. amy. 
  <button class="webpage--canon-expansion" onClick="expandCanons(this)">
      <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
      <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
  </button>
  <canonbranch>
    <b>HARPER, declan.</b> b. 2006. <br>
  </canonbranch>
    <b>HARPER, alexander.</b> b. 1966. d. 1998.<br>
    <b>HARPER, scott.</b> auror. b. 1968.<br>

    <a href="?showuser=303" class="g-15"><b>HARPER, liam.</b></a> healer. b. 1968. bea. <br>
    m. <b><s>HARPER, stephanie.</s></b> d. 2000.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <a href="?showuser=554" class="g-14 ravenclaw"><b>HARPER, josie.</b></a> unemployed. b. 1989. amy.<br>
        <a href="?showuser=1065" class="g-9"><b>HARPER, gemma.</b></a> unemployed. b. 1989. roe.<br>
        <b>HARPER, daniel.</b> b. 1995.<br>
        <b>HARPER, alexis.</b> b. 2000.<br>
    </canonbranch>

    <b>HARPER, leanne.</b> occupation. b. 1971. <br>
</canonbranch>

</div>


<!-- HIGGS -->
<div class="webpage--tab" data-tab="#higgs">

<p>Pureblood. family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>HIGGS, luther.</b> occupation. b. year.<br>
m. <b>KIRKE, marissa.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <<a href="?showuser=989" class="g-12"><b>HIGGS, samuel.</b></a> prosecutor. b. 1972. bea.<br>
    m. <b>BLETCHLEY, loretta.</b> occupation. b. 1972. 
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <b>HIGGS, luke.</b> b. 1993. <br>
        <b>HIGGS, danielle.</b> b. 1996. 
    </canonbranch>

    <a href="?showuser=449" class="g-11"><b>HIGGS, terence</b></a> Quidditch reporter. b. 1977. roe.<br>
    <a href="?showuser=457" class="g-8"><b>HIGGS, quinn.</b></a> professor. b. 1977. amy.<br>
</canonbranch>

</div>


<!-- HOOCH -->
<div class="webpage--tab" data-tab="#hooch">

<p>Halfblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>HOOCH, rolanda.</b> flying professor. b. 1900-1901.<br>

</div>


<!-- HOOPER -->
<div class="webpage--tab" data-tab="#hooper">

<p>Halfblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>HOOPER, first.</b> occupation. b. year.<br>
m. <b>HOOPER, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>HOOPER, geoffrey.</b> occupation. b. 1983-84.<br>
</canonbranch>

</div>


<!-- HOPKINS -->
<div class="webpage--tab" data-tab="#hopkins">

<p>Halfblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>HOPKINS, first.</b> occupation. b. year.<br>
m. <b>HOPKINS, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>HOPKINS, wayne.</b> occupation. b. 1979-80.<br>
</canonbranch>

</div>


<!-- JOHNSON -->
<div class="webpage--tab" data-tab="#johnson">

<p>Halfblood. Black. English. Nicola left the family when Angelina was a small child.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>JOHNSON, david.</b> broom repairer. b. year.<br>
m. <b>JOHNSON, nicola.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=26" class="g-13"><b>JOHNSON, angelina.</b></a> montrose magpies chaser. b. 1978. amy.<br>
</canonbranch>
<b>JOHNSON, marianne.</b> occupation. b. year. <br>
w/ <b>SMITH, nathan.</b> occupation. b. year. <br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
  <a href="?showuser=889" class="g-6"><b>JOHNSON, alyssa.</b></a> vet. b. 1980. bea.<br>
</canonbranch>

</div>


<!-- JONES -->
<div class="webpage--tab" data-tab="#jones">

<p>Halfblood. Welsh. Black. Gwenog is married to Mary MacDonald and also listed with her.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>JONES, ioan.</b> occupation. b. year.<br>
m. <b>LLEWELLYN, seren.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>JONES, rhys.</b> occupation. b. 1956.<br>

    <b>JONES, carys.</b> occupation. b. 1959.<br>
    m. <b>LLEWELLYN, owen.</b> occupation. b. 1957.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <a href="?showuser=566" class="g-15"><b>LLEWELLYN, rhiannon</b></a> Healer-in-training. b. 1983. bea.<br>
        <b>LLEWELLYN, seren.</b> occupation. b. 1985. <br>
        <b>LLEWELLYN, mairwen.</b> occupation. b. 1985. <br>
        <b>LLEWELLYN, eirlys.</b> occupation. b. 1985. <br>
    </canonbranch>

    <a href="?showuser=30" class="g-13"><b>MACDONALD-JONES, gwenog.</b></a> harpies coach. b. 1961. bea.<br>
    m. <a href="?showuser=24" class="g-8"><b>MACDONALD-JONES, mary.</b></a> games instructor. b. 1960. bells.<br>

    <b>JONES, ianto.</b> occupation. b. 1964.<br>
    <b>JONES, geraint.</b> occupation. b. 1965.<br>
</canonbranch>

<b>JONES, first.</b> occupation. b. year.<br>
m. <b>JONES, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>JONES, hestia.</b> occupation. b. 1975-76.<br>
    <b>JONES, peter.</b> occupation. b. 1977-78.<br>
    <b>JONES, megan.</b> occupation. b. 1979-80.<br>
</canonbranch>

</div>


<!-- JORDAN -->
<div class="webpage--tab" data-tab="#jordan">

<p>Halfblood. Black. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>JORDAN, first.</b> occupation. b. year.<br>
m. <b>JORDAN, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>JORDAN, lee.</b> occupation. b. 1977-78.<br>
</canonbranch>

</div>


<!-- KIRKE -->
<div class="webpage--tab" data-tab="#kirke">

<p>Halfblood. English/American. The Kirkes are a very large family and there is still room for expansion. Jacob, Morris, Edwine and Elmer are siblings. Marissa is married to Luther Higgs and she & their children are listed with the Higgs family.  </p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>KIRKE, jacob.</b> occupation. b. year.<br>
m. <b>KIRKE, millicent.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=628" class="g-6"><b>KIRKE, micah.</b></a> founder. b. 1950. roe.<br>
    m. <a href="?showuser=699" class="g-6"><b>WARRINGTON, nellie.</b></a> fundraiser. b. 1951. bea.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <b>KIRKE, barbara.</b> occupation. b. year. <br>
        <b>KIRKE, scotty.</b> occupation. b. year. <br>
        <a href="?showuser=521" class="g-6"><b>KIRKE, carter.</b></a> tattoo artist. b. 1971. roe.<br>
        <a href="?showuser=480" class="g-18"><b>KIRKE, wendy.</b></a> fashion designer. b. 1977. roe.<br>
        <b>KIRKE, hallie.</b> occupation. b. year. <br>
        <b>KIRKE, toby.</b> occupation. b. year. <br>
    </canonbranch>  

    <b>KIRKE, robert.</b> occupation. b. year. <br>
    w/ <b>FAWLEY, jessica.</b> occupation. b. year. <br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <a href="?showuser=629" class="g-6"><b>FAWLEY, greyson.</b></a> broom mechanic. b. 1971. roe.<br>
    </canonbranch>
    m. <s><b>HADDIFON, helen.</b></s> d. year. <br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <a href="?showuser=830" class="press g-11"><b>ALFORD, adelaide.</b></a> writer. b. 1972. roe.<br>
        <a href="?showuser=832" class="g-6"><b>KIRKE, heath.</b></a> waiter. b. 1983. roe.<br>
    </canonbranch>

    <a href="?showuser=610" class="g-6"><b>KIRKE, renée.</b></a> owner. b. 1957. bea.<br>
    m. <b>KIRKE, giselle.</b> occupation. b. year. <br>

    <b>HIGGS, marissa.</b> occupation. b. year. <br>
    
    <b>KIRKE, kevin.</b> occupation. b. year. <br>
    m. <b>MATTHEWS, mary.</b> occupation. b. year. <br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <b>KIRKE, andrew.</b> occupation. b. 1980-81.<br>
    </canonbranch>

    <b>KIRKE, marianne.</b> occupation. b. year. <br>
    w/ <b>LAST, first.</b> occupation. b. year <Br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
  <a href="?showuser=783" class="g-7"><b>KIRKE, cohen.</b></a> student. b. 1989. roe.<br>
    </canonbranch>
    <b>KIRKE, hayden.</b> occupation. b. year. <br>
    <b>KIRKE, theo.</b> occupation. b. year. <br>
    <b>KIRKE, tony.</b> occupation. b. year. <br>
    <a href="?showuser=839" class="g-6"><b>KIRKE, cassandra.</b></a> author , personal shopper, apothecary owner . b. 1968. bells.<br>
    <b>KIRKE, maisie.</b> occupation. b. year. <br>
    <a href="?showuser=573" class="g-11"><b>KIRKE, emerson</b></a> photographer. b. 1971. roe. <br>
</canonbranch>

<b>KIRKE, morris.</b> occupation. b. year. <br>
m. <b>LENNOX, hillary.</b> occupation. b. year. <br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>KIRKE, peter.</b> occupation. b. year. <br>

    <b>KIRKE, daniel.</b> occupation. b. year. <br>
    m. <b>KIRKE, victoria.</b> occupation. b. year. <br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <b>KIRKE, darlene.</b> macusa unspeakable. b. year. <br>
        <b>KIRKE, dorcas.</b> healer. b. year. <br>
        <b>KIRKE, grant.</b> obliviator. b. year. <br>
        <b>KIRKE, emma.</b> bartender. b. year. <br>
    </canonbranch>
    w/ <b>BOTHELL, mia.</b> occupation. b. year. <br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <a href="?showuser=732" class="adults g-6"><b>KIRKE, alan.</b></a> owner. b. 1974. roe.<br>
  w/ <a href="?showuser=772" class="press g-11"><b>DELAFOSSE, leonie.</b></a> fashion writer. b. 1977. chels. <br>
  <button class="webpage--canon-expansion" onClick="expandCanons(this)">
      <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
      <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
  </button>
  <canonbranch>
    <b>DELAFOSSE-KIRKE, celestine.</b> b. 2006.
  </canonbranch>
    </canonbranch>

  <b>KIRKE, edward.</b> occupation. b. year. <br>

    <b>KIRKE, tobias.</b> occupation. b. year. <br>
    w/ <b>WHITE, april.</b> occupation. b. year.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
  <a href="?showuser=668" class="g-6"><b>KIRKE, logan.</b></a> teacher. b. 1978. roe.<br>
    </canonbranch>
    m. <b>KIRKE, euphemia.</b> occupation. b. year. <br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <s><b>KIRKE, josephine.</b></s> d. year. <br>
        <a href="?showuser=269" class="g-18"><b>KIRKE, veronica.</b></a> production assistant. b. 1986. amy.<br>
    </canonbranch>
</canonbranch>

<b>KIRKE, edwina.</b> occupation. b. year. <br>

<b>KIRKE, elmer.</b> occupation. b. year. <br>
m. <b>HAMILTON, tara.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=661" class="adults g-6"><b>KIRKE, matthew.</b></a> author. b. 1955. roe.<br>
    <b>KIRKE, julia.</b> occupation. b. year. <br>
    <b>KIRKE, nathan.</b> occupation. b. year. <br>
</canonbranch>

</div>


<!-- KRUM -->
<div class="webpage--tab" data-tab="#krum">

<p>Pureblood. Bulgarian. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>KRUM, first.</b> occupation. b. year.<br>
m. <b>KRUM, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>KRUM, viktor.</b> seeker. b. 1976.<br>
</canonbranch>

</div>


<!-- LESTRANGE -->
<div class="webpage--tab" data-tab="#lestrange">

<p>Pureblood. English. Rabastan, Rodolphus, and Phaedra are siblings, and Rabastan and Rodolphus are serving lifetime sentences in Azkaban. Bellatrix was killed in the Battle of Hogwarts by Molly Weasley in May 1998. Persephone was never involved with Death Eater activities and so was never charged, but has been under suspicion. Phaedra was married to Evan Rosier and thus is also listed under the Rosier family.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>LESTRANGE, rodolphus.</b> occupation. b. pre-64.<br>
m. <b>BLACK, bellatrix.</b> occupation. d. 1998.<br>
<b>LESTRANGE, rabastan.</b> occupation. b. pre-64.<br>
m. <a href="?showuser=44" class="g-8"><b>MONTAGUE, persephone.</b></a> hogwarts librarian. b. 1962. bells.<br>
<b>ROSIER, phaedra.</b> d. 1983.<br>

</div>


<!-- LI -->
<div class="webpage--tab" data-tab="#li">

<p>Halfblood. Chinese. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>LI, first.</b> occupation. b. year.<br>
m. <b>LI, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>LI, sue.</b> occupation. b. 1979-80.<br>
</canonbranch>

</div>


<!-- LONGBOTTOM -->
<div class="webpage--tab" data-tab="#longbottom">

<p>Pureblood. English. Frank and Alice were tortured by Death Eaters in late 1981 and have resided at St. Mungo's ever since. Augusta subsequently raised Neville.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>LONGBOTTOM, augusta.</b> occupation. b. 1932-33.<br>
m. <b>LONGBOTTOM, first.</b> occupation. d. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>LONGBOTTOM, frank.</b> long term st. mungo's patient. b. 1957-58.<br>
    m. <b>LONGBOTTOM, alice.</b> long term st. mungo's patient. b. 1958-59.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <a href="?showuser=495" class="g-8"><b>LONGBOTTOM, neville.</b></a> Herbology. b. 1980. roe.<br>
    </canonbranch>
</canonbranch>

</div>


<!-- LOVEGOOD -->
<div class="webpage--tab" data-tab="#lovegood">

<p>Halfblood. English. Pandora was killed when a spell of her own creation backfired.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>LOVEGOOD, xenophilius.</b> editor in chief & owner of the quibbler. b. 1955-56.<br>
m. <b><s>BANKS, hermia.</s></b> d. 1990.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=319" class="g-6"><b>LOVEGOOD, luna.</b></a> activist. b. 1981. chels.<br>
</canonbranch>

</div>


<!-- LUPIN -->
<div class="webpage--tab" data-tab="#lupin">

<p>Halfblood. Welsh. Jewish. Hope died of cancer in the summer of 1978. Lyall died of natural causes in 1982. Remus and Nymphadora were both killed in the Battle of Hogwarts in May 1998 and have recently returned. Teddy has been raised by his grandmother Andromeda Tonks in the meantime. </p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b><s>LUPIN, lyall.</s></b> d. 1982.<br>
m. <b><s>HOWELL, hope.</s></b> d. 1978.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=18" class="g-17"><b>LUPIN, remus.</b></a> freelance warder. b. 1960. d. 1998. r. 2003. bea.<br>
    d. <a href="?showuser=28" class="g-17"><b>TONKS, nymphadora.</b></a> auror. b. 1973. d. 1998. r. 2003. amy. <br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <b>LUPIN, edward.</b> b. 1998. npc.<br>
    </canonbranch>
</canonbranch>

</div>


<!-- MACDONALD -->
<div class="webpage--tab" data-tab="#macdonald">

<p>Halfblood. Scottish. Mary was assaulted by Mulciber while a student at Hogwarts.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>MACDONALD, henry.</b> occupation. b. year.<br>
m. <b>MACDONALD, jessica.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b><s>MACDONALD, magnus.</s></b> d. year.<br>
    <a href="?showuser=24" class="g-8"><b>MACDONALD-JONES, mary.</b></a> games instructor. b. 1960. bells.<br>
    m. <a href="?showuser=30" class="g-13"><b>MACDONALD-JONES, gwenog.</b></a> harpies coach. b. 1961. bea.<br>
</canonbranch>

</div>


<!-- MACMILLAN -->
<div class="webpage--tab" data-tab="#macmillan">

<p>Pureblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>MACMILLAN, first.</b> occupation. b. year.<br>
m. <b>MACMILLAN, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>MACMILLAN, ernie.</b> occupation. b. 1979-80.<br>
</canonbranch>

</div>


<!-- MACNAIR -->
<div class="webpage--tab" data-tab="#macnair">

<p>Pureblood. Walden is serving a life sentence in Azkaban for crimes committed during the War. Additional family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b><s>MACNAIR, fergus.</s></b> d. year. <br>
m. <b><s>MACNAIR, isla.</s></b> d. year. <br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
  <b>MACNAIR, walden.</b> d. year<br>
  m. <b>MOREAU, claudette.</b> occupation. b. year.<br>
  <button class="webpage--canon-expansion" onClick="expandCanons(this)">
      <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
      <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
  </button>
  <canonbranch>
    <b>MACNAIR, fergus.</b> incarcerated. b. year.<br>
    <a href="?showuser=624" class="g-6"><b>MACNAIR, hamish.</b></a> carpenter. b. 1970. bea.<br>
    <b>MACNAIR, isla.</b> occupation. b. year.<br>
  </canonbranch>
  <a href="?showuser=929" class="g-6"><b>GREENGRASS-MACNAIR, elspeth.</b></a> lobbyist. b. 1952. bea.<br>
</canonbranch>
</div>


<!-- MADLEY -->
<div class="webpage--tab" data-tab="#madley">

<p>Muggleborn. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>MADLEY, first.</b> occupation. b. year.<br>
m. <b>MADLEY, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>MADLEY, laura.</b> occupation. b. 1982-83.<br>
</canonbranch>

</div>


<!-- MALFOY -->
<div class="webpage--tab" data-tab="#malfoy">

<p>Pureblood. English. Draco & Lucius's sentences were commuted to house arrest after Harry Potter vouched for them.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>MALFOY, lucius</b> archivist. b. 1953.<br>
m. <a href="?showuser=45" class="g-6"><b>MALFOY, narcissa.</b></a> socialite. b. 1955. bea.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=408" class="g-15"><b>MALFOY, draco.</b></a> healer-in-training. b. 1980. lux.<br>
</canonbranch>

</div>


<!-- MARCHBANKS -->
<div class="webpage--tab" data-tab="#marchbanks">

<p>Pureblood. Ariel is sister of Prospero Montague. Evan died when Georgie was 17 from a heart attack.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>MARCHBANKS, griselda.</b> occupation. b. 1869.<br>

<b>MARCHBANKS, gregory.</b> occupation. b. 1884.<br>
m. <b>MARCHBANKS, alice.</b> occupation. b. 1902.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>MARCHBANKS, everett.</b> occupation. b. 1938.<br>
    m. <b>MARCHBANKS, stella.</b> occupation. b. 1941.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <a href="?showuser=570" class="g-12"><b>MARCHBANKS, quinn.</b></a> department of magical law enforcement. b. 1972. bea.<br>
        <b>MARCHBANKS, arden.</b> occupation. b. 1975.<br>
    </canonbranch>

    <b>MARCHBANKS, evan.</b> defense attorney. d. 1996.<br>
    m. <b>MONTAGUE, ariel.</b> Socialite. b. 1941.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <b>MARCHBANKS, august.</b> healer. b. 1963.<br>
        <b>MARCHBANKS, grayson.</b> lawyer. b. 1965.<br>
        <b>MARCHBANKS, evan.</b> private security team owner. b. 1967.<br>
  <b>MARCHBANKS, sebastian.</b> hitwizard. b. 1969.<br>
  <b>MARCHBANKS, jameson.</b> writer. b. 1971.<br>
  <b>MARCHBANKS, robertson.</b> professor. b. 1975.<br>
  <a href="?showuser=897" class="ministry g-12"><b>MARCHBANKS, georgetta.</b></a> auror. b. 1979. bells.<br>
    </canonbranch>
</canonbranch>

</div>


<!-- MCDONALD -->
<div class="webpage--tab" data-tab="#mcdonald">

<p>Halfblood. Scottish. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>MCDONALD, first.</b> occupation. b. year.<br>
m. <b>MCDONALD, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>MCDONALD, natalie.</b> occupation. b. 1982-83.<br>
</canonbranch>

</div>


<!-- MCDOUGAL -->
<div class="webpage--tab" data-tab="#mcdougal">

<p>Halfblood. Scottish. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>MCDOUGAL, first.</b> occupation. b. year.<br>
m. <b>MCDOUGAL, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>MCDOUGAL, morag.</b> occupation. b. 1979-80.<br>
</canonbranch>

</div>


<!-- MCGONAGALL -->
<div class="webpage--tab" data-tab="#mcgonagall">

<p>Halfblood. Scottish/Irish. Minerva, Malcolm, and Robert are siblings. Malcolm and Iain had their children through a surrogate and all five are biologically Malcolm's. Robert was killed by Death Eaters in the first War and his son Angus was killed in the Battle of Hogwarts. Angus has recently returned. The family has a natural gift for transfiguration and several of them are animagi.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>MCGONAGALL, minerva.</b> headmistress. b. 1935.<br>
<b>MCGONAGALL, malcolm.</b> b. 1937-38.<br>
m. <b>MACLEOD, iain.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>MCGONAGALL, sorcha.</b> occupation. b. year.<br>
    <a href="?showuser=31" class="g-6"><b>MCGONAGALL, caradoc.</b></a> private investigator. b. 1971. bea.<br>
    <a href="?showuser=517" class="g-13"><b>MCGONAGALL, domhnall</b></a> physio. b. 1975. roe.<br>
    <a href="?showuser=136" class="g-6"><b>MCGONAGALL, mòrag.</b></a> dragonologist. b. 1977. bells.<br>
    <b>MCGONGALL, lachlann.</b> occupation. b. year.<br>
</canonbranch>
<b><s>MCGONAGALL, robert.</s></b> d. 1976.<br>
m. <b>CAMPBELL, eibhlinn.</b> occupation. b. 1938.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=32" class="g-17"><b>MCGONAGALL, angus.</b></a> accountant. b. 1967. d. 1998. r. 2003. bea.<br>
    m. <a href="?showuser=27" class="g-15"><b>DARMODY, eliza.</b></a> healer. b. 1969. amy.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <b>MCGONAGALL, anne.</b> student. b. 1991.<br>
        <b>MCGONAGALL, robert.</b> b. 1994.<br>
        <b>MCGONAGALL, agnes.</b> b. 1998.<br>
    </canonbranch>
    <b>MCGONAGALL, grace.</b> occupation. b. 1971.<br>
</canonbranch>

</div>


<!-- MCLAGGEN -->
<div class="webpage--tab" data-tab="#mclaggen">

<p>Pureblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>MCLAGGEN, seamus.</b> quidditch coach. b. year.<br>
m. <b>MCLAGGEN, caoimhe.</b> unemployed. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=620" class="g-18"><b>MCLAGGEN, fiona.</b></a> host. b. 1975. bea.<br>
    <b>MCLAGGEN, fergus.</b> occupation. b. 1976.<br>
    <b>MCLAGGEN, ronan.</b> occupation. b. 1977.<br>
    <b>MCLAGGEN, cormac.</b> occupation. b. 1978-79.<br>
</canonbranch>

</div>

<!-- MERRYTHOUGHT -->
<div class="webpage--tab" data-tab="#merrythought">


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>MERRYTHOUGHT, galatea.</b> dada professor/retired. b. year. d. year.<br>

<b>MERRYTHOUGHT, malcolm.</b> quidditch coach. b. year.<br>
m. <b>MERRYTHOUGHT, maggie.</b> unemployed. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=1016" class="g-18"><b>MERRYTHOUGHT, juliet.</b></a> actress. b. 1976. amy.<br>
</canonbranch>

</div>


<!-- MIDGEON -->
<div class="webpage--tab" data-tab="#midgeon">

<p>Halfblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>MIDGEON, first.</b> occupation. b. year.<br>
m. <b>MIDGEON, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>MIDGEON, eloise.</b> occupation. b. 1980-81.<br>
</canonbranch>

</div>


<!-- MONTAGUE -->
<div class="webpage--tab" data-tab="#montague">

<p>Pureblood. English. Morgana died in childbirth with Persephone. Persephone was married off to Rabastan Lestrange to pay off her father's gambling debts. Silvia was married off at 17 by her father to Henry Rowle, and raised her children alone after his death until her second marriage. Ariel was married to Evan Marchbanks and is listed tehre with her children. Rosalin is Faustus's second wife and may or may not have been behind his death; details of his first wife and their children tbd.  </p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b><s>MONTAGUE, prospero.</s></b> b. 1932. d. year.<br>
m. <b><s>ROWLE, morgana.</s></b> b. 1940. d. 1962.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>MONTAGUE, lorcan.</b> occupation. b. year.<br>
    m. <b>MONTAGUE, name.</b> occupation. b. year.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <b>MONTAGUE, graham.</b> occupation. b. 1978-79.<br>
    </canonbranch>

    <a href="?showuser=" class="g-8"><b>LESTRANGE, peresphone.</b></a> hogwarts librarian. b. 1962. bells.<br>
</canonbranch>

<b><s>MONTAGUE, gideon</s></b>. b. 1935. d. 1987.<br>
m. <b><s>CROUCH, marianne</s></b>. b. 1941. d. 2004.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=169" class="g-6"><b>MONTAGUE, silvia.</b></a> philanthropist. b. 1961. bea.<br>
    m. <b><s>ROWLE, henry</s></b>. d. 1982.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <b>ROWLE, edward.</b> occupation. b. 1979.<br>
        <b>ROWLE, victoria.</b> occupation. b. 1980.<br>
        <b>ROWLE, willian.</b> occupation. b. 1980.<br>
        <b>ROWLE, margaret.</b> occupation. b. 1982.<br>
    </canonbranch>
    m. <b><s>MADDOX, james</s></b>. d. 1996.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <b>MADDOX, emily</b>. student. b. 1990.<br>
        <b>MADDOX, andrew.</b> student. b. 1994.<br>
    </canonbranch>
    m. <b>HOWARD, charlie.</b> occupation. b. 1960.<br>

    <b>MONTAGUE, catherine.</b> occupation. b. year.<br>
    <b>MONTAGUE, elisabeth.</b> occupation. b. year.<br> 
    <b>MONTAGUE, jack.</b> occupation. b. 1971.<br>
</canonbranch>
<b>MARCHBANKS, ariel.</b> socialite. b. 1941. <br>
<b>MONTAGUE, faustus.</b> b. 1945. d. 2005. <br>
m. <a href="?showuser=1186" class="g-6"><b>BABBLING, rosalin.</b></a> unemployed. b. 1977. bells.<br>
</div>


<!-- MONTGOMERY -->
<div class="webpage--tab" data-tab="#montgomery">

<p>Halfblood. English. Henry was attacked by Greyback at the age of five and subsequently died at St. Mungo's in April 1997.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>MONTGOMERY, first.</b> occupation. b. year.<br>
m. <b>MONTGOMERY, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>MONTGOMERY, first.</b> occupation. b. 1979-80.<br>
    <b>MONTGOMERY, first.</b> occupation. b. 1979-80.<br>
    <b><s>MONTGOMERY, henry.</s></b> d. 1997.<br>
</canonbranch>

</div>


<!-- MOON -->
<div class="webpage--tab" data-tab="#moon">

<p>Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>MOON, first.</b> occupation. b. year.<br>
m. <b>MOON, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>MOON, lily.</b> occupation. b. 1979-80.<br>
</canonbranch>

</div>


<!-- MULCIBER -->
<div class="webpage--tab" data-tab="#mulciber">

<p>Pureblood. Cronus Mulciber senior is serving a life sentence in Azkaban for crimes committed during the War. His sister Aella had a long term relationship with Barnabus Babbling and died of leukemia when their daughter Scylla was ten.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>MULCIBER, cronus.</b> occupation. b. 1959-60.<br>
m. <b>MULCIBER, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>MULCIBER, first.</b> occupation. b. year.<br>
</canonbranch>
<b><s>MULCIBER, aella.</s></b> d. 1997.<br>
w/ <b>BABBLING, barnabus.</b> investigative journalist. b. 1965.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=321" class="g-6"><b>MULCIBER, scylla.</b></a> student. b. 1987. bells.<br>
</canonbranch>

</div>


<!-- NOTT -->
<div class="webpage--tab" data-tab="#nott">

<p>Pureblood. Tantalus and Godric are brothers. Tantalus is serving a lifetime sentence in Azkaban for crimes committed during the War. Theodore witnessed his mother's death as a child. Rainard is currently imprisoned in Azkaban for the murder of his brother Milo during the Battle of Hogwarts.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>NOTT, tantalus.</b> occupation. b. year.<br>
m. <b>GORE, poena.</b> d. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>NOTT, theodore.</b> occupation. b. 1979-80.<br>
</canonbranch>
<b>NOTT, godric.</b> occupation. b. year.<br>
m. <a href="?showuser=361" class="g-12"><b>DUBOIS, isabelle</b></a> inspector. b. 1957. bea.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>NOTT, rainard.</b> occupation. b. 1977.<br>
    <a href="?showuser=112" class="g-17"><b>NOTT, milo.</b></a> unemployed. b. 1978. d. 1998. r. 2003. lux.<br>
    <b>NOTT, ava.</b> occupation. b. 1980.<br>
    <b>NOTT, bertram.</b> occupation. b. 1984.<br>
    <b>NOTT, alaric.</b> occupation. b. 1989.<br>
    <b>NOTT, harriet.</b> student. b. 1992.<br>
    <b>DUBOIS, amelia.</b> student. b. 1997.<br>
</canonbranch>

</div>


<!-- OGDEN -->
<div class="webpage--tab" data-tab="#ogden">

<p>Pureblood, owners of Ogden's, renowned for their firewhiskey and confectionery.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>OGDEN, afair.</b> occupation. b. year.<br>
m. <b>ROSS, eilidh.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>OGDEN, janet.</b> b. year.<br>
    m. <b>GAYEN, himesh.</b> b. year.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <a href="?showuser=504" class="g-6"><b>GAYEN, lucy.</b></a> unemployed. b. 1986. chels.<br>
    </canonbranch>

    <b>OGDEN, morag.</b> occupation. b. year.<br>

    <b>OGDEN, taog.</b> occupation. b. year.<br>

    <b>OGDEN, seoras.</b> occupation. b. year.<br>
</canonbranch>

</div>


<!-- OLLIVANDER -->
<div class="webpage--tab" data-tab="#ollivander">

<p>Pureblood. Owners of Ollivander's Wand Shop. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>OLLIVANDER, garrick.</b> occupation. b. 1918-19.<br>
m. <b>OLLIVANDER, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>OLLIVANDER, warwick.</b> d. year.<br>
    m. <b>OLLIVANDER, marilla.</b> d. year.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <b>OLLIVANDER, orion.</b> occupation. b. year.<br>
        <a href="?showuser=193" class="g-12"><b>OLLIVANDER, eleanora</b></a> court clerk. b. 1977. amy.<br>
        <a href="?showuser=363" class="g-8"><b>OLLIVANDER, elias</b></a> alchemy professor. b. 1977. bea.<br>
    </canonbranch>

    <b>OLLIVANDER, roman.</b> occupation. b. year.<br>

    <b>OLLIVANDER, rhea.</b> occupation. b. year.<br>
</canonbranch>

</div>


<!-- ORPINGTON -->
<div class="webpage--tab" data-tab="#orpington">

<p>Pureblood. Welsh/Italian. Giovanna was a fashion photographer and the family was raised all over the world, though attended Hogwarts for schooling. Eric and Rebekah left the country for the duration of the War and have only returned in the last five years. Rhys and Gethin are brothers. Howell is married to Nicodemus Belby and they and their children are listed under the Orpington-Belbys.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>ORPINGTON, rhys.</b> occupation. b. 1931.<br>
m. <b>ORSINI, giovanna.</b> occupation. b. 1933.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>ORPINGTON, emilia.</b> occupation. b. 1954.<br>
    <b>ORPINGTON, louisa.</b> occupation. b. 1957.<br>
    <a href="?showuser=19" class="g-11"><b>ORPINGTON, eric.</b></a> editor in chief of the daily prophet. b. 1958. bea.<br>
    m. <b>ORPINGTON, rebekah.</b> daily prophet news editor. b. 1959.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <a href="?showuser=703" class="g-6"><b>ORPINGTON, lucy.</b></a> unemployed. b. 1987. Bells.<br>
        <a href="?showuser=523" class="g-6"><b>ORPINGTON, teddy.</b></a> student. b. 1987. roe.<br>
        <b>ORPINGTON, juliet.</b> student. b. 1989.<br>
    </canonbranch>
    <b>ORPINGTON, daniel.</b> occupation. b. 1960.<br>
    m. <b>ORPINGTON, charlotte.</b> occupation. b. 1960.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <a href="?showuser=372" class="g-18"><b>ORPINGTON, nerys.</b></a> singer. b. 1984. bea.<br>
        <b>ORPINGTON, lyall.</b> occupation. b. 1988.<br>
    </canonbranch>
</canonbranch>
<b>ORPINGTON, gethin.</b> occupation. b. 1935.<br>
m. <b>MELIFLUA, eloise.</b> occupation. b. 1936.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>ORPINGTON, howell.</b> lawyer. b. 1956.<br>
    m. <b>BELBY, nicodemus.</b> professor. b. 1957.<br>
    <b>ORPINGTON, dylan.</b> occupation. b. 1956. <br>
    <b>ORPINGTON, angharad.</b> occupation. b. 1956.<br>
    <b>ORPINGTON, bethan.</b> occupation. b. 1956. 
</canonbranch>

</div>


<!-- ORPINGTON-BELBY -->
<div class="webpage--tab" data-tab="#orpingtonbelby">

<p>Pureblood. All three girls were adopted and have varying blood statuses.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>BELBY, nicodemus.</b> occupation. b. 1957. <br>
w/ <b>ORPINGTON, howell.</b> occupation. b. 1956.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=599" class="g-12"><b>ORPINGTON-BELBY, tisiphone.</b></a> unemployed. b. 1987. Bells.<br>
    <b>ORPINGTON-BELBY, megaera.</b> occupation. b. 1988.<br>
    <b>ORPINGTON-BELBY, alecto.</b> occupation. b. 1989.<br>
</canonbranch>

</div>


<!-- PARKINSON -->
<div class="webpage--tab" data-tab="#parkinson">

<p>Pureblood. English. Marcus and Leonardo are brothers. Florian refused to join the Battle of Hogwarts and was left comatose by his fellow Death Eaters. Lilian later died of a broken heart when her son wouldn't wake up. Rose is married to Marcus Flint Sr and will be listed under Flint.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>PARKINSON, marcus.</b> occupation. b. 1928.<br>
m. <b>PARKINSON, helena.</b> occupation. b. 1930.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>PARKINSON, basil.</b> lawyer. b. 1951.<br>
    m. <b><s>SELWYN, lilian.</s></b> b. 1950. d. 1999.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <b>PARKINSON, florian.</b> occupation. b. 1972-73.<br>
        <a href="?showuser=12" class="g-6"><b>PARKINSON, pansy.</b></a> pr agent. b. 1980. bea.<br>
    </canonbranch>
    <b>PARKINSON, ambrose.</b> occupation. b. 1953.<br>
    m. <b>CROUCH, charlotte.</b> occupation. b. 1954.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <b>PARKINSON, ivy</b></a> occupation. b. 1975.<br>
        <b>PARKINSON, violet.</b> occupation. b. 1977.<br>
        <b>PARKINSON, cassia.</b> occupation. b. 1978.<br>
        <b>PARKINSON, juniper.</b> occupation. b. 1980.<br>
        <b>PARKINSON, azalea.</b> occupation. b. 1982.<br>
        <b>PARKINSON, zinnia.</b> occupation. b. 1984.<br>
    </canonbranch>
    <b>FLINT, rose.</b> occupation. b. 1957.<br>
</canonbranch>
<b>PARKINSON, leonardo.</b> occupation. b. year.<br>
m. <b>PARKINSON, alys.</b> occupation. b. 1931.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=92" class="g-6"><b>PARKINSON, willoughby.</b></a> fashion designer. b. 1963. bea.<br>
    <a href="?showuser=108" class="g-18"><b>PARKINSON, darcy.</b></a> cabaret singer. b. 1968. bells.<br>
</canonbranch>

</div>


<!-- PATIL -->
<div class="webpage--tab" data-tab="#patil">

<p>Pureblood. Indian. Family up to player. Parvati and Padma are twins.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>PATIL, first.</b> occupation. b. year.<br>
m. <b>PATIL, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=366" class="g-8"><b>PATIL, parvati.</b></a> divination ta. b. 1979. bea<br>
    <a href="?showuser=85" class="g-12"><b>PATIL, padma.</b></a> lawyer. b. 1979. amy.<br>
</canonbranch>

</div>


<!-- PEAKES -->
<div class="webpage--tab" data-tab="#peakes">

<p>Halfblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>PEAKES, first.</b> occupation. b. year.<br>
m. <b>PEAKES, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>PEAKES, jimmy.</b> occupation. b. 1982-83.<br>
</canonbranch>

</div>


<!-- PODMORE -->
<div class="webpage--tab" data-tab="#podmore">

<p>Halfblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>PODMORE, sturgis.</b> occupation. b. 1956-57.<br>
m. <b>PODMORE, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>PODMORE, first.</b> occupation. b. year.<br>
</canonbranch>

</div>


<!-- POMFREY -->
<div class="webpage--tab" data-tab="#pomfrey">

<p>Muggleborn. English. Poppy is the only member of the family with magic and thus the only one available to play. She is married to Pomona Sprout and will also be listed with her.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b><s>POMFREY, james.</s></b> d. year.<br>
m. <b><s>COOPER, rose.</s></b> d. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>POMFREY, lucille.</b> b. 1925.<br>
    <b>POMFREY, molly.</b> b. 1927.<br>
    <b>POMFREY, joseph.</b> b. 1928.<br>
    <b>POMFREY, james.</b> b. 1930.<br>
    <a href="?showuser=20" class="g-8"><b>POMFREY, poppy.</b></a> hogwarts head healer. b. 1935. bea.<br>
    m. <a href="?showuser=37" class="g-8"><b>SPROUT, pomona.</b></a> professor. head of hufflepuff. b. 1940. bells.<br>
    <b>POMFREY, michael.</b> b. 1937.<br>
    <b>POMFREY, thomas.</b> b. 1938.<br>
    <b>POMFREY, jane.</b> b. 1940.<br>
</canonbranch>

</div>


<!-- POTTER -->
<div class="webpage--tab" data-tab="#potter">

<p>Halfblood. Indian. English.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>POTTER, james.</b> d. 1981.<br>
m. <b>EVANS, lily.</b> d. 1981.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=10" class="g-13"><b>POTTER, harry.</b></a> seeker for caerphilly catapults. b. 1980. bea.<br>
</canonbranch>

</div>


<!-- PRITCHARD -->
<div class="webpage--tab" data-tab="#pritchard">

<p>Pureblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>PRITCHARD, thomas.</b> occupation. b. year.<br>
w/ <b>FINK, rivele.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>PRITCHARD, graham.</b> occupation. b. 1982-83.<br>
    <b>FINK, rachael.</b> occupation. b. 1984-85.<br>
    <a href="?showuser=587" class="g-6"><b>FINK, genevieve.</b></a> unemployed. b. 1986. lux.<br>
</canonbranch>

</div>


<!-- PROUDFOOT -->
<div class="webpage--tab" data-tab="#proudfoot">

<p>Halfblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>PROUDFOOT, harris.</b> retired. b. year.<br>
m. <b>PROUDFOOT, amelia.</b> retired. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
  <a href="?showuser=1356" class="g-6"><b>PROUDFOOT, griffin.</b></a> unemployed. b. 1969. lux.<br>
  <b>PROUDFOOT, finlay.</b> auror. b. 1970-73. <br>
  <b>PROUDFOOT, hayley.</b> shopkeeper. b. 1975-76. <br>
  <b>PROUDFOOT, caroline.</b> occupation. b. 1975-76. <br>
</canonbranch>

</div>


<!-- PUCEY -->
<div class="webpage--tab" data-tab="#pucey">

<p>Halfblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>PUCEY, first.</b> occupation. b. year.<br>
m. <b>PUCEY, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>PUCEY, adrian.</b> occupation. b. 1977-78.<br>
</canonbranch>

</div>


<!-- QUIRKE -->
<div class="webpage--tab" data-tab="#quirke">

<p>Halfblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>QUIRKE, first.</b> occupation. b. year.<br>
m. <b>QUIRKE, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>QUIRKE, orla.</b> occupation. b. 1982-83.<br>
</canonbranch>

</div>


<!-- ROBINS -->
<div class="webpage--tab" data-tab="#robins">

<p>Halfblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>ROBINS, rupert.</b> occupation. b. year.<br>
m. <b>ROBINS, francine.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=757" class="g-13 quidditch"><b>ROBBINS, demelza.</b></a> chaser. b. 1982. chels.<br>
    <b>ROBINS, caroline.</b> occupation. b. year.<br>
    <b>ROBINS, marwenna.</b> occupation. b. year.<br>
</canonbranch>

</div>


<!-- ROOKWOOD -->
<div class="webpage--tab" data-tab="#rookwood">

<p>Pureblood. Augustus is serving a life sentence in Azkaban for crimes committed during the War; Cecelia divorced him and raised her daughters in France. Richard's affair with Clementine is not exctly a secret and it is well known that Richard is his son, despite having his stepfather's last name. </p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>ROOKWOOD, augustus.</b> occupation. b. 1959-60.<br>
m. <b>LEFAUCHEUX, cecelia.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
  <a href="?showuser=720" class="g-6"><b>ROOKWOOD, octavia.</b></a> project manager. b. 1979. amy.<br>
  <b>ROOKWOOD, marcella.</b> occupation. b. 1979. <br>
</canonbranch>

<b>ROOKWOOD, richard.</b> occupation. b. year.<br>
w/ <b>AVERY, clementine.</B> occupation. b. year. <br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
  <b>AVERY, richard.</b> occupation. b. year. <Br>
</canonbranch>
m. <b>ROOKWOOD, louise.</b> d. 2002.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=325" class="g-6"><b>ROOKWOOD, eleanor.</b></a> rookwood tech ceo. b. 1980. chels.<br>
    w/ <a href="?showuser=500" class="g-6"><b>OSBORNE, alexander.</b></a> environmental magic researher. b. 1979. roe. <br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <b>ROOKWOOD, matilda.</b> b. 2004.<br>
    </canonbranch>
    <a href="?showuser=151" class="g-15"><b>ROOKWOOD, catherine.</b></a> trainee mind healer. b. 1982. bells.<br>
    <a href="?showuser=639" class="g-6"><b>ROOKWOOD, bridget.</b></a> assistant archivist. b. 1985. amy.<br>
    <a href="?showuser=511" class="g-6"><b>ROOKWOOD, Johnny.</b></a> unemployed. b. 1985. roe.<br>
    <a href="?showuser=162" class="g-6"><b>ROOKWOOD, cecily.</b></a> unemployed. b. 1987. bea.<br>
</canonbranch>

</div>


<!-- ROSIER -->
<div class="webpage--tab" data-tab="#rosier">

<p>Pureblood. Scottish. Evan Sr. died just before the birth of his youngest. Phaedra committed suicide in the year after Evan Jr.'s birth. Damocles and Lucian were both killed in the Battle of Hogwarts.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b><s>ROSIER, lucian.</s></b> d. 1998.<br>
m. <b>ROSIER, medea.</b> b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b><s>ROSIER, evan.</s></b> d. 1982.<br>
    m. <b><s>LESTRANGE, phaedra.</s></b> d. 1983.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <b><s>ROSIER, damocles.</s></b> d. 1998.<br>
        <a href="?showuser=29" class="g-6"><b>ROSIER, antigone.</b></a> temp. b. 1978. amy.<br>
        <a href="?showuser=762" class="g-18"><b>ROSIER, evan.</b></a> actor. b. 1982. chels.<br>
    </canonbranch>
</canonbranch>

</div>


<!-- ROSMERTA -->
<div class="webpage--tab" data-tab="#rosmerta">

<p>Halfblood. Hortensia is a half-veela. She has many four and five times great-grandchildren living currently, all descended from her daughters.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<a href="?showuser=38" class="g-6"><b>ROSMERTA, hortensia.</b></a> owner of the three broomsticks. b. 1803. bells.<br>

</div>


<!-- ROWLE -->
<div class="webpage--tab" data-tab="#rowle">

<p>Pureblood. Thorfinn is serving a life sentence in Azkaban for crimes committed during the War. His brother, Henry, died while his wife Silvia was pregnant with their youngest, Margaret. </p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>ROWLE, name.</b> occupation. b. year.<br>
m. <b>ROWLE, name.</b> occupation. b. year<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>ROWLE, thorfinn.</b> occupation. b. 1966-67.<br>
    m. <b>MACNAIR, elizabeth.</b> occupation. b. year.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <a href="?showuser=886" class="hogwarts staff g-8"><b>ROWLE, griffin.</b></a> astronomy. b. 1976. bea.<br>
        <b>ROWLE, grace.</b> occupation. b. 1978.<br>
    </canonbranch>

    <b><s>rowle, henry</s></b>. d. 1982. <br>
    m. <a href="?showuser=169" class="g-6"><b>montague, silvia.</b></a> philanthropist. b. 1961. bea. <br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <b>rowle, edward.</b> occupation. b. 1979. <br>
        <b>rowle, victoria.</b> occupation. b. 1980. <br>
        <b>rowle, willian.</b> occupation. b. 1980. <br>
        <a href="?showuser=791" class="g-18"><b>ROWLE, margaret.</b></a> actress. b. 1982. amy.<br>
    </canonbranch>
</canonbranch>

<b>ROWLE, matilda.</b> d. year.<br>
w/ <b>MILLER, henry.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=374" class="g-18"><b>ROWLE, zelda.</b></a> owner. b. 1954. bea.<br>
    w/ <b>IBBOTSON, nathaniel.</b> occupation. b. year. <br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <b>ROWLE, ari.</b> occupation. b. 1974. <br>
    </canonbranch>
    w/ <b>JAMES, daniel.</b> occupation. b. year. <br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <a href="?showuser=696" class="g-18"><b>ROWLE, noelle.</b></a> supply manager. b. 1979. roe.<br>
    </canonbranch>
    w/ <b>ARMSTRONG, charles.</b> occupation. b. year. <br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <b>ROWLE, elodie.</b> occupation. b. 1982. <br>
    </canonbranch>
</canonbranch>

</div>


<!-- SCAMANDER -->
<div class="webpage--tab" data-tab="#scamander">

<p>Halfblood. English. Sloane is currently pregnant. Please note the Scamanders do not follow the canon of the Fantastic Beasts movies.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b><s>SCAMANDER, theseus.</s></b> d. 1900.<br>
m. <b>DUMONT, angelica.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>SCAMANDER, oliver.</b> occupation. b. year.<br>
    m. <b>BLAKE, amelie.</b> occupation. b. year.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <a href="?showuser=152" class="g-6"><b>SCAMANDER, sloane.</b></a> zoo owner. b. 1984. bells.<br>
        w/ <a href="?showuser=561" class="g-11"><b>BOWMAN, archer</b></a> restaurant critic. b. 1982. bea.<br>
        <button class="webpage--canon-expansion" onClick="expandCanons(this)">
            <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
            <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
        </button>
        <canonbranch>
           <b>SCAMANDER, raven.</b> b. 2004.<br>
        </canonbranch>
    </canonbranch>
</canonbranch>
<b>SCAMANDER, newt.</b> magizoologist. b. year.<br>
m. <b>SCAMANDER, name.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>SCAMANDER, first.</b> occupation. b. year.<br>
    m. <b>SCAMANDER, first.</b> occupation. b. year.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <b>SCAMANDER, rolf.</b> magizoologist. b. 1976-77.<br>
    </canonbranch>
</canonbranch>

</div>


<!-- SCRIMGEOUR -->
<div class="webpage--tab" data-tab="#scrimgeour">

<p>Pureblood. English. Rufus was the Minister for Magic and was killed by Voldemort in August 1997.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b><s>SCRIMGEOUR, rufus.</s></b> d. 1997.<br>
m. <b>MCLAGGEN, annaliese.</b> housewife. b. 1943.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>SCRIMGEOUR, amelia.</b> lawyer. b. 1967-68.<br>
    <a href="?showuser=7" class="g-15"><b>SCRIMGEOUR, delilah.</b></a> spell damage ward healer. b. 1970. bea.<br>
    <b>SCRIMGEOUR, melissa.</b> occupaton. b. 1974-75.<br>
    <b>SCRIMGEOUR, hector.</b> occupation. b. 1976-77.<br>
</canonbranch>

</div>


<!-- SELWYN -->
<div class="webpage--tab" data-tab="#selwyn">

<p>Pureblood. English. Iris had a short lived marriage with American political Kennington Lexington, which resulted in her son Gable.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>SELWYN, francis.</b> occupation. b. 1929.<br>
m. <b>URQUART, juliet.</b> occupation. b. 1931.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>SELWYN, ambrose.</b> occupation. b. 1953.<br>
    m. <b>CROUCH, emmaline.</b> occupation. b. 1953.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <a href="?showuser=91" class="g-12"><b>SELWYN, robert.</b></a> prosecutor. b. 1971. bea.<br>
        <b>SELWYN, george.</b> student. b. 1985-86.<br>
        <b>SELWYN, sophie.</b> student. b. 1986-87.<br>
    </canonbranch>
    <b>SELWYN, linden.</b> occupation. b. 1955.<br>
    m. <b>BELBY, josephine.</b> occupation. b. 1956.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <a href="?showuser=76" class="g-6"><b>SELWYN, leah.</b></a> student. b. 1987. bea.<br>
        <b>SELWYN, joseph.</b> student. b. 1988.<br>
        <b>SELWYN, helena.</b> student. b. 1988.<br>
        <b>SELWYN, julia.</b> student. b. 1989.<br>
    </canonbranch>
    <b>SELWYN, rowan.</b> occupation. b. 1960.<br>
    m. <b>CHEVALIER, susanne.</b> occupation. b. 1963.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <b>SELWYN, catherine.</b> student. b. 1985-86.<br>
        <a href="?showuser=690" class="g-6"><b>SELWYN, ariana.</b></a> unspeakable. b. 1988. bea.<br>
    </canonbranch>
    <b>SELWYN, iris.</b> occupation. b. 1963.<br>
    w/ <b>LEXINGTON, kennington.</b> politician. b. 1950.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <a href="?showuser=88" class="g-6"><b>LEXINGTON, gable.</b></a> student. b. 1985. bea.<br>
    </canonbranch>
    m. <b>PEARSON, rupert.</b> director. b. 1961.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <a href="?showuser=89" class="g-6"><b>PEARSON, lily.</b></a> student. b. 1987. bea.<br>
        <a href="?showuser=90" class="g-14"><b>PEARSON, rose.</b></a> student. b. 1988. bea. <br>
    </canonbranch>
</canonbranch>

</div>


<!-- SHACKLEBOLT -->
<div class="webpage--tab" data-tab="#shacklebolt">

<p>Pureblood. Black. Matayus and Gwendolyn were killed in the Second Wizarding War and Elmira has been raised by her uncle ever since.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<a href="?showuser=502" class="g-12"><b>SHACKLEBOLT, kingsley.</b></a> minister for magic. b. 1960. chels.<br>
w/ <a href="?showuser=718" class="g-6"><b>FENWICK, khione.</b></a> magical theory professor. b. 1960. amy.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
  <b>SHACKLEBOLT, william</b>. b. 2006. <br>
  <b>SHACKLEBOLT, josephine</b>. b. 2006. 
</canonbranch>

<b><s>SHACKLEBOLT, matayus.</s></b> d. year.<br>
m. <b><s>SHACKLEBOLT, gwendolyn.</s></b> d. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=41" class="g-16"><b>SHACKLEBOLT, elmira.</b></a> student. b. 1987. bells.<br>
</canonbranch>

</div>


<!-- SHUNPIKE -->
<div class="webpage--tab" data-tab="#shunpike">

<p>Halfblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>SHUNPIKE, first.</b> occupation. b. year.<br>
m. <b>SHUNPIKE, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>SHUNPIKE, stan.</b> knight bus conductor. b. 1974-75.<br>
</canonbranch>

</div>


<!-- SINISTRA -->
<div class="webpage--tab" data-tab="#sinistra">

<p>Halfblood. Black. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>SINISTRA, aurora.</b> astronomy professor. b. 1952-53.<br>

</div>


<!-- SKEETER -->
<div class="webpage--tab" data-tab="#skeeter">

<p>Halfblood.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>SKEETER, wilbur.</b> occupation. b. year.<br>
m. <b>MORTIMER, diana.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>SKEETER, rita.</b> journalist. b. 1978-79.<br>
    <b>SKEETER, rebecca.</b> d. 1983.<br>
    m. <b>FRANKLIN, gregory.</b> d. 1983.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <a href="?showuser=420" class="g-11"><b>SKEETER, lilibet</b></a> investigative journalist . b. 1977. bells.<br>
    </canonbranch>
</canonbranch>

</div>


<!-- SLOPER -->
<div class="webpage--tab" data-tab="#sloper">

<p>Halfblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>SLOPER, owen.</b> occupation. b. 1949.<br>
m. <b>JAREAU, sophie.</b> occupation. b. 1950.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=858" class="g-12"><b>SLOPER, noah.</b></a> educational policy advisor. b. 1976. bea.<br>
    <b>SLOPER, cole.</b> occupation. b. 1977.<br>
    <b>SLOPER, logan.</b> occupation. b. 1979.<br>
    <b>SLOPER, jack.</b> occupation. b. 1982.<br>
    <b>SLOPER, chloe.</b> occupation. b. 1986.<br>
</canonbranch>

</div>


<!-- SLUGHORN -->
<div class="webpage--tab" data-tab="#slughorn">

<p>Pureblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>SLUGHORN, horace.</b> occupation. b. 1888-1889.<br>

</div>


<!-- SMITH -->
<div class="webpage--tab" data-tab="#smith">

<p>Halfblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>SMITH, first.</b> occupation. b. year.<br>
m. <b>SMITH, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>SMITH, zacharias.</b> occupation. b. 1979-80.<br>
</canonbranch>

</div>


<!-- SPINNET -->
<div class="webpage--tab" data-tab="#spinnet">

<p>Halfblood. Indian/White. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>SPINNET, john.</b> occupation. b. year.<br>
m. <b>SPINNET, nicola.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=751" class="g-13"><b>SPINNET, alicia.</b></a> chaser. b. 1979. chels.
</canonbranch>

</div>


<!-- SPROUT -->
<div class="webpage--tab" data-tab="#sprout">

<p>Halfblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b><s>SPROUT, nicodemus.</s></b> potion master. d. 1970. <br>
m. <b><s>DARLING, honesty.</s></b> herptologist. d. 1960. <br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
  <a href="?showuser=37" class="g-8"><b>SPROUT, pomona.</b></a> professor. head of hufflepuff. b. 1940. bells.<br>
  m. <a href="?showuser=20" class="g-8"><b>POMFREY, poppy.</b></a> hogwarts head healer. b. 1935. bea.<br>
  <b>SROUT, cadmus.</b> apothecary owner. b. 1950.
</canonbranch>
</div>


<!-- STEBBINS -->
<div class="webpage--tab" data-tab="#stebbins">

<p>Halfblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>STEBBINS, first.</b> occupation. b. year.<br>
m. <b>STEBBINS, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>STEBBINS, first.</b> occupation. b. 1978-79.<br>
</canonbranch>

</div>


<!-- STIMPSON -->
<div class="webpage--tab" data-tab="#stimpson">

<p>Muggleborn. additional family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>STIMPSON, first.</b> d. 1998.<br>
m. <b>STIMPSON, first.</b> d. 1997.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>STIMPSON, patricia.</b> occupation. b. 1977-78.<br>
</canonbranch>

</div>


<!-- SUMMERBY -->
<div class="webpage--tab" data-tab="#summerby">

<p>Halfblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>SUMMERBY, first.</b> occupation. b. year.<br>
m. <b>SUMMERBY, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch> 
    <b>SUMMERBY, first.</b> occupation. b. 1978-79.<br>
</canonbranch>

</div>


<!-- SUMMERS -->
<div class="webpage--tab" data-tab="#summers">

<p>Halfblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>SUMMERS, first.</b> occupation. b. year.<br>
m. <b>SUMMERS, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>SUMMERS, first.</b> occupation. b. 1978-79.<br>
</canonbranch>

</div>


<!-- THOMAS -->
<div class="webpage--tab" data-tab="#thomas">

<p>Halfblood. Black. Adrian left Marie and Dean when Dean was two months old and was killed by Death Eaters. Marie later married Daniel, who raised Dean as his own son.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>GALLAGHER, marie.</b> nurse. b. 1958.<br>
m. <b><s>FOLKE, adrian.</s></b> d. 1979.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=6" class="g-11"><b>THOMAS, dean.</b></a> cartoonist. b. 1979. bea.<br>
</canonbranch>
m. <b>THOMAS, daniel.</b> b. 1956.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>THOMAS, louise.</b> occupation. b. 1982.<br>
    <b>THOMAS, juliet.</b> occupation. b. 1983.<br>
    <b>THOMAS, sophie.</b> occupation. b. 1985.<br>
    <b>THOMAS, charlotte.</b> occupation. b. 1986.<br>
</canonbranch>

</div>


<!-- THRUSTON -->
<div class="webpage--tab" data-tab="#thruston">

<p>Halfblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>THRUSTON, first.</b> occupation. b. year.<br>
m. <b>THRUSTON, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>THRUSTON, orsino.</b> weird sisters drummer. b. 1976.<br>
</canonbranch>

</div>


<!-- TONKS -->
<div class="webpage--tab" data-tab="#tonks">

<p>Muggleborn. Edward was killed by snatchers in March 1998. Nymphadora died at the Battle of Hogwarts in May 1998. Andromeda has been raising her grandson Teddy since. Nymphadora has recently returned.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<a href="?showuser=254" class="g-17"><b>TONKS, ted.</b></a> healer. b. 1953. d. 1998. r. 2003. bea.<br>
m. <a href="?showuser=21" class="g-6"><b>BLACK, andromeda.</b></a> ministry work, head of the hogwarts board of governors. b. 1953. bells.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=28" class="g-17"><b>TONKS, nymphadora.</b></a> auror. b. 1972-73. d. 1998. r. 2003. amy. <br>
</canonbranch>

</div>


<!-- TOWLER -->
<div class="webpage--tab" data-tab="#towler">

<p>Halfblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>TOWLER, first.</b> occupation. b. year.<br>
m. <b>TOWLER, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>TOWLER, kenneth.</b> occupation. b. 1977-78.<br>
</canonbranch>

</div>


<!-- TRAVERS-->
<div class="webpage--tab" data-tab="#travers">

<p>Pureblood. English. Willard is in Azkaban for the crime of murdering Miles.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>TRAVERS, percival.</b> occupation. b. year.<br>
m. <b>LUMIERE, lucille.</b> socialite. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>TRAVERS, willard.</b> incarcerated. b. year.<br>
    <b>TRAVERS, miles.</b> d. 1998. <br>
    <a href="?showuser=498" class="g-13"><b>TRAVERS, piper</b></a>. Chaser. b. 1979. roe.<br>
    <b>TRAVERS, atticus.</b> occupation. b. year. <br>
    <a href="?showuser=759" class="healers g-15"><b>TRAVERS, edward.</b></a> trainee healer. b. 1985. chels.<br>
    <a href="?showuser=461" class="g-12"><b>TRAVERS, august</b></a> auror-in-training. b. 1986. roe.<br>
    <b>TRAVERS, abigail.</b> student. b. 1990. <br>
    <b>TRAVERS, melanie.</b> student. b. 1990. <br>
    <b>TRAVERS, chester.</b> student. b. 1993. <br>
    <b>TRAVERS, celia.</b> b. year. <br>
</canonbranch>

</div>


<!-- TREMLETT -->
<div class="webpage--tab" data-tab="#tremlett">

<p>Muggleborn. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>TREMLETT, first.</b> occupation. b. year.<br>
m. <b>TREMLETT, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>TREMLETT, donoghan.</b> weird sisters bassist. b. 1972.<br>
</canonbranch>

</div>


<!-- TRELAWNEY -->
<div class="webpage--tab" data-tab="#trelawney">

<p>Halfblood. Sybil has the gift of the Sight. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>TRELAWNEY, first.</b> occupation. b. year.<br>
m. <b>TRELAWNEY, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
  <b>TRELAWNEY, sybil.</b> occupation. b. 1957-58.<br>
  <a href="?showuser=810" class="g-18"><b>TRELAWNEY, dorian.</b></a> radio host. b. 1965. roe.<br>
</canonbranch>

</div>


<!-- TURPIN -->
<div class="webpage--tab" data-tab="#turpin">

<p>Halfblood. English. Honoria was disowned for marrying Robert Turpin, a muggle. Lisa, Sven, Thaddeus, and Thomas are in a polyamourous relationship and collectively raising their daughter Violet.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>TURPIN, robert.</b> coroner. b. year.<br>
m. <b>YAXLEY, honoria.</b> retired auror. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>TURPIN, robert jr.</b> ministry worker. b. 1973.<br>
    <a href="?showuser=42" class="g-11"><b>TURPIN, lisa.</b></a> Crime reporter for the daily prophet. b. 1979. bells.<br>
    w/ <b>SØRENSON, sven.</b> quiddith reporter for the prophet. b. 1977.<br>
    w/ <a href="?showuser=119" class="g-12"><b>POPE, thaddeus.</b></a> department of mysteries. b. 1978. bea.<br>
    w/ <b>FAWLEY, thomas.</b> stay-at-home dad. b. 1974.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <b>TURPIN-FAWLEY-SØRENSON-POPE, violet.</b> b. 2001. npc.<br>
        <b>TURPIN-FAWLEY-SØRENSON-POPE, harper.</b> b. 2004.<br>
    </canonbranch>
</canonbranch>

</div>


<!-- UMBRIDGE -->
<div class="webpage--tab" data-tab="#umbridge">

<p>Pureblood. Dolores is serving a life sentence in Azkaban for crimes against muggleborns. Additional family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>UMBRIDGE, dolores.</b> occupation. b. 1948-49.<br>
<a href="?showuser=609" class="g-6 adults"><b>UMBRIDGE, mary.</b></a> secretary. b. 1969. bea.<br>

</div>


<!-- URQUART -->
<div class="webpage--tab" data-tab="#urquart">

<p>Pureblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>URQUART, hamish.</b> occupation. b. 1944.<br>
m. <b>URQUART, flòraidh.</b> occupation. b. 1945.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>URQUART, èibhlin.</b> occupation. b. 1969.<br>
    <b>URQUART, aoife.</b> occupation. b. 1972.<br>
    <a href="?showuser=608" class="g-6"><b>URQUART, eilidh.</b></a> astronomy professor. b. 1974. bea.<br>
    <b>URQUART, sorcha.</b> occupation. b. 1975.<br>
    <b>URQUART, lìosa.</b> occupation. b. 1978.<br>
</canonbranch>

<b>URQUART, john.</b> occupation. b. year.<br>
m. <b>URQUART, bridget.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=164" class="g-12"><b>URQUART, james.</b></a> junior undersecretary to the minister. b. 1982. bea.<br>
    <a href="?showuser=466" class="g-15"><b>URQUART, caitriona</b></a> medical examiner. b. 1984. roe.<br>
    <b>URQUART, robert.</b> occupation. b. year.<br>
    <b>URQUART, isla.</b> occupation. b. year.<br>
</canonbranch>

<b>URQUART, clara.</b>. occupation. b. year. <br>

<b>URQUART, finley.</b> occupation. b. year.<br>
m. <b>URQUART, deirdre.</b> magizoologist. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=863" class="g-6"><b>URQUART, thomas.</b></a> intern. b. 1983. lux.<br>
    <b>URQUART, nessa.</b> law school student. b. 1985.<br>
    <b>URQUART, quinn.</b> unemployed. b. 1988.<br>
</canonbranch>

</div>


<!-- VAISEY -->
<div class="webpage--tab" data-tab="#vaisey">

<p>Halfblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>VAISEY, first.</b> occupation. b. year.<br>
m. <b>VAISEY, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>VAISEY, first.</b> occupation. b. 1980-81.<br>
</canonbranch>

<b>VAISEY, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=598" class="g-6"><b>VAISEY, rosy.</b></a> engineer. b. 1985. chels.<br>
</canonbranch>

</div>


<!-- VANCE -->
<div class="webpage--tab" data-tab="#vance">

<p>Halfblood. Emmaline was killed by Death Eaters in July 1996. Additional family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>VANCE, david.</b> occupation. b. year.<br>
m. <b>VANCE, georgina.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>VANCE, emmaline.</b> occupation. d. 1996.<br>
    <a href="?showuser=1023" class="g-6"><b>VANCE, blair.</b></a> manager. b. 1970. chels.<br>
</canonbranch>

</div>


<!-- VANE -->
<div class="webpage--tab" data-tab="#vane">

<p>Halfblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>VANE, first.</b> retired. b. year.<br>
m. <b>VANE, marcy.</b> retired. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
  <b>VANE, faron.</b> retired. b. 1954-55.<br>
  m. <b>AMADOR, inês.</b> unemployed. b. 1958-59.<br>
  <button class="webpage--canon-expansion" onClick="expandCanons(this)">
      <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
      <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
  </button>
  <canonbranch>
      <a href="?showuser=1417" class="g-11"><b>VANE, romilda.</b></a> investigative journalist. b. 1982. kelsa.<br>
  </canonbranch>
</canonbranch>

</div>


<!-- VECTOR -->
<div class="webpage--tab" data-tab="#vector">

<p>English. Halfblood.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>VECTOR, septima.</b> arithmancy professor. b. 1942-43.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>VECTOR, samantha.</b> occupation. b. year.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <b>VECTOR, faith.</b> b. 2001.<br>
    </canonbranch>
</canonbranch>
<b>VECTOR, apollyon.</b> occupation. b. 1945-46.<br>
m. <b>WARRINGTON, cassiopeia.</b> occupation. b. 1950. <br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=364" class="g-6"><b>VECTOR, ianthe.</b></a> unemployed. b. 1972. bea.<br>
    <b>VECTOR, orpheus.</b> occupation. b. 1975. <br>
    <b>VECTOR, amphitrite.</b> occupation. b. 1979. 
</canonbranch>
<b>VECTOR, sebastien.</b> lawyer. b. year. <br>
m. <b>DANIELS, fiona.</b> artist. b. year. <br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=346" class="g-8"><b>VECTOR, tobias.</b></a> care of magical creatures professor. b. 1977. Bells.<br>
    m. <a href="?showuser=564" class="g-6"><b>VECTOR, ryan.</b></a> creatures breeder. b. 1975. bea. 
</canonbranch>

</div>


<!-- WAGTAIL -->
<div class="webpage--tab" data-tab="#wagtail">

<p>Halfblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>WAGTAIL, first.</b> occupation. b. year.<br>
m. <b>WAGTAIL, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>WAGTAIL, myron.</b> weird sisters singer. b. 1970.<br>
</canonbranch>

</div>


<!-- WARRINGTON -->
<div class="webpage--tab" data-tab="#warrington">

<p>Pureblood. English. Thomas, Henry and James are brothers.</p>

<p>Cecilia took over the family business after Alexander died. Clarissa had her daughters while at university but was forced to return home by her mother when Rebecca was a baby; she and the girls have had no contact with James since.</p>

<p>Marcus is serving a life sentence in Azkaban for crimes committed during the War. Cassius has just finished a three and a half year sentence. Pasiphaë, Acacallis, and Phraedra are all married and will also be listed with their husbands.</p>

<p>Henry and Eloise's three daughters are also listed with their spouse's families.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b><s>WARRINGTON, thomas.</s></b> b. 1918. d. 1988. <br>
m. <b><s>WARRINGTON, clarissa.</s></b> b. 1920. d. 1980. <br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b><s>WARRINGTON, alexander.</s></b> b. 1941. d. 1965. <br>
    m. <b>GREENGRASS, cecilia</b>. warrington exports ceo. b. 1943. <br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <a href="?showuser=432" class="g-6"><b>WARRINGTON, clarissa.</b></a> financial manager. b. 1964. bea.<br>
        w/ <a href="?showuser=513" class="g-18"><b>WINTERS, james.</b></a> composer. b. 1962. roe.<br>
        <button class="webpage--canon-expansion" onClick="expandCanons(this)">
            <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
            <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
        </button>
        <canonbranch>
            <b>WARRINGTON, rosemarie.</b> occupation. b. 1984. <br>
            <a href="?showuser=706" class="g-6 adults"><b>WARRINGTON, alice.</b></a> student. b. 1984. bea.<br>
            <a href="?showuser=577" class="g-13"><b>WARRINGTON, julianne.</b></a> beater. b. 1985. roe.<br>
            <a href="?showuser=994" class="g-14"><b>WARRINGTON, rebecca.</b></a> student. b. 1988. lux.<br>
        </canonbranch>
    </canonbranch>

    <b>WARRINGTON, marcus.</b> occupation. b. 1945.<br>
    m. <b>MACNAIR, junia.</b> occupation. b. 1947.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <b>ROWLE, pasiphaë.</b> occupation. b. 1970-71.<br>
        <b>BLETCHLEY, acacallis.</b> housewife. b. 1973-74.<br>
        <a href="?showuser=1045" class="g-6"><b>BADDOCK, phaedra.</b></a> unemployed. b. 1975. bells.<br>
        <b>WARRINGTON, cassius.</b> occupation. b. 1977.<br>
        <a href="?showuser=3" class="g-6"><b>WARRINGTON, ariadne.</b></a> florist. b. 1977. bea.<br>
        <a href="?showuser=753" class="g-12"><b>WARRINGTON, ariana.</b></a> housing officer. b. 1981. chels.<br><br>
        <a href="?showuser=533" class="g-11"><b>WARRINGTON, semele.</b></a> journalist. b. 1984. roe.<br>
        <b>WARRINGTON, persa.</b> student. b. 1986-87.<br>
    </canonbranch>

    <b>WARRINGTON, julius.</b> occupation. b. 1947.<br>
    m/ <b>SELWYN, lucille.</b> occupation. b. 1949.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <a href="?showuser=565" class="g-12"><b>WARRINGTON, apollo.</b></a> hit wizard in training. b. 1985. bea.<br>
        <b>WARRINGTON, artemis.</b> occupation. b. 1985.<br>
    </canonbranch>
</canonbranch>

<b>WARRINGTON, henry.</b> occupation. b. 1923. <br>
m. <b>WARRINGTON, eloise.</b> occupation. b. 1925. <br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>VECTOR, cassiopeia.</b> occupation. b. 1950. <br>
    <a href="?showuser=699" class="g-6"><b>KIRKE, nellie.</b></a> fundraiser. b. 1951. bea.<br>
    <b>FUDGE, arabella.</b> occupation. b. 1955. <br>
</canonbranch>

<b><s>WARRINGTON, james.</s></b> b. 1925. d. 2000. <br>
m. <b>WARRINGTON, beatrice.</b> occupation. b. 1928. <br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
  <b>WARRINGTON, ulysses.</b> occupation. b. 1948. <br>
  m. <b><s>WARRINGTON, isolde.</s></b> b. 1950. d. 1975. <br>
  <button class="webpage--canon-expansion" onClick="expandCanons(this)">
      <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
      <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
  </button>
  <canonbranch>
    <a href="?showuser=1096" class="g-17"><b>WARRINGTON, alaric.</b></a> unemployed. b. 1975. d. 1996. r. 2005. bea.<br>
  </canonbranch>
  w/ <b>LAST, first.</b> occupation. b. year. <br>
  <button class="webpage--canon-expansion" onClick="expandCanons(this)">
      <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
      <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
  </button>
  <canonbranch>
    <b>BEVAN, vanora.</b> occupation. b. year. <br>
  </canonbranch>
  <b>WARRINGTON, serena.</b> occupation. b. 1952. <br>
  <b>WARRINGTON, olympia.</b> occupation. b. 1955. <br>
  <b>WARRINGTON, isadora.</b> occupation. b. 1958. <br>
  <b>WARRINGTON, angeline.</b> occupation. b. 1960. <br>
</div>


<!-- WEASLEY -->
<div class="webpage--tab" data-tab="#weasley">

<p>Pureblood. English. Fred died in the Battle of Hogwarts but is available for play as a returner. Tertius and Helen divorced shortly after Lysander was born. Renée died when her children were young. Bonnie is the result of a brief affair with a muggle woman and came to live with her father when she was four. Tertius had an affair with Daisy Midgeon resulting in October; her paternity is not public knowledge.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>WEASLEY, septimus.</b> occupation. b. year.<br>
m. <a href="?showuser=131" class="g-6"><b>BLACK, cedrella.</b></a> housewife. b. 1919. bea.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>WEASLEY, arthur.</b> misuse of magical artefacts office. b. 1950.<br>
    m. <a href="?showuser=333" class="g-6"><b>PREWETT, molly.</b></a> unemployed. b. 1949 . bells.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <b>WEASLEY, william.</b> cursebreaker. b. 1970.<br>
        m. <a href="?showuser=396" class="g-6"><b>DELACOUR, fleur.</b></a> cursebreaker. b. 1977. chels.<br>
        <button class="webpage--canon-expansion" onClick="expandCanons(this)">
            <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
            <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
        </button>
        <canonbranch>
          <b>WEASLEY, victoire.</b> b. 2000. npc.<br>
    <b>WEASLEY, manon.</b> b. 2005. npc. <br>
        </canonbranch>
        <a href="?showuser=4" class="g-8"><b>WEASLEY, charlie.</b></a> care of magical creatures professor. gryffindor head of house. b. 1972. bea.<br>
        <a href="?showuser=482" class="g-12"><b>WEASLEY, percy.</b></a> policy officer. b. 1976. lux.<br>
        <b><s>WEASLEY, frederick.</s></b> d. 1998.<br>
        <b>WEASLEY, george.</b> co-manager. b. 1978. <br>
        <a href="?showuser=462" class="g-6"><b>WEASLEY, ron</b></a> weasleys' wizard wheezes. b. 1980. roe.<br>
        <a href="?showuser=25" class="g-13"><b>WEASLEY, ginevra.</b></a> professional quidditch player. b. 1981. amy.<br>
    </canonbranch>

    <b><s>WEASLEY, bilius.</s></b> b. year. d. year.<br>

    <b>WEASLEY, tertius.</b> occupation. b. year.<br>
    m. <b>AITCHISON, helen.</b> occupation. b. year.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <a href="?showuser=542" class="g-6"><b>WEASLEY, cordelia.</b></a> babysitter. b. 1979. roe.<br>
        <b>WEASLEY, lysander.</b> occupation. b. 1979.<br>
    </canonbranch>
    m. <b><s>WEASLEY, renée.</s></b> occupation. b. year. d. year.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <b>WEASLEY, richard.</b> occupation. b. 1983.<br>
        <b>WEASLEY, lewis.</b> occupation. b. 1984.<br>
    </canonbranch>
    w/ <b>UNKNOWN.</b><br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <a href="?showuser=144" class="g-7"><b>WEASLEY, bonnie.</b></a> student. b. 1988. amy.<br>
    </canonbranch>
</canonbranch>

</div>


<!-- WHITBY -->
<div class="webpage--tab" data-tab="#whitby">

<p>Halfblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>WHITBY, first.</b> occupation. b. year.<br>
m. <b>WHITBY, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>WHITBY, kevin.</b> occupation. b. 1982-83.<br>
</canonbranch>

</div>


<!-- WOOD -->
<div class="webpage--tab" data-tab="#wood">

<p>Halfblood. Scottish. Indian. Devanshi and his muggle wife Ananya immigrated to Scotland from India in the 1940s. Arnab, Jesminder, and Mohnish all married wixen from other Indian families, whilst Sharmila married a white man. Kamala had an ongoing relationship with Indian quidditch player, Rajendra, that led to their four children, but they never married.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>WOOD, devanshi.</b> restaurant owner. b. 1926.<br>
m. <b>WOOD, ananya.</b> restuarant owner. b. 1928.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>WOOD, kamala.</b> occupation. b. 1953.<br>
    w/ <b>SRIVASTVA, rajendra.</b> occupation. b. 1949.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <b>WOOD, indira.</b> occupation. b. 1973.<br>
        <a href="?showuser=48" class="g-6"><b>WOOD, oliver.</b></a> racing broom maker. b. 1976. bea.<br>
        <b>WOOD, aditi.</b> occupation. b. 1978.<br>
        <b>WOOD, rani.</b> occupation. b. 1982.<br>
    </canonbranch>

    <b>WOOD, arnab.</b> occupation. b. 1954.<br>
    m. <b>WOOD, neelam.</b> occupation. b. 1956.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <b>WOOD, priya.</b> occupation. b. 1977.<br>
        <b>WOOD, suraj.</b> occupation. b. 1979.<br>
    </canonbranch>

    <b>WOOD, jesminder.</b> occupation. b. 1957.<br>
    m. <b>CHOWDHURY, madhavan.</b> occupation. b. 1954.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <b>CHOWDHURY, jaidev.</b> occupation. b. 1978.<br>
        <b>CHOWDHURY, nisha.</b> occupation. b. 1981.<br>
        <b>CHOWDHURY, rahul.</b> occupation. b. 1984.<br>
    </canonbranch>

    <b>WOOD, mohnish.</b> occupation. b. 1959.<br>
    m. <b>WOOD, aadrika.</b> b. 1960.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <b>WOOD, sania.</b> occupation. b. 1982.<br>
        <b>WOOD, arindam.</b> occupation. b. 1984.<br>
        <b>WOOD, tanvi.</b> student. b. 1987.<br>
    </canonbranch>

    <b>WOOD, sharmila.</b> occupation. b. 1962.<br>
    m. <b>BOLTON, alexander.</b> occupation. b. 1957.<br>
    <button class="webpage--canon-expansion" onClick="expandCanons(this)">
        <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
        <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
    </button>
    <canonbranch>
        <b>BOLTON, sarada.</b> occupation. b. 1984.<br>
        <a href="?showuser=541" class="g-13"><b>BOLTON, eshana.</b></a> student. b. 1987. roe.<br> 
    </canonbranch>
</canonbranch>

</div>


<!-- YAXLEY -->
<div class="webpage--tab" data-tab="#yaxley">

<p>Pureblood. English. Corban was killed in the Battle of Hogwarts. Marcella died when Isabella was thirteen.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b><s>YAXLEY, corban.</s></b> d. 1998.<br>
m. <b><s>WARRINGTON, marcella.</s></b> d. 1991.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=47" class="g-6"><b>YAXLEY, isabella.</b></a> genealogist. b. 1978. bells.<br>
</canonbranch>

</div>


<!-- ZABINI -->
<div class="webpage--tab" data-tab="#zabini">

<p>Pureblood. Black. Blaise's mother has a reputation as a black widow and has had six other husbands.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>ZABINI, vittorio.</b> occupation. b. year.<br>
m. <b>MELIFLUA, lillian.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>ZABINI, florence.</b> occupation. b. 1980.<br>
    <b>ZABINI, margot.</b> occupation. b. 1983.<br>
    <a href="?showuser=685" class="g-6"><b>ZABINI, hugo.</b></a> university student. b. 1985. bea.<br>
    <b>ZABINI, ingrid.</b> occupation. b. 1986.<br>
    <b>ZABINI, eloise.</b> occupation. b. 1987.<br>
</canonbranch>

<b><s>ZABINI, first.</s></b> occupation. b. year.<br>
m. <b>ZABINI, first.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <a href="?showuser=397" class="g-6"><b>ZABINI, blaise.</b></a> broker and owner. b. 1979. bells.<br>
</canonbranch>

<b><s>ZABINI, enzo.</s></b> occupation. b. year.<br>
m. <b>ZABINI, loretta.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
  <a href="?showuser=752" class="ministry g-12"><b>ZABINI, ajax.</b></a> diplomat. b. 1978. chels.<br>
</canonbranch>

</div>


<!-- ZELLER -->
<div class="webpage--tab" data-tab="#zeller">

<p>Halfblood. Family up to player.</p>


<button class="webpage--canon-collapse-all" onClick="collapseAllCanons(this)">
    Collapse All Branches <i class="fa-solid fa-minus"></i>
</button>
<button class="webpage--canon-expand-all" onClick="expandAllCanons(this)">
    Expand All Branches <i class="fa-solid fa-plus"></i>
</button>

<hr>

<b>ZELLER, FRANK.</b> occupation. b. year.<br>
m. <b>RODRIGUEZ, ariana.</b> occupation. b. year.<br>
<button class="webpage--canon-expansion" onClick="expandCanons(this)">
    <span class="webpage--canon-collapse">Collapse Branch<i class="fa-solid fa-minus"></i></span>
    <span class="webpage--canon-expand">Expand Branch<i class="fa-solid fa-plus"></i></span>
</button>
<canonbranch>
    <b>ZELLER, delia.</b> healer. b. year.<br>
    <b>ZELLER, leona.</b> ministry lawyer. b. year.<br>
    <b>ZELLER, rose.</b> trainee midwitch. b. 1983-84.<br>
    <a href="?showuser=508" class="g-6"><b>ZELLER, eudora.</b></a> unemployed. b. 1987. roe.<br>
</canonbranch>

</div>
`;

document.querySelector('#canons').insertAdjacentHTML('beforeend', canons);
document.querySelector('#canons .webpage--sub-menu-links').insertAdjacentHTML('beforeend', canonLinks);