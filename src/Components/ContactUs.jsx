import React from 'react'
import './Contact.css';
import Footer from './Footer';

const ContactUs = () => {

    return (
        <div>
            <h1 className='contact-heading'>Let's travel with us</h1>
            <div className="responsive-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.0670726392373!2d88.35892587599764!3d22.50166653556513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0270d861b6d22b%3A0xee3d107a198d3cdf!2sSouth%20City%20Mall!5e0!3m2!1sen!2sin!4v1723869355856!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <div className="contact-section d-flex">
                <div className="contact-info p-4">
                    <h3>Feel free to contact us:</h3>
                    <ul>
                        <p>We're open for any suggestion or just to have a chat</p>
                        <p><strong>Address:</strong> 375, Prince Anwar Shah Rd, South City Complex, Jadavpur, Kolkata, West Bengal 700068</p>
                        <p><strong>Phone:</strong> +91 9051423567</p>
                        <p><strong>Email:</strong> <a href="mailto:info@yoursite.com">shreyabose1477@gmail.com</a></p>
                        <p><strong>Website:</strong> <a href="https://www.yoursite.com">tours&travels.com</a></p>
                    </ul>
                </div>
                <div className="contact-form p-4">
                    {/* <h3>Get in touch</h3> */}
                    <form action="https://formspree.io/f/xgvwzqlg"
                        method="POST"
                    >
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="name">Full Name:</label>
                                <input type="text" className="form-control" id="name" name="username" placeholder="Name" required autoComplete='off' />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="email">Email Address:</label>
                                <input type="email" className="form-control" id="email" name="useremail" placeholder="Email"  required  autoComplete='off' />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject:</label>
                            <input type="text" className="form-control" id="subject" name="subject" placeholder="Subject"  required  autoComplete='off' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea className="form-control" id="message" rows="4" name="message" placeholder="Message"  required  autoComplete='off'></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" >Send Message</button>
                    </form>
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default ContactUs



