import express from "express";
import Article from "../models/Article.js";

const router = express.Router();

// ✅ Better summarization logic: 30–40 words
const summarizeText = (text) => {
  const words = text.split(" ");
  const short = words.slice(0, 40).join(" ");
  return short + (words.length > 40 ? "..." : "");
};

// ✅ POST /api/articles → Save 10 articles
router.post("/", async (req, res) => {
  try {
    const articles = req.body.articles;

    if (!articles || !Array.isArray(articles) || articles.length === 0) {
      return res.status(400).json({ message: "Please provide valid articles" });
    }

    const savedArticles = await Promise.all(
      articles.map(async (art) => {
        const summary = summarizeText(art.content);
        const newArt = new Article({
          title: art.title,
          content: art.content,
          summary,
        });
        return await newArt.save();
      })
    );

    res.json({ message: "✅ Articles saved successfully", data: savedArticles });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ GET /api/articles/feeds → Get all feeds sorted by latest
router.get("/feeds", async (req, res) => {
  try {
    const allArticles = await Article.find().sort({ createdAt: -1 });
    res.json(allArticles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ DELETE /api/articles/feeds/:id → Delete single feed
router.delete("/feeds/:id", async (req, res) => {
  try {
    const deleted = await Article.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Feed not found" });
    }
    res.json({ message: "🗑️ Feed deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
