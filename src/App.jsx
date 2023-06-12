import styled from "styled-components";
import Round from "./components/round/round";
import Number from "./components/number/number";
import GptTimer from "./components/gpttimer/gptTimer";
import Result from "./components/result/result";
import Input from "./components/input/input";
function App() {
  return (
    <AppDiv>
      <ConDiv>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            justifyContent: "space-between",
          }}
        >
          <Round></Round>
          {/* <GptTimer></GptTimer> */}
          {/* <Number></Number> */}
        </div>
        <Input></Input>
      </ConDiv>
      <Result></Result>
    </AppDiv>
  );
}

export default App;

const AppDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  overflow: hidden;
`;

const ConDiv = styled.div`
  width: 45%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

// box shadow = 0 1px 3px 0 rgba(136, 148, 158, 0.25), 0 0 2px 0 rgba(136, 148, 158, 0.3)
