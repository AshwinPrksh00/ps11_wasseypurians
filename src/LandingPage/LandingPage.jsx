/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import fire from "../fire";
import "./landing.css";
import "./fullpage.min.css";
// import 'script.js'
// import 'fullpage.min.js'

const Hero = ({ user, setUser }) => {
  const handleLogout = () => {
    fire.auth().signOut();
    setUser(null);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img
            src="https://cdn.pixabay.com/photo/2021/03/16/20/22/heartbeat-6100893_960_720.png"
            alt=""
          />
          <p>Doctors Door</p>
        </div>
        {/* <div className="bd1">
          <div className="hero">
            <div id="searchBox">
              <i className="fa fa-search fa-2x" id="searchIcon"></i>
              <input type="text" classNameName="input" placeholder="Search..." />
            </div>
          </div>
        </div> */}
        <ul>
          <li>
            <a href="/about" className="nav-links">
              About
            </a>
          </li>
          {user ? (
            <li>
              <a onClick={handleLogout}  className="nav-links">
                Logout
              </a>
            </li>
          ) : (
            <li>
              <a href="/login" className="nav-links">
                Sign Up/ Login
              </a>
            </li>
          )}
        </ul>
      </nav>
      <div id="fullpage">
        <section className="section s1">
          <div className="cont-card">
            <figure className="image-block">
              <h2>Corona Safety Guidelines</h2>
              <figcaption>
                <h3>More Info</h3>
                <ul>
                  <li>Wear Masks at all Times</li>
                  <li>Never wander out Unnessesarily</li>
                </ul>
                <button>More Info</button>
              </figcaption>
            </figure>
          </div>
          <div className="options-menu">
            <div>
              <i className="fas fa-calendar-check"></i>
              <a href="https://doctor-door.herokuapp.com/">Book an Appointment</a>
            </div>
            <div>
              <i className="fas fa-search-plus"></i>
              <a href="/doctors">Find a Doctor</a>
            </div>
            <div>
              <i className="far fa-hospital"></i>
              <a href="https://www.google.com/maps/search/hospital+near+me" target="_blank">Check Nearby Hospitals</a>
            </div>
            <div>
              <i className="fas fa-syringe"></i>
              <a href="https://www.cowin.gov.in/" target="_blank">Vaccination Timings</a>
            </div>
          </div>
        </section>
        <section className="section s4">
          <div className="content-4">
            <div className="head2">
              <h2>Departments</h2>
            </div>
            <div className="row-1">
              <div className="box">
                <div className="our-services settings">
                  <div className="icon">
                    <img src="./images/1.png" alt="images"/>
                    <img className="fasn" src="./images/ent.png" alt="images"/>
                  </div>
                  <h4>ENT Specialist</h4>
                  <p>Swimmer's ear | Otosclerosis</p>
                </div>
              </div>
              <div className="box">
                <div className="our-services speedup">
                  <div className="icon">
                    <img src="./images/settings1.png" alt="images" />
                    <img className="fasn" src="./images/baby.png" alt="images"/>
                  </div>
                  <h4>Paediatrician</h4>
                  <p> Chickenpox | Conjunctivitis</p>
                </div>
              </div>
              <div className="box">
                <div className="our-services privacy">
                  <div className="icon">
                    {" "}
                    <img src="./images/2.png" />
                    <img className="fasn" src="./images/brain2.png" />{" "}
                  </div>
                  <h4>Neurologist</h4>
                  <p>Alzheimer's | Epilepsy</p>
                </div>
              </div>
            </div>
            <div className="row-2">
              <div className="box">
                <div className="our-services backups">
                  <div className="icon">
                    {" "}
                    <img src="./images/3.png" />
                    <img className="fasn" src="./images/ortho2.png" />
                  </div>
                  <h4>Orthopaedics</h4>
                  <p>Osteoarthritis | Tennis Elbow</p>
                </div>
              </div>
              <div className="box">
                <div className="our-services ssl">
                  <div className="icon">
                    {" "}
                    <img src="./images/4.png" />
                    <img className="fasn" src="./images/heart.png" />
                  </div>
                  <h4>Cardiologist</h4>
                  <p>Cardiomyopathy | Rheumatic</p>
                </div>
              </div>
              <div className="box">
                <div className="our-services database">
                  <div className="icon">
                    {" "}
                    <img src="./images/dent.png" />
                    <img className="fasn" src="./images/dental.png" />{" "}
                  </div>
                  <h4>Dental</h4>
                  <p>Periodontitis | Cavities</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section s3">
          <div className="head2">
            <h2>Our Services</h2>
          </div>
          <div className="container">
            <div className="card">
              <div className="box">
                <div className="content">
                  <h2>01</h2>
                  <h3>Symptom Checker</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore, totam velit? Iure nemo labore inventore?
                  </p>
                  <a
                    href="https://symp-disease.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="box">
                <div className="content">
                  <h2>02</h2>
                  <h3>Ambulance Services</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore, totam velit? Iure nemo labore inventore?
                  </p>
                  <a
                    href="https://medulance.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check Out
                  </a>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="box act">
                <div className="content">
                  <h2>03</h2>
                  <h3>Live ECG Machine</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore, totam velit? Iure nemo labore inventore?
                  </p>
                  <a
                    href="https://www.portea.com/labs/diagnostic-tests/electrocardiogram-ecg-ekg-104/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check Out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
