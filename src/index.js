import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';
import imgUrl from './component/Background.jpg';

const homeImage = {
	minheight: '100%',
	 width: '100%',
      margin: 'auto',
      height:'100%', 
    position:'fixed',
    background: `url(${ imgUrl })`}

ReactDOM.render(<div style={homeImage}><BrowserRouter><App /></BrowserRouter></div>,document.getElementById('root'));

