import Joi from "joi";

export const addBookValidator = Joi.object({
    title: Joi.string().required().max(20).min(3),
    author : Joi.string().required(),
})


export const updateBookValidator = Joi.object({
    title: Joi.string().required().max(20).min(3),
    author : Joi.string().required(),
})
