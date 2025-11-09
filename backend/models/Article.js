import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  summary: { type: String, required: true },
}, { timestamps: true }); // <-- adds createdAt and updatedAt

export default mongoose.model("Article", articleSchema);

