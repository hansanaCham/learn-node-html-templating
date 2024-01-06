const express = require("express");
const path = require("path");
const Router = express.Router();
const adminData = require("./admin");

const rootDir = require("../util/path");

Router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", { prods: products, docTitle: "My Shop", path: "/" });
});

module.exports = Router;
