import { updatePassword } from '@firebase/auth'
import React, { useCallback } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SidebarNav from '../components/Sidebar'
import { useAuthState } from '../firebase'

const ChangePasswod = () => {
    const {user} = useAuthState();
    const handleSubmit = useCallback(async e=> {
            e.preventDefault();
            const{password,cpassword} = e.target.elements;
            if(password.value !== cpassword.value){alert("Password should be same!"); return false;}
            try {
                await updatePassword(user,password.value);
                alert("Successfully updated your password!");
            } catch (error) {
                alert(error.message)
            }
        },
        [user],
    )
    return (
        <>
        <Navbar/>
            <div className="container">
                <div className="row mb50">  
                    <SidebarNav/>
                    <div className="col-md-9">
                            <h2>Change Password</h2>
                            <form method="post" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" name="password" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label>Confirm Password</label>
                                    <input type="password" name="cpassword" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary" type="submit">Update Passwrod</button>
                                </div>
                            </form>   
                    </div>
                </div>
            </div>
        <Footer/>
    </> 
    )
}

export default ChangePasswod
