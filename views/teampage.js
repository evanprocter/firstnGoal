function showRoster() {
  return `
  <h1>Roster</h1>
  <div class="roster-div">
    <table data-roster>
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
