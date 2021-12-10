import { getAuth, signOut } from '@firebase/auth';
import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import { Icon } from 'semantic-ui-react';

const SidebarNav = () => {
    const location = useLocation();
    const logout = ()=>{
        signOut(getAuth());
        window.location="";
    }
    return (
        <div className="col-md-3">
        <div className="list-group ">
            {/* showing active class based on location path name from browser URL */}
                    <Link to="/profile" className={location.pathname === "/profile" ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"}><Icon name='user'/> Profile</Link>
                    <Link to="/change-password" className={location.pathname === "/change-password" ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"}><Icon name='lock'/>  Change Password</Link>
                    <Link to="/forum" className={location.pathname.includes("forum") ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"}><Icon name='blogger'/>  Forum</Link>
                    <Link to="/" onClick={() => {logout()}} className={location.pathname === "/logout" ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"}><Icon name='sign out alternate'/> Logout</Link>
        </div>
    </div>
    )
}

export default SidebarNav
