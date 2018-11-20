function newBlog(id) {
  return `
  <div class="new-post">
    <form action="/blog/new/${id}" method="POST">
      <input type="text" class="post-title" name="blogTitle" placeholder="Your next blog title" required>
      <input type="text" class="post-blog" name="blogBody" placeholder="Lorem Ipsum whatever...">
      <input type="submit" value="Post It!">
    </form>
  </div>
  `
}

module.exports = newBlog;
