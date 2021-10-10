import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import React,{useCallback} from 'react'
import { useHistory } from 'react-router';
import {Icon} from "semantic-ui-react";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
const Login = () => {
    const history = useHistory();
    const handleSubmit = useCallback(async e => {
            e.preventDefault();
            // getting object form submission of email and password 
            // then get value from both objects which is filled in login form by user
            const{email,password} = e.target.elements;
            // authorizing google database for this function and checking details of export firebase funcition 
            // in firebase.js
            const auth = getAuth();
            try{
                // signin
                await signInWithEmailAndPassword(auth,email.value,password.value);
                // after sign in redirect to profile
                history.push("/forum");
            }catch(e){
                alert(e.message);
            }
        },
        [history],
    )
    return (
        <>
        <Navbar/>
        <div className="container">
    <div className="card card-login mx-auto text-center bg-dark">
        <div className="card-header mx-auto bg-dark">
                <span className="logo_title mt-5"> Forum Login </span>
        </div>
        <div className="card-body">
            <form action="" method="post" onSubmit={handleSubmit}>
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
