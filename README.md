# GrowthX_Assignment
# Assignment Submission Portal

## Description
This project is a backend system for an **Assignment Submission Portal**.  
It supports two user types: **Users** and **Admins**.  
- **Users** can upload assignments tagged to specific admins.
- **Admins** can view assignments, accept or reject them, and manage their responsibilities.

The backend is built using **Node.js**, **Express.js**, **MongoDB**, and **JWT Authentication**.

---

## Features

### User Features
- Register and login as a user.
- Upload assignments and tag them to specific admins.
- View the list of all available admins.

### Admin Features
- Register and login as an admin.
- View assignments tagged to them.
- Accept or reject assignments.

### Authentication
- Users and admins are authenticated using **JWT tokens**.
- Tokens are required for protected routes.

---

## Endpoints

### **Authentication Endpoints**
- `POST /auth/register` - Register as a user or admin.
  - Example request body for user registration:
    ```json
    {
      "username": "John Doe",
      "email": "john.doe@example.com",
      "password": "securePassword",
      "role": "User"
    }
    ```
  - Example request body for admin registration:
    ```json
    {
      "username": "Admin Alok",
      "email": "alok.admin@example.com",
      "password": "adminPassword",
      "role": "Admin"
    }
    ```

- `POST /auth/login` - Log in as a user or admin.
  - Example request body:
    ```json
    {
      "email": "john.doe@example.com",
      "password": "securePassword"
    }
    ```

### **User Endpoints**
- `POST /user/upload` - Upload an assignment (JWT required).
  - Example request body:
    ```json
    {
      "task": "Complete backend development for a portal.",
      "adminId": "64f7c2e91f82456dfc9f4eab"
    }
    ```

- `GET /user/admins` - Get the list of all admins (JWT required).

### **Admin Endpoints**
- `GET /admin/assignments` - View assignments tagged to the admin (JWT required).

- `POST /admin/assignments/:id/accept` - Accept an assignment (JWT required).
  - `:id` is the assignment ID.

- `POST /admin/assignments/:id/reject` - Reject an assignment (JWT required).
  - `:id` is the assignment ID.

---

## Installation and Setup

### Prerequisites
- **Node.js** (v14 or higher) installed.
- **MongoDB** installed locally or a cloud MongoDB instance.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/assignment-submission-portal.git
2. move to the GrowthX_Assignment folder
  - npm install
  - npm start
