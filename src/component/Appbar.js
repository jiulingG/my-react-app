import React from 'react';
import styled from 'react-emotion';

const AppbarStyle=styled('h1')({
  display:'flex',
  displayDirection: 'column',
  background: 'blue'

})

const Appbar=()=>(
    <AppbarStyle>
    please choose one type
    </AppbarStyle>
   
      );
export default Appbar;