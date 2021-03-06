
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import './index.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './components/navbar'
import Home from './components/home'
import Kiki from './pages/kiki-bot';
import Mvcad from './pages/mvcad';
import Pidecor from './pages/pidecor';
import About from './pages/about';
import Footer from './components/footer';
import MainChatbot from './components/main-chatbot';

ReactDOM.render(
  <React.StrictMode>
      <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/kiki-bot" component={Kiki} />
        <Route path="/mvcad" component={Mvcad} />
        <Route path="/pidecor" component={Pidecor} />
      </Switch>
      <MainChatbot />
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

