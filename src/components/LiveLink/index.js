import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import liveLinkLogo from "../../images/live-website.png";
import "./LiveLink.css";

/**
 * 
 * @param {*} props expect mark color to alter the highlighted text, uses html tag mark that can have any
 * @returns a blinking live link logo that has the website link and color
 */
const LiveLink = (props) => {
    const [colorState, setColorState] = useState({data: "white"});
    const [linkState, setLinkState] = useState({data: "#"});
    //if given a color alter, expect string
    if(this.props.markColor){
      setColorState(() =>{
        colorState.data = props.markColor;
      }); 
    }
    //expect some string to link, but if not create "broken" link to hashtag
    if(this.props.link){
        setLinkState(() =>{
            linkState.data = props.link;
        }); 
      }

    return (
     <mark style={`background-color: ${colorState.data}`}>
        <Link className="text-light" to={linkState.data}>
          <img alt="link" className="live-website" src={liveLinkLogo} />
        </Link>
    </mark>
  );
};

export default LiveLink;