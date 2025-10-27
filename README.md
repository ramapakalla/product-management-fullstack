# 🍀 **Product Management System**

*A Full-Stack Web Application built with Spring Boot & React*

---

## 🚀 **Overview**

The **Product Management System** is a full-stack CRUD web application that allows users to **add, view, update, and delete products** seamlessly.
It integrates a **Spring Boot backend** with a **React frontend**, connected through REST APIs — offering a smooth, modern, and responsive user experience.

---

## 🏗️ **Tech Stack**

| Layer               | Technology                                     |
| ------------------- | ---------------------------------------------- |
| **Frontend**        | React, Vite, HTML5, CSS3, JavaScript (ES6)     |
| **Backend**         | Java, Spring Boot, Spring Web, Spring Data JPA |
| **Database**        | MySQL                                          |
| **Build Tools**     | Maven (Backend), npm/yarn (Frontend)           |
| **Version Control** | Git & GitHub                                   |
| **IDE Used**        | VS Code / IntelliJ IDEA / STS                  |

---

## ⚙️ **Features**

✅ Add new products with details (name, price, description, etc.)
✅ View all existing products in a clean table layout
✅ Edit product information dynamically
✅ Delete products instantly
✅ Full CRUD functionality via REST APIs
✅ Responsive and intuitive UI design
✅ Integration between backend and frontend using Axios

---

## 📁 **Project Structure**

```
product_management/
│
├── product_backend/       # Spring Boot backend
│   ├── src/
│   ├── pom.xml
│   └── application.properties
│
└── product_frontend/      # React frontend
    ├── src/
    ├── package.json
    └── vite.config.js
```

---

## ⚡ **How to Run the Project**

### 🖥️ Backend (Spring Boot)

1. Open the `product_backend` folder in your IDE
2. Run:

   ```bash
   mvn spring-boot:run
   ```
3. The backend starts at:
   👉 `http://localhost:8085`

---

### 🌐 Frontend (React)

1. Open the `product_frontend` folder in VS Code
2. Install dependencies:

   ```bash
   npm install
   ```
3. Run the app:

   ```bash
   npm run dev
   ```
4. Open in browser:
   👉 `http://localhost:5173`

---

## 🧩 **API Endpoints**

| Method     | Endpoint         | Description       |
| ---------- | ---------------- | ----------------- |
| **GET**    | `/products`      | Get all products  |
| **GET**    | `/products/{id}` | Get product by ID |
| **POST**   | `/products`      | Add new product   |
| **PUT**    | `/products/{id}` | Update product    |
| **DELETE** | `/products/{id}` | Delete product    |

---

## 💾 **Database Configuration**

In `application.properties` (backend):

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/product_db
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

## 💡 **Future Enhancements**

✨ Add user authentication (Spring Security + JWT)
✨ Implement pagination and search filters
✨ Deploy on AWS / Render / Railway
✨ Add analytics dashboard for admins


