// collection is table
// getDocs row
// getFirestone is database
// limit, orderBy are query commands
// query is fetching data from Firebase
import { collection, getDocs, getFirestore, limit, orderBy, query } from '@firebase/firestore'
import React,{useState,useEffect} from 'react'
import { Link,useHistory } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SidebarNav from '../components/Sidebar'

const Forum = () => {
    const history = useHistory();
    const[forumList,setForumList] = useState([]);
    // console.log(forumList);
    // edit function
    const handleClick = (id,type)=>{
        history.push("/forum/"+id+"/"+type);
    }
    const handleDelete = (id)=>{
        alert("Forum Deleted Succesfully");
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
            itemList.forEach((doc)=>{
                results.push(doc.data());
            })
           // console.log(results);
            setForumList(results);
            // return results to array variable
            return results;
        }
        getForumList()
        
    }, [setForumList,db])
    return (
        <>
            <Navbar/>
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
            <td>{data.title}<br/><b>Posted By : Debra Shelby</b><br/><Icon name="comments"/> {data.description.substring(0,30)}..</td>
            <td align="center">1</td>
            <td>July 7 - 9, 2021<br/><br/>
            <span className="controls">
                <Icon name="edit" onClick={()=>{handleClick(1,'edit')}} className="edit"/>
                <Icon name="trash"onClick={()=>{handleDelete(1)}}  className="trash"/>
                <Icon name="eye" className="view"/>
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
