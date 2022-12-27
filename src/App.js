import { React, useEffect } from "react";
import Homescreen from "./Homescreen";
import LoginScreen from "./LoginScreen";
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import { auth } from "./Firebase";
import { useDispatch, useSelector } from "react-redux";
import Profilescreen from "./Profilescreen";

import "./App.css";
import "./mediaquery.css";

function App() {
  const user = useSelector((state) => state.mainuser.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logged in hai
        dispatch({ type: "login", payload: userAuth });
        console.log(userAuth);
      } else {
        //logged out hai
        dispatch({ type: "logout", payload: null });
      }
    });
    return unSubscribe;
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        {!user ? (
          (redirect("/login"), (<LoginScreen />))
        ) : (
          <Routes>
            <Route path="/" element={<Homescreen />} />
            <Route path="/profile" element={<Profilescreen />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}
export default App;
