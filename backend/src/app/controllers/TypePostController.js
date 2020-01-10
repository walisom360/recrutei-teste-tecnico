const TypePost = require("../models/TypePost");

module.exports = {
  async index(req, res) {
    const types = await TypePost.find();

    if (types.length === 0) {
      const type1 = TypePost.create({ title: "Documentos" });
      const type2 = TypePost.create({ title: "Tutoriais" });
      const type3 = TypePost.create({ title: "Reuniões" });
      const type4 = TypePost.create({ title: "Páginas" });

      Promise.all([type1, type2, type3, type4]).then(function(values) {
        return res.json(values);
      });
    }
    if (types.length > 0) {
      return res.json(types);
    }
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
