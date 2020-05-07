import React, { useState, useContext } from "react";
import { Frame, TopTitle, Header, Body, Delebtn, Cpletebtn } from "./styleset3";
import { useHistory } from "react-router-dom";
import AppContext from "/src/context/AppContext";
import { DELETE_NAME } from "/src/actions/actions";
import { DELETE_HISTORY_LOG } from "/src/actions/actions";
import nowtime from "/src/nowtime";

const Resenlist = () => {
  const { state, dispatch } = useContext(AppContext);
  const len = state.workmng.length;
  const FilNames = state.workmng.filter(n => n.fine === true);
  const history = useHistory();
  //const [count, setCount] = useState(1);

  //退勤
  const Delete = fn => {
    //const DL = FilNames.filter(n => n.id !== fn.id);
    //const DLid = DL.map(dl => {
    //  setCount(count + 1);
    //  return { ...dl, id: count };
    //});
    //setNames(DLid);
    dispatch({
      type: DELETE_NAME,
      id: fn.id,
      fine: !fn.fine
    });
  };

  return (
    <>
      <h1>
        {len >= 1 ? `${state.workmng[len - 1].name}は出勤しました！` : ""}
      </h1>
      <Frame>
        <TopTitle>出勤リスト</TopTitle>
        <Header>
          <div>名前</div>
          <div>退勤</div>
        </Header>
        {FilNames.map((FN, index) => {
          return (
            <Body key={index}>
              {FN.name}
              <Delebtn onClick={() => Delete(FN)}>退勤</Delebtn>
            </Body>
          );
        })}
      </Frame>
      <Frame>
        <TopTitle>履歴</TopTitle>
        <Header>
          <div>名前</div>
          <div>時間</div>
        </Header>
        {state.historyLogs.map((HL, index) => {
          return (
            <Body key="index">
              <div>{HL.description}</div>
              <div> {HL.historyAt}</div>
            </Body>
          );
        })}
      </Frame>
      <Delebtn onClick={() => dispatch({ type: DELETE_HISTORY_LOG })}>
        履歴削除
      </Delebtn>
      <Cpletebtn onClick={() => history.push("/")}>終える</Cpletebtn>
    </>
  );
};

export default Resenlist;
