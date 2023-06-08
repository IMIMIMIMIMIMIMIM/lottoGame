import styled from "styled-components";
const Number = () => {
  let arr = [];
  for (let i = 0; i <= 6; i++) {
    const random = Math.floor(Math.random() * 45 + 1);
    if (arr.indexOf(random) === -1) {
      arr.push(random);
    } else {
      i--;
    }
    const lottoArr = arr.sort(function (a, b) {
      return a - b;
    });
  }
  return (
    <LoDiv>
      <div>{arr[0]}</div>
      <div>{arr[1]}</div>
      <div>{arr[2]}</div>
      <div>{arr[3]}</div>
      <div>{arr[4]}</div>
      <div>{arr[5]}</div>
      <div>{arr[6]}</div>
    </LoDiv>
  );
};

export default Number;

const LoDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 40%;
  height: 200px;
  background-color: lightgray;
  border-radius: 5px;
`;
