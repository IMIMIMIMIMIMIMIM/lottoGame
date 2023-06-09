import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Number = () => {
  const [lottoNumbers, setLottoNumbers] = useState([]);

  useEffect(() => {
    generateLottoNumbers();
  }, []);

  const generateLottoNumbers = () => {
    let arr = [];
    for (let i = 0; i <= 6; i++) {
      const random = Math.floor(Math.random() * 45 + 1);
      if (arr.indexOf(random) === -1) {
        arr.push(random);
      } else {
        i--;
      }
    }
    arr.sort(function (a, b) {
      return a - b;
    });
    setLottoNumbers(arr);
  };

  return (
    <LoDiv>
      {lottoNumbers.map((number, index) => (
        <NumDiv key={index} bgColor={getBackgroundColor(number)}>
          {number}
        </NumDiv>
      ))}
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
`;

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
};

export default Number;
