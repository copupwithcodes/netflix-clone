import React from 'react';
import { Accordian } from "../components";
import { OptForm } from '../components';
import {HeaderContainer} from '../containers/header';
import {FaqsContainer} from '../containers/faqs';
import {FooterContainer} from '../containers/footer';

import {JumbotronContainer} from '../containers/jumbotron';
import { Feature } from '../components';
const Home = () => {
  return (
    <div>
        <HeaderContainer>
          <Feature>
            <Feature.Title>
              Unlimited films, TV programs and more.
            </Feature.Title>
            <Feature.SubTitle>
              Watch anywhere. Cancel at any time.
            </Feature.SubTitle>
            <Accordian>
            <OptForm>
                <OptForm.Text>
                    Ready to watch? Enter your email to create or restart your membership
                </OptForm.Text>
                <OptForm.Input placeholder = "Email address"/>
                <OptForm.Button>Try it now</OptForm.Button>
                
            </OptForm>
            </Accordian>
            </Feature>
            </HeaderContainer>
            <JumbotronContainer/>
            <FaqsContainer/>
            
            <FooterContainer/> 
        
        
    </div>
  )
}

export default Home;