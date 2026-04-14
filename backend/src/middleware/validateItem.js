import { AppError } from "../utils/AppError.js";

export const validateItem = (req, res, next) => {
  const { title, category, status, owner, dueDate } = req.body;

  if (!title || !category || !status || !owner || !dueDate) {
    return next(new AppError("All fields are required.", 400));
  }

  next();
};
