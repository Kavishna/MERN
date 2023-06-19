const express = require("express");
const router = express.Router();

//get all ads
router.get("/", (req, res) => {
  res.json({ msg: "get" });
});

//post a ad
router.post("/", (req, res) => {
  res.json({ msg: "post" });
});

//delete a ad
router.delete("/:id", (req, res) => {
  res.json({ msg: "delete" });
});

module.exports = router;
