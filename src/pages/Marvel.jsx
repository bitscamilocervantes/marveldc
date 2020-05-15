import React from 'react';

import Header from '../components/Header';
import Search from '../components/Search';
import Characters from '../components/Characters';

function Marvel(){
    return (
        <React.Fragment>
            <Header htitle="Marvel Studios"/>
            <Search />
            <Characters studio="marvel"/>
        </React.Fragment>
    );
}

export default Marvel;