import React from 'react';

import Title from "../core/Title";

const Header = (props) => {
  return (
    <header>
      <div className={props.data.headerBackground}>
        <Title variant={props.data.style}>
            {props.data.headerTitle}
        </Title>
        <p className="m-0">{props.data.text}</p>
      </div>
    </header>
  );
};

export default Header;