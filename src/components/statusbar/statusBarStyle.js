import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  display: flex;
`;

export const BarStyle = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  color: #63616d;
`;

export const WeatherBar = styled(BarStyle)`
  flex-flow: column;
  justify-content: center;
  align-items: flex-end;
`;

export const DateBar = styled(BarStyle)`
  align-items: center;
  & > span {
    font-size: 40px;
    font-weight: bold;
    color: #93b3d7;
    padding-bottom: 8px;
  }
  & > div {
    display: flex;
    flex-flow: column;
    align-items: center;
  }
`;

export const BoldSpan = styled.div`
  font-size: 14px;
  font-weight: bold;
`;
