const Post = require("../models/Post");

module.exports = {
  async index(req, res) {
    const posts = await Post.find({ author: req.userId }).populate("type");

    const documents = posts.filter(post => post.type.title === "Documentos");
    const tutorials = posts.filter(post => post.type.title === "Tutoriais");
    const meeting = posts.filter(post => post.type.title === "Reuniões");
    const pages = posts.filter(post => post.type.title === "Páginas");

    return res.json({
      documents: documents.length,
      tutorials: tutorials.length,
      meeting: meeting.length,
      pages: pages.length
    });
  }
};
