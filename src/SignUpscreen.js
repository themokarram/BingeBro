import { React, useRef } from "react";
import { auth } from "./Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "./SignUpscreen.css";

const SignUpscreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((UserCredential) => {
        console.log(UserCredential);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((UserCredential) => {
        console.log(UserCredential);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="signupscreen">
      <form className="signupform">
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email Address" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>
          Submit
        </button>
        <h5>
          <span className="greytext"> New to BingeBro? </span>
          <span className="textlink" onClick={register}>
            Sign Up Now.
          </span>
        </h5>
      </form>
    </div>
  );
};

export default SignUpscreen;
