import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import tetrisIcon from "../assets/tetris.jpeg";
const Privacy = () => {
    return (
        <>
        <Navbar/>
            <div className="container">
            <div className="row mb50">  <div className="col-md-12">
        <h2>Privacy & Policy </h2>
<p>Discussion , Inc. ("we", "us" or “our”) recognizes the importance of respecting the privacy of those who visit this website.  This Privacy Policy describes how we collect and use your information and gives you choices as to how we use it.  We welcome you to review this Privacy Policy periodically as we may update it from time to time.</p>
<br/>
<p>Data protection is a very high priority for us. Use of this website is possible without any indication of Personal Data (as defined below); however, if a Data Subject (as defined below) wants to use certain services via our website, Processing (as defined below) of Personal Data may become necessary. If the Processing of Personal Data is necessary and there is no statutory basis for such Processing, we generally obtain the Data Subject’s Consent (as defined below).

</p>     </div></div>
   <div class="row mb50">
		<div class="col-md-7">
		    <p class="text-justify"> The Processing of Personal Data, such as the name, address, e-mail address, or telephone number of a Data Subject shall always be in line with the General Data Protection Regulation (“GDPR”), and in accordance with the country-specific data protection regulations applicable to us. By means of this data protection declaration, we would like to inform the general public of the nature, scope, and purpose of the Personal Data we collect, use and Process. Further, through this data protection declaration, Data Subjects are informed of the rights to which they are entitled. <br/><br/>
            As the Controller (as defined below), we have implemented numerous technical and organizational measures to ensure the most complete protection of Personal Data Processed through this website. However, Internet-based data transmissions may have security gaps, so absolute protection may not be guaranteed. For this reason, every Data Subject is free to transfer Personal Data to us via alternative means (e.g. by telephone). </p>
		</div>
		<div class="col-md-5">
		    <img src={tetrisIcon} alt=""/>
		</div>
	</div>
    </div>
    <Footer />
    </>
    )
}

export default Privacy
