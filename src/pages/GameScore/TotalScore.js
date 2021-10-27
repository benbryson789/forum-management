import React, { useState,useEffect} from 'react'
import { getInvidualGameScore } from '../../components/tetris/FirebaseLeaderboard';

const TotalScore = () => {
    // set up gamescorelist is useState
    const[gameScoreList,setGameScoreList] = useState([]);
    // calling useEffect after loading page
    useEffect(() => {
        // create async functing to get this co de from firebase data restore
        const getGameScore = async ()=>{
            // get individual game score points using getIndividualGameScore function
            const gameScore = await getInvidualGameScore();
            // set GameLIst is useState
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
            {/* loop to show list of game score list on react page */}
            {gameScoreList.map((data,index)=>(

            
                <li key={index} className="row">
                    {/* index number  */}
                        <span className="col-md-2">{index+1}</span>
                    {/* player name */}
                        <span className="col-md-7">{data.userName}</span>
                    {/* score of individual user */}
                        <span className="col-md-3">{data.score}</span>
                    </li>
                ))}
            </ul>
    )
}

export default TotalScore
