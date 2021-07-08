import React from 'react';
import emailjs from 'emailjs-com';
import secret from '../../secret';
// console.log(secret)

const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(secret.SERVICE_ID, secret.TEMPLATE_ID, e.target, secret.USER_ID)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div className="contact">
            <div className="status-bar">
                <p>
                    <span className="one">Status</span>
                    <br></br>
                    <span className="two">Available</span>
                    <br></br>
                    <span className="three">I'm currently taking on new projects!</span>
                </p>
            </div>

            <form className="contact-form" onSubmit={sendEmail}>
                <input type="hidden" name="contact_number" />
                <div className="form-top">
                    <div className="form-item">
                        <label>Name</label>
                        <input type="text" name="user_name" />
                    </div>
                    <div className="form-item">
                        <label>Email</label>
                        <input type="email" name="user_email" />
                    </div>
                </div>
                <div className="form-item form-full">
                    <label>How can I help?</label>
                    <textarea name="message" />
                </div>
                <input className="submitBtn" type="submit" value="Send Message" />
            </form>
        </div>
    );
}

export default Contact;