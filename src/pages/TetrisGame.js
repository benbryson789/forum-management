import React from 'react'
//import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Tetris from '../components/tetris/Tetris';
const TetrisGame = () => {
    return (
        <>
            <Navbar/>
            <section className="gamebgcolor">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <Tetris/>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default TetrisGame
