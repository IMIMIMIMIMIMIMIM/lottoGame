import styled from "styled-components";
import React, { useEffect, useState } from "react";
function App() {
  const [round, SetRound] = useState(1);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(3);

  useEffect(() => {
    // 설정된 시간 간격마다 setInterval 콜백이 실행된다.
    const countdown = setInterval(() => {
      if (parseInt(sec) > 0) {
        setSec(parseInt(sec) - 1);
      }
      if (parseInt(sec) === 0) {
        if (parseInt(min) === 0) {
          SetRound(round + 1);
          clearInterval(countdown);
        } else {
          setMin(parseInt(min) - 1);
          setSec(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [min, sec]);

  let arr = [];
  for (let i = 0; i <= 6; i++) {
    const random = Math.floor(Math.random() * 46);
    if (arr.indexOf(random) === -1) {
      arr.push(random);
    } else {
      i--;
    }
    const lottoArr = arr.sort(function (a, b) {
      return a - b;
    });
  }

  return (
    <ConDiv>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <div style={{ display: "flex" }}>
          <NDiv>{round}회차</NDiv>
          <TimeDiv>
            남은 시간 {min}:{sec < 10 ? `0${sec}` : sec}
          </TimeDiv>
        </div>
        <LoDiv>{arr[0]}</LoDiv>
      </div>
      <ReDiv></ReDiv>
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

const NDiv = styled.div`
  width: 6%;
  font-size: 2rem;
  background-color: lightgray;
  margin: 1rem 0 1rem 0;
  border-radius: 5px 0 0 5px;
  border-right: 2px solid;
`;

const TimeDiv = styled.div`
  width: 20%;
  font-size: 2rem;
  background-color: lightgray;
  margin: 1rem 0 1rem 0;
  border-radius: 0 5px 5px 0;
`;
const LoDiv = styled.div`
  width: 40%;
  height: 500px;
  background-color: lightgray;
  border-radius: 5px;
`;
const ReDiv = styled.div`
  width: 40%;
  height: 300px;
  margin-top: 1rem;
  background-color: gray;
  border-radius: 5px;
`;

// box shadow = 0 1px 3px 0 rgba(136, 148, 158, 0.25), 0 0 2px 0 rgba(136, 148, 158, 0.3)
