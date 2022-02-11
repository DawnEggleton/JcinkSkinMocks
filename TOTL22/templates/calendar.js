const calendar = `
<b class="calendar-month">February 2006</b>

<!-- days -->
<span class="calendar-day cal-day">S</span>
<span class="calendar-day cal-day">M</span>
<span class="calendar-day cal-day">T</span>
<span class="calendar-day cal-day">W</span>
<span class="calendar-day cal-day">T</span>
<span class="calendar-day cal-day">F</span>
<span class="calendar-day cal-day">S</span>
  
<!-- starting empty days -->
<span></span>
<span></span>
<span></span>

<!-- actual days -->
<span>1</span>
<span>2</span>
<span class="event" title="Quidditch Championship R15">3</span>
<span class="event" title="Hufflepuff vs Ravenclaw, Quidditch Championship R15">4</span>
<span class="event" title="Quidditch Championship R15">5</span>
<span>6</span>
<span>7</span>
<span>8</span>
<span>9</span>
<span class="event" title="Quidditch Championship R16">10</span>
<span class="event" title="Hufflepuff vs Slytherin, Quidditch Championship R16">11</span>
<span class="event" title="Quidditch Championship R16">12</span>
<span class="event" title="Full Moon">13</span>
<span>14</span>
<span>15</span>
<span>16</span>
<span class="event" title="Hogsmeade Millenium, Quidditch Championship R17, IF1 Test One">17</span>
<span class="event" title="Hogsmeade Millenium, Hogsmeade weekend, Quidditch Championship R17, IF1 Test One">18</span>
<span class="event" title="Hogsmeade Millenium, Quidditch Championship R17, IF1 Test One">19</span>
<span>20</span>
<span>21</span>
<span>22</span>
<span>23</span>
<span class="event" title="Quidditch Championship R18, IF1 Test Two">24</span>
<span class="event" title="Quidditch Championship R18, IF1 Test Two">25</span>
<span class="event" title="Quidditch Championship R18, IF1 Test Two">26</span>
<span>27</span>
<span>28</span>
`;

document.querySelector('.header--calendar').innerHTML = calendar;