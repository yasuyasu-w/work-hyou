import React, { useState } from "react";
import { Frame, TopTitle, Header, Body, Delebtn, Cpletebtn } from "./styleset3";
import { useHistory } from "react-router-dom";

const Resenlist = ({ Names, setNames }) => {
  const len = Names.length;
  const FilNames = Names.filter(n => n.fine === true);
  const history = useHistory();
  const [count, setCount] = useState(1);

  //退勤
  const Delete = fn => {
    const DL = FilNames.filter(n => n.id !== fn.id);
    const DLid = DL.map(dl => {
      setCount(count + 1);
      return { ...dl, id: count };
    });
    setNames(DLid);
  };

  return (
    <>
      <h1>{len >= 1 ? `${Names[len - 1].name}は出勤しました！` : ""}</h1>
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
      <Cpletebtn onClick={() => history.push("/")}>終える</Cpletebtn>
    </>
  );
};

export default Resenlist;
