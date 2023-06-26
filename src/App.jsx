import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Round from "./components/round";
import Number from "./components/number";
import Input from "./components/input";
import Result from "./components/result";

const App = () => {
  const [round, setRound] = useState([1]);
  const [lottoNumbers, setLottoNumbers] = useState([]);
  const [numbersList, setNumbersList] = useState([]);
  const [timerFinished, setTimerFinished] = useState(false);
  const [count, setCount] = useState(0);
  const [countList, setCountList] = useState([]);

  const handleRoundChange = (newRound) => {
    setRound((prevRounds) => [newRound, ...prevRounds]);
  };

  const handleTimerFinish = () => {
    setTimerFinished(true);
  };

  const handleNumbersChange = (numbers) => {
    setLottoNumbers(numbers);
    setNumbersList((prevList) => [numbers, ...prevList]);
    setTimerFinished(false);
    if (timerFinished && numbers.length === 0) {
      handleCountChange(-1);
    }
  };

  const handleCountChange = (newCount) => {
    setCount(newCount);
    setCountList((prevCountList) => [newCount, ...prevCountList]);
  };
  useEffect(() => {
    console.log(countList);
  }, [countList]);

  return (
    <AppDiv>
      <ConDiv>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            justifyContent: "space-between",
          }}
        >
          <Round
            onRoundChange={handleRoundChange}
            onTimerFinish={handleTimerFinish}
          />
          <Number
            timerFinished={timerFinished}
            onNumbersChange={handleNumbersChange}
          />
        </div>
        <Input
          lottoNumbers={lottoNumbers}
          onCountChange={handleCountChange}
          timerFinished={timerFinished}
        />
      </ConDiv>
      <Result
        rounds={round}
        numbersList={numbersList}
        count={count}
        countList={countList}
      />
    </AppDiv>
  );
};

export default App;

const AppDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  overflow: hidden;
`;

const ConDiv = styled.div`
  width: 45%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
