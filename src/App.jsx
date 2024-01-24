import { Routes, Route, useNavigate } from "react-router-dom";
import IntroPage from "./pages/IntroPage";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Authentication from "./pages/Authentication";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { auth } from "./firebase/firebase";
import { login } from "./app/features/userSlice";
import Browse from "./pages/Browse";
import ProfilePage from "./pages/ProfilePage";

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            uid: user.uid,
            email: user.email,
          })
        );
        navigate("/profile?");
      } else {
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/" element={<Authentication />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<SignIn />} />
        </Route>
        <Route path="/profile?" element={<ProfilePage />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </>
  );
};

export default App;
