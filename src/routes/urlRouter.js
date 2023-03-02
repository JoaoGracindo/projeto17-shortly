import { Router } from "express";

const router = Router();

router.get('/urls/:id');
router.get('/urls/open/:shortUrl');
router.get('/ranking');


export default router;