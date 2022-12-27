import { React, useState } from "react";
import "./LoginScreen.css";
import SignUpscreen from "./SignUpscreen";

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="gradient"></div>
      <img className="bgimage" src="./background.jpg" alt="bg" />
      <div className="loginscreen_background">
        <img className="loginscreen_logo" src="./logo.png" alt="logo" />
        <button className="signin" onClick={() => setSignIn(true)}>
          SIGN IN
        </button>
      </div>
      <div className="loginbody">
        {signIn ? (
          <SignUpscreen />
        ) : (
          <>
            <h1>Unlimited Movies and TV programmes and more.</h1>

            <h2>Watch anywhere. Cancel anytime..</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginInput">
              <form>
                <input type="email" placeholder="Email Address" />
                <button onClick={() => setSignIn(true)}>GET STARTED</button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
