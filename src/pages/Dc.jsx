import React from 'react';

import Header from '../components/Header';
import Search from '../components/Search';
import Footer from '../components/Footer';
import Characters from '../components/Characters';
import Character from '../components/Character';
import useInitialState from '../hooks/useInitialState';


const endpoint = "http://localhost:3000/dc";

function Dc(){
    const characters = useInitialState(endpoint);
    return (
        <React.Fragment>
            <Header />
            <Search />
            <Characters studio="dc">
                {characters.map((item, i) => (
                    <Character key={i} {...item} />
                ))} 
            </Characters>
            <Footer/>
        </React.Fragment>
    );
}

export default Dc;