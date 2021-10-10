import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
const Contact = () => {
    return (
        <>
    <Navbar/>
    <div className="thm-container">
         <div className="row">
             <div className="col-md-8">
                 <div className="contact-form-content">
                     <div className="title">
                         <span>Contact with us</span>
                         <h2>Send Message</h2>
                     </div>
                     <form action="" method="post" className="contact-form" novalidate="novalidate">
                         <input type="text" name="name" placeholder="Your full name"/>
                         <input type="text" name="email" placeholder="Your email address"/>
                         <textarea name="message" placeholder="What you are looking for?"></textarea>
                         <button type="submit" className="thm-btn yellow-bg">Submit Now</button>
                         <div className="form-result"></div>
                     </form>
                 </div>
             </div>
             <div className="col-md-4">
                 <div className="contact-info text-center">
                     <div className="title text-center">
                        <span>Contact info</span>
                        <h2>Details</h2>
                     </div>
                     <div className="single-contact-info">
                         <h4>Address</h4>
                         <p>88 New Street, Washington DC <br/> United States, America</p>
                     </div>
                     <div className="single-contact-info">
                         <h4>Phone</h4>
                         <p>Local: 222 999 888 <br/> Mobile: 000 8888 999</p>
                     </div>
                     <div className="single-contact-info">
                         <h4>Email</h4>
                         <p>needhelp@printify.com <br/> inquiry@printify.com</p>
                     </div>
                     <div className="single-contact-info">
                         <h4>Fax</h4>
                         <p>000000000 </p>
                     </div>
                 </div>
             </div>
         </div>
     </div>
<Footer />
</>
    )
}

export default Contact
