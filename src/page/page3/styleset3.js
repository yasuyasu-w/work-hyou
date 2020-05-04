import styled from "styled-components";

export const Frame = styled.div`
  width: 800px;
  border: 1px solid black;
  margin-bottom: 20px;
`;

export const TopTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  border: 1px solid black;
  text-align: center;
`;

export const Header = styled.div`
  font-size: 16px;
  display: flex;
  justify-content: space-around;
  background: lightblue;
`;

export const Body = styled.div`
  font-size: 18px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid black;
`;

export const Delebtn = styled.div`
  border-radius: 20px;
  background-color: red;
  padding: 20px;
  margin: 5px;
  text-align: center;
  color: white;
`;

export const Cpletebtn = styled.div`
  border-radius: 20px;
  background-color: blue;
  padding: 20px;
  margin: 5px;
  text-align: center;
  color: white;
  left: 100px;
`;
