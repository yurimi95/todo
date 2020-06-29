import React from "react";
import StatusBar from "./components/statusbar/statusBar";
import WelcomeUser from "./components/username-box/WelcomeUser";
import Todos from "./components/todos/todos";
import {Wrapper, AppWrapper} from "./appstyle";

function App(){
  return (
    <Wrapper>
      <AppWrapper>
        <StatusBar/>
        <WelcomeUser/>
        <Todos/>
      </AppWrapper>
    </Wrapper>
  );
}

export default App;
