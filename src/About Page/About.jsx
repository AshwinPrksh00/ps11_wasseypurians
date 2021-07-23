import React from "react";
import fire from "../fire";
import "./about.css";
// import "./fullpage.min.css";
// import 'script.js'
// import 'fullpage.min.js'

const About = () => {
//   const handleLogout = () => {
//     fire.auth().signOut();
//     setUser(null);
//   };

  return (
    <>
      <div class="row">
        <h1>Creators</h1>
        <div class="container">
          <div class="card">
            <div class="face face1">
              <div class="content">
                <div class="icon">
                  <img src="./images/user1.jpg" alt="" />
                </div>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <h3>Vishal Kumar</h3>
                <p>SRM-KTR</p>
                <p>Full Stack Developer</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="face face1">
              <div class="content">
                <div class="icon">
                  <img src="./images/user2.jpg" alt="" />
                </div>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <h3>Ashwin Prakash</h3>
                <p>SRM-KTR</p>
                <p>Web Designer</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="face face1">
              <div class="content">
                <div class="icon">
                  <img src="./images/user3.jpg" alt="Dev" />
                </div>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <h3>Dev Kumar</h3>
                <p>SRM-KTR</p>
                <p>Backend Developer</p>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="card">
            <div class="face face1">
              <div class="content">
                <div class="icon">
                  <img src="./images/user4.jpg" alt="" />
                </div>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <h3>Sahaj Ghatiya</h3>
                <p>SRM-KTR</p>
                <p>Full Stack Developer</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="face face1">
              <div class="content">
                <div class="icon">
                  <img src="./images/user5.jpg" alt="" />
                </div>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <h3>Shinjinee Maiti</h3>
                <p>SRM-KTR</p>
                <p>Backend Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
