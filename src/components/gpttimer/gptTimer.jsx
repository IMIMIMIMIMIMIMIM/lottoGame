import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(3); // 초기 타이머 시간 (3분)
  const [lotteryNumbers, setLotteryNumbers] = useState([]);

  useEffect(() => {
    let intervalId = null;

    const startTimer = () => {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    };

    const resetTimer = () => {
      clearInterval(intervalId);
      setTime(3);
    };

    if (time === 0) {
      // 타이머가 종료된 경우
      clearInterval(intervalId);

      // 로또 번호 뽑기
      const newLotteryNumbers = generateLotteryNumbers();
      setLotteryNumbers(newLotteryNumbers);

      // 타이머 재시작
      resetTimer();
      startTimer();
    } else if (intervalId === null) {
      // 타이머가 시작되지 않은 경우
      startTimer();
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [time]);

  const generateLotteryNumbers = () => {
    const numbers = [];
    while (numbers.length < 7) {
      const newNumber = Math.floor(Math.random() * 45) + 1;
      if (!numbers.includes(newNumber)) {
        numbers.push(newNumber);
      }
    }
    return numbers.sort((a, b) => a - b);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div>
      <h1>Timer: {formatTime(time)}</h1>
      {lotteryNumbers.length > 0 && (
        <p>Lottery Numbers: {lotteryNumbers.join(", ")}</p>
      )}
    </div>
  );
};

export default Timer;
