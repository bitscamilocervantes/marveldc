import React from 'react';

import './styles/characters.scss';

import Character from '../components/Character';

function Characters(){
    return (
        <div class="container">
      <h2 class="title__marvel">Marvel</h2>
      <section class="marvel">
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