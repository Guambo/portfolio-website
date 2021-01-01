import React from 'react';
import './Contact.css';
import contactImage from './contactImage.jpg';

function Contact() {
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
                <form className="contact__form__input">
                    <p>First Name</p>
                    <input type="text" required></input>
                    <p>Last Name</p>
                    <input type="text" required></input>
                    <p>Email</p>
                    <input type="text" required></input>
                    <p>Phone</p>
                    <input type="text" required></input>
                    <p>Message</p>
                    <textarea name="Enter message..." rows="10" cols="22" placeholder="Enter your message" required></textarea>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;
