import React, { useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import HighestScore from './GameScore/HighestScore';
import MyScore from './GameScore/MyScore';
import TotalScore from './GameScore/TotalScore';
const Leaderboard = () => {
    const[activeStep,setStep] = useState(0);
    return (
        <>
        <Navbar/>
        <div className="container">
            <div className="row mb50">
            <div className="col-md-12">
          <div className="row mb-1">
              <div className="col-md-12 text-center">
                  <h1>Tetris Leader Board</h1>
                </div>
          </div>    
          <div className="row">
			<div className="col-md-12">
				<nav className="sidebarnav">
					<div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
						<a className={activeStep === 0 ? "nav-item nav-link active": "nav-item nav-link" } onClick={(e)=>{e.preventDefault(); setStep(0);}} href="/">Total Score</a>
						<a  className={activeStep === 1 ? "nav-item nav-link active": "nav-item nav-link" } onClick={(e)=>{e.preventDefault(); setStep(1);}} href="/">Highest games</a>
						<a className={activeStep === 2 ? "nav-item nav-link active": "nav-item nav-link" } onClick={(e)=>{e.preventDefault(); setStep(2);}} href="/">My highest games</a>
					</div>
				</nav>
				<div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
					<div className={activeStep === 0 ? "tab-pane fade show active" : "tab-pane fade"}>
            <TotalScore />
					</div>
					<div className={activeStep === 1 ? "tab-pane fade show active" : "tab-pane fade"}>
            <HighestScore />
					</div>
					<div className={activeStep === 2 ? "tab-pane fade show active" : "tab-pane fade"}>
            <MyScore/>
					</div>
				</div>

			</div>
		</div>

</div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Leaderboard
