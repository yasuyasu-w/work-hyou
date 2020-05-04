import styled, { css } from "styled-components";

export const Backbtn = styled.div`
  border-radius: 20px;
  background-color: blue;
  padding: 20px;
  margin-bottom: 10px;
  text-align: center;
  color: white;
`;

export const Frame = styled.div`
  width: 800px;
  border: 1px solid black;
  margin-bottom: 50px;
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
  font-size: 16px;
  display: flex;
  justify-content: space-around;
  border: 1px solid black;
`;

export const Btcreate = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

export const Btnyes = styled.div`
  border-radius: 50px;
  background-color: red;
  padding: 20px;
  text-align: center;
  color: white;

  ${props =>
    props.selected &&
    css`
      background-color: gray;
    `}
`;

/*export const Btnno = styled.div`
  border-radius: 50px;
  background-color: blue;
  padding: 20px;
  text-align: center;
  color: white;

  ${props =>
    props.selected &&
    css`
      background-color: gray;
    `}
`;*/

export const Btnno = styled(Btnyes)`
  background-color: blue;

  ${props =>
    props.selected &&
    css`
      background-color: gray;
    `}
`;

export const Result = styled.div`
  border-radius: 50px;
  background-color: gray;
  padding: 20px;
  margin: 5px;
  text-align: center;
  color: white;

  ${props =>
    props.checked &&
    css`
      background-color: orangered;
    `}
`;
