import React, { useState } from "react";
//import { InputBody } from "./styleset1";
import "./style.css";
import { useHistory } from "react-router-dom";

const Nameinput = ({ Names, setNames }) => {
  const history = useHistory();
  //入力とその変化
  const [inputTitle, setInputTitle] = useState("");
  //id番号
  const [count, setCont] = useState(Names.length + 1);

  //入力された名前を設定
  const handleInputChange = e => {
    setInputTitle(e.target.value);
  };

  //次へボタンが押された時の処理
  const handleSubmit = () => {
    if (inputTitle) {
      setCont(count + 1);

      const newName = {
        id: count,
        name: inputTitle,
        fine: false
      };

      setNames([...Names, newName]);
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
