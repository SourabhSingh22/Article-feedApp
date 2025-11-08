
function Navbar() {
    return (
      <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">📰 Article Feed</h1>
        <button className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition">
          Login
        </button>
      </nav>
    );
  }
  
  export default Navbar;
  