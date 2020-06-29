import React from 'react';
import {Wrapper,Username, Welcome} from "./WelcomeUserStyle";

function WelcomeUser() {
    return (
      <Wrapper>
          <Username>Hey Yurim</Username>
          <Welcome>You have some important</Welcome> 
          <Welcome>tasks to do for today</Welcome>
      </Wrapper>
    );
  }

export default WelcomeUser;