const {header, footer} = require('./bookends.js');


function createPage(content, loggedIn=false) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Document</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css">
<link rel= "stylesheet" href="/stylesheets/styles.css">
</head>
<body>
${header()}
${content}
${footer()}
<script src="scripts/frontend.js"></script>
</body>
</html>
  `;
}

module.exports = createPage;
