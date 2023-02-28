import Joi from "joi";

const schema = Joi.object({
    url: Joi.string().pattern(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/).required()
});

export function postUrlMiddleware(req, res, next){

    const {error} = schema.validate(req.body);
    if(error) return res.status(422).send(error.message);

    next();
}