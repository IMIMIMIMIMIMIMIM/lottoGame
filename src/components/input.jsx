import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Input = ({ lottoNumbers, timerFinished, onChooseNumbers }) => {
  const [numbers, setNumbers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [count, setCount] = useState(0);
  const [clickSaved, setClickSaved] = useState(false);
  const [saveNumber, setSaveNumber] = useState(null);

  const handleChange = (e, index) => {
    const { value } = e.target;
    const updatedNumbers = [...numbers];
    updatedNumbers[index] = parseInt(value);
    setNumbers(updatedNumbers);
  };

  const handleSave = () => {
    const choose = numbers.slice(0, 6);

    onChooseNumbers(saveNumber);
    const uniqueNumbers = [...new Set(choose)]; // 중복 제거

    if (uniqueNumbers.length !== choose.length) {
      setErrorMessage("중복된 숫자를 뽑을 수 없습니다.");
    } else if (choose.some((number) => number > 45)) {
      setErrorMessage("45보다 큰 숫자를 뽑을 수 없습니다.");
    } else if (choose.length < 6) {
      setErrorMessage("빈 칸을 채워주세요.");
    } else {
      setErrorMessage("");
      setClickSaved(true);
    }
  };

  useEffect(() => {
    let counting = 0;
    if (!timerFinished) {
      setSaveNumber(numbers);
    } else {
      if (timerFinished && clickSaved) {
        for (let i = 0; i < numbers.length; i++) {
          if (lottoNumbers.includes(numbers[i])) {
            counting++;
          }
        }
        setCount(counting);
        setClickSaved(false);
      }
    }
  }, [numbers, lottoNumbers, clickSaved, timerFinished]);

  useEffect(() => {
    setNumbers([]);
    setErrorMessage("");
    setCount(0);
  }, [lottoNumbers]);

  return (
    <ConDiv>
      <InDiv>
        {Array.from({ length: 6 }, (_, index) => (
          <NumberInput
            key={index}
            type="number"
            value={numbers[index] || ""}
            onChange={(e) => handleChange(e, index)}
          />
        ))}
        <SaveBtn disabled={clickSaved} onClick={handleSave}>
          저장
        </SaveBtn>
      </InDiv>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <CountP>맞춘 개수: {count}</CountP>
    </ConDiv>
  );
};

export default Input;

const ConDiv = styled.div`
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

const InDiv = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-around;
`;

const NumberInput = styled.input`
  width: 5rem !important;
  margin: 0 !important;
  padding: 0;
  outline: none;
  text-align: center;
`;

const SaveBtn = styled.button`
  height: 1.5rem;
  width: 5rem;
  margin: 0 !important;
  padding: 0 !important;
`;

const CountP = styled.p`
  margin-top: 1rem;
`;
