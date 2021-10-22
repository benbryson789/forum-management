import React, { useState ,useEffect} from 'react'
import { getMyScoreList } from '../../components/tetris/FirebaseLeaderboard';

const MyScore = () => {
    // set the state of setGameScoreList with the default value
    const[gameScoreList,setGameScoreList] = useState([]);
    // getting the month name based numeric month name 
    const monthName = ['Jan','Feb','March','April','May','June','July','Aug','Sep','Oct','Nov','Dec'];
    // showing date from seconds to 21 Oct, 2021 22:6:46
    const dateTimeShow = (time)=>{
        let date = new Date(time * 1000);
        return date.getDate()+" "+monthName[date.getMonth()]+", "+date.getFullYear() +" "+ date.getHours() +":"+date.getMinutes()+":"+date.getSeconds();
    }
    useEffect(() => {
        // calling game score list on page load
        const getScoreList = async()=>{
            // getting the date from the firebase store using this function and we have defined this function under the
            // firebaseLeaderboard.js
            const myScore = await getMyScoreList();
            // setting the ScoreList in state
            setGameScoreList(myScore);
        }
        // setting score list  and created function on line 16 which const getScorelist
        getScoreList();
    }, [setGameScoreList])
    return (
        <ul className={"tetrisLeaderBoard"}>
        {/* populated scores list dynamically from the state variable */}
        {/* when we connect firebase api data we will just put api data in gameScoreList */}
        {/* Table Layout */}
        <li className="row headers">
            {/* index number */}
            <span className="col-md-2">No:</span>
            <span className="col-md-7"> Play Time</span>
            <span className="col-md-3">Score</span>
        </li>
        {/* printing the game score list by index */}
        {gameScoreList && gameScoreList.map((data,index)=>(

    
        <li key={`sub${index}`} className="row">
                  {/* increases by one each time thru loop */}
                <span className="col-md-2">{index+1}</span>
            
                <span className="col-md-7">{dateTimeShow(data.timestamp.seconds)}</span>
                  {/* score value */}
                <span className="col-md-3">{data.score}</span>
            </li>
        ))}
    </ul>
    )
}

export default MyScore
