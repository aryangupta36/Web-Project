const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const hbs = require("hbs");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
hbs.registerPartials(path.join(__dirname, "views/partials"));

mongoose.connect("mongodb://127.0.0.1:27017/ipo_reviews")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

const reviewsRoute = require("./routes/reviews");
app.use("/api/reviews", reviewsRoute);

app.get("/", (req, res) => {
  res.render("index", { title: "PreIPO Connect" });
});

app.get("/reviews", (req, res) => {
  res.sendFile(path.join(__dirname, "reviews.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
