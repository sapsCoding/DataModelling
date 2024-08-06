import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    conent: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodo",
      },
    ], // arrays of sub-Todos
  },
  { timestamps: true }
);

export const Todo = mongoose.model("Todo", todoSchema);
