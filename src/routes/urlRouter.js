import { Router } from "express";

import {
    getUrlByIdController,
    redirectController,
    rankingController
} from '../controllers/urlController.js';

const router = Router();

router.get('/urls/:id', getUrlByIdController);
router.get('/urls/open/:shortUrl', redirectController);
router.get('/ranking', rankingController);


export default router;