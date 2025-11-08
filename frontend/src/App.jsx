import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Upload from "./components/Upload";
import Feed from "./components/Feed";
import Home from "./pages/Home";

export default function App() {


  const homeNavigate = () => {
    window.location.href = "/";
  }

  return (
    <Router>
      <div className="h-screen bg-gray-100">
          <Home homeNavigate={homeNavigate} />
    
        <div className="p-6">
          <Routes>
            <Route path="/upload" element={<Upload />} />
            <Route path="/feed" element={<Feed />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
