import React from 'react'

const TotalScore = () => {
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
            <li key={0} className="row">
                        {/* increases by one each time thru loop */}
                        <span className="col-md-2">1</span>
                        {/* player name */}
                        <span className="col-md-7">Debra</span>
                        {/* score value */}
                        <span className="col-md-3">10</span>
                    </li>
                    <li key={0} className="row">
                        {/* increases by one each time thru loop */}
                        <span className="col-md-2">1</span>
                        {/* player name */}
                        <span className="col-md-7">Debra Shelby</span>
                        {/* score value */}
                        <span className="col-md-3">10</span>
                    </li>
                    <li key={0} className="row">
                        {/* increases by one each time thru loop */}
                        <span className="col-md-2">1</span>
                        {/* player name */}
                        <span className="col-md-7">Ken</span>
                        {/* score value */}
                        <span className="col-md-3">10</span>
                    </li>    
            </ul>
    )
}

export default TotalScore
