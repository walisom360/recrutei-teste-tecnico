const User = require("../models/User");

module.exports = {
  async index(req, res) {
    const user = await User.findById({ _id: req.userId });

    return res.json(user);
  },

  async store(req, res) {
    const { email } = req.body;
    console.log(email);

    const exists = await User.findOne({ email });

    if (exists) {
      res.status(400).json({ error: "users exists" });
    }

    const user = await User.create(req.body);

    return res.json(user);
  },
  async show(req, res) {
    const { id } = req.params;

    const user = await User.findById(id);

    return res.json(user);
  },
  async update(req, res) {
    const { id } = req.params;

    const user = await User.findByIdAndUpdate(id, req.body, {
      new: true
    });

    return res.json(user);
  },
  async destroy(req, res) {
    const { id } = req.params;

    await User.findByIdAndDelete(id);

    return res.send();
  }
};
