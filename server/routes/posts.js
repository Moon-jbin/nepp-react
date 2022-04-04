import express from "express";

import { getPostsMain, postPosts } from "../controllers/posts.js";

const router = express.Router();

/* GET users listing. */
router.get("/main", getPostsMain);
router.post("/", postPosts);

export default router;
