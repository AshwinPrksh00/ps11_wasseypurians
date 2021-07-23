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
        <div class="logo">
          <img
            src="https://cdn.pixabay.com/photo/2021/03/16/20/22/heartbeat-6100893_960_720.png"
            alt=""
          />
          <p>Doctors Door</p>
        </div>
        {/* <div class="bd1">
          <div class="hero">
            <div id="searchBox">
              <i class="fa fa-search fa-2x" id="searchIcon"></i>
              <input type="text" className="input" placeholder="Search..." />
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
        <section class="section s1">
          <div class="cont-card">
            <figure class="image-block">
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
          <div class="options-menu">
            <div>
              <i class="fas fa-calendar-check"></i>
              <a href="/">Book an Appointment</a>
            </div>
            <div>
              <i class="fas fa-search-plus"></i>
              <a href="/doctors">Find a Doctor</a>
            </div>
            <div>
              <i class="far fa-hospital"></i>
              <a href="/">Check Nearby Hospitals</a>
            </div>
            <div>
              <i class="fas fa-syringe"></i>
              <a href="/">Vaccination Timings</a>
            </div>
          </div>
        </section>
        <section class="section s4">
          <div class="content-4">
            <div class="head2">
              <h2>Departments</h2>
            </div>
            <div class="row-1">
              <div class="box">
                <div class="our-services settings">
                  <div class="icon">
                    <img src="./images/1.png" alt="images"/>
                    <img class="fasn" src="./images/ent.png" alt="images"/>
                  </div>
                  <h4>ENT Specialist</h4>
                  <p>Swimmer's ear | Otosclerosis</p>
                </div>
              </div>
              <div class="box">
                <div class="our-services speedup">
                  <div class="icon">
                    <img src="./images/settings1.png" alt="images" />
                    <img class="fasn" src="./images/baby.png" alt="images"/>
                  </div>
                  <h4>Paediatrician</h4>
                  <p> Chickenpox | Conjunctivitis</p>
                </div>
              </div>
              <div class="box">
                <div class="our-services privacy">
                  <div class="icon">
                    {" "}
                    <img src="./images/2.png" />
                    <img class="fasn" src="./images/brain2.png" />{" "}
                  </div>
                  <h4>Neurologist</h4>
                  <p>Alzheimer's | Epilepsy</p>
                </div>
              </div>
            </div>
            <div class="row-2">
              <div class="box">
                <div class="our-services backups">
                  <div class="icon">
                    {" "}
                    <img src="./images/3.png" />
                    <img class="fasn" src="./images/ortho2.png" />
                  </div>
                  <h4>Orthopaedics</h4>
                  <p>Osteoarthritis | Tennis Elbow</p>
                </div>
              </div>
              <div class="box">
                <div class="our-services ssl">
                  <div class="icon">
                    {" "}
                    <img src="./images/4.png" />
                    <img class="fasn" src="./images/heart.png" />
                  </div>
                  <h4>Cardiologist</h4>
                  <p>Cardiomyopathy | Rheumatic</p>
                </div>
              </div>
              <div class="box">
                <div class="our-services database">
                  <div class="icon">
                    {" "}
                    <img src="./images/dent.png" />
                    <img class="fasn" src="./images/dental.png" />{" "}
                  </div>
                  <h4>Dental</h4>
                  <p>Periodontitis | Cavities</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="section s3">
          <div class="head2">
            <h2>Our Services</h2>
          </div>
          <div class="container">
            <div class="card">
              <div class="box">
                <div class="content">
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

            <div class="card">
              <div class="box">
                <div class="content">
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

            <div class="card">
              <div class="box act">
                <div class="content">
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
