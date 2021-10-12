// collection is table
// getDocs row
// getFirestone is database
// limit, orderBy are query commands
// query is fetching data from Firebase
import {collection, getDocs, getFirestore, limit, orderBy, query,deleteDoc,doc } from '@firebase/firestore'
import React,{useState,useEffect} from 'react'
import { Link,useHistory } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SidebarNav from '../components/Sidebar'

const Forum = () => {
    const history = useHistory();
    const[forumList,setForumList] = useState([]);
    const monthName = ['Jan','Feb','March','April','May','June','July','Aug','Sep','Oct','Nov','Dec'];
    const[documentIndex,seDocIndex] = useState(-1);
    const[open,setOpen]=useState(false);
    const dateShow = (time)=>{
      let date = new Date(time * 1000);
        return date.getDate()+" "+monthName[date.getMonth()]+", "+date.getFullYear();
    }
    // edit function
    const handleClick = (id,type)=>{
        history.push("/forum/"+id+"/"+type);
    }
    const handleDelete = (id,type)=>{
        seDocIndex(id)
        setOpen(type);
    }
    const db = getFirestore();
    useEffect(() => {
        const getForumList = async()=>{
          // collection is firebase table and db is object of database of firebase
            const totalForum = collection(db,"forum/default/discussion");
            // run a query to fetch data from a specific database collecton
            const q = query(totalForum,orderBy("timestamp","desc"),limit(10));
            // after run fetch all  data from generated query
            const itemList = await getDocs(q);
            // declare blank array variable  and then
            // getting single record and pushing it array variable and
            // then setting up variable in state in line 42 or setForumList(results)
            let results = [];
            // getting firebase document data in json format
            itemList.forEach((doc)=>{
                // getting each document unique id from firebase for future use when will delete/edit/view document
                let id = doc.id;
                let data = doc.data();
                data['id'] = id;
                // push value in jason array
                results.push(data);
            })
            console.log(results);
            setForumList(results);
            // return results to array variable
            return results;
        }
        // calling get form List function
        getForumList()
        // pringint document id
        console.log(documentIndex);
        // these are the dependency variables UseEffect
    }, [setForumList,db,documentIndex])
    //console.log(forumList)
    // deleting the document from firebase
    const confirmDelete = async ()=>{
        try {
            // getting the reference of document we want to deleted document index or document id
            const docRef = doc(db,"forum/default/discussion/"+documentIndex);
            // we are passing the document reference in deleteDoc firebase function database
            await deleteDoc(docRef);
            // close dialog box after question "are you sure you want to delete"
            setOpen(false);
            // passing document id blank after deleteing document in useEffect state
            seDocIndex(0);
            alert("Successfully deleted item!");
        } catch (error) {
            // get error message if unsuccessful deletion
            alert(error.message)
        }
        
    }
    return (
        <>
            <Navbar/>

            <div className={open === true ? "modal in show": "modal in"}>
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Are you sure???</h4>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure you want to delete (this)?</p>
                        <div className="row footer-modal">
                            <div className="col-md-12 text-center">
                                <button className="btn btn-success btn-md" onClick={confirmDelete}>Yes</button>
                                <button className="btn btn-danger btn-md" onClick={()=>{handleDelete(-1,false)}}>No</button>
                            </div>
                        </div>
                    </div>
   
    </div>
  </div>
</div>
                <div className="container">
                    <div className="row mb50">
                        <SidebarNav/>
                        <div className="col-md-9">
                        <div className="row">
            <div className="col-md-7"><h2>Forum</h2></div>
            <div className="col-md-5 text-right btnmargin"><Link to="/forum/add" className="btn btn-primary">Add New</Link></div>
        </div>
        <div className="clearfix mb30"></div>
    <table className="table table-striped">
        <thead>
          <tr>
            <th>Topic</th>
            <th>Comment</th>
            <th>Posted Date</th>
            </tr>
          </thead>
          <tbody>
            { forumList && forumList.map((data,index)=>(
          <tr key={index} className={ ((index+1)%2) === 0 ? '':'active'}>
            <td>{data.title}<br/><b>Posted By : {data.displayName}</b><br/><Icon name="comments"/> {data.description.substring(0,30)}..</td>
            <td align="center">{ data.totalComment}</td>
            <td>{dateShow(data.timestamp.seconds)}<br/><br/>
            <span className="controls">
                <Icon name="edit" onClick={()=>{handleClick(data.id,'edit')}} className="edit"/>
                <Icon name="trash"onClick={()=>{handleDelete(data.id,true)}}  className="trash"/>
                <Link to={`/forums/${data.id}`}><Icon name="eye" className="view"/></Link>
            </span>
            </td>
            </tr>
            ))}
        
        
        </tbody>
      </table>
                        </div>
                    </div>
                </div>
            <Footer/>
        </>
    )
}

export default Forum
