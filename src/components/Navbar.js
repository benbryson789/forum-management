import React,{useState} from 'react'
import {Link,useHistory} from "react-router-dom";
import { Icon } from 'semantic-ui-react';
import { useAuthState } from '../firebase';
import {getAuth,signOut} from "firebase/auth";
const Navbar = () => {
    const [open,setOpen] = useState(false);
    const {isAuthenticated} = useAuthState();
    const{user} = useAuthState();
    const history = useHistory();
    return (
        <>
        <div id="flipkart-navbar">
    <div className="container">
        <div className="row row1">
            <div className="col-md-12">
                <ul className="largenav pull-right">
                {isAuthenticated === true && <li className="upper-links">Welcome ,({user.displayName})</li> }
                <li className="upper-links"><Link className="links" to="/"><Icon name="home"/> Home</Link></li>
                {isAuthenticated === false ? 
                <>
                <li className="upper-links"><Link className="links" to="/login"><Icon name="lock"/>Login</Link></li>
                <li className="upper-links"><Link className="links" to="/register"><Icon name="user plus"/>Register</Link></li></>
                :
                <>
                <li className="upper-links"><Link className="links" to="/games"><Icon name="gamepad"/> Games</Link></li>
                <li className="upper-links"><Link className="links" to="/leaderboard"><Icon name="clipboard list"/> Leaderboard</Link></li>
                <li className="upper-links"><Link className="links" to="/profile"><Icon name="user"/>Profile</Link></li>
                <li className="upper-links"><Link className="links" to="/" onClick={()=>signOut(getAuth())}><Icon name="unlock"/>Logout</Link></li></>
                }
            </ul>
            </div>
        </div>
        <div className="row row2">
            <div className="col-md-4 header-logo">
                <h2 ><span className="smallnav menu" onClick={()=>{setOpen(true)}}>☰ <b onClick={()=>{history.push("/")}}>Discussion</b></span></h2>
            {/*     //added home page link on the discussion logo using history variable to take the the home page */}
                <h1 ><span className="largenav" onClick={()=>{history.push("/")}}>Discussion</span></h1>
            </div>
            <div className="flipkart-navbar-search smallsearch col-sm-8 col-xs-11">
                <div className="row">
                    <input className="flipkart-navbar-input col-md-11" type="" placeholder="Search forum by author or title" name=""/>
                    <button className="flipkart-navbar-button col-md-1">
                        <svg width="15px" height="15px">
                            <path d="M11.618 9.897l4.224 4.212c.092.09.1.23.02.312l-1.464 1.46c-.08.08-.222.072-.314-.02L9.868 11.66M6.486 10.9c-2.42 0-4.38-1.955-4.38-4.367 0-2.413 1.96-4.37 4.38-4.37s4.38 1.957 4.38 4.37c0 2.412-1.96 4.368-4.38 4.368m0-10.834C2.904.066 0 2.96 0 6.533 0 10.105 2.904 13 6.486 13s6.487-2.895 6.487-6.467c0-3.572-2.905-6.467-6.487-6.467 "></path>
                        </svg>
                    </button>
                </div>
            </div>
            </div>
    </div>
</div>
<div id="mySidenav" className={open === true ? "sidenav menu-width": "sidenav"}>
    <div className="container mobile-bar" >
        <span className="sidenav-heading">Home</span>
        <span className="closebtn" onClick={()=>{setOpen(false)}}>×</span>
    </div>
    <Link className="sidelinks" to="/"><Icon name="home"/> Home</Link>
    {isAuthenticated === false ? 
    <>
    <Link className="sidelinks" to="/login"><Icon name="lock"/>Login</Link>
    <Link className="sidelinks" to="/register"><Icon name="user plus"/>Register</Link></>
    :
    <>
    <Link className="sidelinks" to="/games"><Icon name="gamepad"/> Games</Link>
    <Link className="sidelinks" to="/leaderboard"><Icon name="clipboard list"/> Leaderboard</Link>
    <Link className="sidelinks" to="/profile"><Icon name="user"/>Profile</Link>
    <Link className="sidelinks" to="/" onClick={()=>signOut(getAuth())}><Icon name="unlock"/>Logout</Link></>
    }
</div>
</>
    )
}

export default Navbar
