import React,{useState} from 'react'
import {Link} from "react-router-dom";
import { addDoc, collection, getFirestore, serverTimestamp } from '@firebase/firestore';
import { Icon } from 'semantic-ui-react';
import validator from "validator";
const Footer = ({ getSubscribers }) => {
    const[email,setEmail] = useState('');
    const[message,setMessage] = useState('');
    const[messageClass,setMessageClass]=useState('');
    const db = getFirestore();
    const handleSubmit = (async e=>{
        e.preventDefault();

        if(email === ""){ setMessage("Please fill required email!"); setMessageClass("emailError"); return false;}
        if(!validator.isEmail(email)){
            setMessage("Please fill correct email!"); setMessageClass("emailError"); return false;
        }
        try {
            /*const docRef = doc(db,"forum/subscriber",email);
            const docSnap = await getDoc(docRef);
            console.log(docSnap)*/
        
            await addDoc(collection(db,"forum/default/subscriber"),{
                email:email,
                timestamp:serverTimestamp()
            })
            setEmail('');
            setMessage("Successfully subscribe your email!"); setMessageClass("");
            getSubscribers()
        } catch (error) {
            alert(error.message);
        }
        
    })
    return (
        <>
            <footer id="dk-footer" className="dk-footer">
            <div className="container">
            <div className="row">
                <div className="col-md-12 col-lg-4">
                    <div className="dk-footer-box-info">
                    <Link to="/" className="footer-logo">
                        <h3>Discussion</h3>
                        </Link>
                        <p className="footer-info-text">
                        To get the most out of your online discussion board posts, you need to actually have a
conversation. When you’re posting, think about what you’re saying: why do you think this way?
                        </p>
                        <div className="footer-social-link">
                            <h3>Follow us</h3>
                            <ul>
                                <li>
                                    <Link to="/">
                                        <Icon className="fa fa-facebook" name="facebook"/>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <Icon className="fa fa-twitter" name="twitter"/>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <Icon name="google" className="fa fa-google-plus"/>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
            </div>
            <div className="col-md-12 col-lg-8">
                            
                    <div className="row">
                        <div className="col-md-12 col-lg-6">
                            <div className="footer-widget footer-left-widget">
                                <div className="section-heading">
                                    <h3>Useful Links</h3>
                                    <span className="animate-border border-black"></span>
                                </div>
                                <ul>
                                    <li>
                                    <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/about">About Us</Link>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                    <Link to="/terms">Terms</Link>
                                    </li>
                                    <li>
                                    <Link to="/privacy">Privacy Policy</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <div className="footer-widget">
                                <div className="section-heading">
                                    <h3>Subscribe</h3>
                                    <span className="animate-border border-black"></span>
                                </div>
                            <h3>Sign Up For Our Newsletter</h3>
                                <p> Signup for the latest Discussion news and expert advice.</p>
                                <form action="/">
                                    <div className="form-row">
                                        <div className="col dk-footer-form">
                                            <input type="email" className="form-control" placeholder="Email Address" value={email} onChange={(e)=>{ setEmail(e.target.value)}}/>
                                            <button type="button" onClick={handleSubmit}>
                                                <Icon name="send" className="fa fa-send"/>
                                            </button>
                                            {message !== "" && <p className={messageClass}>{message}</p>}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <div className="copyright">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <span>Copyright &copy; 2021 All Right Reserved Discussion</span>
                    </div>
                <div className="col-md-6">
                        <div className="copyright-menu">
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/faq">Faq</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
    )
}

export default Footer
