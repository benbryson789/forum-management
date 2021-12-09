import React,{useEffect,useState} from 'react';
import { GetHighestScores } from '../../components/tetris/FirebaseLeaderboard';
const HighestScore = () => {
    const[gameScoreList,setGameScoreList] = useState([]);
    
    useEffect(() => {
        const getScoreList = async()=>{
                const myScore = await GetHighestScores();
                setGameScoreList(myScore);
        }
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
                    <span className="col-md-7">Player Name </span>
                    <span className="col-md-3">Score</span>
            </li>
            {gameScoreList && gameScoreList.map((data,index)=>(
                <li key={index} className="row">
                        {/* increases by one each time thru loop */}
                        <span className="col-md-2">{index+1}</span>
                        {/* player name */}
                        <span className="col-md-7">{data.userName}</span>
                        {/* score value */}
                        <span className="col-md-3">{data.score}</span>
                    </li>
            ))}

            </ul>
    )
}

export default HighestScore
