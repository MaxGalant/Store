const { Product, Comment, Size } = require("../models/models");

class CommentsController {
  async createComments(req, res) {
    const { value } = req.body;
    try {
      const { id, description } = value;
      const comment = Comment.create({
        productId: id,
        description: description,
        date: new Date(),
      });
      return res.status(200).send(comment);
    } catch (e) {
      console.log(e);
    }
  }
  async deleteOneComment(req, res) {
    const { id, productId } = req.params;
    console.log(req.params);
  }
}
module.exports = new CommentsController();
