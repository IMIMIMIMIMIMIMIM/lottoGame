import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Number from "../number/number";
const Round = () => {
  const [round, setRound] = useState(1);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(3);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(sec) > 0) {
        setSec(parseInt(sec) - 1);
      }
      if (parseInt(sec) === 0) {
        if (parseInt(min) === 0) {
          clearInterval(countdown);
          reLoad();
        } else {
          setMin(parseInt(min) - 1);
          setSec(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [min, sec]);

  const reLoad = () => {
    setTimeout(() => {
      setSec(3);
      setRound(round + 1);
      Number();
    }, 2000);
  };
  return (
    <div style={{ display: "flex" }}>
      <NDiv>{round}회차</NDiv>
      <TimeDiv>
        남은 시간 {min}:{sec < 10 ? `0${sec}` : sec}
      </TimeDiv>
    </div>
  );
};

export default Round;

const NDiv = styled.div`
  width: 6%;
  font-size: 2rem;
  background-color: lightgray;
  margin: 1rem 0 1rem 0;
  border-radius: 5px 0 0 5px;
  border-right: 2px solid;
  border-color: white;
`;

const TimeDiv = styled.div`
  width: 20%;
  font-size: 2rem;
  background-color: lightgray;
  margin: 1rem 0 1rem 0;
  border-radius: 0 5px 5px 0;
`;
