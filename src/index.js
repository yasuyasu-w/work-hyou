import React, { useEffect, useReducer } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import Nameinput from "./page/page1/nameInput";
import WKTB from "./page/page2/Wktb";
import Resenlist from "./page/page3/Resenlist";
import "./styles.css";
import AppContext from "./context/AppContext";
import reducer from "./reducers";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Container = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LOCAL_KEY = "localKey";

const App = () => {
  const localState = localStorage.getItem(LOCAL_KEY);
  console.log(localState);

  /*
   stateをArray->objectに変更する
  */
  const initialState = localState
    ? JSON.parse(localState)
    : {
        workmng: [],
        historyLogs: []
      };

  // const initialState = {
  //   workmng: [],
  //   historyLogs: []
  // };
  // const initialState = [
  //   {
  //     id: 1,
  //     name: "A",
  //     fine: false
  //   }
  // ];
  //多コンポーネントで利用できるように
  //const [Names, setNames] = useState(initialState);
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  useEffect(() => {
    const string = JSON.stringify(state);
    localStorage.setItem(LOCAL_KEY, string); // ローカルストレージに値をセット
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Nameinput />
          </Route>
          <Route path="/wktb" exact>
            <WKTB />
          </Route>
          <Route path="/resenlist" exact>
            <Resenlist />
          </Route>
        </Switch>
      </Router>
    </AppContext.Provider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Container>
    <App />
  </Container>,
  rootElement
);
