import express from "express";
export const Review_router = express.Router();
import { reviewController } from "./review.controller.js";
import { auth } from "../middleware/jwt_auth.js";
import { admin } from "../middleware/admin_auth.js";

Review_router.post("/", auth, admin, reviewController.createReview);
Review_router.get("/", reviewController.getAllReviews);
Review_router.put("/:id", auth, admin, reviewController.updateReview);
Review_router.post(
  "/assign-reviewer/:id",
  auth,
  admin,
  reviewController.assignReviewer
);
Review_router.post(
  "/submit-feedback/:id",
  auth,
  reviewController.submitFeedback
);
