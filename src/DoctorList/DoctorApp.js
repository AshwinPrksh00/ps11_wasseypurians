import "./doctor.css";
// import menu from "./data";
import React, { useState } from "react";
import Doctor from "./Doctor";

function DoctorApp() {
  // const [doctorList, setDoctorList] = useState(menu);
  return (
    <div>
      <Doctor />
    </div>
  );
}

export default DoctorApp;
