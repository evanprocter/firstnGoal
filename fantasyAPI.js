// const espnFF = require('espn-ff-api');
// const env = require('dotenv').config(); 
// const importantVariables = require('./config')();


// // console.log(config);
// // console.log(im.SWID);

// const cookies = {
//     espnS2: importantVariables.espnS2,
//     SWID: importantVariables.SWID,
// };


// espnFF.getBoxScore(cookies, importantVariables.league_id, 1, 10)
//       .then(leagueInfo => {
//         console.log(leagueInfo.boxscore.progames);
//       });

// espnFF.getSingleTeamPlayers(cookies, importantVariables.league_id, 1, 10)
//       .then(leagueInfo => {
//         console.log(leagueInfo);
//       });

// espnFF.getLeagueScoreboard(cookies, importantVariables.league_id)
//       .then(leagueInfo => {
//         console.log(leagueInfo);
//       });
 
 
// espnFF.getLeagueStandings('', importantVariables.league_id)
//     .then(standings => {
//         console.log(standings);
//     });