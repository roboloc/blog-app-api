/* ------------------------------- Router user ------------------------------ */
import express from "express";
import {
  createBlogController,
  getBlogbySlugController,
  getBlogsController,
  updateBlogController,
} from "../controller/blog.controller";

const router = express.Router();

router.get("/", getBlogsController);
router.get("/:slug", getBlogbySlugController);
router.post("/", createBlogController);
router.patch("/:id", updateBlogController);

export default router;

// Shift + alf + f untuk merapihkan import

//  {
//   "title": "cara ngoding",
//   "description": "lorem ps",
//   "thumnail" : "https://images.com",
//   "category": "coding",
//   "content" : "lorem lorem",
//   "userId": 1
// }
