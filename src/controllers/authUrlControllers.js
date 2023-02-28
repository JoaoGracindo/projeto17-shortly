import { nanoid } from "nanoid";

import db from '../database/db.js';

export async function postUrlController(req, res){
    
    const {userId} = res.locals;
    const shortUrl = nanoid(8);
    const {url} = req.body;

    try{
        const insertion = await db.query('INSERT INTO urls ("userId", "url", "shortUrl") VALUES ($1, $2, $3) RETURNING id, "shortUrl";',
                                    [userId, url, shortUrl]);
        const info = insertion.rows[0];
        return res.status(201).send(info);
        
    }catch(err){
        return res.status(500).send(err.message);
    }
}