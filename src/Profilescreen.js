import React from "react";
import Nav from "./Nav";
import { auth } from "./Firebase";
import { useSelector } from "react-redux";

import "./profilescreen.css";

const Profilescreen = () => {
  const { user } = useSelector((state) => state.mainuser);

  return (
    <div className="profilescreen">
      <Nav />
      <div className="pf-body">
        <h1>Edit Profile</h1>
        <div className="pf-info">
          <img className="pf-logo" src="./user.png" alt="user" />
          <div className="pf-detail">
            <h2>{user.email}</h2>

            <div>
              <button className="pf-button" onClick={() => auth.signOut()}>
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profilescreen;
