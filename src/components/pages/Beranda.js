import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationBar from '../inc/NavigationBar'
import Hero from '../inc/Hero';
import Main from '../inc/Main';
import Footer from '../inc/Footer';


class Beranda extends Component {
    render() {
        return (
                <div>
                    <Hero />
                    <Main />
                </div>
        );
    }
}

export default Beranda;