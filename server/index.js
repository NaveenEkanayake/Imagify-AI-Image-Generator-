const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const cors = require("cors");
const app = express();

const userRoutes = require("./routes/user.route");
const ImageRoutes = require("./routes/image.route");

app.use(express.json());
app.use(cookieParser());

app.use("/user", userRoutes);
app.use("/Image", ImageRoutes);

// Connect to MongoDB
const MONGODB_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT;

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("Successfully connected to the database");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
