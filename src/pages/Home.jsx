import React from 'react';

import './styles/home.scss';

import Header from '../components/Header';
import Footer from '../components/Footer';

function Home(){
    return (
        <React.Fragment>
            <Header htitle="Marvel Studios"/>
            <div className="home-container">
                <h1 class="home-msg">- Seleccione una marca de comics -</h1>
                <div className="grid-container">
                    <div className="left-image">
                        <a href="/marvel"><img src="../../../public/marvel-banner.jpg"/></a>
                    </div>
                    <div className="right-brand brand">
                        <a href="/marvel"><img src="../../../public/marvel_brand.png"/></a>
                    </div>
                    <div className="left-brand brand">
                    <a href="/dc"><img src="../../../public/dc_brand.png"/></a>
                    </div>
                    <div className="right-image">
                    <a href="/dc"><img src="../../../public/dc-comics.jpg"/></a>
                    </div>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    );
}

export default Home;