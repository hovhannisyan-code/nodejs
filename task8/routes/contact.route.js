const express = require("express");

const router = express.Router();
const contactController = require("../controllers/contact.controller");

router.get("/new", contactController.create);
router.post("/new", contactController.postCreate);
router.get("/edit/:id", contactController.edit);
router.post("/edit/:id", contactController.postEdit);
router.get("/delete/:id", contactController.deleteContact);

module.exports = router;
