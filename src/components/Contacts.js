import React from "react";
import "./Contact.css"


function ContactPage() {
    return (
      <>
      <div id="contact_page">
        <div id="sidebar">
          <h1>Contact Me</h1>
          <p>Hi there, contact me to ask me about anything you have in mind.</p>
          <div>
            <form>
                <label for="first_name ">First Name</label>
              <input
                id='first_name'
                placeholder="Enter your first name"
                type="text"
                name="First Name"
              />

               <label for="last_name ">Last Name</label>
               <input
                id='last_name'
                placeholder="Enter your last name"
                type="text"
                name="Last Name"
              />   
        
              
               <label for="email">Email</label>
               <input
                id='email'
                placeholder="yourname@email.com"
                type="text"
                name="Email"
              />
      
              <label for="message">Message</label>
              <textarea 
                id='message'
                placeholder="Send me a messege and i'll reply you as soon as possible"
                type="text"
                name="Message"
               /> 

                <input type="checkbox" id="check__box" required/>
              <label for= "tick" >You agree to providing your data to {} who may contact you.</label>

            <button id='btn__submit'>Send message</button>
              
            </form>
            
          </div>
        </div>
        </div>
        
      </>
    );
  }

  export default ContactPage;