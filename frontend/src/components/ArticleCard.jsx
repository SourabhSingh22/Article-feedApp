function ArticleCard({ article, onReadMore }) {
    return (
      <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition">
        <img src={article.image} alt={article.title} className="rounded-xl mb-3" />
        <h2 className="text-xl font-bold mb-2">{article.title}</h2>
        <p className="text-gray-600 line-clamp-2 mb-3">{article.description}</p>
        <button
          onClick={() => onReadMore(article)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Read More
        </button>
      </div>
    );
  }
  
  export default ArticleCard;
  