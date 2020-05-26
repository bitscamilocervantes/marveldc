import React from 'react';

import './styles/footer.scss';


function Footer(){
    return (
        <footer className="footer">
            <div className="container">
                <div className="creditos">
                    <div className="item">
                        Creado por: Camilo Cervantes Salazar
                    </div>
                </div>
                <div className="links item">
                    <a href="#" className="item">Fork in Github</a>
                    <a href="#" className="item">Sitio del autor</a>
                </div>
            </div>
            
        </footer>
    );
}

export default Footer;