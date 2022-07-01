const express = require("express");
const { set } = require("../app");
const router = express.Router();
const Store = require("../models/Store");

router.get("/", async (req, res, next) => {
  try {
    const products = Store.getProducts();
    res.status(200).json({ products });
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

router.get("/purchases", (req, res) => {
  if (req.query.email) {
    const purchase = Store.getProductByEmail(req.query.email);
    res.status(200).json({ purchase });
  } else {
    const purchase = Store.getPurchases();
    res.status(200).json({ purchase });
  }
});

router.get("/purchases/:purchaseId", (req, res) => {
  if (!res.status(200)) [console.log("nope")];
  const purchaseId = req.params.purchaseId;
  const purchase = Store.getProductById(purchaseId);
  set.status(200).json({ purchase });
});

router.post("/", async (req, res) => {
  if (!req.body) {
    console.log("Missing body");
  }
  if (!req.body.shoppingCart) {
    console.log("Missing shopping cart");
  }
  if (!req.body.user) {
    console.log("Missing user");
  }
  const checkoutForm = req.body;
  const purchase = Store.checkout(checkoutForm);
  //   res.status(201).json({ purchase });
  res.status(201).send(req.body);
});

module.exports = router;
