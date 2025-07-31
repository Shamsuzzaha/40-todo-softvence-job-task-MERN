# 📝 Tasko - Task Management App

Tasko is a full-stack task management application built using the MERN stack (MongoDB, Express.js, React, Node.js). Users can create, view, update, and delete their tasks with attributes like category, role, status, and end date.

---

## 🔧 Technologies Used

### 🖥️ Frontend
- React
- React Router
- Axios
- Bootstrap (UI Framework)

### 🖥️ Backend
- Node.js
- Express.js
- MongoDB (Mongoose)

---

## 📂 Project Structure

```
tasko/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── layout/
│   │   ├── pages/
│   │   ├── APIStore/
│   │   └── App.js
│   └── index.html
```

---

## ⚙️ Features

- 📋 Create new tasks
- ✏️ Update task details
- ❌ Delete existing tasks with confirmation
- 📁 Categorize tasks (e.g., Arts and crafts, Family, Nature, etc.)
- 📆 Set task end dates
- 🧩 Task roles and statuses (e.g., Ongoing, Pending, Colaboration, Done)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/tasko.git
cd tasko
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file in `backend/`:

```env
PORT=5000
MONGO_URL=mongodb://localhost:27017/tasko
```

Start backend server:

```bash
npm run dev
```

### 3. Setup Frontend

```bash
cd ../frontend
npm install
```

Start frontend:

```bash
npm run dev
```

---

## 🔌 API Endpoints (Backend)

| Method | Endpoint           | Description            |
|--------|--------------------|------------------------|
| POST   | `/create-task`     | Create a new task      |
| GET    | `/task/:id`        | Get task by ID         |
| PUT    | `/task/:id`        | Update task by ID      |
| DELETE | `/task/:id`        | Delete task by ID      |
| GET    | `/tasks`           | Get all tasks          |

---

## 🧑‍💻 Author

**Shamsuzzaha Sumon**  
MERN Stack Developer from Bangladesh 🇧🇩  
Email: `shamsuzzahasumon@gmail.com`

---

## 📃 License

This project is licensed under the MIT License.
