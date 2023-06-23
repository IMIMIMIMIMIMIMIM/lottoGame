import styled from "styled-components";
import React from "react";

const Result = ({ rounds, numbersList }) => {
  return (
    <ReDiv>
      <ul>
        {numbersList.map((numbers, index) => (
          <li key={index}>
            {rounds[index] - 1}회차: {numbers.join(", ")}
          </li>
        ))}
      </ul>
    </ReDiv>
  );
};

export default Result;

const ReDiv = styled.div`
  width: 45%;
  height: auto;
  margin-top: 1rem;
  background-color: gray;
  border-radius: 5px;
`;
