import logo from "./logo.svg";
import "./login.css";
import React, { useEffect, useState } from "react";
import fire from "./fire";
import { useRecoilState } from "recoil";
import { doctororpatient } from "./globalState";
const Login = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };
  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const authListner = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser(null);
      }
    });
  };
  useEffect(() => {
    authListner();
  }, []);

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        window.location.replace("/");
      })
      .catch((err) => {
        // eslint-disable-next-line default-case
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        // eslint-disable-next-line default-case
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            // case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  return (
    <section className="login">
      <div className="loginContainer">
        <label>Username</label>
        <input
          type="email"
          outoFocus
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <p className="errorMsg">{emailError}</p>

        <label>Password</label>
        <input
          type="password"
          //   outoFocus
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button className="button" onClick={handleLogin}>Sign in</button>
              <p>
                Don't have an account ?{" "}
                <span onClick={() => setHasAccount(!hasAccount)}>Signup</span>
              </p>
              {/* <input type="checkbox" name="doctor" value="doctor">
                Signup as Doctor
              </input>
              <input type="checkbox" name="patient" value="patient">
                Signup as Patient
              </input> */}
            </>
          ) : (
            <>
              <button className="button" onClick={handleSignup}>Sign up</button>
              <p>
                Have an account ?{" "}
                <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
              </p>
              {/* <input type="checkbox" name="doctor" value="doctor">
                Signup as Doctor
              </input>
              <input type="checkbox" name="patient" value="patient">
                Signup as Patient
              </input> */},
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
