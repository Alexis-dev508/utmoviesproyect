import React, {Component} from 'react';

///////////////////////////Form//////////////////////////////////

class Form extends Component{
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
              <span>Correo electrónico:</span>
              <input type="email" name="email" id="email" placeholder="alguien@correo.com" required autoComplete></input>
            </label>
  
            <label for="password">
              <span>Contraseña:</span>
              <input type="password" name="password" id="password" required autoComplete></input>
            </label>
  
            <label for="age">
              <span>Edad:</span>
              <input type="age" name="age" id="age" placeholder="19" required autoComplete></input>
            </label>
  
            <label for="name">
              <span>Nombre completo:</span>
              <input type="text" name="name" id="name" placeholder="Jesús Alexis Peinado Cabrera" required autoComplete></input>
            </label>
            <label for="tel">
              <span>Teléfono:</span>
              <input type="tel" name="tel" id="tel" required autoComplete></input>
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
  export default Form