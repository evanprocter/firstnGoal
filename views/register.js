function register() {
  return `
  <div class="register-page">
    <form action="/register" method="post">
      <label>
        Username:
        <input type="text" name="username" required>
        <br>
      </label>
      <label>
        Password:
        <input type="text" name="password" required>
        <br>
      </label>
      <label>
         Logo Url (optional):
        <input type="text" name="logo">
        <br>
      </label>
      <input type="submit" value="Create My Team">
    </form>
    <a href="./login">I already have an account</a>
  </div>
  `
}

module.exports = register;
