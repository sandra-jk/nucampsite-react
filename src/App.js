import React from 'react';
import './App.css';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import NucampLogo from './app/assets/img/logo.png';
import CampsiteCard from '.src/features/campsites/CampsiteCard.js';
import { CAMPSITES } from './app/shared/CAMPSITES';

function App() {
  return (
    <div className="App">
      hello nucamp!
      <Navbar dark color='primary' sticky='top' expand='md'>
               <Container>
                    <NavbarBrand href='/'>
                        <img src={NucampLogo} alt='nucamp logo' />
                    </NavbarBrand>
                </Container>
            </Navbar>
            <CampsiteCard campsite={CAMPSITES[0]} />
    </div>
  );
}

export default App;
