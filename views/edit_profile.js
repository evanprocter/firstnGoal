function editProfile() {
  return `
  <div class="edit-page">
    <form action="/edit" method="post">
      <label>
        Current Username:
        <input type="text" name="username">
        <br>
      </label>
      <label>
        New Username:
        <input type="text" name="new-username">
        <br>
        <input type="submit" value="Let's Go!">
      </label>
    </form>
    <a href="./profile">Go Back</a>
  </div>
  `
}

module.exports = editProfile;
