import React from 'react';


import gitHubLogo from "../../images/github.png";
import "./GitLink.css";

/**
 * 
 * @param {*} props expect mark color to alter the highlighted text, uses html tag mark that can have any
 * @returns a blinking live link logo that has the website link and color
 */
const GitLink = (props) => {
    return (
     <>
        <a className="text-light" target="_blank" rel="noreferrer noopener" href={props.link}>
          <img alt="link" className="live-website" src={gitHubLogo} />
        </a>
    </>
  );
};

export default GitLink;