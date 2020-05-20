import React from 'react';

import './styles/characters.scss';

import Character from '../components/Character';

function Characters(props){
    const { children, studio } = props;
    const studio_name = studio === "dc" ? "DC" : "Marvel";
    return (
        <div className="container">
      <h2 className="title__marvel">{ studio_name }</h2>
      <section className={studio}>
        {children}        
      </section>
    </div>
    );
}

export default Characters;