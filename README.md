# 🌐 Profile Atlas

Profile Atlas is a full-stack web application for managing and exploring user profiles.  
It includes secure authentication, profile CRUD operations, and a clean modern UI.

---

## 🚀 Features
- 🔑 User authentication with JWT
- 📄 Create, read, update, and delete profiles
- ⚡ RESTful API built with Node.js + Express
- 💾 MongoDB database with Mongoose
- 🎨 Frontend in React + Tailwind CSS
- 🔐 Protected routes for authorized users only

---

## 🛠️ Tech Stack
- **Frontend:** React, Tailwind CSS, Vite
- **Backend:** Node.js, Express.js, JWT
- **Database:** MongoDB (Mongoose ODM)

---

## ⚙️ Getting Started (Local Setup)

### 1️⃣ Clone the repo
```bash
git clone https://github.com/jeena-krishna/Profile-Atlas.git
cd Profile-Atlas

2️⃣ Install dependencies
# Backend
cd Server
npm install

# Frontend (open new terminal)
cd ../Client
npm install


3️⃣ Configure environment variables
Create .env files:

Server/.env
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173

Client/.env
VITE_API_URL=http://localhost:4000


4️⃣ Run locally
# Start backend
cd Server
npm run dev

# Start frontend
cd ../Client
npm run dev


📌 Future Improvements
Add user roles (admin, basic)
Search and filter profiles
Deploy with CI/CD pipeline