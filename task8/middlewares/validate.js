const Joi = require('joi');

const validate = (schema) => (req, res, next) => {  
  const result = schema.validate(req.body, { abortEarly: false });
  if (result.error) {
    const error = result.error.details.map(i => i.message).join(', ');   
    const addOrEdit = req.originalUrl.includes('edit') ? 'edit' : 'add';
    const contactId = req.params.id;
    req.body.id = contactId;
    res.status(400).render(addOrEdit, {
      title: 'Error',
      contact: req.body,
      error
    });
    return;
  }
  next();
};

module.exports = validate;