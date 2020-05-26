import React from 'react';
import PropTypes from 'prop-types';


import './styles/characterinfo.scss';

function Characterinfo(props){
    const { name, image, tipo, biography, powers} = props;
    console.log(powers);
    return (
        <div className="characterinfo">
            <section className="grid-container">
                <div className="row-1">
                    <h1 className="charactername">{name}</h1>
                    <img src={image} />
                </div>
                <div className="row-2">
                    <h2>Bio</h2>
                    <p>
                        {biography}
                    </p>
                    <h2>Poderes</h2>
                    <ul>
                    {powers.map((item, i) => {
                        if(item.value && item.value > 0){
                            return (
                                <li key={i}><p>{item.label} : {item.value}</p></li>
                            );
                        }
                        else{
                            <li key={i}><p>{item.label}</p></li>
                        }                        
                    })}
                    </ul>
                </div>
            </section>
            
        </div>
    );
}

Characterinfo.propTypes = {
    name: PropTypes.string.isRequired,
    tipo: PropTypes.string,
    url: PropTypes.string,
    image: PropTypes.string.isRequired,
    biography: PropTypes.string,
    powers: PropTypes.array,
  };

export default Characterinfo;