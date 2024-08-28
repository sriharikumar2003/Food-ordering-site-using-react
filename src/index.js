import React from 'react';
import "./index.css"
import ReactDOM from 'react-dom/client';
import Header from './components/Header.js';
import About from './components/about.js';
import Body from './components/Body.js';
import Foods from './components/items.js';
import Contact from './components/contact.js';
import Creams from './components/icecreams.js';



function Deploy(){
  return(
    <>
    <Header />
    <Body />
    <About />
    <Foods />
    <Creams />
    <Contact />
    </>
  )
}


const rootEle = document.getElementById('root');
const root = ReactDOM.createRoot(rootEle);
root.render(<Deploy />)


