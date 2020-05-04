import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import Nameinput from "./page/page1/nameInput";
import WKTB from "./page/page2/Wktb";
import Resenlist from "./page/page3/Resenlist";
import "./styles.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Container = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  const initialState = [
    {
      id: 1,
      name: "A",
      fine: false
    }
  ];
  //多コンポーネントで利用できるように
  const [Names, setNames] = useState(initialState);
  console.log(Names);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Nameinput Names={Names} setNames={setNames} />
        </Route>
        <Route path="/wktb" exact>
          <WKTB Names={Names} setNames={setNames} />
        </Route>
        <Route path="/resenlist" exact>
          <Resenlist Names={Names} setNames={setNames} />
        </Route>
      </Switch>
    </Router>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Container>
    <App />
  </Container>,
  rootElement
);
