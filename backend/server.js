const express = require("express");
require("dotenv").config();

const adRoutes = require("./routes/routes");

const app = express();
app.use(express.json());

//routes
app.use("/api/ads", adRoutes);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
