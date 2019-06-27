import React from 'react';

const Header = ({ text }) => {
  return (
    <header data-testid="hitag" className="fancy-h1">
      <h1>{text}</h1>
    </header>
  );
};

export default Header;
