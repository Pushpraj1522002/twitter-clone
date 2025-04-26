import express from 'express';
import {signup, login, logout, getMe} from '../controllers/auth.controller.js'
import { protectRoute } from '../middleware/protecteRoute.js';

const router = express.Router();


// the functional part is declared in controllers/auth.controller.js
/* router.post('/signup', async (req, res)=>{
    res.json({
        data: "you hit the signup endpoint",
    });
});
router.post('/login', async (req, res)=>{
    res.json({
        data: "you hit the login endpoint",
    });
});
router.post('/logout', async (req, res)=>{
    res.json({
        data: "you hit the logout endpoint",
    });
}); */


router.get('/me', protectRoute, getMe);
router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);



export default router;