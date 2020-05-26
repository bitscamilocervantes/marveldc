import React from 'react';

import './styles/search.scss';


function Search(props){
    const { onUpdateCharacters } = props;
    const handleChange = value => {
        onUpdateCharacters(value);
      };    
    return(
        <section className="main">
            <input type="text" className="input" placeholder="Search character..."
            onChange={e => handleChange(e.target.value)} />
        </section>
    )
}

export default Search;