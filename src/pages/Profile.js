import { getAuth, updateEmail, updateProfile } from '@firebase/auth';
import React,{useCallback,useEffect,useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SidebarNav from '../components/Sidebar'
import {useAuthState} from "../firebase";
const Profile = () => {
    // get current user for login into system
    const auth = getAuth();
    const{user} = useAuthState();
    // when user enter name we are displaying the first and last name 
    //Suppose user will fill first name and last name enter in field so we are merging both during the update profile because we have only 1 field
    //in firebase so we are updating combine both but again on dispalying time we are making seperate both value(firstname and lastname) using split() method/function
    const [displayName,setDisplayName] = useState(['','']);
    console.log(user);
    console.log(auth);
    useEffect(() => {
        let name = (auth.currentUser && auth.currentUser.displayName !== null) ? auth.currentUser.displayName.split(" "): " ";
        //let name= ["",""];
        setDisplayName(name);
    }, [user])
    const handleSubmit = useCallback(async e => {
            e.preventDefault();
            const{firstname,lastname,email} = e.target.elements;
            try {
                await updateProfile(user,{displayName:firstname.value.trim() +" "+lastname.value.trim()});
                await updateEmail(user,email.value);
                alert("Successfully updated your profile")
            } catch (e) {
                alert(e.message)
            }
        },
        [user],
    )
    return (
        <>
            <Navbar/>
                <div className="container">
                    <div className="row mb50">  
                        <SidebarNav />
                        <div className="col-md-9">
                                <h2>Update Profile</h2>
                                <form method="post" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <input type="text" name="firstname" className="form-control" defaultValue={displayName[0]}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input type="text" name="lastname" className="form-control" defaultValue={displayName[1]}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" name="email" className="form-control" defaultValue={user?user.email:''}/>
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-primary" type="submit">Update</button>
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
