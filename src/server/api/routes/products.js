const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({ message: "get request trough /products" });
});
router.post("/", (req, res, next) => {
  res.status(200).json({ message: "post request trough /products" });
});

router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;
  res.status(200).json({ message: `You passed an id: ${id}` });
});
router.delete("/:productId", (req, res, next) => {
  const id = req.params.productId;
  res.status(200).json({ message: `You deleted an item number ${id}` });
});

module.exports = router;
