import React from 'react'
import "./GetInTouch.css"

const GetInTouch = () => {
  return (
    <>
    <div className='GiT-div'>
       <div className="contact-box">
        <div className="contact-heading">Get in touch</div>
        <div className="contact-text">
          <p>
            Our team of regional experts is here to support you with your global expansion plans.
            If you have any questions, just get in touch, and we will be delighted to help.
          </p>
        </div>
        <form className="contact-form">
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="firstName">
                First Name <span style={{ color: 'red' }}> *</span>
              </label>
              <input type="text" id="firstName" name="firstName" required />
            </div>
            <div className="form-field">
              <label htmlFor="lastName">
                Last Name<span style={{ color: 'red' }}> *</span>
              </label>
              <input type="text" id="lastName" name="lastName" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field full-width">
              <label htmlFor="organization">Organization<span style={{ color: 'red' }}> *</span></label>
              <input type="text" id="organization" name="organization" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="email">Email<span style={{ color: 'red' }}> *</span></label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-field">
              <label htmlFor="phoneNumber">Phone Number<span style={{ color: 'red' }}> *</span></label>
              <input type="tel" id="phoneNumber" name="phoneNumber" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field full-width">
              <label htmlFor="message">How can we help and what are your challenges?<span style={{ color: 'red' }}> *</span></label>
              <textarea id="message" name="message" rows="4" required></textarea>
              <p className="form-note">
                We normally respond within 24 hours. If you havenot received anything, check your spam folder.
              </p>
            </div>
          </div>
          <div className="form-row">
            <div className="form-field full-width">
              <button className="submit-form" type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
      </div>
    </>
    )
}

export default GetInTouch