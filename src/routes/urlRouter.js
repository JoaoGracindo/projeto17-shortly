import { Router } from "express";

import authentication from '../middlewares/authMiddleware.js';
import {postUrlMiddleware} from '../middlewares/urlMiddlewares.js';
import { postUrlController } from "../controllers/authUrlControllers.js";

const router = Router();

router.use(authentication);
router.post('/urls/shorten', postUrlMiddleware, postUrlController);
router.delete('/urls/:id');

export default router;