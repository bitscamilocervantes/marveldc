import React, { useState, useEffect } from 'react';

import Search from '../components/Search';
import Characters from '../components/Characters';
import Character from '../components/Character';
import useInitialState from '../hooks/useInitialState';


const endpoint = "http://localhost:3000/dc";

function Dc(){
    const characters = useInitialState(endpoint);
    const [charactersList, setCharactersList] = useState([]);

    const excludeColumns = ['image', 'url', 'biography', 'power'];
    const filterData = (value) => {
        const lowercasedValue = value.toLowerCase().trim();
        if (lowercasedValue === '' || lowercasedValue.length <= 2) {
          setCharactersList(characters);
        } else {
          if (lowercasedValue.length > 2) {
            const filteredData = characters.filter((item) => {
              return Object.keys(item).some((key) =>
                excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)
              );
            });
            setCharactersList(filteredData);
          }
        }
      };

      useEffect(() => {
        setCharactersList(characters);
      }, [characters]);
    return (
        <React.Fragment>
            <Search onUpdateCharacters={(query) => filterData(query)} />
            <Characters studio="dc">
            {charactersList.length > 0 && (
                charactersList.map((item, i) => (
                    <Character key={i} {...item} tipo="dc" />
                ))
            )}
            {charactersList.length == 0 && (
                <div className="msg-not-found">No characters found!</div>
            )}      
            </Characters>
        </React.Fragment>
    );
}

export default Dc;