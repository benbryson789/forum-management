import React from 'react'
import {Link} from "react-router-dom";
import { Icon } from 'semantic-ui-react';
const Footer = () => {
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
                                            <input type="email" className="form-control" placeholder="Email Address"/>
                                            <button type="submit">
                                                <Icon name="send" className="fa fa-send"/>
                                            </button>
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
