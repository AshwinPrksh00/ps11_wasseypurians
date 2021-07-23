import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from 'react-router-dom';
import "./booking.css"
const BookingForm = () => {

  return (
    <form>
      {/* <div className="info-widget">
        <h4 className="card-title">Personal Information</h4>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="form-group card-label">
              <label htmlFor="fName">First Name</label>
              <input className="form-control" name="firstName" id="fName" type="text"/>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="form-group card-label">
              <label htmlFor="lName">Last Name</label>
              <input className="form-control" name="lastName" id="lName" type="text" />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="form-group card-label">
              <label htmlFor="email">Email</label>
              <input className="form-control" name="email" id="email" type="email" />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="form-group card-label">
              <label htmlFor="phone">Phone</label>
              <input className="form-control" name="phone" id="phone" type="text" />
            </div>
          </div>
          <div className="col-sm-12">
            <div className="form-group card-label">
              <label htmlFor="pretext">Pretext of Current Health Issues (optional)</label>
              <textarea className="form-control" name="pretext" id="pretext" >{"patientInfo"}</textarea>
            </div>
          </div>
        </div>
      </div> */}

      <div className="payment-widget">
        <h4 className="card-title">Payment Method <span className='text-muted'>[ Dummy Section ]</span></h4>
        <div className="payment-list">
          <label className="payment-radio credit-card-option">
            <input type="radio" name="radio" checked />
            <span className="checkmark"></span>
                    Credit card
                  </label>
          <div className="input-row">
            <div className="col-md-6">
              <div className="form-group card-label">
                <label htmlFor="card_name">Name on Card</label>
                <input className="form-control" id="card_name" type="text" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group card-label">
                <label htmlFor="card_number">Card Number</label>
                <input className="form-control" id="card_number" placeholder="1234  5678  9876  5432" type="text" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group card-label">
                <label htmlFor="expiry_month">Expiry Month</label>
                <input className="form-control" id="expiry_month" placeholder="MM" type="text" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group card-label">
                <label htmlFor="expiry_year">Expiry Year</label>
                <input className="form-control" id="expiry_year" placeholder="YY" type="text" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group card-label">
                <label htmlFor="cvv">CVV</label>
                <input className="form-control" id="cvv" type="text" />
              </div>
            </div>
          </div>
        </div>
        <div className="payment-list">
          <label className="payment-radio paypal-option">
            <input type="radio" name="radio" />
            <span className="checkmark"></span>
                    Paypal
          </label>
        </div>

        <div className="terms-accept">
          <div className="custom-checkbox">
            <input type="checkbox" id="terms_accept" onClick={() => {}} />
            <label htmlFor="terms_accept" >&nbsp;I have read and accept <span className="disabled">Terms &amp; Conditions</span></label>
          </div>
        </div>

        <div className="submit-section mt-4">
          <Link to="/confirm">Confirm and Pay</Link>
        </div>

      </div>
    </form>
  );
}
export default BookingForm;