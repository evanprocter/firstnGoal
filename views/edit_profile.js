function editProfile(id) {
  return `
  <div class="edit-page">

    <form action='/edit/${id}' method="POST">
      <label>
        Current Username:
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
    <a href="/profile/${id}">Go Back</a>
  </div>
  `
}

module.exports = editProfile;
