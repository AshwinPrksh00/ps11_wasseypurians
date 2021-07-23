import { FaMapMarkerAlt } from "react-icons/fa";
import avatarmale from "./imgs/male.jpg";
import avatarfemale from "./imgs/female.jpg";
import "./booking.css";

const BookingSummary = () => {
  return (
    <div className="card booking-card">
      <div className="card-header">
        <h4 className="card-title">Appointment Summary</h4>
      </div>
      <div className="card-body">

        <div className="booking-doc-info">
          <a href="doctor-profile.html" className="booking-doc-img">
            <img src={avatarmale} alt={"name"} />
          </a>
          <div className="booking-info">
            <h4><a href="doctor-profile.html">{"DoctorName"}</a></h4>
            <div className="rating">
              Specialist Doctor
                </div>
            <div className="clinic-details">
              <p className="doc-location"><FaMapMarkerAlt /> {"org"}</p>
            </div>
          </div>
        </div>

        <div className="booking-summary">
          <div className="booking-item-wrap">
            <ul className="booking-date">
              <li>Day &amp; Date <span>{new Date().toLocaleDateString('en-us', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' })}</span></li>
              <li>Time <span>{"time"}</span></li>
            </ul>
            <ul className="booking-fee">
              <li>Consulting Fee <span>$---</span></li>
              <li>Booking Fee <span>$--</span></li>
              <li>Video Call <span>$--</span></li>
            </ul>
            <div className="booking-total">
              <ul className="booking-total-list">
                <li>
                  <span>Total</span>
                  <span className="total-cost">$---</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingSummary;