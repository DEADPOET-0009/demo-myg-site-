const express = require("express");
const brands = require("./phones");

const router = express.Router();

router.get("/mobilephone", (req, res) => {
  res.render("brands", { brands });
});

router.get("/mobilephone/:brand", (req, res) => {
  const brand = brands.find(b => b.name === req.params.brand);
  if (!brand) return res.status(404).send("Brand not found");
  res.render("branditem", { brands, brand });
});

router.get("/mobilephone/:brand/:model", (req, res) => {
  const brand = brands.find(b => b.name === req.params.brand);
  if (!brand) return res.status(404).send("Brand not 1found");

  const phone = brand.phones.find(p => p.name === req.params.model);
  if (!phone) return res.status(404).send("Phone not 2found");

  res.render("itemdetails", { brands, brand, phone });
});

module.exports = router;