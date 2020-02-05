const joi = require('celebrate').Joi;

const loginSchema = {
    body: joi.object().keys({
        email: joi.string().required(),
        password: joi.string().required()
    })
}
const registerSchema={
    body: joi.object().keys({
        name:joi.string().required(),
        surname:joi.string().required(),
        age:joi.number().required(),
        email:joi.string().required(),
        phone:joi.number().required(),
        password:joi.string().required()

    })
}
module.exports = {
    loginSchema: loginSchema,
    registerSchema:registerSchema
}