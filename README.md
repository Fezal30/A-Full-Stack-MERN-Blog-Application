# 📝 Full Stack Blog Application

A powerful and clean **MERN Stack Blog App** that allows users to create, edit, delete, and view blog posts. It features user authentication, a rich text editor, and responsive design.

---

## 🚀 Features

### 🔐 Authentication
- JWT-based login and signup
- Secure password hashing with bcrypt
- Role-based access (optional)

### ✍️ Blog Functionality
- Create, edit, delete blog posts
- Rich text editor (e.g., Quill or TinyMCE)
- View blog details with formatted content
- Comment system (optional)

### 📦 Backend (Node.js + Express + MongoDB)
- RESTful APIs for blog and user operations
- MongoDB for data persistence
- Environment variables with `dotenv`
- Clean MVC structure

### 💻 Frontend (React + Tailwind CSS)
- Responsive UI using Tailwind
- React Router for navigation
- Axios for API requests
- Reusable components

---

## 🛠 Tech Stack

- **Frontend:** React, Tailwind CSS, React Router
- **Backend:** Node.js, Express
- **Database:** MongoDB, Mongoose
- **Others:** JWT, bcrypt, dotenv, axios

---

## 📁 Project Structure
blog-app/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ └── server.js
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ └── App.jsx
└── README.md
