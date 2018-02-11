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

const HomeStyle=styled('span')`
      margin: 1em;
      padding: 0.5em 1em;
      border-radius: 5px;
      background: #eee;
      display:flex;
      justify-content: flex-start;`

const Appbar=()=>(
  <Navbar style={{fixedTop:'true'}}>
   <HomeStyle>
     <Link to="/" style={{textDecoration: 'none'}}>Home</Link>&nbsp;</HomeStyle>
    <AppbarStyle>
    <Link to="/Storypage" style={{textDecoration: 'none' }}> Storys </Link>&nbsp;
    <Link to="/Picturespage" style={{ textDecoration: 'none' }}> Pictures </Link>&nbsp;  
    <Link to="/Hobypage" style={{ textDecoration: 'none' }}> Hoby </Link>&nbsp;   
    <Link to="/Dreamspage" style={{ textDecoration: 'none' }}> Dreams </Link>
    </AppbarStyle>
    </Navbar>
      );
export default Appbar;