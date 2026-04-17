# 🔐 Experiment 8 – Frontend Integration with JWT Authentication

---

## 🎯 Objective

Build a React frontend that integrates with JWT-based backend APIs, implements session-based authentication, and restricts access to protected routes.

---

## 🚀 Tech Stack

* ⚛️ React.js
* 🔗 Axios
* 🎨 Bootstrap & Material UI
* ☕ Spring Boot (Backend)
* 🔐 JWT Authentication

---

## 🧠 Key Concepts

* JWT (JSON Web Token) for secure authentication
* Session-based UI using `sessionStorage`
* Protected routes using Authorization headers
* Client-server communication via REST APIs

---

## ⚙️ Setup Instructions

### 1️⃣ Create React App

```
npx create-react-app frontend
cd frontend
```

### 2️⃣ Install Dependencies

```
npm install axios bootstrap @mui/material @emotion/react @emotion/styled
```

### 3️⃣ Add Bootstrap

```js
import 'bootstrap/dist/css/bootstrap.min.css';
```

---

## 🧩 Features

### 🔐 Login

* User enters credentials
* API call: `POST /auth/login`
* Token stored in `sessionStorage`

---

### 📊 Dashboard (Protected)

* Accessible only if token exists
* API call: `GET /hello`
* Token sent via:

```
Authorization: Bearer <token>
```

---

### 🚪 Logout

* Clears session
* Redirects to login page

---

## 🔄 Application Flow

1. User logs in
2. Backend validates credentials
3. JWT token is generated
4. Token stored in sessionStorage
5. Dashboard accessed using token
6. Logout clears session

---

## 📸 Output Screenshots

### 🔐 Login Page

![Login](login_page.png)

---

### ✍️ User Input

![Input](login_input.png)

---

### 📊 Dashboard

![Dashboard](dashboard_page.png)

---

### 🔐 Token Storage

![Token](token_storage.png)

---

### 📡 Protected API Output

![API](protected_api_output.png)

---

### 🚪 Logout

![Logout](logout_screen.png)

---

## ✅ Result

Successfully implemented JWT-based authentication with session handling and protected routes using React and Spring Boot.

---

## 🎤 Viva Points

* JWT ensures secure authentication
* Token stored in sessionStorage
* Authorization header used for protected APIs
* Session controls UI rendering

---

## 🔥 Conclusion

This experiment demonstrates a complete full stack authentication flow with secure communication and session-based access control.

---
