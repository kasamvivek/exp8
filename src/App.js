import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const token = sessionStorage.getItem("token");

  return (
    <div>
      {token ? <Dashboard /> : <Login />}
    </div>
  );
}

export default App;