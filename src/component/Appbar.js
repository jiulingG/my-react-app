import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'react-emotion';

const Listyle=styled('div')`
  display: inline-block;
  color: blue;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;


const Appbar=()=>(
   <Listyle>
    <Link to="/" style={{textDecoration: 'none' }}>Home </Link>
		<Link to="/Storypage" style={{textDecoration: 'none' }}> Storys </Link>
    <Link to="/Picturespage" style={{ textDecoration: 'none' }}> Pictures </Link>
    <Link to="/Hobypage" style={{ textDecoration: 'none' }}> Hoby </Link>
		<Link to="/Dreamspage" style={{ textDecoration: 'none' }}> Dreams </Link>
    </Listyle>
    );

export default Appbar;

