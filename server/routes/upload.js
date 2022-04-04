import express from "express";
import { upload } from "../config/aws.js";
import { postUploadImage } from "../controllers/upload.js";

const router = express.Router();

/* GET users listing. */
router.post("/image", upload.single("file"), postUploadImage);
// router.post("/", postPosts);

export default router;
