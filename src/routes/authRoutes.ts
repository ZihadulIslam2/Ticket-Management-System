// src/routes/authRoutes.ts
import express from 'express'
import { register } from '../controllers/authController'
import { registerValidator } from '../middleware/validators'

const router = express.Router()

router.post('/register', registerValidator, register)


// src/routes/authRoutes.ts
import { login } from "../controllers/authLoginController";
import { loginValidator } from "../middleware/loginValidator";

router.post("/login", loginValidator, login);

// src/routes/authRoutes.ts
import { logout } from "../controllers/authLogOutController";

router.post("/logout", logout);


export default router
