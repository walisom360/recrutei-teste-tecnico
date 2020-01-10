const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");

class App {
  constructor() {
    this.express = express();
    this.isDev = process.env.NODE_ENV !== "production";

    this.database();
    this.middlewares();
    this.routes();
  }

  database() {
    mongoose.connect(`mongodb://${process.env.DB_URL}:27017/nodemongo`, {
      useNewUrlParser: true,
      useFindAndModify: true
    });
  }

  middlewares() {
    this.express.use(cors());
    this.express.use(express.json());
  }

  routes() {
    this.express.use(routes);
  }
}

module.exports = new App().express;
