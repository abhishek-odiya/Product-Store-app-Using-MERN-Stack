# 🛒 Product Store App

Product Store is a fully functional CRUD application that lets users manage products effortlessly. You can add new products, view product details, update information, and delete items. The app features a clean and responsive interface with real-time error handling, image uploads, and a seamless user experience. Perfect for demonstrating full-stack functionality in a live, deployable project.

---

## 🚀 Features

- ➕ Create new products  
- 📄 Fetch & display all products  
- ✏️ Update product details  
- ❌ Delete products  
- 🖼️ Image upload support  
- ⚡ Fully functional REST API (Express.js)  
- 📱 Responsive UI with Chakra UI  
- 🐞 Frontend & backend error handling  
- 🌐 Deployment-ready setup  

---

## 🛠️ Tech Stack

### **Frontend**
- React.js  
- Chakra UI  
- Axios  
- React Router  

### **Backend**
- Node.js  
- Express.js  
- Mongoose  

### **Database**
- MongoDB Atlas  

---

# Product Store App

## 📂 Folder Structure

```
/client
  /src
    /components
    /pages
    /services
    /utils
  App.jsx

/server
  /controllers
  /models
  /routes
  /middleware
  server.js
```

## ⚙️ Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/abhishek-odiya/Product-Store-App.git
cd Product-Store-App
```

### 2️⃣ Setup Backend

```bash
cd backend
npm install
npm run dev
```

### 3️⃣ Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

## 🔐 Environment Variables (/server/.env)

```ini
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

## 📡 API Endpoints

**Base URL:** `/api/products`

| Method | Endpoint | Description          |
|--------|----------|----------------------|
| GET    | /        | Get all products     |
| GET    | /:id     | Get product by ID    |
| POST   | /        | Create a new product |
| PUT    | /:id     | Update a product     |
| DELETE | /:id     | Delete a product     |

## 🚀 Deployment

- **Frontend:** Render
- **Backend:** Render 
- **Database:** MongoDB Atlas

## 📌 Author

**Abhishek Odiya**

- GitHub: [github.com/abhishek-odiya](https://github.com/abhishek-odiya)
- LinkedIn: [linkedin.com/in/abhishek-odiya-84b502272](https://linkedin.com/in/abhishek-odiya-84b502272)
