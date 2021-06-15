import React from 'react';

import { FaLinkedinIn} from 'react-icons/fa';
import { AiFillGithub} from 'react-icons/ai';
// import {Link} from 'react-router-dom';

class Footer extends React.Component {
    render() {
      return <div className="footer">
          <a href="https://www.linkedin.com/in/joshua-s-miller/" target="_blank" rel="noreferrer noopener">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/jmillion3" target="_blank" rel="noreferrer noopener">
            <AiFillGithub />
          </a>
      </div>
    }
  }

export default Footer;