import express from 'express';
import {loginUserCon, logoutController, registerUserCon} from "../controllers/user.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();


// ========User authentication=========
router.post('/register', registerUserCon );
router.post('/login', loginUserCon );
router.delete('/logout',authMiddleware, logoutController );


// ==========isLogin===========
router.get('/auth/check', authMiddleware, (req, res) => {
    return res.status(200).json({ isLogin: true });
});


export default router;
