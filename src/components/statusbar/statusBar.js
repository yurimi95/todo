import React from 'react';
import {Header, DateBar, WeatherBar, BoldSpan} from "./statusBarStyle";

const StatusBar = () => {
  return (
    <Header>
      <DateBar>
        <span>28</span>
        <div>
         <BoldSpan>JUNE</BoldSpan>
         <span>2020</span>
        </div>
      </DateBar>
      <WeatherBar>
        <BoldSpan>SUNDAY</BoldSpan>
        <span>12 Seoul</span>
      </WeatherBar>
    </Header>
  );
}

export default StatusBar;
