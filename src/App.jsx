import styled from "styled-components";
import React, { useEffect, useState } from "react";
// import Timer from "./components/timer/timer";
import Round from "./components/round/round";
import Number from "./components/number/number";
import GptTimer from "./components/gpttimer/gptTimer";
function App() {
  // const [round, SetRound] = useState(1);
  // const [num1, setNum1] = useState("");
  // const [num2, setNum2] = useState("");
  // const [num3, setNum3] = useState("");
  // const [num4, setNum4] = useState("");
  // const [num5, setNum5] = useState("");
  // const [num6, setNum6] = useState("");
  // const [num7, setNum7] = useState("");
  // const onChangeNum1 = (e) => {
  //   setNum1(e.target.value);
  // };
  // const onChangeNum2 = (e) => {
  //   setNum2(e.target.value);
  // };
  // const onChangeNum3 = (e) => {
  //   setNum3(e.target.value);
  // };
  // const onChangeNum4 = (e) => {
  //   setNum4(e.target.value);
  // };
  // const onChangeNum5 = (e) => {
  //   setNum5(e.target.value);
  // };
  // const onChangeNum6 = (e) => {
  //   setNum6(e.target.value);
  // };
  // const onChangeNum7 = (e) => {
  //   setNum7(e.target.value);
  // };
  // const onSave = () => {
  //   setNum1(num1);
  //   setNum1(num2);
  //   setNum1(num3);
  //   setNum1(num4);
  //   setNum1(num5);
  //   setNum1(num6);
  //   setNum1(num7);
  // };
  // console.log(onSave);

  return (
    <ConDiv>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Round></Round>
        <GptTimer></GptTimer>
        <Number></Number>
      </div>
      <ReDiv>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {/* <input style={{ width: "10%" }} onChange={onChangeNum1} />
          <input style={{ width: "10%" }} onChange={onChangeNum2} />
          <input style={{ width: "10%" }} onChange={onChangeNum3} />
          <input style={{ width: "10%" }} onChange={onChangeNum4} />
          <input style={{ width: "10%" }} onChange={onChangeNum5} />
          <input style={{ width: "10%" }} onChange={onChangeNum6} />
          <input style={{ width: "10%" }} onChange={onChangeNum7} /> */}

          {/* <button onClick={onSave}>저장</button> */}
        </div>
      </ReDiv>
    </ConDiv>
  );
}

export default App;

const ConDiv = styled.div`
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ReDiv = styled.div`
  width: 40%;
  height: 300px;
  margin-top: 1rem;
  background-color: gray;
  border-radius: 5px;
`;

// box shadow = 0 1px 3px 0 rgba(136, 148, 158, 0.25), 0 0 2px 0 rgba(136, 148, 158, 0.3)
