import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { Popup } from "reactjs-popup";
import { auth } from "./Firebase";
import { useSelector } from "react-redux";

const Nav = () => {
  const { user } = useSelector((state) => state.mainuser);
  return (
    <div className="navbar">
      <div className="logo">
        <Link to={"/"}>
          <img className="logo" src="./logo.png" alt="logo" />
        </Link>
      </div>
      <div className="buttons">
        <Popup
          className="popup"
          trigger={<img className="profile" src="./user.png" alt="profile" />}
          position="bottom right"
        >
          <div
            style={{
              backgroundColor: "grey",
              padding: "10px",
              borderRadius: "15px 0px 15px 15px",
              opacity: 0.9,
            }}
          >
            <Link
              to={"/profile"}
              style={{
                color: "white",
                cursor: "pointer",
                marginBottom: "20px",
                borderBottom: "1px solid whitesmoke",
                textDecoration: "none",
                fontSize: "25px",
                fontWeight: 700,
              }}
            >
              Edit Profile
            </Link>

            <h2 style={{ color: "white", fontSize: "19px", fontWeight: 500 }}>
              {user.email}
            </h2>
            <button
              style={{
                backgroundColor: "red",
                width: "100%",
                padding: "6px",
                fontSize: "14px",
                fontWeight: 800,
                border: "none",
                cursor: "pointer",
                color: "white",
                marginTop: "15px",
                marginBottom: "15px",
              }}
              onClick={() => auth.signOut()}
            >
              Sign out
            </button>
          </div>
        </Popup>
      </div>
    </div>
  );
};

export default Nav;
