import { FaCheck } from "react-icons/fa";
import { useLocation } from "react-router";
import { Link } from 'react-router-dom';
import "./booking.css";
const BookingDone = () => {
  // const { state } = useLocation();

  return (
    <div className="row justify-content-center">
      <div className="col-lg-7">
        <div className="card success-card">
          <div className="card-body">
            <div className="success-cont">
              <i><FaCheck /></i>
              <h3>Appointment booked Successfully!</h3>
              <hr />
              <p>Appointment booked with<br /><strong>{""}</strong><br /> on <strong>{new Date().toLocaleDateString('en-us', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</strong> <br />from<br /><strong>{"now"}</strong></p>
              {/* <hr /> */}
              <p>Appointment booked for
                <br /><strong>PatientName</strong>
                <br />Email: {"sahaj1234@gmail.com"}
                <br />Phone: {"6232883113"}
                {/* <br />{state.patientInfo.pretext ? `Pretext: ${state.patientInfo.pretext}` : ''} */}
              </p>
              <div>
                <button className="btn btn-lg btn-warning btn-reminder">
                  🔔 <strong>Don't Forget</strong> to show up!
                </button>
              </div>
              <br />
              <Link to="/instantchat" className="btn btn-rounded btn-light">Chat Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingDone;
