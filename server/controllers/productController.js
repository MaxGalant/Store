const { Product, Comment, Size } = require("../models/models");
class ProductController {
  async createProduct(req, res) {
    const { info } = req.body;
    const { imageUrl, productName, count, weight, width, height } = info;

    try {
      console.log(count);
      const product = await Product.create({
        imageUrl: imageUrl,
        name: productName,
        count: count,
        weight: weight,
      });
      const size = await Size.create({
        productId: product.id,
        width: width,
        height: height,
      });
      return res.status(200).send({ product: product.id, size });
    } catch (e) {
      console.log(e);
    }
  }
  async getProduct(req, res) {
    try {
      const { sortBy = "id", sortOrder = "asc" } = req.query;
      console.log(req.query);
      const order = [[sortBy, sortOrder]];
      const product = await Product.findAll({
        order,
        include: [{ model: Comment }, { model: Size }],
      });
      res.json(product);
    } catch (e) {
      console.log(e);
    }
  }
  async getOneProduct(req, res) {
    try {
      const { id } = req.params;
      console.log(id);
      const product = await Product.findOne({
        where: { id },
        include: [{ model: Comment }, { model: Size }],
      });
      if (product === null) {
        return res.send({ message: "did not find product" });
      }
      return res.json(product);
    } catch (e) {
      console.log(e);
    }
  }
  async deleteProduct(req, res) {
    try {
      const { id } = req.params;
    } catch (e) {
      console.log(e);
    }
  }
}
module.exports = new ProductController();
