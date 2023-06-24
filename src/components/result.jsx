import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Result = ({ rounds, numbersList }) => {
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (rounds.length > 0 && numbersList.length === rounds.length) {
      setShowResult(true);
    }
  }, [rounds, numbersList]);

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
    <ReDiv>
      {showResult ? (
        <ul style={{ listStyle: "none", lineHeight: "60px" }}>
          {numbersList.map((numbers, index) => (
            <li key={index}>
              {rounds[index] - 1}회차:{" "}
              {numbers.map((number, i) => (
                <NumberSpan
                  key={i}
                  style={{ backgroundColor: getBackgroundColor(number) }}
                >
                  {number}
                </NumberSpan>
              ))}
            </li>
          ))}
        </ul>
      ) : (
        <LoadingText>결과를 불러오는 중입니다...</LoadingText>
      )}
    </ReDiv>
  );
};

export default Result;

const ReDiv = styled.div`
  overflow-y: scroll;
  width: 45%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  background-color: gray;
  border-radius: 10px;
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: beige;
  }
  ::-webkit-scrollbar-button {
    width: 0;
    height: 0;
  }
`;

const NumberSpan = styled.span`
  display: inline-block;
  margin-top: 1rem;
  margin-right: 0.5rem;
  font-size: 1.5rem;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  text-align: center;
  color: white;
  text-shadow: 0px 0px 3px rgba(0, 49, 70, 0.8);
`;

const LoadingText = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #888;
  text-align: center;
  padding: 20px;
`;
