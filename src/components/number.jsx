import styled from "styled-components";
import React, { useEffect, useState } from "react";

const Number = ({ timerFinished, onNumbersChange }) => {
  const [lottoNumbers, setLottoNumbers] = useState([]);
  const [numbersList, setNumbersList] = useState([]);
  const [currentNumber, setCurrentNumber] = useState(null);

  useEffect(() => {
    if (timerFinished) {
      generateLottoNumbers();
    }
  }, [timerFinished]);

  useEffect(() => {
    if (lottoNumbers.length > 0) {
      const interval = setInterval(() => {
        if (
          currentNumber === null ||
          currentNumber === lottoNumbers.length - 1
        ) {
          clearInterval(interval);
        } else {
          setCurrentNumber((prevNumber) => prevNumber + 1);
        }
      }, 500);

      return () => clearInterval(interval);
    }
  }, [lottoNumbers, currentNumber]);

  const generateLottoNumbers = () => {
    let numberArr = [];
    let bonusNumber = null;

    while (numberArr.length < 6) {
      const random = Math.floor(Math.random() * 45) + 1;
      if (!numberArr.includes(random)) {
        numberArr.push(random);
      }
    }

    numberArr.sort((a, b) => a - b);

    while (true) {
      const random = Math.floor(Math.random() * 45) + 1;
      if (!numberArr.includes(random)) {
        bonusNumber = random;
        break;
      }
    }

    const finalLottoNumbers = [...numberArr, bonusNumber];
    setLottoNumbers(finalLottoNumbers);
    setNumbersList((prevList) => [...prevList, finalLottoNumbers]);
    setCurrentNumber(0);
    onNumbersChange(finalLottoNumbers);
  };

  const getBackgroundColor = (number) => {
    if (number <= 10) {
      return "#fbc400";
    } else if (number <= 20) {
      return "#69c8f2";
    } else if (number <= 30) {
      return "#ff7272";
    } else if (number <= 40) {
      return "#aaa";
    } else {
      return "#b0d840";
    }
  };

  return (
    <LoDiv>
      {lottoNumbers.slice(0, 6).map((number, index) => (
        <NumDiv
          key={index}
          bgColor={getBackgroundColor(number)}
          show={index <= currentNumber}
        >
          {number}
        </NumDiv>
      ))}
      {currentNumber >= 6 && (
        <>
          <PlusDiv>+</PlusDiv>
          <NumDiv
            bgColor={getBackgroundColor(lottoNumbers[6])}
            show={currentNumber >= 6}
          >
            {lottoNumbers[6]}
          </NumDiv>
        </>
      )}
    </LoDiv>
  );
};

export default Number;

const LoDiv = styled.div`
  display: flex;
  width: 90%;
  margin-left: 2rem;
  justify-content: space-around;
  align-items: center;
  height: 200px;
  background-color: #dfdf9c;
  border-radius: 15px;
  box-shadow: 0px 0px 10px 1px;
`;

const NumDiv = styled.div`
  font-size: 1.5rem;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: opacity 0.5s;
  text-shadow: 0px 0px 3px rgba(0, 49, 70, 0.8);
`;

const PlusDiv = styled.div`
  font-size: 1.5rem;
`;
