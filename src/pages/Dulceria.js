import React from 'react';
import Menu from '../components/Menu';
import Peliculas from '../components/Movies';
import Footer from '../components/Footer'
import '../styles/dulceria.css'

export default function Estrenos(props) {
    return (
    <div className="App2" style={{backgroundColor: 'pink'}}>
    <header className="App-header" style={{backgroundColor: '#ff0852'}}>
      <ul>
        <Menu liText = "Home" path="/"/>
        <Menu liText = "Estrenos" path="/estrenos"/>
        <Menu liText = "Dulceria" path="/dulceria"/>
        <Menu liText = "Cartelera" path="/cartelera/"/>
      </ul> 
      </header>
      <center><h1 styles={estrenosH1}>Dulceria</h1></center>

      <div className="main__movies ">
        <Peliculas movieName="Tutsi Pop" className = "movies__item dulce-0" />
        <Peliculas movieName="Pelon Pelo Rico" className = "movies__item dulce-1"/>
        <Peliculas movieName="Lucas Muecas" className = "movies__item dulce-2"/>
        <Peliculas movieName="Lucas Panzón" className = "movies__item dulce-3"/>
        <Peliculas movieName="Mazapán Gigante" className = "movies__item dulce-4"/>
        <Peliculas movieName="Rollo de Guayaba" className = "movies__item dulce-5"/>
        <Peliculas movieName="Tutsi Pop" className = "movies__item dulce-0" />
        <Peliculas movieName="Pelon Pelo Rico" className = "movies__item dulce-1"/>
        <Peliculas movieName="Lucas Muecas" className = "movies__item dulce-2"/>
        <Peliculas movieName="Lucas Panzón" className = "movies__item dulce-3"/>
        <Peliculas movieName="Mazapán Gigante" className = "movies__item dulce-4"/>
        <Peliculas movieName="Rollo de Guayaba" className = "movies__item dulce-5"/>
      </div>
      <Footer/>    
      </div>
    );
}

const estrenosH1 = {
    color: 'white',
    margin: '1rem'
};