import styled from "styled-components";

const Result = (props) => {
  return (
    <ReDiv>
      <div>
        {props.round}회차 로또 번호: {props.lottoNumbers}
      </div>
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
