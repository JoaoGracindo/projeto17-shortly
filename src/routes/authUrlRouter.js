import { Router } from "express";

import authentication from '../middlewares/authMiddleware.js';
import {postUrlMiddleware, deleteUrlMiddleware} from '../middlewares/urlMiddlewares.js';
import { postUrlController, deleteUrlController } from "../controllers/authUrlControllers.js";

const router = Router();

router.use(authentication);
router.get('/users/me');
router.post('/urls/shorten', postUrlMiddleware, postUrlController);
router.delete('/urls/:id', deleteUrlMiddleware, deleteUrlController);

export default router;