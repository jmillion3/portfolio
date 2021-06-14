import React from 'react';
import resume from '../Resume/Resume.png'
import resumePDF from '../Resume/Resume2021.pdf'

const Resume = () => {
    return <div className="resume">
        <a href={resumePDF} target="_blank" rel="noreferrer noopener">
            <img src={resume} alt="Josh's Resume"></img>
        </a>
    </div>
}

export default Resume;