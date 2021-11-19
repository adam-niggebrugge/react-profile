import React from 'react';
import "./Header.css";
import Title from "../core/Title";

const Header = (props) => {
  return (
    <header>
      <div className={props.data.headerBackground}>
        <Title variant={props.data.style} className="header-name">
            {props.data.headerTitle}
            <h3>{props.data.subTitle}</h3>
        </Title>
        <p className="m-0">{props.data.text}</p>
      </div>
    </header>
  );
};

export default Header;