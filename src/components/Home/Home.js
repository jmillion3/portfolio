import React from 'react';
import designer from '../Home/designer.png';
import frontend from '../Home/frontend.png';
import backend from '../Home/backended.png';
import imac from '../Home/imac.jpg';

const Home = () => {
    return <div className="home">
        <h1 className="intro">Hello, World! My name is Josh. <br></br>Need help building your website?</h1>
        <img src={imac} alt="Imac Hevy" className="imac"></img>
        {/* <p>Welcome to my portfolio. My name is Josh Miller. I am a Front End Developer based out of Salt Lake City, UT.</p> */}
        <p>Meet the team</p>
        <div className="team">
            <div className="member">
                <div className="images">
                    <img src={frontend} alt="Frontend Engineer"></img>
                </div>
                <h2>Joshua Miller</h2>
                <p>Front End Developer</p>
            </div>
            <div className="member">
                <div className="images">
                    <img src={backend} alt="Backend Engineer"></img>
                </div>
                <h2>Josh S. Miller</h2>
                <p>Back End Developer</p>
            </div>
            <div className="member">
                <div className="images">
                    <img src={designer} alt="Lead Designer"></img>
                </div>
                <h2>J. S. Miller</h2>
                <p>Lead Designer</p>
            </div>
        </div>
    </div>
}

export default Home;