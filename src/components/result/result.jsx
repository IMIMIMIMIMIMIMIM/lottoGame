import styled from "styled-components";

const Result = () => {
  const result = () => {
    // numbers();
  };
  return (
    <ReDiv>
      <div>{result}</div>
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
