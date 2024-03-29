const express = require("express");
const path = require("path");
const Router = express.Router();

const rootDir = require("../util/path");
const products = [];

Router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    docTitle: "Add Product",
    path: "/admin/add-product",
  });
});

Router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = Router;
exports.products = products;
