const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const recipientsRoute = require("./routes/recipients");
const cors = require("cors");

const app = express();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("database connection is sucessful");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(cors({ origin: "*" }));
 app.use("/api/recipients", recipientsRoute);

app.listen(5000, () => {
  console.log("the server is up and running on port 5000");
});
