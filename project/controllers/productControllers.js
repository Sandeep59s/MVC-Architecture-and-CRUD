const productModel = require("../models/productModel")

async function createProduct(req, res) {
  const product = new productModel({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    category: req.body.category,
  });
  await product.save();
  res.send(product);
}
async function getAllProduct(req, res) {
  let products = await productModel.find();
  res.send(products);
}
async function getSpecificProduct(req, res) {
  let products = await productModel.findById(req.params.id);
  res.send(products);
}
async function updateProduct(req, res) {
  const updatedProduct = await productModel.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
  });
  res.send(updatedProduct);
}
async function deleteProduct(req, res) {
  const deleteProduct = await productModel.findByIdAndDelete(req.params.id);
  res.send(deleteProduct);
}

module.exports = {
  createProduct,
  getAllProduct,
  getSpecificProduct,
  updateProduct,
  deleteProduct,
};
