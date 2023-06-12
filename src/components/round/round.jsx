import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Number from "../number/number";
import Result from "../result/result";

const Round = () => {
  const [round, setRound] = useState(1);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(3);
  const [timerFinished, setTimerFinished] = useState(false);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(sec) > 0) {
        setSec(parseInt(sec) - 1);
        setTimerFinished(false);
      }
      if (parseInt(sec) === 0 && parseInt(min) === 0) {
        clearInterval(countdown);
        setTimerFinished(true);
        reLoad();
      } else if (parseInt(sec) === 0) {
        setMin(parseInt(min) - 1);
        setTimerFinished(false);
        setSec(59);
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [min, sec]);
  // 타이머 설정

  const reLoad = () => {
    setTimeout(() => {
      setSec(3);
      setRound(round + 1);
    }, 7000);
  };
  // 타이머 재시작

  return (
    <div>
      <div style={{ display: "flex" }}>
        <NDiv>{round}회차</NDiv>
        <TimeDiv>
          남은 시간 {min}:{sec < 10 ? `0${sec}` : sec}
        </TimeDiv>
      </div>
      <Number timerFinished={timerFinished} />
      <Result round={round} /> {/* round 값을 전달 */}
    </div>
  );
};

export default Round;

const NDiv = styled.div`
  font-size: 2rem;
  background-color: lightgray;
  margin: 1rem 0 1rem 0;
  border-radius: 5px 0 0 5px;
  border-right: 2px solid;
  border-color: white;
`;

const TimeDiv = styled.div`
  font-size: 2rem;
  background-color: lightgray;
  margin: 1rem 0 1rem 0;
  border-radius: 0 5px 5px 0;
`;
