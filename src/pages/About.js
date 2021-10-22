import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
const About = () => {
    return (
    <>
    <Navbar/>
        <div className="container">
        <div className="row mb50">  
        <h2>Why use Forum?</h2>
<p>It's safe to say that forums have existed since the beginning of time. Well, more like the beginning of the internet (which is basically the same). Online forums allow virtual communities to come together to share knowledge and enthusiasm. By adding an online forum to your website, you can greatly increase user engagement and grow your online community. 
</p>
<h2>How to make a forumpost?</h2>
<p>Now that you know the benefits of adding a forum to on website, let’s discuss the steps you need to take to get started. Here’s how to create a forum:
</p>

<ul className="itemlist"><li>Choose a forum Registration</li>

<li>Login using your login credential.</li>
<li>Got to profile menu on the Navbar</li>
<li>Choose forum menu from profile page on left navigation</li>
<li>Be clear about the rules</li>
<li>Post your forum on the website</li>
<li>Encourage active participation</li>

<li>Promote your forum regularly</li>

<li>Enhance your forum with special features  </li></ul>   </div>
</div>
<Footer />
</>
    )
}

export default About
