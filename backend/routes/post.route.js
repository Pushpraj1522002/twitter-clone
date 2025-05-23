import express from "express";
import { protectRoute } from "../middleware/protecteRoute.js";
import { createPost, deletePost, commentOnPost, likeUnlikePost, getAllPosts, getLikedPosts, getFollowingPosts, getUserPosts} from "../controllers/post.controller.js";
const router = express.Router();


router.get('/all', protectRoute, getAllPosts)
router.get('/following', protectRoute, getFollowingPosts)
router.get('/user/:username', protectRoute, getUserPosts);
router.get('/likes/:id', protectRoute,getLikedPosts);
router.post('/create',protectRoute, createPost)
router.delete('/:id',protectRoute, deletePost)
router.post('/like/:id',protectRoute, likeUnlikePost)
router.post('/comment/:id',protectRoute, commentOnPost)

export default router;