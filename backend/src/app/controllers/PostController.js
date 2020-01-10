const Post = require("../models/Post");

module.exports = {
  async index(req, res) {
    const posts = await Post.paginate(
      { author: req.userId },
      {
        page: req.query.page || 1,
        limit: 5,
        populate: ["type"],
        sort: "-createdAt"
      }
    );

    return res.json(posts);
  },
  async store(req, res) {
    const post = await Post.create({ ...req.body, author: req.userId });

    return res.json(post);
  },
  async show(req, res) {
    const { id } = req.params;

    const post = await Post.findById(id).populate("type");

    return res.json(post);
  },
  async update(req, res) {
    const { id } = req.params;

    const post = await Post.findByIdAndUpdate(id, req.body, {
      new: true
    });

    return res.json(post);
  },
  async destroy(req, res) {
    const { id } = req.params;

    await Post.findByIdAndDelete(id);

    return res.send();
  }
};
