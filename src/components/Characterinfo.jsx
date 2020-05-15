import React from 'react';

import './styles/characterinfo.scss';

function Characterinfo(){
    return (
        <div className="characterinfo">
            <section className="grid-container">
                <div className="row-1">
                    <h1 className="charactername">Wolverine</h1>
                    <img src="../../public/characters/wolverine.jpg" />
                </div>
                <div className="row-2">
                    <h2>Bio</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis lacus elit, eu tincidunt erat aliquam a. Phasellus lacinia odio ut tortor tempus faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin et ex ac justo vestibulum bibendum. Nulla sed tristique ex, sagittis porta tellus. Cras eget nulla in elit molestie tempor eget laoreet mauris. Etiam ut aliquam mauris. Vestibulum ultrices ipsum eget ligula tempus, eget dapibus velit laoreet. 
                    </p>
                    <h2>Poderes</h2>
                    <ul>
                        <li><p>Poder 1</p></li>
                        <li><p>Poder 2</p></li>
                        <li><p>Poder 3</p></li>
                    </ul>
                </div>
            </section>
            
        </div>
    );
}


export default Characterinfo;