import React from 'react';


import Search from '../components/Search';
import Characterinfo from '../components/Characterinfo';
import useInitialState from '../hooks/useInitialState';

import '../components/styles/details.scss';

const host = "http://localhost:3000/";

function Details(props) {
    const { name } = props.match.params;
    const studio = props.location.pathname.split('/')[1];
    const endpoint = host + studio + "?name=" +name;
    const characters = useInitialState(endpoint, true);
    
    return (
        <React.Fragment>
            {characters.map((item, i) => (
                <Characterinfo key={i} {...item} />
            ))}
            
        </React.Fragment>
    );
  }

  export default Details;