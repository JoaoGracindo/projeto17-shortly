import Joi from "joi";

import db from '../database/db.js';

const schema = Joi.object({
    url: Joi.string().pattern(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/).required()
});

export function postUrlMiddleware(req, res, next){

    const {error} = schema.validate(req.body);
    if(error) return res.status(422).send(error.message);

    next();
}

export async function deleteUrlMiddleware(req, res, next){

    const {id} = req.params;
    const {userId} = res.locals;

    try{
        const {rows} = await db.query('SELECT "userId" FROM urls WHERE id=$1;', [id]);

        if(!rows[0]) return res.sendStatus(404);
        if(userId !== rows[0]) return res.sendStatus(401);
        
    }catch(err){
        return res.status(500).send(err.message);
    }

    next();
}