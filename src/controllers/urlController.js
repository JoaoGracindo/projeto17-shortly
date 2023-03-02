import db from '../database/db.js';

export async function getUrlByIdController(req, res){

    const {id} = req.params;

    try{
        const {rows} = await db.query('SELECT id, "shortUrl", url FROM urls WHERE id=$1', [id]);
        if(!rows[0]) return res.sendStatus(404);

        return res.status(200).send(rows[0]);
    }catch(err){
        return res.status(500).send(err.message);
    }
}

export async function redirectController(req, res){

    const {shortUrl} = req.params;

    try{
        const {rows: url} = await db.query('UPDATE urls SET "visitCount" = "visitCount" +1 WHERE "shortUrl"=$1 RETURNING url;', [shortUrl]);

        if(!url[0]) return res.sendStatus(404);
        return res.redirect(url[0]);

    }catch(err){
        return res.status(500).send(err.message);
    }
}