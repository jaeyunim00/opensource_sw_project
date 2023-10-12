import styled, { keyframes } from "styled-components";

const ProgressBar = () => (
  <Wrapper>
    <Progress />
    <Progress />
    <Progress />
  </Wrapper>
);

const progress = keyframes`
  0% {
    width: 0%;
  }
  70% {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 1rem;
  width: 100%;
`;

const Progress = styled.div`
  height: 0.1rem;
  position: absolute;
  animation: ${progress} 1s;
  background: white;
  background: white;
  &:nth-child(2) {
    animation-delay: 1s;
    background: blue;
  }
  &:nth-child(3) {
    animation-delay: 2s;
    background: red;
  }
`;

export default ProgressBar;
