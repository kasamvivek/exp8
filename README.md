Experiment 8 Guides
🚨 Important Instructions
Deadline: 17 April 2026, Evening
📝 Google Form
Please submit your project details using the following link:

Submit to Google Form
Frontend Integration with JWT APIs (Session-Based UI)
🧪Based on Experiment 6
This experiment uses the backend APIs implemented earlier (login + protected routes).

🎯 Objective
Build a frontend UI that consumes JWT APIs\
Implement session-based authentication (token stored per session)\
Restrict access to pages based on login state\
Show screenshots of tested endpoints from frontend
🧩 Features to Implement
1. Login Page
User enters Username & Password\
Calls: POST /login\
On success:
Store JWT in sessionStorage\
Redirect to dashboard
2. Protected Dashboard Page
Only accessible if JWT exists in session\
Calls: GET /protected\
Add token in header:
<!-- -->
Authorization: Bearer <token>
3. Logout Functionality
Clear session:
<!-- -->
sessionStorage.removeItem("token");
Redirect to login page
🧩 Features to Implement
1. Login Page
User enters Username & Password\
Calls: POST /login\
On success:
Store JWT in sessionStorage\
Redirect to dashboard
2. Protected Dashboard Page
Only accessible if JWT exists in session\
Calls: GET /protected\
Add token in header:
<!-- -->
Authorization: Bearer <token>
3. Logout Functionality
Clear session:
<!-- -->
sessionStorage.removeItem("token");
Redirect to login page
💻 Tech Stack
React (Frontend Framework)
Bootstrap (Layout & Styling)
Material UI (Components like buttons, cards)
Fetch / Axios for API calls
⚙️ Installation
npx create-react-app frontend
cd frontend
npm install axios bootstrap @mui/material @emotion/react @emotion/styled
Add Bootstrap in index.js:

import 'bootstrap/dist/css/bootstrap.min.css';
🧱 React Implementation
📄 Login.js
import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const res = await axios.post("http://localhost:5000/login", {
      username,
      password
    });

    if (res.data.token) {
      sessionStorage.setItem("token", res.data.token);
      window.location.href = "/dashboard";
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <input className="form-control" onChange={(e)=>setUsername(e.target.value)} placeholder="Username" /><br/>
      <input className="form-control" type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" /><br/>
      <button className="btn btn-primary" onClick={login}>Login</button>
    </div>
  );
}

export default Login;
📄 Dashboard.js
import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [data, setData] = useState("");
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      window.location.href = "/";
    }
  }, []);

  const getData = async () => {
    const res = await axios.get("http://localhost:5000/protected", {
      headers: {
        Authorization: "Bearer " + token
      }
    });
    setData(res.data);
  };

  const logout = () => {
    sessionStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="container mt-5">
      <h2>Dashboard</h2>
      <button className="btn btn-success me-2" onClick={getData}>Fetch Data</button>
      <button className="btn btn-danger" onClick={logout}>Logout</button>
      <p>{data}</p>
    </div>
  );
}

export default Dashboard;
🔐 Session-Based Restriction Logic
If token exists → allow dashboard\
If no token → redirect to login
📸 Required Screenshots
## 📸 Output Screenshots

### 🔐 1. Login Page (Initial Screen)

![Login Page](login_page.png)
This screen shows the login interface where the user enters credentials.

---

### ✍️ 2. User Input (Credentials Entered)

![Login Input](login_input.png)
This screen shows the user entering valid username and password before authentication.

---

### 📊 3. Dashboard Page (After Successful Login)

![Dashboard](dashboard_page.png)
After successful login, the user is redirected to the dashboard.

---

### 🔐 4. JWT Token Stored in SessionStorage

![Token Storage](token_storage.png)
This screenshot shows the JWT token stored in sessionStorage in the browser.

---

### 📡 5. Protected API Access (Fetch Data Output)

![Protected API](protected_api_output.png)
This shows successful access to a protected API using the JWT token.

---

### 🚪 6. Logout Functionality

![Logout](logout_screen.png)
After clicking logout, the session is cleared and the user is redirected to the login page.

📁 Project Structure
frontend/
├── src/
│   ├── components/
│   │   ├── Login.js
│   │   └── Dashboard.js
│   ├── App.js
│   └── index.js
📘 README Explanation
React frontend connects to backend APIs\
JWT stored in sessionStorage\
Protected routes accessed using token\
Logout clears session
