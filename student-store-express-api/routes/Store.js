const express = require("express");
const router = express.Router();
const Store = require("../models/Store");

router.get("/", async (req, res, next) => {
  try {
    const result = Store.getProducts();
    res.status(200).json({ result });
  } catch (err) {
    console.log("oops");
  }
});

router.get("/:productId", async (req, res, next) => {
  try {
    const prodId = req.params.productId;
    const result = Store.getProductById(prodId);
    res.status(200).json({ result });
  } catch (err) {
    console.log("oops");
  }
});

module.exports = router;
