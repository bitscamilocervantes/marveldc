import { useState, useEffect } from 'react';



function useInitialState(endpoint, single){
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch(endpoint)
            .then((response) => response.json())
            .then((data) => setCharacters(data));
    }, []);
    
    return characters;
    
    
}

export default useInitialState;