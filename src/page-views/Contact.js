import React from 'react';

import ContactBar from '../components/ContactBar'
import '../styles/Contact.css'



function Contact () {
    
    return (
        <div className="contact">
            <div className="contact-desc">
                <div className="deadpool">
                    <img src="https://raw.githubusercontent.com/swayamraina/swayamraina.github.io/master/resources/images/deadpool.png" alt="deadpool" />
                    <div className="contact-desc-quote">I am so thrilled, <br/> you want to contact me!</div>
                </div>
                <div className="contact-desc-form">
                    <div className="contact-desc-form-block-1">
                        <div>name</div>
                        <input className="contact-desc-form-input" type="text"/>
                    </div>
                    <div className="contact-desc-form-block">
                        <div>email</div>
                        <input className="contact-desc-form-input" type="text"/>
                    </div>
                    <div className="contact-desc-form-block">
                        <div>company</div>
                        <input className="contact-desc-form-input" type="text"/>
                    </div>
                    <div className="contact-desc-form-block">
                        <div>message</div>
                        <textarea className="contact-desc-form-input area" type="text"/>
                    </div>
                    <div className="contact-desc-submit"> submit </div>
                </div>
            </div>
            <ContactBar />
        </div>
    );

}

export default Contact;