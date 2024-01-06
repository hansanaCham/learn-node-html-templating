const express = require("express");
const bodyParser = require("body-parser");
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const path = require("path");
const expressHbs = require("express-handlebars");

const app = express();
app.engine(
  "hbs",
  expressHbs({
    layoutsDir: "views/layouts/",
    defaultLayout: "main-layout",
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", "views"); // this is not necessary if the views are stored in views dir

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use("/", (req, res, next) => {
  res.status(404).render("404", { docTitle: "Not Found" });
});
app.listen(3000);
