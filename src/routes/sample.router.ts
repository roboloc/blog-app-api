/* ------------------------------- Router user ------------------------------ */
import express from "express";
import {
  getSampleController,
  getSamplesController,
} from "../controller/sample.controller";

const router = express.Router();

router.get("/", getSamplesController);
router.get("/:id", getSampleController);

export default router;

// Shift + alf + f untuk merapihkan import
