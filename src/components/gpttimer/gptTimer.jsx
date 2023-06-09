// import React, { useState, useEffect } from "react";
// import styled from "styled-components";

// const Timer = ({ round }) => {
//   const [minutes, setMinutes] = useState(0);
//   const [seconds, setSeconds] = useState(3);
//   const [lottoNumbers, setLottoNumbers] = useState([]);

//   useEffect(() => {
//     const countdown = setInterval(() => {
//       if (seconds > 0) {
//         setSeconds(seconds - 1);
//       } else {
//         if (minutes === 0) {
//           clearInterval(countdown);
//           generateLottoNumbers();
//         } else {
//           setMinutes(minutes - 1);
//           setSeconds(59);
//         }
//       }
//     }, 1000);

//     return () => clearInterval(countdown);
//   }, [minutes, seconds]);

//   const generateLottoNumbers = () => {
//     const numbers = [];
//     for (let i = 0; i < 7; i++) {
//       const randomNumber = Math.floor(Math.random() * 45) + 1;
//       if (!numbers.includes(randomNumber)) {
//         numbers.push(randomNumber);
//       }
//     }
//     setLottoNumbers((prevNumbers) => [...prevNumbers, numbers]);
//   };

//   return (
//     <TimerContainer>
//       <RoundNumber>{round}회차</RoundNumber>
//       <TimeRemaining>
//         {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
//       </TimeRemaining>
//     </TimerContainer>
//   );
// };

// const TimerContainer = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 1rem;
// `;

// const RoundNumber = styled.div`
//   width: 6%;
//   font-size: 2rem;
//   background-color: lightgray;
//   margin-right: 1rem;
//   border-radius: 5px;
//   border-right: 2px solid;
//   border-color: white;
// `;

// const TimeRemaining = styled.div`
//   font-size: 2rem;
//   background-color: lightgray;
//   padding: 0.5rem;
//   border-radius: 5px;
// `;

// const App = () => {
//   const [lottoNumbers, setLottoNumbers] = useState([]);

//   const generateLottoNumbers = () => {
//     const numbers = [];
//     for (let i = 0; i < 7; i++) {
//       const randomNumber = Math.floor(Math.random() * 45) + 1;
//       if (!numbers.includes(randomNumber)) {
//         numbers.push(randomNumber);
//       }
//     }
//     setLottoNumbers((prevNumbers) => [...prevNumbers, numbers]);
//   };

//   return (
//     <AppContainer>
//       <TimersContainer>
//         {[1, 2, 3].map((round) => (
//           <Timer
//             key={round}
//             round={round}
//             generateLottoNumbers={generateLottoNumbers}
//           />
//         ))}
//       </TimersContainer>
//       <ResultContainer>
//         {lottoNumbers.map((numbers, index) => (
//           <LottoNumber key={index}>{numbers.join(", ")}</LottoNumber>
//         ))}
//       </ResultContainer>
//     </AppContainer>
//   );
// };

// const AppContainer = styled.div`
//   display: flex;
// `;

// const TimersContainer = styled.div`
//   width: 50%;
//   margin-right: 1rem;
// `;

// const ResultContainer = styled.div`
//   width: 50%;
// `;

// const LottoNumber = styled.div`
//   font-size: 1.5rem;
//   background-color: lightgray;
//   padding: 0.5rem;
//   border-radius: 5px;
//   margin-bottom: 0.5rem;
// `;

// export default App;
