let Joi = require("joi")

module.exports = {
    addUserValidation : {
        body: Joi.object().required().keys({
            username:Joi.string().required().empty().messages({
                "string.base":"pleace enter a valid username",
                "any.required": "username is required!!",
                "string.empty": "username can't be empty!!",
              }),
              firstname:Joi.string().required().empty().messages({
                "string.base":"pleace enter a valid firstName",
                "any.required": "firstName is required!!",
                "string.empty": "firstName can't be empty!!",
              }),
              lastname:Joi.string().required().empty().messages({
                "string.base":"pleace enter a valid lastName",
                "any.required": "lastName is required!!",
                "string.empty": "lastName can't be empty!!",
              }),
              age:Joi.number().required().empty().min(10).max(70).messages({
                "number.base":"pleace enter a valid age",
                "number.min":"age can't be less than 10",
                "number.max":"age can't be more than 70",
                "any.required":"age must be entered",
                "number.empty":"age can't be empty"

              }),
              
              isActive:Joi.boolean().required().messages({
                "boolean.base":"pleace enter a valid active status",
              }),
              email:Joi.string().required().empty().email({minDomainSegments :2,tlds:{allow:['com','net']}}).messages({
                    "string.email":"pleace enter a valid email",
                    "any.required": "email is required!!",
                    "string.empty": "email can't be empty!!",
              }),
              password:Joi.string().required().empty().pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/).messages({
                    "string.pattern.base" : "password should be at least 6 and container digits and alpha, special chars",
                    "any.required": "password is required!!",
                    "string.empty": "password can't be empty!!",
              }),
              phone:Joi.string().required().empty().pattern(/^^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/).messages({
                "string.pattern.base" : "phone should be a valid phone number",
                "any.required": "phone is required!!",
                "string.empty": "phone can't be empty!!",
          }),
              userBlogs:Joi.alternatives().required().try(
                Joi.string().empty().required().messages({
                    "string.base":"pleace enter a valid blog name",
                    "any.required": "blog name is required!!",
                    "string.empty": "blog name can't be empty!!",
                }),
                Joi.array().min(2).required().items(Joi.string().empty().required().messages({
                    "string.base":"pleace enter a valid blog name",
                    "any.required": "blog name is required!!",
                    "string.empty": "blog name can't be empty!!",
                }))

              .messages({
                    "array.base":"pleace enter a valid blogs ",
                    "array.min": "blogs must be more than 2!!",
                })
              )
            
        })
    }
}