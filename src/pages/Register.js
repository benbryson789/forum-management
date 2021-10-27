import React,{useCallback, useState,useMemo} from 'react'
import {Icon} from "semantic-ui-react";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import {createUserWithEmailAndPassword,getAuth, onAuthStateChanged, updateProfile} from "@firebase/auth";
import { useHistory } from 'react-router';
const Register = () => {

    // function purpose to define all errors as false
    // false means the error message did not show by default
    // if user does not complte fname, lname, password,email then response is false
    const errorFn = ()=>{
        return {firstname:false,lastname:false,email:false,password:false};
    }
    // if memo is used int UseCallback need to use memo
    // memo one time intialization of variable when we make any changes in variable otherwise
    // it will return from cache
    let defaultError = useMemo(() => errorFn(), []);
    // passed error messages in useState
    const[error]= useState(defaultError);
    // useHistory used to change from one page to another
    const history = useHistory();
    const handleSubmit = useCallback(async e => {
            e.preventDefault();    
            const {firstname,lastname,email,password} = e.target.elements;
            const auth = getAuth();
            /*if(firstname.value === ""){error.firstname=true;}else{error.firstname=false;}
            if(lastname.value === ""){error.lastname=true;}else{error.lastname=false;}
            if(email.value === ""){error.email=true;}else{error.email=false;}
            if(password.value === ""){error.password=true;}else{error.password=false;}*/

            // if we get any error from firebase the try catch will handle errors
            try{
                // we are creating a new user using email and password provided by firebase createUserWithEmailAndPassword method
                
                    const newUser = await createUserWithEmailAndPassword(auth,email.value,password.value);
                    onAuthStateChanged(auth,(async (user) =>{
                        console.log(newUser)    
                        console.log("user",user)
                        if(user){
                            // after creating user we are checking login states and updating user display name
                                setTimeout(function(){
                                    updateProfile(user,{displayName: firstname.value.trim() +" "+lastname.value.trim()})
                            },500)
                            }
                    } ))
                    // if account created succesfull, alert message generated
                    alert("Successfully created your account");

                    // redirects forum to URL
                    history.push("/forum")
                    // error message
            }catch(e){
                // error message created by default by firebase
                alert(e.message);
                
            }
        },
        // dependency variable of useCallback
        [history]);
        
    return (
        <>
        <Navbar/>
        <div className="container">
    <div className="card card-login mx-auto text-center bg-dark">
        <div className="card-header mx-auto bg-dark">
                <span className="logo_title mt-5"> Forum Register </span>
        </div>
        <div className="card-body">
            <form action="" method="post" onSubmit={handleSubmit}>
            <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><Icon name="user"/></span>
                    </div>
                    <input type="text" name="firstname" className="form-control" placeholder="First Name"/>
                    </div>
                    {error.firstname ===true &&   <p className="error">Please fill required field !</p> }
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><Icon name="user"/></span>
                    </div>
                    <input type="text" name="lastname" className="form-control" placeholder="Last Name"/>
                </div>
                {error.lastname && <p className="error">Please fill required field !</p> }
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><Icon name="user"/></span>
                    </div>
                    <input type="text" name="email" className="form-control" placeholder="Username"/>
                </div>
                {error.email && <p className="error">Please fill required field !</p>}
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><Icon  name="key"/></span>
                    </div>
                    <input type="password" name="password" className="form-control" placeholder="Password"/>
                </div>
                {error.password && <p className="error">Please fill required field !</p>}
                <div className="form-group">
                    <input type="submit" name="btn" value="Create Account" className="btn btn-outline-danger float-right login_btn"/>
                </div>

            </form>
        </div>
    </div>
</div>
<Footer />
</>
    )
}

export default Register
