import React, { useState } from "react";
import styled from "styled-components";

const Input = () => {
  const [numbers, setNumbers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e, index) => {
    const { value } = e.target;
    const updatedNumbers = [...numbers];
    updatedNumbers[index] = parseInt(value);
    setNumbers(updatedNumbers);
  }; // 입력받은 숫자 배열에 담음.

  const handleSave = () => {
    const choose = numbers.slice(0, 6);
    const uniqueNumbers = [...new Set(choose)]; // 중복 제거

    if (uniqueNumbers.length !== choose.length) {
      // 길이가 다르면, 6으로 해도 될듯
      setErrorMessage("중복된 숫자를 뽑을수 없습니다.");
    } else if (choose.some((number) => number > 45)) {
      setErrorMessage("45보다 큰 숫자를 뽑을 수 없습니다.");
    } else {
      setErrorMessage("");
      console.log(choose);
    }
  };

  return (
    <InDiv>
      {Array.from({ length: 6 }, (_, index) => (
        <input
          key={index}
          type="number"
          value={numbers[index] || ""}
          onChange={(e) => handleChange(e, index)}
        />
      ))}
      <button onClick={handleSave}>저장</button>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InDiv>
  );
};

export default Input;

const InDiv = styled.div`
  height: 300px;
  margin-top: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  background-color: gray;
  border-radius: 10px;

  h2 {
    margin-bottom: 1rem;
  }

  input {
    margin-right: 0.5rem;
    width: 50px;

    appearance: none;
    -webkit-appearance: none;
  }

  input::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    background-color: #f0f0f0;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 0.5rem;
`;
