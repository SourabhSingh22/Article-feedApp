import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Upload from "./components/Upload";
import Feed from "./components/Feed";

function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <Link to='/' className="text-3xl font-bold text-sky-800 cursor-pointer">Article Feed</Link>
      <div className="space-x-4">
        <Link to="/upload" className="text-lg text-netural-900 hover:text-gray-200 hover:bg-sky-700 px-4 py-1 rounded-md transform transition-all duration-300">
          Upload
        </Link>
        <Link to="/feed" className="text-lg px-4 py-1 rounded-md text-gray-100 hover:text-gray-200 bg-sky-800">
          Feed
        </Link>
      </div>
    </nav>
  );
}


export default function App() {
  return (
    <Router>
      <Routes>
        {/* 👇 Home Page with Navbar */}
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gray-100">
              <Navbar />
              <div className="flex flex-col items-center justify-center mt-20">
                <h1 className="text-4xl font-bold text-sky-700 mb-4">
                  Welcome to Article Feed App
                </h1>
                <p className="text-gray-600 mb-6">
                  Upload your articles and generate automatic summaries
                </p>
                <div className="flex gap-4">
                  <Link
                    to="/upload"
                    className="bg-sky-700 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Go to Upload
                  </Link>
                  <Link
                    to="/feed"
                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded font-semibold hover:bg-gray-300"
                  >
                    View Feed
                  </Link>
                </div>
              </div>
            </div>
          }
        />

        {/* 👇 Upload page without Navbar */}
        <Route
          path="/upload"
          element={
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
              <div className="w-full max-w-5xl p-4">
                <Upload />
              </div>
            </div>
          }
        />

        {/* 👇 Feed page without Navbar */}
        <Route
          path="/feed"
          element={
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
              <div className="w-full max-w-6xl p-4">
                <Feed />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
