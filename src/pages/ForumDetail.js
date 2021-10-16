import { getFirestore,doc,getDoc, serverTimestamp, updateDoc, addDoc, collection,query,orderBy,limit ,getDocs} from '@firebase/firestore'
import React,{useState,useEffect,useMemo,useCallback} from 'react'
import { useParams } from 'react-router'
import { Icon } from 'semantic-ui-react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const ForumDetail = () => {
    const[forumData,setForumData] = useState({title:'',description:'',totalComment:0,displayName:'',timestamp:{seconds:0}});
    const params = useParams();
    const db = getFirestore();
    const[commentTotal,setCommentTotal]= useState(0);
    // dateShow is returning the month name in digits
    // so we have made a variable with the month name in text format
    const monthName = ['Jan','Feb','March','April','May','June','July','Aug','Sep','Oct','Nov','Dec'];
    // function converting the seconds into date format
    const dateShow = (time)=>{
        let date = new Date(time * 1000);
        return date.getDate()+" "+monthName[date.getMonth()]+", "+date.getFullYear();
    }
    const defaultFormData =()=>{
        return {name:'',email:'',title:'',message:''}
    }
    const formdata = useMemo(() =>     defaultFormData(), []);
    const[commentFormData,setCommentFormData] = useState(formdata);
    const[commentsList,setCommentsList] = useState([]);
    // console.log(forumData)
    const dateTimeShow = (time)=>{
        let date = new Date(time * 1000);
        return date.getDate()+" "+monthName[date.getMonth()]+", "+date.getFullYear() +" "+ date.getHours() +":"+date.getMinutes()+":"+date.getSeconds();
    }
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
                // getting the comment list based on forum unique id
                const totaComment = collection(db,"forum/"+params.id+"/comments");
                // manipulating query for forum comment
                const q = query(totaComment,orderBy("timestamp","desc"),limit(500));
                // getting the document data from fireabase
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
                setCommentsList(results);
                setCommentTotal(results.length);
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
    }, [params,db,setForumData,commentFormData]);
    const handleSubmit = useCallback(async e => {
            const docId = params.id;
            try {
                // how many comments user posted and implemented by one value
                forumData.totalComment = (commentTotal +1);
                // getting the server time when we post the comment
                commentFormData.timestamp = serverTimestamp();
                // comment form data from HtmL form
                forumData.comment = commentFormData;
                // getting the forum by forum id
                const docRef = doc(db,"forum/default/discussion/"+docId);
                // updating the last comment with the total number of comments in the forum 
                await updateDoc(docRef,forumData);
                // adding new comments int the firebase database store with forum id
                await addDoc(collection(db,"forum/"+docId+"/comments"),commentFormData);
                // alerting message of succesfully posted comment
                alert("Successfully posted your comment");
                // reset form valiue
                setCommentFormData(formdata);
                
            } catch (error) {
                // if get error alert of error message
                alert(error.message)
            }

        },
        [db,commentFormData,params,forumData,commentTotal,setCommentFormData,formdata],
    )
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
            {commentsList && commentsList.map((obj,index)=>(
			<li>
				<div className="comment-main-level">
					
					<div className="comment-avatar"><Icon name="user"/></div>
					
					<div className="comment-box">
						<div className="comment-head">
                        <h6 className="comment-name">Posted By : <span>{obj.name}</span></h6>
							<span> {dateTimeShow(obj.timestamp.seconds)}</span>
						</div>
						<div className="comment-content">
						{obj.message}
						</div>
					</div>
				</div>
		</li>
        ))}
			
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
                            <input type="text" className="form-control" id="name" placeholder="Enter name" required="required"  onChange={(e)=>{setCommentFormData({...commentFormData,name:e.target.value})}} value={commentFormData.name}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">
                                Email Address</label>
                            <div className="input-group">
                                <span className="input-group-addon"><span className="glyphicon glyphicon-envelope"></span>
                                </span>
                                <input type="email" className="form-control" id="email" placeholder="Enter email" required="required" onChange={(e)=>{setCommentFormData({...commentFormData,email:e.target.value})}} value={commentFormData.email} /></div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Title</label>
                            <input type="text" className="form-control" id="email" placeholder="Title" required="required" onChange={(e)=>{setCommentFormData({...commentFormData,title:e.target.value})}} value={commentFormData.title}/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="name">
                                Comment</label>
                            <textarea name="comment" id="comment" className="form-control" rows="8" cols="25" required="required"
                                placeholder="Comment" onChange={(e)=>{setCommentFormData({...commentFormData,message:e.target.value})}} value={commentFormData.message}></textarea>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <button type="button" onClick={handleSubmit} className="btn btn-primary pull-right" id="btnContactUs">
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
