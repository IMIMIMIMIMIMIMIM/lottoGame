import React, { useState } from "react";
import styled from "styled-components";

const Input = ({ className }) => {
  const [numbers, setNumbers] = useState([]);

  const handleChange = (e, index) => {
    const { value } = e.target;
    const updatedNumbers = [...numbers];
    updatedNumbers[index] = parseInt(value);
    setNumbers(updatedNumbers);
  };

  const handleSave = () => {
    const choose = numbers.slice(0, 7);
    console.log(choose); // choose 변수에 저장된 숫자 출력
  };

  return (
    <div className={className}>
      {Array.from({ length: 7 }, (_, index) => (
        <input
          key={index}
          type="number"
          value={numbers[index] || ""}
          onChange={(e) => handleChange(e, index)}
        />
      ))}
      <button onClick={handleSave}>저장</button>
    </div>
  );
};

const StyledInput = styled(Input)`
  height: 300px;
  margin-top: 1rem;
  background-color: gray;
  border-radius: 5px;

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

export default StyledInput;
