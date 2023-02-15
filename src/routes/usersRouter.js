import { Router } from "express";

import { signupMiddleware, signinMiddleware } from "../middlewares/usersMiddlewares.js";
import { signupController, signinController } from "../controllers/usersControllers.js";

const router = Router();

router.post('/signup', signupMiddleware, signupController);
router.post('/signin', signinMiddleware, signinController);


export default router;