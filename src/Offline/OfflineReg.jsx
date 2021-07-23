import React from 'react';
// import Sidebar from '../Sidebar/Sidebar'
import Scheduling from './Scheduling'
// import Navbar from "../Navbar/Navbar";

const OfflineReg = ({user})=>{
    return (
      <>
        <div className="appContainer">
          <div className="add-patients-heading-text">
            <h1>Add Appointments</h1>
          </div>
          <div className="home">
            <Scheduling user={user} />
          </div>
        </div>
      </>
    );
}
export default OfflineReg;