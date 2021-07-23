import React, { useState, useEffect, useContext } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
// import { AccountContext } from "./Accounts";
import Login from "./Login";
// import "./logout.css";
// import Pool from "../UserPool";
// import { user } from "../Curuser";
// import { Auth } from "aws-amplify";
import axios from "axios";
import fire from "./fire";
// var user = null;
// const auth = Auth.currentAuthenticatedUser().then((newuser) => {
//   user = newuser;
// //   console.log(user);
// });

function Status({ user,setUser }) {
  // const user = auth.user;
  // console.log(user)
  // const [status, setStatus] = useState(true);
  const [fullname, setFullname] = useState("");
  // const { getSession, logout } = useContext(AccountContext)

  // const user = Pool.getCurrentUser();
  const handleLogout = () => {
    fire.auth().signOut();
    setUser(null)
  };

  return (
    <div>
      {user ? (
        <div>
          {/* <div className="login__bg"></div> */}
          <div id="back" title="Home">
            <NavLink exact to="/" className="back-btn">
              <IoIosArrowBack size={40} />
              <span>HOME</span>
            </NavLink>
          </div>

          <div id="logout">
            <p>
              <span>{fullname}</span>, you are currently logged in!
              <br />
              Do you want to logout?
            </p>
            <form>
              <button id="logout_btn" type="submit" onClick={handleLogout}>
                LOGOUT
              </button>
            </form>
          </div>
        </div>
      ) : (
        <Login user={user} />
      )}
    </div>
  );
}

export default Status;
