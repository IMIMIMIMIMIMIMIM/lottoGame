import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Result from "../result/result";

const Number = ({ timerFinished }) => {
  const [lottoNumbers, setLottoNumbers] = useState([]);
  const [currentNumber, setCurrentNumber] = useState(null);

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
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [lottoNumbers, currentNumber]);
  // 추첨 속도

  useEffect(() => {
    if (timerFinished) {
      generateLottoNumbers();
    }
  }, [timerFinished]);
  // 0이 되면 추첨 시작

  const generateLottoNumbers = () => {
    let arr = [];
    for (let i = 0; i < 7; i++) {
      const random = Math.floor(Math.random() * 45 + 1);
      arr.push(random);
    }
    const sortedArr = arr.slice(0, 6).sort((a, b) => a - b);
    const additionalNumber = arr[6];
    setLottoNumbers([...sortedArr, additionalNumber]);
    setCurrentNumber(0);
  };
  // 번호 추첨, 6개는 추첨후 정렬 한 개는 따로 뺌

  const getBackgroundColor = (number) => {
    if (number <= 10) {
      return "yellow";
    } else if (number <= 20) {
      return "blue";
    } else if (number <= 30) {
      return "red";
    } else if (number <= 40) {
      return "gray";
    } else {
      return "green";
    }
    // 숫자 색
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
      <Result lottoNumbers={lottoNumbers} />
    </LoDiv>
  );
};

const LoDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 200px;
  background-color: lightgray;
  border-radius: 5px;
`;

const NumDiv = styled.div`
  font-size: 1.5rem;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: opacity 0.5s;
`;

const PlusDiv = styled.div`
  font-size: 1.5rem;
`;

// const Result = styled.div`
//   display: none;
// `;

export default Number;
