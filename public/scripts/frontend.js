function populatePlayersOnTeampage() {
  const roster = document.querySelector('[data-roster]');
  // const players = // Array of players, mapped to get player and pos.
  let addedRows = '<tr><td>';
  // then add to addedRows

  addedRows += '</td></tr>'
  roster.appendChild(addedRows);

}

function populatePlayersOnProfile() {
  const roster = document.querySelector('[data-roster]');
  // const players = // Array of players, mapped to get player and pos, health, lineup, current/projected points
  let addedRows = '<tr><td>'
  // then add to addedRows
  addedRows += 'Tom Brady</td><td>QB</td><td>Good</td><td>Starting</td><td>23.5'

  addedRows += '</td></tr>'
  roster.appendChild(addedRows);

}

function populateRankings() {
  const rankings = document.querySelector('[data-rankings]');
  // const topTeams = //Array of top league teams, name only
  let addedRows = '<p>1. <span>Dream Team</span></p>' // uses <p> and <span>
  // then iterate on addedRows
  rankings.appendChild(addedRows);
}

function viewLogo() {
  const logo = document.querySelector('[data-logo]');
  // const logoURL = //retrieve that users URL from instance
  logo.appendChild(`<p>${logoURL}</p>`);
}

function personalizeHeader() {
  const league = document.querySelector('[data-league-name]');
  const match = document.querySelector('[data-upcoming-match]');

  // const leagueText = // league name from User class
  // const matchText = // next match from API

  league.textContent = leagueText;
  match.textContent = matchText;

}
