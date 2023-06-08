// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import Round from "../round/round";
// const Timer = () => {
//   const [min, setMin] = useState(0);
//   const [sec, setSec] = useState(3);

//   useEffect(() => {
//     // 설정된 시간 간격마다 setInterval 콜백이 실행된다.
//     const countdown = setInterval(() => {
//       if (parseInt(sec) > 0) {
//         setSec(parseInt(sec) - 1);
//       }
//       if (parseInt(sec) === 0) {
//         if (parseInt(min) === 0) {
//           clearInterval(countdown);
//         } else {
//           setMin(parseInt(min) - 1);
//           setSec(59);
//         }
//       }
//     }, 1000);
//     return () => clearInterval(countdown);
//   }, [min, sec]);
//   return (
//     <TimeDiv>
//       남은 시간 {min}:{sec < 10 ? `0${sec}` : sec}
//     </TimeDiv>
//   );
// };

// export default Timer;

// const TimeDiv = styled.div`
//   width: 20%;
//   font-size: 2rem;
//   background-color: lightgray;
//   margin: 1rem 0 1rem 0;
//   border-radius: 0 5px 5px 0;
// `;
