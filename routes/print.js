import express from "express";
import { printOrderById } from "../controllers/print.js";

const router = express.Router();

router.post("/:ped_id", printOrderById);

export default router;


