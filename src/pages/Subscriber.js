import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { getSubscriberList } from '../components/tetris/FirebaseLeaderboard';

const Subscriber = () => {
    const[subscriberList,setSubscriberList] = useState([]);
    const monthName = ['Jan','Feb','March','April','May','June','July','Aug','Sep','Oct','Nov','Dec'];
    // showing date from seconds to 21 Oct, 2021 22:6:46
    const dateTimeShow = (time)=>{
        let date = new Date(time * 1000);
        return date.getDate()+" "+monthName[date.getMonth()]+", "+date.getFullYear() +" "+ date.getHours() +":"+date.getMinutes()+":"+date.getSeconds();
    }
    const getSubscriberUsers = async()=>{
        const users = await getSubscriberList();
        setSubscriberList(users);
    }
    useEffect(() => {
        getSubscriberUsers();
    }, [getSubscriberUsers])
    return (
    <>
        <Navbar/>
        <div className="container">
            <div className="row mb50">
            <div className="col-md-12">
                <div className="row mb-1">
                    <div className="col-md-12 text-center">
                        <h1>Subscriber List</h1>
                    </div>
                </div>   
        <ul className={"tetrisLeaderBoard"}>
        <li className="row headers">
            <span className="col-md-2">No:</span>
            <span className="col-md-5"> Subscriber Date</span>
            <span className="col-md-5">Email</span>
        </li>
        {subscriberList && subscriberList.map((data,index)=>(
            <li  className="row" key={index}>
            <span className="col-md-2">{index+1}</span>
            <span className="col-md-5"> {data && data.timestamp && data.timestamp.seconds && dateTimeShow(data.timestamp.seconds)}</span>
            <span className="col-md-5">{data.email}</span>
        </li>
        ))}
        
        </ul>
        </div>
        </div>
        </div>
        <Footer getSubscribers={getSubscriberUsers} /> 
    </>
    )
}

export default Subscriber
