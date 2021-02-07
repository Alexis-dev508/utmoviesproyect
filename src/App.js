import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './styles/banner.css';
import './App.css';
import './styles/movies.css';
import './styles/footer.css';
import './styles/form.css';
import './styles/mobile.css';
import './styles/tablet.css';
import './styles/desktop.css';

//////////////////////////////Banner///////////////////////////////
function Banner() {
  return(
    <div className="banner">
      <h1>🎬UTMovies🎬</h1>
    {/* /* <a href="./form.html" target="_blank"><button className="btn-grad" >Registrarse</button></a>  */ }
    <Form />
    </div>
  );
}
//////////////////////////////Menu///////////////////////////////
function Menu(props) {
  return(
     <li className="ul__item"><a href={props.link}>{props.liText}</a></li>
  );
}
//////////////////////////////Peliculas///////////////////////////////
function Peliculas(props){
return(
  <div className={props.className}>
    <h3><a href="www.google.com">{props.movieName}</a></h3>
  </div>
);
}
//////////////////////////////Footer///////////////////////////////
function Footer(props) {
  return(
    <footer className="main-footer">
        <ul className="main-footer__ul">
          <li className="main-footer__ul--item item0">Copyrigth©</li>
          <li className="main-footer__ul--item item1"> Contacto</li>
          <li className="main-footer__ul--item item2">Acerca de</li>
          <li className="main-footer__ul--item item2">Terminos del servicio</li>
        </ul>
    </footer>
  );
}
////////////////////////////Form//////////////////////////////////

class Form extends React.Component{
  state={
    show: false
  }
  /////////////Metodos de la clase//////////
  toggleShow = ()=>{
      this.setState({show: !this.state.show})
  }
  //////Render/////////
  render(){
    if(this.state.show){
      return (
        <div className="form">
          <form action="post" id="form1" className ="form1">

          <label for="email">
            <span>Correo electrónico</span>
            <input type="email" name="email" id="email" placeholder="alguien@correo.com"></input>
          </label>

          <label for="password">
            <span>Contraseña</span>
            <input type="password" name="password" id="password"></input>
          </label>

          <label for="age">
            <span>Edad</span>
            <input type="age" name="age" id="age" placeholder="19"></input>
          </label>

          <label for="name">
            <span>Nombre completo</span>
            <input type="text" name="name" id="name" placeholder="Jesús Alexis Peinado Cabrera"></input>
          </label>
          <label for="tel">
            <span>Teléfono</span>
            <input type="tel" name="tel" id="tel"></input>
          </label>
          </form>
          <button className="btn-grad" onClick = {this.toggleShow} >Registrarse</button>
          </div>
      );
    }else{
      return  <button className="btn-grad" onClick= {this.toggleShow}>Registrarse</button>
        
    }
    
  }
}

//////////////////////////////Main App///////////////////////////////
const App=()=>{
  return (
    <Router>
    <div className="App">
      <Banner />
      <header className="App-header">
      <ul>
        <Menu liText = "Estrenos" link="/estrenos.html"/>
        <Menu liText = "Dulceria" link="/dulceria.html"/>
        <Menu liText = "Cartelera"/>
        <Menu liText = "Registrarse"/>
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
    </Router>
  );
}

export default App;
