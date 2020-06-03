import React from 'react';
import ReactDOM from 'react-dom';
// import Land from './Land';
import NavBar from './components/NavBar';
import Body from './components/Body';
import Footer from './components/Footer';
import './assets.scss';
// import * as serviceWorker from './serviceWorker';



ReactDOM.render(
  <div>
  {/* <Land /> */}
  <NavBar />
  <Body title="ESCAMILLA HOUSE"/>
  <Footer />
  </div>,
  document.getElementById('root')
);

// serviceWorker.unregister();