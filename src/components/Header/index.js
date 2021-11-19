import React from 'react';
import "./Header.css";
import Title from "../core/Title";
import "materialize-css/dist/css/materialize.min.css";


const Header = (props) => {
  let imageClass = props.data.headerBackground.toString()+" responsive-img";

  return (
    <header>
      <div className={imageClass}>
        <Title variant={props.data.style} className="header-name flow-text">
            {props.data.headerTitle}
            
        </Title>
        <h3>{props.data.subTitle}</h3>
        <p>{props.data.text}</p>
      </div>
    </header>
  );
};

export default Header;