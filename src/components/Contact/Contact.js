import React from 'react';
import emailjs from 'emailjs-com';
require('dotenv').config();

const {YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_USER_ID} = process.env
// console.log(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_USER_ID)


const Contact = () => {
    
    function sendEmail(e) {
        e.preventDefault();
    

    emailjs.sendForm(`${YOUR_SERVICE_ID}`, `${YOUR_TEMPLATE_ID}`, e.target, `${YOUR_USER_ID}`)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }
    

        return <div className="contact">
            <address>
                Email: <a href="mailto:joshsmiller1022@gmail.com?subject=I just saw your portfolio">joshsmiller1022@gmail.com</a>
                <br></br>
                Contact me on Linkedin: <a href="https://www.linkedin.com/in/joshua-s-miller/" target="_blank" rel="noreferrer noopener">Josh Miller</a>
                <br></br>
                Contact me on Discord: <br></br>Josh Miller#6247
            </address>
            <div className="form">
                <form className="contact-form" onSubmit={sendEmail}>
                    <h2>CONTACT</h2>
                    <input type="text" id="name" placeholder="Name"/>
                    <input type="email" id="email" placeholder="Email"/>
                    <textarea id="message" placeholder="Message" cols="30" rows="10"></textarea>
                    <input type="submit" className="submit" value="Send Message"></input>
                </form>
            </div>
        </div>
    
}

export default Contact;