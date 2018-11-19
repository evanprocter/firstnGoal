function newBlog() {
  return `
  <div class="new-post">
    <form action="/blog-post">
      <input type="text" class="post-title" placeholder="Your next blog title" required>
      <input type="text" class="post-blog" placeholder="Lorem Ipsum whatever...">
      <input type="submit" value="Post It!">
    </form>
  </div>
  `
}

module.exports = newBlog;
