import React, { useState, useContext } from "react";
//import { InputBody } from "./styleset1";
import "./style.css";
import { useHistory } from "react-router-dom";
import AppContext from "/src/context/AppContext";
import { JOIN_NAME } from "/src/actions/actions";

const Nameinput = () => {
  const { dispatch } = useContext(AppContext);
  const history = useHistory();
  //入力とその変化
  const [inputTitle, setInputTitle] = useState("");
  //id番号
  //const [count, setCont] = useState(Names.length + 1);

  //入力された名前を設定
  const handleInputChange = e => {
    setInputTitle(e.target.value);
  };

  //次へボタンが押された時の処理
  const handleSubmit = () => {
    if (inputTitle) {
      dispatch({
        type: JOIN_NAME,
        name: inputTitle
      });

      history.push("/wktb");
      setInputTitle("");
    }
  };

  return (
    <>
      <form>
        <label htmlFor="name">名前:</label>
        <input
          type="text"
          id="name"
          placeholder="名前入力して"
          value={inputTitle}
          onChange={handleInputChange}
          required
        />
        <button onClick={handleSubmit}>次へ</button>
      </form>
    </>
  );
};

export default Nameinput;
