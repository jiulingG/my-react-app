import React from 'react';
import styled from 'react-emotion';
import ReactDOM from 'react-dom';
import App from './App.js';
import InvestType from './component/InvestType';
import imgUrl from './component/Background.jpg';
import Appbar from './component/Appbar.js';

const PageContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  background: `url(${ imgUrl })` 
}) 

ReactDOM.render(
<PageContainer>
  <Appbar />
  <InvestType />
</PageContainer>
,document.getElementById('root'));

