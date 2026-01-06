import express from "express";
import { getCampers, getCamperById } from "../controllers/campersController.js";

const router = express.Router();

router.get("/", getCampers);
router.get("/:id", getCamperById);

export default router;