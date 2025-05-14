# 📝 Blog Platform Backend

A robust and secure backend for a blogging platform built using **TypeScript**, **Node.js**, **Express.js**, and **MongoDB**. The system supports **role-based access control**, allowing both `users` and `admins` to perform their respective operations seamlessly.

## 🚀 Live Server

🌐 [Live API Server Link](complete-assignment-3-blog-ph.vercel.app)  

---
### Technology Used
- TypeScript
- Node.js
- Express.js
- MongoDB + Mongoose
- Zod – Schema validation
- jsonwebtoken – JWT authentication
- bcrypt – Secure password hashing
- dotenv – Environment config
---

## 👥 Roles & Permissions

### 🧑‍💻 User
- Register and Login
- Create, update, and delete their own blogs
- Cannot view or access admin-level routes
- 

### 🛡️ Admin
- Created manually in the database
- Can **block/unblock users**
- Can **delete any blog**
- Cannot update any blog
- 

---

## 🔐 Authentication & Authorization

- JWT-based secure login
- Role-based route protection
- Middleware to restrict access to sensitive endpoints
- Admin tokens required for privileged actions

---

## 📘 Blog API Features

- Public API to fetch blogs with:
  - 🔍 **Search** (by title/content)
  - ↕️ **Sorting** (by title/createdAt)
  - 🎯 **Filtering** (by author ID)
- Authenticated users can:
  - ➕ Create a blog
  - ✏️ Update their blog
  - ❌ Delete their blog

---

## 📄 API Endpoints

### ✅ Authentication

- `POST /api/auth/register` – Register a new user  
- `POST /api/auth/login` – Login and get JWT token

### 📝 Blog Management (Protected)

- `POST /api/blogs` – Create a blog
- `PATCH /api/blogs/:id` – Update a blog (owner only)
- `DELETE /api/blogs/:id` – Delete a blog (owner only)

### 🔍 Blog Reading (Public)

- `GET /api/blogs` – Get all blogs with search, sort, filter

### ⚙️ Admin Operations

- `PATCH /api/admin/users/:userId/block` – Block user
- `DELETE /api/admin/blogs/:id` – Delete any blog

---

## ⚠️ Error Handling

Unified and consistent error responses across all routes:
```json
{
  "success": false,
  "message": "Error message",
  "statusCode": 400,
  "error": {
    "details": "Optional details"
  },
  "stack": "Error stack (in development)"
}

---





