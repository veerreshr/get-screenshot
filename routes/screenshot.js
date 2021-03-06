import express from "express";
import { getScreenshot } from "../controller/getScreenshot.js";

const router = express.Router();

router.get("/:url", getScreenshot);

export default router;
