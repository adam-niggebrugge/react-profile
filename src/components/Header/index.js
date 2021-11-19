import React from 'react';

import Title from "../core/Title";

const Header = () => {
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Title>

        </Title>
        <p className="m-0">Get into the mind of a programmer.</p>
      </div>
    </header>
  );
};

export default Header;