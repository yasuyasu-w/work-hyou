import React, { useState } from "react";
import "/src/styles.css";

import {
  Backbtn,
  Frame,
  TopTitle,
  Header,
  Body,
  Btcreate,
  Btnyes,
  Btnno,
  Result
} from "./styleset2.js";

import { useHistory } from "react-router-dom";

const WKTB = ({ Names, setNames }) => {
  const history = useHistory();
  const initialState = [
    {
      id: 1,
      txt: "体調はどう？",
      btn: false
    },
    {
      id: 2,
      txt: "手は洗った？",
      btn: false
    }
  ];

  //const initialSubmit = [];

  //ボタンの状態と変化
  const [BtnCheck, setBtnCheck] = useState(initialState);

  //yes no のボタンが押されたときにいろを変える。
  const clickChange = (bc, selected) => {
    setBtnCheck(prev =>
      prev.map(t =>
        //t.id===bc.id
        //? {...t,btn:!t.btn}:t))
        {
          if (t.id === bc.id && selected === true) {
            return { ...bc, btn: !bc.btn };
          } else {
            return t;
          }
        }
      )
    );
  };

  //すべてのボタンがyesであれば、結果ボタンに色を付ける。
  const checkYN = () => {
    const yon = BtnCheck.filter(t => t.btn === true);
    if (BtnCheck.length > yon.length) {
      return false;
    } else {
      return true;
    }
  };

  //結果ボタンを押してページ繊維
  const RegstBtn = () => {
    const yon = BtnCheck.filter(t => t.btn === true);
    if (BtnCheck.length === yon.length) {
      setNames(prev =>
        prev.map(t => {
          return { ...t, fine: true };
        })
      );
      setTimeout(() => history.push("/resenlist"), 1500);
    }
  };

  const Goback = () => {
    const Cancel = Names.filter(nm => nm.fine === true);
    setNames(Cancel);
    history.goBack();
  };

  return (
    <>
      <Backbtn onClick={Goback}>戻る</Backbtn>
      <Frame>
        <TopTitle>勤怠表</TopTitle>
        <Header>
          <div>チェックリスト</div>
          <div>Yes OR No?</div>
        </Header>

        {BtnCheck.map((BC, index) => {
          return (
            <Body key={index}>
              {BC.txt}
              <Btcreate>
                <Btnyes
                  selected={!BC.btn}
                  onClick={() => clickChange(BC, !BC.btn)}
                >
                  Yes
                </Btnyes>
                <Btnno
                  selected={BC.btn}
                  onClick={() => clickChange(BC, BC.btn)}
                >
                  No
                </Btnno>
              </Btcreate>
            </Body>
          );
        })}
        <Body>
          <div>結果</div>
          <Result checked={checkYN()} onClick={RegstBtn}>
            {BtnCheck.length > BtnCheck.filter(t => t.btn === true).length
              ? "出勤不可"
              : "出勤可"}
          </Result>
        </Body>
      </Frame>
    </>
  );
};

export default WKTB;
