import { Router } from "express";
import {
  createItem,
  deleteItem,
  getItemById,
  getItems,
  updateItem,
} from "../controllers/itemController.js";
import { asyncHandler } from "../middleware/asyncHandler.js";
import { validateItem } from "../middleware/validateItem.js";

const router = Router();

router.get("/", asyncHandler(getItems));
router.get("/:id", asyncHandler(getItemById));
router.post("/", validateItem, asyncHandler(createItem));
router.put("/:id", validateItem, asyncHandler(updateItem));
router.delete("/:id", asyncHandler(deleteItem));

export default router;
