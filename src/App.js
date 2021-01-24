import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Sceneries from './components/pages/Sceneries';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
         <Navbar/>
         <Switch>
         <Route path='/' exact component={Home} />
         <Route path='/Sceneries' component={Sceneries} />
         </Switch>
    </Router>
    </>
  );
}

export default App;
