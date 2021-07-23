import React, { useState, useEffect } from "react";
// import Pool from "../UserPool";
import axios from "axios";

// import Calendar from "../Calendar/MainCalendar";
import "./Scheduling.css";
import "./Form.css";
import { Date as ParseDate } from "prismic-reactjs";
import ToggleButton from "react-bootstrap/ToggleButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
// import Useredit from "../Home/Useredit.jsx";
// import Documents from "../Home/Documents.jsx";
// import Footer from "../Footer/Footer";


const Scheduling = ({ user }) => {
  // const user = auth.user;
  console.log(user)
  const username = user.username;

  // Patient data
  const [pdata, setpData] = useState({});
  const [name, setName] = useState(" ");
  const [address, setAddress] = useState("");
  const [bloodgroup, setBloodGroup] = useState("");
  const [email, setEmail] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [remark, setRemark] = useState("");
  const [pincode, setPincode] = useState("");

  // Appointment data
  const [adata, setaData] = useState({});
  const [time, setTime] = useState("");
  const [userstartTime, setSTuserData] = useState("");
  const [userendTime, setETuserData] = useState("");
  const [patients, setPatients] = useState([]);
  const [selectedP, setSPatient] = useState("");
  const [description, setDescription] = useState("");
  const [doctor, setDoctor] = useState("");
  const [spec, setSpec] = useState("");
  const [patientflag, setPFlag] = useState(false);
  const [appointmentflag, setAFlag] = useState(false);

  const [radioValue, setRadioValue] = useState("");
  const [showappointment, setShowAppointment] = useState(false);
  const [patientform, setPatientform] = useState(true);

  // PUT APIS
  async function fetchData() {
    // const dataPBtn = document.getElementById("addPatient");
    console.log(pdata);
    await axios
      .put(
        `https://2evpm9amnd.execute-api.ap-south-1.amazonaws.com/corsenabled/username/${username}`,
        pdata
      )
      .then((data) => {
        // console.log(data.status);
      })
      // .then((dataPBtn.innerText = "PRESS AGAIN TO CONFIRM"), setPFlag(true))
      .catch((err) => console.log(err.response));

    // if (patientflag) {
    //   window.location.reload(false);
    // }
  }

  async function fetchAppointmentData() {
    const dataABtn = document.getElementById("makeAppointment");
    console.log(adata);
    await axios
      .put(
        `https://hneqayvaq6.execute-api.ap-south-1.amazonaws.com/corsenabled/username/${username}`,
        adata
      )
      .then((data) => {
        // console.log(data.status);
      })
      .then((dataABtn.innerText = "PRESS AGAIN TO CONFIRM"), setAFlag(true))
      .catch((err) => console.log(err.response));

    if (appointmentflag) {
      window.location.reload(false);
    }
  }

  // GET APIS
  React.useEffect(() => {
    setPatients([]);
    axios
      .get(
        `https://1h4yg839q5.execute-api.ap-south-1.amazonaws.com/corsenabled/username/${user.username}`
      )
      .then((resp) => {
        setETuserData(resp.data.Items[0].EndTime.S);
        setSTuserData(resp.data.Items[0].StartTime.S);
        setDoctor(resp.data.Items[0].FullName.S);
        setSpec(resp.data.Items[0].Specialization.S);
      })
      .catch((err) => console.log("API Error ", err, err.request));

    axios
      .get(
        `https://qakd4sv43k.execute-api.ap-south-1.amazonaws.com/corsenabled/username/getall`
      )
      .then((resp) => {
        // console.log(resp.data.body.Items);
        setPatients(resp.data.body.Items);
      })
      .catch((err) => console.log("API Error ", err, err.request));
  }, []);

  // Handlers

  useEffect(() => {
    // console.log(stat);
    setpData({
      ...pdata,
      username: email,
      Address: address,
      Bloodgroup: bloodgroup,
      Email: email,
      FullName: name,
      Height: height,
      Phone: phone,
      Pincode: pincode,
      Remark: remark,
      Weight: weight,
      Age: age,
    });
  }, [
    age,
    email,
    address,
    bloodgroup,
    name,
    height,
    phone,
    pincode,
    remark,
    weight,
  ]);

  async function handleSubmit(event) {
    event.preventDefault();
    setShowAppointment(true);
    setPatientform(false);

    await fetchData();
  }

  useEffect(() => {
    // console.log(stat);
    setaData({
      ...adata,
      username: username,
      Timestamp: ParseDate(Date.now()).toISOString(),
      Description: description,
      P_username: email,
      Time_slot: time,
      status: "scheduled",
      doctorName: doctor,
      specialisation: spec,
    });
  }, [description, email, time]);

  async function handleAppointment(event) {
    event.preventDefault();
    await fetchAppointmentData();
  }

  let drstarthr = parseInt(userstartTime.substring(0, 2));
  let nowhr = new Date().getHours();
  let drstartmin = parseInt(userstartTime.substring(3, 5));
  let nowmin = new Date().getMinutes();

  if (nowhr > drstarthr) {
    var starthr = nowhr;
    var startmin = nowmin;
  } else {
    starthr = drstarthr;
    startmin = drstartmin;
  }

  let endhr = parseInt(userendTime.substring(0, 2));
  let endmin = parseInt(userendTime.substring(3, 5));
  let slotTiming = [];

  if (startmin > 0 && startmin < 15) startmin = 15;
  else if (startmin > 15 && startmin < 30) startmin = 30;
  else if (startmin > 30 && startmin < 45) startmin = 45;
  else if (startmin > 45 && startmin < 60) {
    startmin = 0;
    starthr += 1;
  } else {
    startmin = startmin + 0;
  }

  if (endmin > 0 && endmin < 15) endmin = 0;
  else if (endmin > 15 && endmin < 30) endmin = 15;
  else if (endmin > 30 && endmin < 45) endmin = 30;
  else if (endmin > 45 && endmin < 60) endmin = 45;
  else endmin = endmin + 0;

  var slotcount = 1;
  for (let i = starthr; i <= endhr; i++) {
    if (i === starthr) {
      var j = startmin;
      var l = 60;
    } else if (i === endhr) {
      j = 0;
      l = endmin + 15;
    } else {
      j = 0;
      l = 60;
    }
    for (; j < l; ) {
      if (j === 0) {
        var k = `${i}:${j}0`;
      } else {
        k = `${i}:${j}`;
      }
      slotTiming.push({ slot: k, value: slotcount.toString() });
      slotcount = slotcount + 1;
      j = j + 15;
    }
  }

  return (
    <>
      <div className="formContainer">
        {patientform && (
          <div className="formBox">
            <form className="patient-form">
              <h2 id="patientdetails">Patient Details</h2>

              <div className="labels">
                <label for="name">Full Name: </label>
                <div className="inputwithicon">
                  <input
                    name="fullname"
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="labels">
                <label for="address">Address: </label>
                <div className="inputwithicon">
                  <input
                    name="address"
                    id="address"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="labels">
                <label for="pincode">Pincode: </label>
                <div className="inputwithicon">
                  <input
                    name="pincode"
                    id="pincode"
                    type="text"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="labels">
                <label for="bloodgroup">BloodGroup:</label>
                <div className="inputwithicon">
                  <input
                    name="blood"
                    type="text"
                    id="bloodgroup"
                    value={bloodgroup}
                    onChange={(e) => setBloodGroup(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="labels">
                <label for="email">Email: </label>
                <div className="inputwithicon">
                  <input
                    name="email"
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="labels hw-container">
                <div className="hw">
                  <label for="height">Height:</label>
                  <div className="inputwithicon">
                    <input
                      name="height"
                      type="number"
                      id="height"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="hw">
                  <label for="weight">Weight:</label>
                  <div className="inputwithicon">
                    <input
                      name="weight"
                      type="number"
                      id="weight"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="hw">
                  <label for="Age">Age:</label>
                  <div className="inputwithicon">
                    <input
                      name="Age"
                      type="number"
                      id="age"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="labels">
                <label for="phone">Phone:</label>
                <div className="inputwithicon">
                  <input
                    name="phone"
                    type="text"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="labels">
                <label for="remark">Remarks: </label>
                <div className="inputwithicon">
                  <input
                    name="remark"
                    type="textarea"
                    id="remark"
                    value={remark}
                    onChange={(e) => setRemark(e.target.value)}
                    required
                  />
                </div>
              </div>

              <button
                id="addPatient"
                className="submitbtn"
                onClick={handleSubmit}
              >
                SUBMIT
              </button>
            </form>
          </div>
        )}

        {showappointment && (
          <div className="appointmentbox">
            <form className="patient-form">
              <h2 id="appointmentdetails">Appointment Details</h2>

              <div className="labels">
                <label> Time Slot: </label>
                <div className="slot-div">
                  <ButtonGroup toggle>
                    {slotTiming.map((radio, idx) => (
                      <ToggleButton
                        key={idx}
                        type="radio"
                        className="btn btn-light apt-time-btn"
                        variant="light"
                        name="radio"
                        required
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => {
                          setTime(radio.slot);
                          setRadioValue(e.currentTarget.value);
                        }}
                      >
                        {radio.slot}
                      </ToggleButton>
                    ))}
                  </ButtonGroup>
                </div>
              </div>
              <div
                className="p-apt-details"
                style={{
                  display: "flex",
                  "justify-content": "space-between",
                  width: "100%",
                }}
              >
                <div className="labels">
                  <label> Patient Name: </label> <br />
                  <h5>{name}</h5>
                </div>
                <div className="labels">
                  <label> Patient Email: </label> <br />
                  <h5>{email}</h5>
                </div>
              </div>
              <div className="labels">
                <label>Description:</label>
                <br />
                <textarea
                  name="description"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
                <button
                  onClick={handleAppointment}
                  className="appointmentbtn submitbtn"
                  id="makeAppointment"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        )}
        {/* <div className="calendar formCalendar">
          <Calendar h="260px" />
        </div> */}
        {/* {<Documents auth={auth} />}
        {<Useredit auth={auth} />}
        <div className="footer">
          <Footer row={true} />
        </div> */}
      </div>
    </>
  );
};
export default Scheduling;
