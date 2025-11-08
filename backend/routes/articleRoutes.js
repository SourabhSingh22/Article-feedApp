import express from "express";
import Article from "../models/Article.js";

const router = express.Router();

// 🔹 Simple summarization: take first 2 sentences
const summarizeText = (text) => {
  const sentences = text.split(". ");
  const summary = sentences.slice(0, 2).join(". ") + ".";
  return summary.length > 200 ? summary.slice(0, 200) + "..." : summary;
};

// 🔹 POST /api/articles → Save 10 articles
router.post("/", async (req, res) => {
  try {
    const articles = req.body.articles; // array of 10 articles

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

// 🔹 GET /api/articles/feeds → Get all articles
router.get("/feeds", async (req, res) => {
  try {
    const allArticles = await Article.find();
    res.json(allArticles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
