import React from 'react';

import liveLinkLogo from "../../images/live-website.png";
import "./LiveLink.css";

/**
 * 
 * @param {*} props expect mark color to alter the highlighted text, uses html tag mark that can have any
 * @returns a blinking live link logo that has the website link and color
 */
const LiveLink = (props) => {
    return (
     <>
        <a className="text-light" target="_blank" rel="noreferrer noopener" href={props.link}>
          <img alt="link" className="live-website" src={liveLinkLogo} />
        </a>
    </>
  );
};

export default LiveLink;