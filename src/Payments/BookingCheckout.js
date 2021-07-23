import { useLocation } from "react-router";
import BookingForm from "./BookingForm";
import BookingSummary from "./BookingSummary";
import "./booking.css";
const BookingCheckout = () => {
  // const { state } = useLocation();
  return (
    <div className="row">

      <div className="col-md-7 col-lg-8">
        <div className="card">
          <div className="card-body">
            <BookingForm />
          </div>
        </div>
      </div>

      {/* <div className="col-md-5 col-lg-4">
        <BookingSummary />
      </div> */}

    </div>
  )
}

export default BookingCheckout;