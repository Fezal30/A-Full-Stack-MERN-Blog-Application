const ENV = process.env.NODE_ENV || "production";
require("dotenv").config({
  path: `.env.${ENV}`,
});

//External Module
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

//Local Module
const errorController = require("./controllers/errorController");
const blogRouter = require("./routers/blogRouter");
const MONGO_DB_URL = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@fezal30.ku4txsy.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority&appName=Fezal30`;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api", blogRouter);
app.use(errorController.get404);

const PORT = process.env.PORT || 3000;
mongoose.connect(MONGO_DB_URL).then(() => {
  app.listen(PORT, () => {
    console.log(`Server runing at: http://localhost:${PORT}`);
  });
});
