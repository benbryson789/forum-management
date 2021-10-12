import React,{useState,useEffect} from 'react';
import { collection, getDocs, getFirestore, limit, orderBy, query} from '@firebase/firestore';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
const Home = () => {
    const[forumList,setForumList] = useState([]);
    const monthName = ['Jan','Feb','March','April','May','June','July','Aug','Sep','Oct','Nov','Dec'];
    const dateShow = (time)=>{
        let date = new Date(time * 1000);
        return date.getDate()+" "+monthName[date.getMonth()]+", "+date.getFullYear();
    }
    const db = getFirestore();
    useEffect(() => {
        const getForumList = async()=>{
                const totalForum = collection(db,"forum/default/discussion");
                const q = query(totalForum,orderBy("timestamp","desc"),limit(50));
                const itemList = await getDocs(q);
                let results = [];
                itemList.forEach((doc)=>{
                    let id = doc.id;
                let data = doc.data();
                data['id'] = id;
                    results.push(doc.data());
                })
                setForumList(results);
                return results;
        }
        getForumList()
    }, [setForumList,db])
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
        {forumList && forumList.map((data,index)=>(
        <tr key={index} className={((index+1)%2) === 0 ? '':'active' }>
            <td><Link to={`/forums/${data.id}`}> {data.title}</Link><br/><b><Icon name="user"/> By : {data.displayName}</b><br/><Icon name="calendar alternate"/> {dateShow(data.timestamp.seconds)}</td>
            <td >{data.totalComment}</td>
            <td>9 hours, 1 minute ago</td>
            <td><small>Wow amazing article</small><br/><Icon name="comment"/> By: David</td>
        </tr>
        ))}
    
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="4">
                        {/* bootsnip pagination code */}
                    <ul className="pagination">
                        <li className="page-item">
                            {/* previous arrow */}
                        <Link className="page-link" to="#/" >
                            <span>«</span>
                            <span className="sr-only">Previous</span>
                        </Link>
                        </li>
                        {/* pagination number */}
                        <li className="page-item active"><Link className="page-link" to="/">1</Link></li>
                        <li className="page-item"><Link className="page-link" to="/">2</Link></li>
                        <li className="page-item"><Link className="page-link" to="/">3</Link></li>
                        <li className="page-item">
                            {/* forward arrow */}
                        <Link className="page-link" to="/" >
                            <span >»</span>
                            <span className="sr-only">Next</span>
                        </Link>
                        </li>
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
