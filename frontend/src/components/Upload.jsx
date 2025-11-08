import { useState } from "react";

export default function Upload() {
  const [articles, setArticles] = useState([{ title: "", content: "" }]);
  const [loading, setLoading] = useState(false);

  const handleAdd = () => {
    if (articles.length < 10) {
      setArticles([...articles, { title: "", content: "" }]);
    } else {
      alert("You can only add up to 10 articles");
    }
  };

  const handleChange = (index, field, value) => {
    const newArticles = [...articles];
    newArticles[index][field] = value;
    setArticles(newArticles);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/articles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ articles }),
      });

      const data = await res.json();
      alert(data.message || "Articles uploaded successfully!");
    } catch (error) {
      alert("Error uploading articles");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">
        Upload Articles (max 10)
      </h2>

      {articles.map((article, index) => (
        <div key={index} className="mb-4">
          <input
            type="text"
            placeholder="Enter Title"
            value={article.title}
            onChange={(e) => handleChange(index, "title", e.target.value)}
            className="border p-2 w-full rounded mb-2"
          />
          <textarea
            placeholder="Enter Content"
            rows="4"
            value={article.content}
            onChange={(e) => handleChange(index, "content", e.target.value)}
            className="border p-2 w-full rounded"
          />
        </div>
      ))}

      <div className="flex gap-4">
        <button
          onClick={handleAdd}
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
        >
          Add More
        </button>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Uploading..." : "Submit"}
        </button>
      </div>
    </div>
  );
}
