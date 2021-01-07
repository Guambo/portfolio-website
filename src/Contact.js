import React, { useState } from 'react';
import './Contact.css';
import contactImage from './contactImage.jpg';

function Contact() {
    const [fname, updateFname] = useState("");
    const [lname, updateLname] = useState("");
    const [email, updateEmail] = useState("");
    const [phone, updatePhone] = useState("");
    const [feedback, updateMessage] = useState("");
    // Vars for EmailJS
    const templateId = "template_iabq0mc";
    const service = "service_01wy4s5"

    const sendFeedback = (variables) => {
        window.emailjs.send(
            service, templateId, variables
        )
        .then(res => {
            console.log("Email successfully sent!");
        })
        .catch(err => 
            console.error("Failed to send email.")
        );
    }

    const handleSubmit = () => {
        // Check that all fields are filled
        if (fname === "" || lname === "" || feedback === "" || phone === "" || email === "") {
            // console.log("All fields must be filled out");
            return;
        }

        const name = fname + " " + lname;
        
        sendFeedback({
            from_name: name,
            message: feedback,
            phone_number: phone, 
            reply_to: email,
        });
    }

    return (
        <div className="contact" id="contact">
            <div className="contact__backgroundImage"></div>
            <div className="contact__form">
                <img src={ contactImage } />
                <div className="contact__form__header">
                    <h1>Contact</h1>
                    <div className="contact__form__headerInfo">
                        <h4>nvallejos123@gmail.com</h4>
                        <h4>914.860.6541</h4>
                    </div>
                </div>
                <form className="contact__form__input" action="mailto:nvallejos123@gmail.com" method="post" enctype="text/plain">
                    <p>First Name</p>
                    <input type="text" onChange={(e) => updateFname(e.target.value)} required></input>
                    <p>Last Name</p>
                    <input type="text" onChange={(e) => updateLname(e.target.value)} required></input>
                    <p>Email</p>
                    <input type="text" onChange={(e) => updateEmail(e.target.value)} required></input>
                    <p>Phone</p>
                    <input type="text" onChange={(e) => updatePhone(e.target.value)} required></input>
                    <p>Message</p>
                    <textarea 
                        id="Message"
                        name="Message" 
                        rows="10" 
                        cols="22" 
                        placeholder="Enter your message" 
                        required
                        onChange={(e) => updateMessage(e.target.value)}
                    >
                    </textarea>
                    <button onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;
