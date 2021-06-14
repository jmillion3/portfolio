import React from 'react';
import sweeet from '../Code/sweeet.png'
import hevy from '../Code/hevy.png'

const Code = () => {
    return <div className="code">
        <h1>Development Portfolio</h1>
        <div className="sweeet">
            <dl>
                <dt>Sweeet</dt>
                <dd>-React</dd>
                <dd>-Node.js</dd>
                <dd>-postgreSQL</dd>
                <dd>-SASS</dd>
            </dl>
            <a href="http://www.hevycreative.com/"><img src={hevy} alt="Hevy homepage"></img></a>
        </div>
        <div className="hevy">
            <dl>
                <dt>HEVY</dt>
                <dd>-HTML</dd>
                <dd>-CSS</dd>
            </dl>
            <a href="https://sweeetscandy.com/#/"><img src={sweeet} alt="Sweeet homepage"></img></a>
        </div>
    </div>
}

export default Code;