# ✅ Taskify - Full-Stack To-Do List App

Taskify is a simple and intuitive full-stack To-Do List application. It helps users manage daily tasks effectively, with features like task creation and deletion.

---

## 🚀 Tech Stack

| Layer      | Technology        |
|------------|-------------------|
| Frontend   | React + Bootstrap |
| Backend    | Node.js + Express |
| Database   | MongoDB (Mongoose ORM) |
| Styling    | Bootstrap 5       |

---

## 🧠 Features

- 📝 Add new tasks
- 🗑️ Delete tasks
- 💾 Persist tasks in MongoDB
- 🔗 RESTful API integration
- 📱 Responsive design with Bootstrap

---

## 📁 Project Structure

```
taskify/
├── client/                  # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddTaskForm.js
│   │   │   ├── TaskList.js
│   │   │   └── TaskItem.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── server/                 # Node + Express Backend
│   ├── models/
│   │   └── TaskModel.js
│   ├── routes/
│   │   └── taskRoutes.js
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Running Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/taskify.git
cd taskify
```

### 2️⃣ Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside the `server/` folder:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Start the backend server:

```bash
npm run dev
```

The server will run at: [http://localhost:5000](http://localhost:5000)

---

### 3️⃣ Frontend Setup

```bash
cd ../client
npm install
npm start
```

The client will run at: [http://localhost:3000](http://localhost:3000)

---

## 🔌 API Endpoints

| Method | Endpoint           | Description       |
|--------|--------------------|-------------------|
| GET    | `/api/tasks`       | Fetch all tasks   |
| POST   | `/api/tasks`       | Add a new task    |
| DELETE | `/api/tasks/:id`   | Delete a task     |

---

## 📈 Future Improvements

- ✅ Task completion toggle  
- ✏️ Edit task functionality  
- 🔐 User authentication (JWT)  
- 📅 Add due dates & priorities 

---

## 👨‍💻 Author

**Lokesh Prasad**  
🎓 B.Tech in Artificial Intelligence & Machine Learning  
💼 Full-Stack Developer  
📫 Contact: [chikkalokeshprasad04@example.com]

---