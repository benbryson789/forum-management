import React, { useState,useEffect} from 'react'
import { getInvidualGameScore } from '../../components/tetris/FirebaseLeaderboard';

const TotalScore = () => {
    const[gameScoreList,setGameScoreList] = useState([]);
    useEffect(() => {
        const getGameScore = async ()=>{
            const gameScore = await getInvidualGameScore();
            setGameScoreList(gameScore);
        }
        getGameScore();
    }, [setGameScoreList]);
    console.log(gameScoreList);
    return (
        <ul className={"tetrisLeaderBoard"}>
            
              {/* Table Layout */}
            <li className="row headers">
                  {/* index number */}
                    <span className="col-md-2">No:</span>
                    <span className="col-md-7">Player Name </span>
                    <span className="col-md-3">Score</span>
            </li>
            {gameScoreList.map((data,index)=>(

            
                <li key={index} className="row">
                    
                        <span className="col-md-2">{index+1}</span>
                    
                        <span className="col-md-7">{data.displayName}</span>
                    
                        <span className="col-md-3">{data.score}</span>
                    </li>
                ))}
            </ul>
    )
}

export default TotalScore
