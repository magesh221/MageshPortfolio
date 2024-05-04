import React from "react";

const Form = () => {
  return (
    <form>
      <div className="contact_form">
        <div className="contact_two">
          <div className="contact_input">
            <input
              type="text"
              placeholder="Name"
              className="contact_box"
            ></input>
          </div>
          <div className="contact_input">
            <input
              type="email"
              placeholder="Email"
              className="contact_box"
            ></input>
          </div>
        </div>
        <div className="contat_single">
          <div className="contact_input">
            <input
              type="text"
              placeholder="Subject"
              className="contact_box"
            ></input>
          </div>
        </div>
        <div className="contat_single">
          <div className="contact_input">
            <textarea
              type="text"
              placeholder="Your Message"
              className="contact_box height_area"
            ></textarea>
          </div>
        </div>
        <div className="contat_single">
          <div className="contact_input">
            <button type="submit" className="contact_submit">
              <span className="contact_span">Send A Message</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
