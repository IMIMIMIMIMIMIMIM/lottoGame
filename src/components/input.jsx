import React, { useState } from "react";
import styled from "styled-components";

const Input = () => {
  const [numbers, setNumbers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [modal, setModal] = useState(false);

  const handleChange = (e, index) => {
    const { value } = e.target;
    const updatedNumbers = [...numbers];
    updatedNumbers[index] = parseInt(value);
    setNumbers(updatedNumbers);
  };

  const closeModal = () => {
    setModal(false);
  };

  const handleSave = () => {
    const choose = numbers.slice(0, 6);
    const uniqueNumbers = [...new Set(choose)]; // 중복 제거

    if (uniqueNumbers.length !== choose.length) {
      setErrorMessage("중복된 숫자를 뽑을 수 없습니다.");
      setModal(false);
    } else if (choose.some((number) => number > 45)) {
      setErrorMessage("45보다 큰 숫자를 뽑을 수 없습니다.");
      setModal(false);
    } else if (choose.length < 6) {
      setErrorMessage("빈 칸을 채워주세요.");
      setModal(false);
    } else {
      setErrorMessage("");
      setModal(true); // 조건을 모두 만족할 경우 모달을 표시
    }
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
        <SaveBtn onClick={handleSave}>확인</SaveBtn>
        {modal ? (
          <ModalContainer onClick={closeModal}>
            <Modal onClick={(e) => e.stopPropagation()}>
              <div>
                <NumP bgColor={getBackgroundColor(numbers)}>{numbers}</NumP>
              </div>
              <ModalBtn onClick={closeModal}>확인</ModalBtn>
            </Modal>
          </ModalContainer>
        ) : null}
      </InDiv>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
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

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  padding: 16px;
  background: white;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 0 5px 1px;
`;

const NumP = styled.p`
  font-size: 1.5rem;
  background-color: ${(props) => props.bgColor};
`;

const ModalBtn = styled.button`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  font-size: 1.5rem;
  margin: 0 !important;
`;
