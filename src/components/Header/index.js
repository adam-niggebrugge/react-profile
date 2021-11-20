import React from 'react';
import "./Header.css";
import Title from "../core/Title";
import "materialize-css/dist/css/materialize.min.css";


const Header = (props) => {
  let imageClass = props.data.headerBackground.toString()+" responsive-img";

  return (
    <header>
      <div className={imageClass}>
        <Title variant={props.data.style} className="header-name">
            {props.data.headerTitle}
        </Title>
        <p className="flow-text home-text-extra" >{props.data.body}</p>
        <h3 className={props.data.style}> {props.data.subTitle}</h3>
      </div>
    </header>
  );
};

export default Header;