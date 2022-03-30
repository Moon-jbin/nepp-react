import express from "express";

import { getPostsMain } from "../controllers/posts.js";

const router = express.Router();

/* GET users listing. */
router.get("/main", getPostsMain);

export default router;
