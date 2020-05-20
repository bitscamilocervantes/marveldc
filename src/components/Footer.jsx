import React from 'react';

import './styles/footer.scss';


function Footer(){
    return (
        <footer className="footer">
            <div class="container">
                <div class="creditos">
                    <div class="item">
                        Creado por: Camilo Cervantes Salazar
                    </div>
                </div>
                <div class="links item">
                    <a href="#" class="item">Fork in Github</a>
                    <a href="#" class="item">Sitio del autor</a>
                </div>
            </div>
            
        </footer>
    );
}

export default Footer;