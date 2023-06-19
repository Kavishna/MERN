const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const adRoutes = require("./routes/routes");

const app = express();
app.use(express.json());

const port = process.env.PORT || 4000;

// Set up MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`server listening on port ${port}`);
    });

    console.log("connected to database");
  })
  .catch((error) => {
    console.error("error connecting to database", error);
  });

//routes
app.use("/api/ads", adRoutes);
