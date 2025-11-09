# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# Project Overview

This project is a MERN stack application that allows users to upload 10 articles (with title and content).
Each article automatically generates a short summary (abbreviation) using a simple summarization logic.
The articles and summaries are stored in MongoDB, and displayed beautifully in a Feed section.

🚀 Features

✅ Upload 10 Articles with Title and Content
✅ Automatic Summary Generation (first few sentences)
✅ Stores Data in MongoDB Database
✅ Displays Feed of All Articles with Summary
✅ “Read More” Button to View Full Article
✅ Validation – Prevents Empty Title/Content Uploads

🧩 Tech Stack

Frontend: React.js, Axios, Tailwind CSS
Backend: Node.js, Express.js
Database: MongoDB Atlas
Other: RESTful APIs, dotenv, CORS

Installation and Setup
🔹 1. Clone the repository
git clone <your-repo-url>

🔹 2. Navigate into the project
cd project

🔹 3. Install dependencies for both frontend and backend
cd backend
npm install
cd ../frontend
npm install

🔹 4. Add your .env file in the backend
PORT=5000
MONGO_URI=your_mongodb_connection_string

🔹 5. Run both servers

In two separate terminals:

# Backend
cd backend
npm run dev

# Frontend
cd frontend
npm run dev

🌐 API Endpoints
➕ POST /api/articles

Uploads 10 articles with title and content, auto-generates a short summary, and saves to DB.

📄 GET /api/feeds

Fetches all saved articles along with their short summaries.