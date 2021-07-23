import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { db } from "../fire";

const Doctor = () => {
  const [doctorsDetails, setdoctorsDetails] = useState([]);
  const [search,setSearch]  = useState("");
  useEffect(() => {
    //load doctors into doctorsList
    const doctors = [];
    db.collection("DoctosDB")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doctor) => {
          doctors.push(doctor.data());
        });
        setdoctorsDetails(doctors);
      });
  }, []);

  return (
    <div className="section-center">
    <div>
      <h1>Search Doctors</h1>
      <input type="text" placeholder="Search here..." className="searchDoctor" value={search} onChange={(e)=>{setSearch(e.target.value)}}></input>
    </div>
      {doctorsDetails.filter((data)=>{
        console.log(data)
        {/* if(data.b) */}
        if (
          data.Bio.toLowerCase().includes(search) ||
          data.specialization.toLowerCase().includes(search) ||
          data.Degree.toLowerCase().includes(search) ||
          data.Name.toLowerCase().includes(search)
        ) {
          return data;
        }
        {/* return data */}
      }).map((doctorList) => {
        const { id, Name, img, Bio, DoctorFees, specialization,Degree } = doctorList;
        return (
          <article key={id} className="doctor-list">
            <img src={img} alt={Name} className="photo" />
            <div className="doctor-info">
              <header>
                <h4>{Name}</h4>
                <p className="">
                  <strong>Specialization:</strong>
                  {specialization}
                </p>
                <p className=""><strong>Degree:</strong>{Degree}</p>
                <div>
                  <h4 className="price">${DoctorFees}</h4>
                  <a href="/instantchat">
                    <Button variant="outlined" color="primary">
                      Chat Now
                    </Button>
                  </a>
                </div>
              </header>
              <p className="doctor-text">Bio:{Bio}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Doctor;
