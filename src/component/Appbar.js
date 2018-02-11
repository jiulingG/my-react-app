import React from 'react';
import {Navbar} from  'react-bootstrap';
import {Link} from 'react-router-dom';
import styled from 'react-emotion';

const AppbarStyle=styled('div')`
      margin: 1em;
      padding: 0.5em 1em;
      border-radius: 5px;
      background: #eee;
      display:flex;
      justify-content: flex-end;`



const Appbar=()=>(
  <Navbar style={{fixedTop:'true'}}>
     
    <AppbarStyle>
    <Link to="/" style={{flex: 1}}>Home</Link>&nbsp;
    <Link to="/Storypage" style={{textDecoration: 'none' }}> Storys </Link>&nbsp;
    <Link to="/Picturespage" style={{ textDecoration: 'none' }}> Pictures </Link>&nbsp;  
    <Link to="/Hobypage" style={{ textDecoration: 'none' }}> Hoby </Link>&nbsp;   
    <Link to="/Dreamspage" style={{ textDecoration: 'none' }}> Dreams </Link>
    </AppbarStyle>
    </Navbar>
      );
export default Appbar;