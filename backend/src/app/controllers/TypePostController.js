const TypePost = require("../models/TypePost");

module.exports = {
  async index(req, res) {
    const types = await TypePost.find();

    return res.json(types);
  },
  async store(req, res) {
    const type = await TypePost.create(req.body);

    return res.json(type);
  },
  async destroy(req, res) {
    const { id } = req.params;

    await TypePost.findByIdAndDelete(id);

    return res.send();
  }
};
