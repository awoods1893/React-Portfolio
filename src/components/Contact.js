import React, {useRef} from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
const form= useRef();
const serviceID = "service_ID"
const templateID = "template_ID"
const publicKey = "nIRBKR2aFrgmboRlG"

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(serviceID, templateID, form.current, publicKey)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
            });
        };
        
        return (
    <div className="contact bg-secondary">
        <div className="text-center">
        <h1>Contact Me</h1>
        <p>Please fill out the form below. I'd love to hear from you!</p>
        </div>
        <div className="container">
      <form onSubmit={sendEmail}>

            <div className="row">
                <div className="col-md-6 col-xs-12">
                    <input
                    id="name"
                    type="text" 
                    className="form-control"
                    placeholder="Name"
                    name="name"
                    />
                    <input 
                    id="email"
                    type="email"
                    className="form-control"
                    placeholder="Email address"
                    name="email"
                    />
                <input 
                    id="subject"
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    name="subject"
                    />

                </div>
                <div className="col-md-6 col-xs-12">
                    <textarea
                    type="text"
                    className="form-control"
                    placeholder="Message"
                    name="message"
                    ></textarea>
                    <button className="btn bg-light" type="submit">Contact Me</button>
                </div>
            </div>
                    </form>
        </div>
        </div>
       

       
  )
};

export default Contact