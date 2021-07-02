import React from 'react';
import sweeet from '../Code/sweeet.jpg';
import screen from '../Code/screentime.jpg';
import hevy from '../Code/hevy.jpg';

import { FaReact} from 'react-icons/fa';
import { FaNodeJs} from 'react-icons/fa';
import { DiPostgresql} from 'react-icons/di';
import { FaSass} from 'react-icons/fa';
import { FaHtml5} from 'react-icons/fa';
import { FaCss3Alt} from 'react-icons/fa';

const Code = () => {
    return <div className="code">
        <h1>My Projects</h1>
        <div className="sweeet">
            <div className="details">
                <h2>Sweeet</h2>
                <p>An ecommerce candy store.</p>
                <div className="tech">
                    <p><FaReact/> React</p>
                    <p><FaNodeJs/> Node</p>
                    <p><DiPostgresql/> PostgreSQL</p>
                    <p><FaSass/> Sass</p>
                </div>
            </div>
            <a href="https://sweeetscandy.com/#/"><img src={sweeet} alt="Sweeet homepage"></img></a>
        </div>
        <div className="screenTime">
            <div className="details">
                <h2>Screen Time</h2>
                <p>A simple time tracking app focused on managing daily technology usage.</p>
                <div className="tech">
                    <p><FaReact/> React</p>
                    <p><FaNodeJs/> Node</p>
                    <p><FaSass/> Sass</p>
                </div>
            </div>
            <a href="https://github.com/jmillion3/noDB"><img src={screen} alt="Screen Time"></img></a>
        </div>
        <div className="hevy">
            <div className="details">
                <h2>HEVY</h2>
                <p>A web design company.</p>
                <div className="tech">
                    <p><FaHtml5/> HTML</p>
                    <p><FaCss3Alt/> CSS</p>
                </div>
            </div>
            <a href="http://www.hevycreative.com/"><img src={hevy} alt="Hevy homepage"></img></a>
        </div>
    </div>
}

export default Code;