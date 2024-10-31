const router = require("express").Router();
const { Country } = require("../models/Country");

router.get("/", async (req, res) => {
  try {
    const countries = await Country.findAll();
    res.json(countries);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});
router.post("/", async (req, res) => {
  try {
    const country = await Country.create(req.body);
    res.json(country);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
