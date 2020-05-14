import React from 'react';

import Header from '../components/Header';
import Search from '../components/Search';
import Characters from '../components/Characters';

function Marvel(){
    return (
        <React.Fragment>
            <Header />
            <Search />
            <Characters />
        </React.Fragment>
    );
}

export default Marvel;