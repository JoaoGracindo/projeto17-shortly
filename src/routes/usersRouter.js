import { Router } from "express";

import { signupMiddleware } from "../middlewares/usersMiddlewares.js";
import { signupController } from "../controllers/usersControllers.js";

const router = Router();

router.post('/signup', signupMiddleware, signupController);


export default router;