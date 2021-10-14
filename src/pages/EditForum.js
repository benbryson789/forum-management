import React,{useState,useEffect,useCallback} from 'react'
import { useHistory, useParams } from 'react-router'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SidebarNav from '../components/Sidebar'
// getting document  and updatefrom firebasestore
import {doc,getFirestore,getDoc,updateDoc} from "firebase/firestore";
const EditForum = () => {
    // we have set default value of forumData in useState for prepopulae value in form
    const[forumData,setForumData]=useState({title:'',description:''});
    // use paramaters to get document id from url
    const params = useParams();
    // we are using this parameter to redirect after updating the document on the forum list page 
    const history = useHistory();
    const db = getFirestore();
    useEffect(() => {
        const getForum = async()=>{
                try {
                    // we are getting a single document based on id/document index from firebase data store 
                    // and the getDoc is manipulating data in React 
                    const docRef = doc(db,"forum/default/discussion/"+params.id);
                    const docData = await getDoc(docRef);
                    // and then setForumData is being placed in useState to show new value in HTML form
                    setForumData(docData.data());
                } catch (error) {
                    alert(error.message)
                }
        }
        // asynce function to get data from firebase
        getForum();
        // setForumData is being place is useState
        // parms is getting parameter data from url
        // db is connecting to firebase database
    }, [setForumData,params,db]);
    // we are calling this function on triggering HTML update forum button 
    const handleSubmit = useCallback(async e=> {
            e.preventDefault();
            // getting updated value from HTML form 
            const {title,description} = e.target.elements;
            try {
                forumData.title = title.value;
                forumData.description = description.value;
                // getting document reference where we need to update new data 
                const docRef = doc(db,"forum/default/discussion/"+params.id);
                // update new data here using document reference 
                await updateDoc(docRef,forumData);
                alert("Successfully updated!");
                // redirecting to forum page after updating data
                history.push("/forum");
            } catch (error) {
                // if we get an error the alert error message
                alert(error.message);
            }
        },
        // history is redirecting from one page to another
        [forumData,params,history,db]);
    return (
        <>
            <Navbar/>
                <div className="container">
                    <div className="row mb50">
                        <SidebarNav/>
                        <div className="col-md-9">
                        <h2>Edit Forum</h2>
                            <form method="post" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Title</label>
                                    {/* default value pouplating the value in form input field  */}
                                    <input type="text" name="title" className="form-control" defaultValue={forumData.title}/>
                                </div>
                                <div className="form-group">
                                    <label>Description</label>
                                      {/* default value pouplating the value in form input field  */}
                                    <textarea className="form-control" rows="8" name="description" defaultValue={forumData.description}></textarea>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary" type="submit">Update Forum</button>
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
