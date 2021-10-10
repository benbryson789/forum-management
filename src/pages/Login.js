import React from 'react'
import {Icon} from "semantic-ui-react";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
const Login = () => {
    return (
        <>
        <Navbar/>
        <div className="container">
    <div className="card card-login mx-auto text-center bg-dark">
        <div className="card-header mx-auto bg-dark">
                <span className="logo_title mt-5"> Forum Login </span>
        </div>
        <div className="card-body">
            <form action="" method="post">
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><Icon name="user"/></span>
                    </div>
                    <input type="text" name="email" className="form-control" placeholder="Username"/>
                </div>

                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><Icon  name="key"/></span>
                    </div>
                    <input type="password" name="password" className="form-control" placeholder="Password"/>
                </div>

                <div className="form-group">
                    <input type="submit" name="btn" value="Login" className="btn btn-outline-danger float-right login_btn"/>
                </div>

            </form>
        </div>
    </div>
</div>
<Footer />
</>
    )
}

export default Login
