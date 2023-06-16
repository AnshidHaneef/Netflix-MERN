import "./app.scss";
import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Login from "./pages/Login/Login";
// import Watch from './pages/Watch/Watch'
import Register from "./pages/signup/Register";
import Home from "./pages/Home/Home";

function App() {
  const user = true;
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/register");
    }
  }, [user, navigate]);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/movies" element={<Home type="movies" />} />
        <Route path="/series" element={<Home type="series" />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
