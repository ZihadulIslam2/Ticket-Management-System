import express from 'express'
import { register } from '../controllers/authController'
import { registerValidator } from '../middleware/validators'

import { login } from '../controllers/authLoginController'
import { loginValidator } from '../middleware/loginValidator'

import { logout } from '../controllers/authLogOutController'

const router = express.Router()

router.post('/register', registerValidator, register)


router.post("/login", loginValidator, login);


router.post("/logout", logout);

export default router
