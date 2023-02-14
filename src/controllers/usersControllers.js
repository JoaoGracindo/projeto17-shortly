import bcrypt from 'bcrypt';

import db from '../database/db.js';

export async function signupController(req, res){

    const {name, email, password} = req.body;
    const hash = bcrypt.hashSync(password, 10);

    try{
        await db.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3);', [name, email, hash]);
        return res.sendStatus(201);

    }catch(err){
        return res.status(500).send(err.message);
    }

}