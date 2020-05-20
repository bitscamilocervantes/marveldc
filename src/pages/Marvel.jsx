import React from 'react';

import Header from '../components/Header';
import Search from '../components/Search';
import Footer from '../components/Footer';
import Characters from '../components/Characters';
import Character from '../components/Character';
import useInitialState from '../hooks/useInitialState';

const endpoint = "http://localhost:3000/marvel";

function Marvel(){
    const characters = useInitialState(endpoint);
    return (
        <React.Fragment>
            <Header htitle="Marvel Studios"/>
            <Search />
            <Characters studio="marvel">
                {characters.map((item, i) => (
                    <Character key={i} {...item} />
                ))} 
            </Characters>
            <Footer/>
        </React.Fragment>
    );
}

export default Marvel;