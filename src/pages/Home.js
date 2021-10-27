import React,{useState,useEffect} from 'react';
import { collection, getDocs, getFirestore, limit, orderBy, query} from '@firebase/firestore';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
const Home = () => {
    // define forumList in useState with default value 1
    const[forumList,setForumList] = useState([]);
    // when currentPage loads set currentPage 1 in useState with default value 1 and we are changing 1 onclick of
    // pagination button like 1,2,3,etc so the forum list show the result based on current page
    const[currentPage,setCurrentPage] =useState(1);
    // define the toatal number of pages with the default value in useState
    // by default we have set up one page 
    const[totalPages,setTotalPages] =useState([1]);
    // how many records we want to show per page so we have set up 10 records list by default
    const per_page = 10;
    const monthName = ['Jan','Feb','March','April','May','June','July','Aug','Sep','Oct','Nov','Dec'];
    const dateShow = (time)=>{
        let date = new Date(time * 1000);
        return date.getDate()+" "+monthName[date.getMonth()]+", "+date.getFullYear();
    }
    const dateTimeShow = (time)=>{
        let date = new Date(time * 1000);
        return date.getDate()+" "+monthName[date.getMonth()]+", "+date.getFullYear() +" "+ date.getHours() +":"+date.getMinutes()+":"+date.getSeconds();
    }
    const db = getFirestore();
    useEffect(() => {
        const getForumList = async()=>{
                const totalForum = collection(db,"forum/default/discussion");
                const q = query(totalForum,orderBy("timestamp","desc"),limit(50));
                const itemList = await getDocs(q);
                let results = [];
                itemList.forEach((doc)=>{
                    // passing document unique id in state variable
                    let id = doc.id;
                    // getting datat from firebase document variable
                let data = doc.data();
                // merging datat and id with one variable
                data['id'] = id;
                // pushing variable is react array
                    results.push(data);
                })
                // passing array is setForumList state variable
                setForumList(results);
                // getting the total number of records from firebase data restore and putting in results array so
                // we are getting the length of total records from results array 
                // then we are dividing the results array value from per_page
                // we got 10 records from firebase 10/per_page (3) 3.2 = 4
                //math.ceil method rounds the number upwards to the nearest integer number and return the result
                let totalpage = Math.ceil(results.length / per_page);
                // we are pushing the number of pages based on generating total page in pages variable
                let pages = []; for(let i =1 ;i<=totalpage;i++){ pages.push(i);}
                // we are setting setTotalPages useState function
                setTotalPages(pages);
                // set current page one on the load of page 
                setCurrentPage(1);
                return results;
        }
        // async function calling get data from Firebasedatabase
        getForumList()
        // dependency variable for useEffect
    }, [setForumList,db,setTotalPages,per_page,setCurrentPage])
    // console.log(forumList)
    return (
    <>
    <Navbar/>
        <div className="container">
        <div className="row mb50">  
        <div className="col-md-12"><h2>Forum</h2></div>
        <div className="col-md-12">
        <div className="clearfix mb30"></div>
    <table className="table table-striped">
        <thead>
            {/* Table header forum */}
          <tr>
            <th>Topic</th>
            <th>Replies</th>
            <th>Last Posted</th>
            <th>Last Comment</th>
            </tr>
          </thead>
          {/* Table forum data from bootsnip and will integrate from firebase */}
          <tbody>
              {/* if both forumList have data then it will work */}
              {/* the slice is generating the array value based on a specific number like slice(1,20), slice(20,40)*/}
        {forumList && (forumList.slice((currentPage-1) * per_page, currentPage * per_page)).map((data,index)=>(
            // checking if even or odd and then adding active 
        // if 1 then active then if 0 then blank
        <tr key={index} className={((index+1)%2) === 0 ? '':'active' }>
            {/* printing of title of forum name with author and posted date */}
            {/* forums represents a link of app.js with document id */}
            <td><Link to={`/forums/${data.id}`}> {data.title}</Link><br/><b><Icon name="user"/> By : {data.displayName}</b><br/><Icon name="calendar alternate"/> {dateShow(data.timestamp.seconds)}</td>
            {/* firebase data store */}
            <td >{data.totalComment}</td>
            {/* checking if comment has been posted and then show data */}
            {/* if comment length less than 0 it means never posted any comment and if greater than 0 it has comment */}
            <td>{(Object.keys(data.comment).length !== 0) && <>{dateTimeShow(data.comment.timestamp.seconds)}</>}</td>
            <td>{(Object.keys(data.comment).length !== 0) && <><small>{data.comment.title}</small><br/><Icon name="comment"/> By: {data.comment.name}</> }</td>
        </tr>
        ))}
    
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="4">
                        {/* bootsnip pagination code */}
                    <ul className="pagination">
                        
                        {/* pagination number */}
                        {/* generating the pagination number based on total pages like 1,2,3, etc */}
                        { totalPages.length >1 && totalPages.map((obj,index)=>(
                            <li className={(index+1) === currentPage ? "page-item active" : "page-item"} onClick={()=>{setCurrentPage(index+1)}}><span className="page-link">{index+1}</span></li>
                        ))}
                        
                    </ul>
                    </td>
                </tr>
            </tfoot>
      </table>
        </div>
        </div>
</div>
<Footer />
</>
    )
}

export default Home
