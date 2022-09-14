import React from 'react';
import {Header} from '../components';
import * as ROUTES from '../constants/routes';
// import netflix from '../images/netflix.png'
// import logo from '../logo.svg';

export function HeaderContainer({ children }) {
  return (
    
    <Header>
      <Header.Frame>
        {/* <Header.Logo  src={netflix} alt={netflix}/> */}
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
    
  );
}