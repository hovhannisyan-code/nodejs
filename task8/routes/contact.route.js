const express = require("express");

const router = express.Router();
const contactController = require("../controllers/contact.controller");
const schema = require("../validations/contact.validation");
const validate = require("../middlewares/validate");

router.get("/new", contactController.create);
router.post("/new",validate(schema), contactController.postCreate);
router.get("/edit/:id", contactController.edit);
router.post("/edit/:id", validate(schema), contactController.postEdit);
router.get("/delete/:id", contactController.deleteContact);

module.exports = router;
