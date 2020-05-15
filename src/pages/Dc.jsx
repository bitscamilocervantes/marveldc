import React from 'react';

import Header from '../components/Header';
import Search from '../components/Search';
import Characters from '../components/Characters';

function Dc(){
    return (
        <React.Fragment>
            <Header />
            <Search />
            <Characters studio="dc"/>
        </React.Fragment>
    );
}

export default Dc;