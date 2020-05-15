import React from 'react';


import Header from '../components/Header';
import Search from '../components/Search';
import Characterinfo from '../components/Characterinfo';

import '../components/styles/details.scss';

function Details(props) {
    return (
        <React.Fragment>
            <Header htitle=""/>
            <Search />
            <Characterinfo />
        </React.Fragment>
    );
  }

  export default Details;