import React from 'react';

import './styles/header.scss';


function Header(props) {
    return (
        <header className="header">
            <h1 className="header__tittle">{props.htitle}</h1>
        </header>
    );
  }

  export default Header;