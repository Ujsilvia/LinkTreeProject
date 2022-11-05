import React from "react";
import "./Contact.css";

function ContactPage() {
  const variable = "{name}";
  // const contactName = `{${name}}`
  const contactName = `${variable}`
  return (
    <>
      <div id="contact_page">
        <div id="sidebar">
          <h2>Contact Me</h2>
          <p id="description">Hi there, contact me to ask me about anything you have in mind.</p>
          <div>
            <form id="contact_form">
              <div id="name_wrapper">
                <div id="first_name_wrapper">
                  <label for="first_name ">First Name</label>
                  <input
                    id="first_name"
                    placeholder="Enter your first name"
                    type="text"
                    name="First Name"
                  />
                </div>

                <div id="last_name_wrapper">
                  <label for="last_name ">Last Name</label>
                  <input
                    id="last_name"
                    placeholder="Enter your last name"
                    type="text"
                    name="Last Name"
                  />
                </div>
              </div>
              <div>
                <label for="email">Email</label>
                <input
                  id="email"
                  placeholder="yourname@email.com"
                  type="text"
                  name="Email"
                />
              </div>
              <div>
                <label for="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Send me a messege and I'll reply you as soon as possible"
                  type="text"
                  name="Message"
                />
              </div>
              <div id="check">
                <input type="checkbox" id="check__box" required />
                <label for="tick" id="check_label">
                You agree to providing your data to {contactName} who may contact you.
              </label>
              </div>
              <button id="btn__submit">Send message</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
