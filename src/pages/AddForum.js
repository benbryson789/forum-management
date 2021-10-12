import React,{useCallback} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SidebarNav from '../components/Sidebar'
// getFirestore is database
// serverTimestamp is date
// addDoc is row
// collection is a table
import {getFirestore,serverTimestamp,addDoc,collection} from "firebase/firestore";
// useAuthState getting user ID from who is log in from the system
import { useAuthState } from '../firebase';
import { useHistory } from 'react-router';
const AddForum = () => {
    const db = getFirestore();
    // getting login user data
    const {user} = useAuthState();
    const history = useHistory();
    //console.log(serverTimestamp())
    const handleSubmit = useCallback(async e => {
                e.preventDefault();
                // getting title and description when user submits the form
                const{title,description} = e.target.elements;
                try {
                    // then get login user id
                    let uid = user.uid;
                    // we are inserting a record in firebase collection/table
                    await addDoc(collection(db,"forum/default/discussion"),{
                        uid:uid,
                        title:title.value,
                        description:description.value,
                        totalComment:0,
                        displayName:user.displayName,
                        timestamp:serverTimestamp()
                    });
                    alert("Succesfully added your form")
                    history.push('/forum');
                } catch (error) {
                    alert(error.message);
                }
        },
        [db,user,history])
    return (
        <>
            <Navbar/>
                <div className="container">
                    <div className="row mb50">
                        <SidebarNav/>
                        <div className="col-md-9">
                            <h2>Add Forum</h2>
                            <form method="post" onSubmit={handleSubmit}> 
                                <div className="form-group">
                                    <label>Title</label>
                                    <input type="text" name="title" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Description</label>
                                    <textarea className="form-control" rows="8" name="description"></textarea>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary" type="submit">Add Forum</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            <Footer/>
        </>
    )
}

export default AddForum
