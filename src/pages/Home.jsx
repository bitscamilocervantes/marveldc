import React from 'react';
import { Link } from 'react-router-dom';

import './styles/home.scss';

import Header from '../components/Header';
import Footer from '../components/Footer';

function Home(){
    return (
        <React.Fragment>
            <div className="home-container">
                <h1 className="home-msg">- Seleccione una marca de comics -</h1>
                <div className="table-container">
                <table className="studios">
                    <tbody>
                    <tr>
                        <td className="brand"><img src="../../public/marvel_brand.png" ></img></td>
                        <td><p>Marvel Studios</p></td>
                        <td>
                            <Link to="/marvel">
                                Ir
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td className="brand"><img src="../../public/dc_brand.png"></img></td>
                        <td><p>DC Studios</p></td>
                        <td>
                            <Link to="/dc">
                                Ir
                            </Link>
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>
               
            </div>
        </React.Fragment>
    );
}

export default Home;