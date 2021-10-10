import React from 'react'
import { Link,useHistory } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SidebarNav from '../components/Sidebar'

const Forum = () => {
    const history = useHistory();
    const handleClick = (id,type)=>{
        history.push("/forum/"+id+"/"+type);
    }
    const handleDelete = (id)=>{
        alert("Forum Deleted Succesfully");
    }
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
           <tr>
            <td>Washington DC<br/><b>Posted By : Debra Shelby</b><br/><Icon name="comments"/> This is great topic...</td>
            <td align="center">1</td>
            <td>July 7 - 9, 2021<br/><br/>
            <span className="controls">
                <Icon name="edit" onClick={()=>{handleClick(1,'edit')}} className="edit"/>
                <Icon name="trash"onClick={()=>{handleDelete(1)}}  className="trash"/>
                <Icon name="eye" className="view"/>
            </span>
            </td>
          </tr>
          <tr className="active">    
            <td>NSTP Annual Federal Tax Refresher Course<br/><b>Posted By : John</b><br/><Icon name="comments"/> This is very helpfull topic...</td>
            <td align="center">12</td>
            <td>July 10, 2015<br/><br/>
            <span className="controls">
                <Icon name="edit" onClick={()=>{handleClick(12,'edit')}}  className="edit"/>
                <Icon name="trash" onClick={()=>{handleDelete(1)}} className="trash"/>
                <Icon name="eye" className="view"/>
            </span>
            </td>
          </tr>           
          <tr>
            <td>Washington DC<br/><b>Posted By : Debra Shelby</b><br/><Icon name="comments"/> This is great topic...</td>
            <td align="center">1</td>
            <td>July 7 - 9, 2021<br/><br/>
            <span className="controls">
                <Icon name="edit" onClick={()=>{handleClick(13,'edit')}}  className="edit"/>
                <Icon name="trash" onClick={()=>{handleDelete(1)}} className="trash"/>
                <Icon name="eye" className="view"/>
            </span>
            </td>
          </tr>
          <tr className="active">    
            <td>NSTP Annual Federal Tax Refresher Course<br/><b>Posted By : John</b><br/><Icon name="comments"/> This is very helpfull topic...</td>
            <td align="center">12</td>
            <td>July 10, 2015<br/><br/>
            <span className="controls">
                <Icon name="edit"  onClick={()=>{handleClick(14,'edit')}} className="edit"/>
                <Icon name="trash" onClick={()=>{handleDelete(1)}} className="trash"/>
                <Icon name="eye" className="view"/>
            </span>
            </td>
          </tr>  
          <tr>
            <td>Washington DC<br/><b>Posted By : Debra Shelby</b><br/><Icon name="comments"/> This is great topic...</td>
            <td align="center">1</td>
            <td>July 7 - 9, 2021<br/><br/>
            <span className="controls">
                <Icon name="edit" onClick={()=>{handleClick(15,'edit')}}  className="edit"/>
                <Icon name="trash" onClick={()=>{handleDelete(1)}} className="trash"/>
                <Icon name="eye" className="view"/>
            </span>
            </td>
          </tr>
          <tr className="active">    
            <td>NSTP Annual Federal Tax Refresher Course<br/><b>Posted By : John</b><br/><Icon name="comments"/> This is very helpfull topic...</td>
            <td align="center">12</td>
            <td>July 10, 2015<br/><br/>
            <span className="controls">
                <Icon name="edit"   onClick={()=>{handleClick(16,'edit')}}className="edit"/>
                <Icon name="trash" onClick={()=>{handleDelete(1)}} className="trash"/>
                <Icon name="eye" className="view"/>
            </span>
            </td>
          </tr>  
        
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
