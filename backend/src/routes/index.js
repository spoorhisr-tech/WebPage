import { Router } from "express";
import itemRoutes from "./itemRoutes.js";

const router = Router();

router.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "API is running successfully.",
  });
});

router.use("/items", itemRoutes);

export default router;
