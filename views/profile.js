function profile() {
  return `
  <div class="top-posts-from-league">
    <p>Top Posts:</p>
    <div class="top-single-post"></div>
    <div class="top-single-post"></div>
    <div class="top-single-post"></div>
    <div class="top-single-post"></div>
    <div class="top-single-post"></div>
  </div>
  <div class="team-info">
    <p>Your team</p>
    <table>
      <tr>
        <th>Pos.</th>
        <th>Player</th>
        <th>Health</th>
        <th>Lineup Pos.</th>
        <th>Projected Points</th>
        <th>Current Points</th>
      </tr>
      <!-- Other table rows here -->
    </table>
  </div>
  <div class="rankings">
    <h3>Current Standings:</h3>
    <!-- <p>1. <span>Dream Team</span></p>     -->
  </div>
  <div class="personal-blog">
    <div class="link-to-personal-post"></div>
    <div class="link-to-personal-post"></div>
    <div class="link-to-personal-post"></div>
    <div class="link-to-personal-post"></div>
    <div class="link-to-personal-post"></div>
    <a href="">Show More</a>
  </div>
  `
}

module.exports = profile;
