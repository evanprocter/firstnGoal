function editProfile(id) {
  return `
<link rel= "stylesheet" href="stylesheets/styles.css">
  <div class="edit-page">
    <form action='/edit/${id}' method="post">
     <label>
        <p>Current Username:
        <input type="text" name="username">
        <br>
      </label>
      <label>
        New Username:
        <input type="text" name="new-username">
        <br>
        <input type="submit" value="Let's Go!"></p>
      </label>
    </form>
    <a href="./profile">Go Back</a>
  </div>
  `
}

module.exports = editProfile;
