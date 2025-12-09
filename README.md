# 🧺 Laundry Presentation this one

![Last Commit](https://img.shields.io/badge/last%20commit-private-lightgrey)
![Repo Size](https://img.shields.io/badge/repo%20size-private-lightgrey)
![Issues](https://img.shields.io/badge/issues-private-lightgrey)


A **full-stack application** to manage laundry pickup, delivery, and order tracking, with a **Spring Boot backend** and **React frontend**.

---

## 🌟 Features

* Manage customers and their laundry orders
* Assign pickup and delivery drivers
* Track order status (Pending → Processing → Completed → Delivered)
* Maintain service types and pricing
* Responsive frontend built with React
* Backend REST API built with Spring Boot

---

## ⚡ Tech Stack

* **Backend:** Java 17, Spring Boot, Maven
* **Frontend:** React, Node.js, npm
* **Database:** MySQL / PostgreSQL / H2

---

## 🚀 Getting Started

### Backend

```bash
cd mge-laundry-management-system
./mvnw spring-boot:run
```

> Backend runs at `http://localhost:8080`
> *Note:* Requires database configuration for full functionality.

### Frontend

```bash
cd mge-laundry-frontend
npm install
npm start
```

> Frontend runs at `http://localhost:3000`

---

## 📁 Project Structure

```
mge-laundry-management-system/
├─ src/                     # Backend source code (Spring Boot)
├─ mge-laundry-frontend/    # Frontend source code (React)
├─ pom.xml                  # Maven project file
├─ mvnw, mvnw.cmd           # Maven wrapper
└─ README.md
```

---

## 🔗 Repository

Clone the project:

```bash
git clone https://github.com/your-username/mge-laundry-management-system.git
```

---

## 📝 License

This project is licensed under the **MIT License**.
Feel free to use, modify, and contribute!

---

## 💡 Notes

* Backend requires a database connection for managing orders and customers.
* Frontend can run independently to test UI and components.
* Future updates may include driver app integration, notifications, and analytics dashboards.
