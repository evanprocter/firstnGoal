function showRoster() {
  return `
  <div class="Roster"
  <p>Roster</p>
  </div>
  <div class="roster-div">
    <table>
      <tr>
        <th>Name</th>
        <th>Pos.</th>
        <th>Stats</th>
      </tr>
      <!-- Generate table rows with actual information here -->
    </table>
  </div>
  `
}

module.exports = showRoster;
