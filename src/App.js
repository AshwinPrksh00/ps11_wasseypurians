import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import fire from "./fire";
import Login from "./Login";
import Hero from "./Hero";
import About from "./About Page/About";
// import Appointment from "./Appointments/Appointment";
// import Calendar from "./Calendar/Calendar";
import OfflineReg from "./Offline/OfflineReg";
// import Patients from "./Patients/Patients";
import DoctorApp from "./DoctorList/DoctorApp"
import ChatApp from "./ChatApp"
import {
  Switch,
  Route,
  Redirect,
  Link,
  BrowserRouter as Router,
} from "react-router-dom";
import Status from "./Status";
import LandingPage from "./LandingPage/LandingPage";
import  BookingCheckout from "./Payments/BookingCheckout"
import BookingDone from "./Payments/BookingDone"
const App = () => {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const authListner = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        // console.log(user);
        setUser(user);
        setAuthenticated(true);
      } else {
        setUser(null);
        setAuthenticated(false);
      }
    });
  };
  useEffect(() => {
    authListner();
  }, [user]);
 
  return (
    <>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) =>
                <LandingPage
                  user={user}
                  setUser={setUser}
                  setAuthenticated={setAuthenticated}
                />
            }
          />
          <Route
            exact
            path="/about"
            render={(props) =>
                <About/>
            }
          />
          {/* <Route
            exact
            path="/calendar"
            render={(props) =>
              user ? (
                <Calendar user={user} />
              ) : (
                <Status user={user} setUser={setUser} />
              )
            }
          />
          <Route
            exact
            path="/appointment"
            render={(props) =>
              user ? (
                <Appointment user={user} />
              ) : (
                <Status user={user} setUser={setUser} />
              )
            }
          /> */}
          <Route
            exact
            path="/instantchat"
            render={(props) =>
              user ? (
                <ChatApp user={user} />
              ) : (
                <Status user={user} setUser={setUser} />
              )
            }
          />
          <Route
            exact
            path="/payment"
            render={(props) =>
              user ? (
                <BookingCheckout user={user} />
              ) : (
                <Status user={user} setUser={setUser} />
              )
            }
          />
          <Route
            exact
            path="/confirm"
            render={(props) =>
              user ? (
                <BookingDone />
              ) : (
                <Status user={user} setUser={setUser} />
              )
            }
          />
          <Route
            exact
            path="/doctors"
            render={(props) =>
              user ? (
                <DoctorApp user={user} />
              ) : (
                <Status user={user} setUser={setUser} />
              )
            }
          />
          <Route
            exact
            path="/offline"
            render={(props) =>
              user ? (
                <OfflineReg user={user} />
              ) : (
                <Status user={user} setUser={setUser} />
              )
            }
          />
          <Route
            exact
            path="/login"
            render={(props) => <Status user={user} setUser={setUser} />}
          />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
};

export default App;
