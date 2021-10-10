import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SidebarNav from '../components/Sidebar'

const Profile = () => {
    return (
        <>
            <Navbar/>
                <div className="container">
                    <div className="row mb50">  
                        <SidebarNav />
                        <div className="col-md-9">
                                <h2>Update Profile</h2>
                                <form>
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <input type="text" name="first_name" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input type="text" name="last_name" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" name="email" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-primary">Update</button>
                                    </div>
                                </form>
                        </div>
                    </div>
                </div>
            <Footer/>
        </> 
    )
}

export default Profile
