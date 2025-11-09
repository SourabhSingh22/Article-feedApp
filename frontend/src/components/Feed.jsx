import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";


export default function Feed() {
  const [feeds, setFeeds] = useState([]);

  const fetchFeeds = async () => {
    try {
      const res = await fetch("https://article-feed-app-eight.vercel.app/api/articles/feeds");
      const data = await res.json();
      setFeeds(data);
    } catch (error) {
      alert("Error fetching feeds");
    }
  };

  useEffect(() => {
    fetchFeeds();
  }, []);

  const handleDeleteFeed = async (id) => {
    try {
      const res = await fetch(`https://article-feed-app-eight.vercel.app/api/articles/feeds/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        fetchFeeds();
      } else {
        alert("Error deleting feed");
      }
    } catch (error) {
      alert("Error deleting feed");
    }
  };
  

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center gap-4 text-gray-700">
        <Link to={'/'} className="mb-5 text-xl"><FaArrowLeft /></Link>
        <h2 className="text-2xl font-semibold mb-6 text-gray-700">Feed</h2>
      </div>
      {/*  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {feeds.map((feed) => (
          <div key={feed._id} className="bg-white p-4 rounded-2xl shadow">
            <div className="flex justify-between">
              <h3 className="text-lg font-semibold mb-2 text-blue-700">
                {feed.title}
              </h3>
              <p onClick={() => handleDeleteFeed(feed._id)} className="text-xl text-red-600 hover:text-red-500 cursor-pointer"><MdDelete /></p>
            </div>

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
