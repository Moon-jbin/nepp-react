import express from "express";
import {upload} from "../config/aws.js";
import { postUploadImage, postPosts } from "../controllers/upload.js";

const router = express.Router();

/* GET users listing. */
router.get("/image", upload.single("file")  , postUploadImage);
router.post("/", postPosts);

export default router;
