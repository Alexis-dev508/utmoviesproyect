
import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
//Estilos
import './styles/banner.css';
import './styles/desktop.css';
import './styles/footer.css';
import './styles/form.css';
import './styles/mobile.css';
import './styles/movies.css';
import './styles/tablet.css';
import './App.css';
//Components
import MainApp from './components/Main';
import Estrenos from './pages/Estrenos';
import Dulceria from './pages/Dulceria';

//////////////////////////////Main App///////////////////////////////
const App=()=>{
  return (
    <Router>
      <React.Fragment>
        <Route  path="/" exact component= {MainApp} />
        <Route  path="/estrenos" exact component={Estrenos}/>
        <Route  path="/dulceria" exact component={Dulceria}/>
      </React.Fragment>
      </Router>
  );
}

export default App;
