import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SidebarNav from '../components/Sidebar'

const ChangePasswod = () => {
    return (
        <>
        <Navbar/>
            <div className="container">
                <div className="row mb50">  
                    <SidebarNav/>
                    <div className="col-md-9">
                            <h2>Change Password</h2>
                            <form>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" name="password" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label>Confirm Password</label>
                                    <input type="password" name="cpassword" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary">Update Passwrod</button>
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
