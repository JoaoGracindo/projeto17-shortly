import { userSchema } from "../model/userSchema.js";
import db from '../database/db.js';

export async function signupMiddleware(req, res, next){

    const newUser = req.body;
    const {error} = userSchema.validate(newUser, {abortEarly: false});
    
    if(error){
        const errorMessages = error.details.map((obj) => obj.message);
        return res.status(422).send(errorMessages);
    }

    try{
        const {rows} = await db.query('SELECT * FROM users WHERE email=$1;', [newUser.email]);
        if(rows[0]) return res.sendStatus(409);

    }catch(err){
        return res.status(500).send(err.message);

    }
    next();
}