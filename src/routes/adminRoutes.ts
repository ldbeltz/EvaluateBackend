import express from "express";
import { getUser } from "../controllers/adminController";

const router = express.Router();

router.get("/", getUser);

export default router;
