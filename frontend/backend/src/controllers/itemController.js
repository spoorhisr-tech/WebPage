import { itemModel } from "../models/itemModel.js";
import { AppError } from "../utils/AppError.js";

export const getItems = (req, res) => {
  res.json({
    success: true,
    data: itemModel.findAll(),
  });
};

export const getItemById = (req, res, next) => {
  const item = itemModel.findById(req.params.id);

  if (!item) {
    return next(new AppError("Item not found.", 404));
  }

  res.json({
    success: true,
    data: item,
  });
};

export const createItem = (req, res) => {
  const item = itemModel.create(req.body);

  res.status(201).json({
    success: true,
    message: "Item created successfully.",
    data: item,
  });
};

export const updateItem = (req, res, next) => {
  const updatedItem = itemModel.update(req.params.id, req.body);

  if (!updatedItem) {
    return next(new AppError("Item not found.", 404));
  }

  res.json({
    success: true,
    message: "Item updated successfully.",
    data: updatedItem,
  });
};

export const deleteItem = (req, res, next) => {
  const deletedItem = itemModel.remove(req.params.id);

  if (!deletedItem) {
    return next(new AppError("Item not found.", 404));
  }

  res.json({
    success: true,
    message: "Item deleted successfully.",
    data: deletedItem,
  });
};
