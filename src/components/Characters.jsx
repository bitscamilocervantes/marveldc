import React from 'react';

import './styles/characters.scss';

import Character from '../components/Character';

function Characters(props){
    const { studio } = props;
    const studio_name = studio === "dc" ? "DC" : "Marvel";
    return (
        <div className="container">
      <h2 className="title__marvel">{ studio_name }</h2>
      <section className={studio}>
        <Character />
        <Character />
        <Character />
        <Character />
        <Character />
        <Character />
        <Character />
        <Character />
        <Character />
        <Character />
        <Character />
        <Character />
        
      </section>
    </div>
    );
}

export default Characters;