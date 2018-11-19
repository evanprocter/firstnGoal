function loginForm() {
  return `
  <div class="login-div">
    <form action="/login" method="post">
      <label>
        Username:
        <input type="text" name="username">
        <br>
      </label>
      <label>
        Password:
        <input type="text" name="password">
        <br>
        <input type="submit" value="Let's Go!">
      </label>
    </form>
    <a href="./register">Sign Up</a>
  </div>
  `
}

module.exports = loginForm;
