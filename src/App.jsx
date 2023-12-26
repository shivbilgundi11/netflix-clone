import { Routes, Route, useNavigate } from "react-router-dom";
import IntroPage from "./pages/IntroPage";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Authentication from "./pages/Authentication";
import Home from "./pages/Home";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { auth } from "./firebase/firebase";
import { login } from "./app/features/userSlice";

const App = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(login({
          uid: user.uid,
          email: user.email,
        }));
        navigate('/browse');
      } else {
        navigate("/login");
      }
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/" element={<Authentication />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<SignIn />} />
        </Route>
        <Route path="/browse" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
