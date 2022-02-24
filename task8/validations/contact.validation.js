const Joi = require("joi");
const pattern = /^(\+374)[0-9]{8}/
const contactSchema = Joi.object().keys({
  name: Joi.string().min(2).max(30).required(),
  phone: Joi.string().pattern(new RegExp(pattern)).required(),
  email: Joi.string().email().required(),
});

module.exports = contactSchema;
