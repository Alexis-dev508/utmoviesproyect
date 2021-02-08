
import React from 'react';
import Banner from './Banner';
import Menu from './Menu';
import Peliculas from './Movies';
import Footer from './Footer';


function MainApp() {
    return(
        
<div className="App">
      <Banner />
      <header className="App-header">
      <ul>
      <Menu liText = "Home" path="/"/>
       <Menu liText = "Estrenos" path="/estrenos"/>
        <Menu liText = "Dulceria" path="/dulceria"/>
        <Menu liText = "Cartelera" path="/cartelera"/>
        </ul>
      </header>
      <div className="main__movies">
        <Peliculas movieName="Godzilla el Rey de los Mounstruos" className = "movies__item movie-0"/>
        <Peliculas movieName="La caida del alcon negro" className = "movies__item movie-1"/>
        <Peliculas movieName="Chuky el Muñeco Diabolico" className = "movies__item movie-2"/>
        <Peliculas movieName="La Cabina de los Besos" className = "movies__item movie-3"/>
        <Peliculas movieName="No Hay Devoluciones" className = "movies__item movie-4"/>
        <Peliculas movieName="El Profe" className = "movies__item movie-5"/>
        <Peliculas movieName="Godzilla el Rey de los Mounstruos" className = "movies__item movie-0"/>
        <Peliculas movieName="La caida del alcon negro" className = "movies__item movie-1"/>
        <Peliculas movieName="Chuky el Muñeco Diabolico" className = "movies__item movie-2"/>
        <Peliculas movieName="La Cabina de los Besos" className = "movies__item movie-3"/>
        <Peliculas movieName="No Hay Devoluciones" className = "movies__item movie-4"/>
        <Peliculas movieName="El Profe" className = "movies__item movie-5"/>
      </div>
      <Footer />
    </div>
    );
}

export default MainApp