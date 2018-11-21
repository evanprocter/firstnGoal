function header() {
  return `
  <header>
    <div class="logo-div" data-logo></div> <!-- Append logo here if they have one -->
    <div class="information-text">
      <p>FirstN'Goal</p>
      <p data-league-name></p> <!-- League name here -->
    </div>
    <div class="upcoming-match">
      <p>Upcoming</p>
      <p data-upcoming-match></p> <!-- Generate next match here -->
    </div>
  </header>
  `
}



function footer() {
  return `
  <footer>
     <div class="team-name">
       <p>&copy 2018 Digital Crafts</p>
     </div>
     <div class="individual-links">
       <div class="april-link links">
        <p><span class="name">April Copes</span>
         <a href="https://github.com/antdevelopment1"><i class="fab fa-github"></i></a>
         <a href="https://www.linkedin.com/in/april-copes"><i class="fab fa-linkedin"></i></a>
       </div>
       <div class="alex-links links">
         <p><span class="name">Alex Rogers</span>
         <a href="https://github.com/alexrogers823"><i class="fab fa-github"></i></a>
         <a href="https://www.linkedin.com/in/alexrogers823"><i class="fab fa-linkedin"></i></a>
       </div>
       <div class="evan-links links">
         <p><span class="name">Evan Procter</span>
         <a href="https://github.com/evanprocter"><i class="fab fa-github"></i></a>
         <a href="https://www.linkedin.com/in/evan-procter-419342165"><i class="fab fa-linkedin"></i></a></p>
       </div>
     </div>
  </footer>
  `
}

module.exports = {
  header,
  footer
}
