import { getFirestore,doc,getDoc } from '@firebase/firestore'
import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router'
import { Icon } from 'semantic-ui-react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const ForumDetail = () => {
    const[forumData,setForumData] = useState({title:'',description:'',totalComment:0,displayName:'',timestamp:{seconds:0}});
    const params = useParams();
    const db = getFirestore();
    // dateShow is returning the month name in digits
    // so we have made a variable with the month name in text format
    const monthName = ['Jan','Feb','March','April','May','June','July','Aug','Sep','Oct','Nov','Dec'];
    // function converting the seconds into date format
    const dateShow = (time)=>{
        let date = new Date(time * 1000);
        return date.getDate()+" "+monthName[date.getMonth()]+", "+date.getFullYear();
    }
    // console.log(forumData)
    // mounting the datat on the load of the page or make any changes in the state variable 
    useEffect(() => {
        const getForumData = async()=>{
            try {
                // getting the forum details by doc unique id and getting unique id from url
                const docRef = doc(db,"forum/default/discussion/"+params.id);
                // getting the document datat from the doc reference data
                const docData = await getDoc(docRef);   
                // passing document data in the state variable
                setForumData(docData.data());
            } catch (error) {
                // get error from firebase then alert error message
                alert(error.message)
            }
        }
        // async function to get data from firebase
        getForumData();
        // dependency variable of useEffect
        // params is getting the id from the url
        // db connecting system with firebase
        // setForumData is returning the data from firebase
    }, [params,db,setForumData])
    return (
        <>
            <Navbar/>
            <div className="container">
                            <div className="row mb50">
            <div className="col-md-12">
                <article className="fourms">
                    <h2>{forumData && forumData.title}</h2>
                    <ul>
                        <li><Icon name="user"/> By : {forumData && forumData.displayName}</li>
                        <li><Icon name="comment"/> {forumData && forumData.totalComment}</li>
                        <li><Icon name="calendar alternate"/> {dateShow(forumData && forumData.timestamp.seconds)}</li>
                    </ul>
                    <p>{forumData && forumData.description}</p>
                </article>
            </div>
            <div className="col-md-12">
            <div className="comments-container">
		<h2>Comments</h2>
{/* comment forum list from bootsnip */}
		<ul id="comments-list" className="comments-list">
			<li>
				<div className="comment-main-level">
					
					<div className="comment-avatar"><Icon name="user"/></div>
					
					<div className="comment-box">
						<div className="comment-head">
                        <h6 className="comment-name">Posted By : <span>Lorena Rojero</span></h6>
							<span> 20 minutes ago</span>
						</div>
						<div className="comment-content">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?
						</div>
					</div>
				</div>
		</li>

			<li>
				<div className="comment-main-level">
					<div className="comment-avatar"><Icon name="user"/></div>
					<div className="comment-box">
						<div className="comment-head">
							<h6 className="comment-name">Posted By : <span>Lorena Rojero</span></h6>
							<span> 10 minutes ago</span>
							
						</div>
						<div className="comment-content">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?
						</div>
					</div>
				</div>
			</li>
		</ul>
	</div>

    <div className="comment-form">
        <h3>Post Your Comment</h3>
    <form>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="name">
                                Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter name" required="required" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">
                                Email Address</label>
                            <div className="input-group">
                                <span className="input-group-addon"><span className="glyphicon glyphicon-envelope"></span>
                                </span>
                                <input type="email" className="form-control" id="email" placeholder="Enter email" required="required" /></div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Title</label>
                            <input type="text" className="form-control" id="email" placeholder="Title" required="required" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="name">
                                Comment</label>
                            <textarea name="comment" id="comment" className="form-control" rows="8" cols="25" required="required"
                                placeholder="Comment"></textarea>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <button type="submit" className="btn btn-primary pull-right" id="btnContactUs">
                            Post Comment</button>
                    </div>
                </div>
                </form>
        </div>
    </div>
            </div>
        </div>
          <Footer/>  
        </>
    )
}

export default ForumDetail
