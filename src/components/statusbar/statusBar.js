import React from "react";
import { Header, DateBar, WeatherBar, BoldSpan } from "./statusBarStyle";

const StatusBar = () => {
  const today = new Date();

  const monthTime = today.toLocaleDateString("en-US", { month: "long" });
  const dayTime = today.toLocaleDateString("en-US", { day: "numeric" });
  const yearTime = today.toLocaleDateString("en-US", { year: "numeric" });
  const weekTime = today.toLocaleDateString("en-US", { weekday: "long" });

  return (
    <Header>
      <DateBar>
        <span>{dayTime}</span>
        <div>
          <BoldSpan>{monthTime}</BoldSpan>
          <span>{yearTime}</span>
        </div>
      </DateBar>
      <WeatherBar>
        <BoldSpan>{weekTime}</BoldSpan>
        <span>12 Seoul</span>
      </WeatherBar>
    </Header>
  );
};

export default StatusBar;
