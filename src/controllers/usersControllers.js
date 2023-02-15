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

export async function signinController(req, res){

    const {email, password} = req.body;

    try{
        const {rows} = await db.query('SELECT * FROM users WHERE email=$1;', [email]);
        const hash = rows[0].password;
        const invalidPassword = await bcrypt.compare(password, hash);

        if(!hash || invalidPassword) return res.sendStatus(401);

    }catch(err){
        return res.status(500).send(err.message);
    }

    
}