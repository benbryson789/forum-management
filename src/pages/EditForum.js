import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SidebarNav from '../components/Sidebar'

const EditForum = () => {
    return (
        <>
            <Navbar/>
                <div className="container">
                    <div className="row mb50">
                        <SidebarNav/>
                        <div className="col-md-9">
                        <h2>Edit Forum</h2>
                            <form>
                                <div className="form-group">
                                    <label>Title</label>
                                    <input type="text" name="title" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Description</label>
                                    <textarea className="form-control" rows="8" name="description"></textarea>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary">Update Forum</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            <Footer/>
        </>
    )
}

export default EditForum
