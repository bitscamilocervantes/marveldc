import React from 'react';


import Search from '../components/Search';
import Characters from '../components/Characters';
import Character from '../components/Character';
import useInitialState from '../hooks/useInitialState';

const endpoint = "http://localhost:3000/marvel";

function Marvel(){
    const characters = useInitialState(endpoint);
    return (
        <React.Fragment>
            <Search />
            <Characters studio="marvel">
                {characters.map((item, i) => (
                    <Character key={i} {...item} tipo="marvel" />
                ))} 
            </Characters>
        </React.Fragment>
    );
}

export default Marvel;