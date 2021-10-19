import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import tetrisIcon from "../assets/tetrisnew.jpeg";
const Games = () => {
    return (
        <>
        <Navbar/>
        <div className="container">
			<div className="row mb50">
				<div className="col-md-4">
                    <div className="gamepage">
                        <img src={tetrisIcon} alt="Tetris Game"/>
                        <div className="bgoverlay">
                        <p>It's the addictive puzzle game that started it all!

By embracing our universal desire to create order out of chaos, the Tetris® game provides intellectual sport that combines continuous fun with mental stimulation.</p>
                        <Link to="/tetris">Play Game</Link>
                        </div>
                    </div>
                </div>
               </div> 
        </div>
        <Footer/>
        </>
    )
}

export default Games
