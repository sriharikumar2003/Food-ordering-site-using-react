import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header.js';
import About from './components/about.js';
import Body from './components/Body.js';
import Foods from './components/items.js';
import Creams from './components/icecreams.js';



function Deploy(){
  return(
    <>
    <Header />
    <Body />
    <About />
    <Foods />
    <Creams />
    </>
  )
}

const rootEle = document.getElementById('root');
const root = ReactDOM.createRoot(rootEle);
root.render(<Deploy />)


