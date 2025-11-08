import { useEffect, useState } from "react";

export default function Feed() {
  const [feeds, setFeeds] = useState([]);

  const fetchFeeds = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/articles/feeds");
      const data = await res.json();
      setFeeds(data);
    } catch (error) {
      alert("Error fetching feeds");
    }
  };

  useEffect(() => {
    fetchFeeds();
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-gray-700">Feed</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {feeds.map((feed) => (
          <div key={feed._id} className="bg-white p-4 rounded-2xl shadow">
            <h3 className="text-lg font-semibold mb-2 text-blue-700">
              {feed.title}
            </h3>
            <p className="text-gray-600 mb-3">{feed.summary}</p>
            <details>
              <summary className="text-blue-600 cursor-pointer">
                Read More
              </summary>
              <p className="text-gray-500 mt-2">{feed.content}</p>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
}
