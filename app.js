const path = require("path");

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const todoRoutes = require("./todoRoutes");

const port = 3000;

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json({ limit: "10kb" }));

app.use("/", todoRoutes);

// const DB = process.env.DATABASE.replace(
//   "<PASSWORD>",
//   process.env.DATABASE_PASSWORD
// );

mongoose
  .connect("mongodb://localhost:27017/expres-stodo")
  .then(() => console.log("DB connection successful!"));

const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
