import { Router } from "express";

import {
    getUrlByIdController,
    redirectController
} from '../controllers/urlController.js';

const router = Router();

router.get('/urls/:id', getUrlByIdController);
router.get('/urls/open/:shortUrl', redirectController);
router.get('/ranking');


export default router;