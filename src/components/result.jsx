import React from "react";
import styled from "styled-components";

const Result = ({ rounds, numbersList }) => {
  // const getGrade = (count) => {
  //   switch (count) {
  //     case 6:
  //       return "1등";
  //     case 5:
  //       return "2등";
  //     case 4:
  //       return "3등";
  //     case 3:
  //       return "4등";
  //     case 2:
  //       return "5등";
  //     case 1:
  //       return "6등";
  //     case 0:
  //       return "낙첨";
  //     case -1:
  //       return "-";
  //   }
  // };

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
      {/* <ReUl style={{ listStyle: "none", lineHeight: "60px", padding: "0" }}>
        {numbersList.map((numbers, index) => (
          <li style={{ display: "flex" }} key={index}>
            <RoundDiv>{rounds[index] - 1}회차</RoundDiv>
            {numbers.map((number, i) => (
              <NumberDiv
                key={i}
                style={{ backgroundColor: getBackgroundColor(number) }}
              >
                {number}
              </NumberDiv>
            ))}
          </li>
        ))}
      </ReUl> */}
      <Table>
        <thead>
          <tr>
            <RoundTh>회차</RoundTh>
            <th>번호</th>
          </tr>
        </thead>
        <tbody>
          {numbersList.map((numbers, index) => (
            <tr key={index}>
              <RoundTd>{rounds[index] - 1}회차</RoundTd>
              <td>
                {numbers.map((number, i) => (
                  <NumberDiv bgColor={getBackgroundColor(number)}>
                    {number}
                  </NumberDiv>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </ReDiv>
  );
};

export default Result;

const ReDiv = styled.div`
  margin-right: 1rem;
  overflow-y: auto;
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
    background-color: darkgray;
  }
  ::-webkit-scrollbar-button {
    width: 0;
    height: 0;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f0f0f0;
    font-weight: bold;
  }
`;

const NumberDiv = styled.div`
  display: inline-block;
  background-color: ${(props) => props.bgColor};
  margin-right: 1rem;
  font-size: 1.5rem;
  line-height: 60px;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  text-align: center;
  color: white;
  text-shadow: 0px 0px 3px rgba(0, 49, 70, 0.8);
`;

const RoundTh = styled.th`
  width: 15%;
`;

const RoundTd = styled.td`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1rem;
  width: 15%;
  text-align: center;
  border-right: 2px solid white;
  color: white;
`;
// const ReUl = styled.ul`
//   list-style: none;
//   line-height: 60px;
//   padding: 0;
// `;

// const NonP = styled.p`
//   width: 28.5rem;

//   text-align: center;
//   color: white;
// `;

// const NumberDiv = styled.div`
//   display: inline-block;
//   margin: 1rem 0.5rem 0 0.5rem;
//   font-size: 1.5rem;
//   border-radius: 50%;
//   width: 60px;
//   height: 60px;
//   text-align: center;
//   color: white;
//   text-shadow: 0px 0px 3px rgba(0, 49, 70, 0.8);
// `;

// const GradeDiv = styled.span`
//   width: 20%;
//   font-size: 1.5rem;
//   text-align: center;
//   margin-top: 1rem;
//   border-left: 2px solid white;
// `;
