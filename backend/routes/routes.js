const express = require("express");
const multer = require("multer");
const Advertisement = require("../models/ad");

const router = express.Router();

// set up multer middleware
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

//get all ads
router.get("/", async (req, res) => {
  try {
    const advertisement = await Advertisement.find();

    if (advertisement.length === 0) {
      return res.status(404).json({
        status: "failed",
        message: "no advertisement found",
        code: 404,
      });
    }

    const adResponses = advertisement.map((ad) => ({
      title: ad.title,
      price: ad.price,
      phone: ad.phone,
      image: ad.image.toString("base64"),
    }));

    res.json(adResponses);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "error fetching advertisements",
      code: 500,
      error,
    });
  }
});

//post a ad
router.post("/upload/", upload.single("image"), async (req, res) => {
  try {
    const { title, price, phone } = req.body;

    const advertisement = new Advertisement({
      title: title,
      price: price,
      phone: phone,
      image: req.file.buffer,
    });

    await advertisement.save();

    res.status(200).json({
      status: "success",
      message: "advertisement added successfully",
      code: 200,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "error creating advertisement",
      code: 500,
      error,
    });
  }
});

//delete a ad
router.delete("/:id", async (req, res) => {
  try {
    const advertisement = await Advertisement.findByIdAndDelete(req.params.id);

    if (!advertisement) {
      return res.status(404).json({
        status: "failed",
        message: "advertisement not found",
        code: 404,
      });
    }

    res.status(200).json({
      status: "success",
      message: "advertisement deleted successfully",
      code: 200,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "error deleting advertisement",
      code: 500,
      error,
    });
  }
});

module.exports = router;
