//const productModel = require("../models/productModel");
const express = require("express");
const {
  getAllProduct,
  getSpecificProduct,
  updateProduct,
  createProduct,
  deleteProduct,
} = require("../controllers/productControllers");

const router = express.Router();

// add  a product
router.post("/" , createProduct);

//get all products

router.get("/", getAllProduct);

//get specific products
router.get("/:id", getSpecificProduct);

// update product

router.put("/:id", updateProduct);

// delete product

router.delete("/:id", deleteProduct);

module.exports = router;
