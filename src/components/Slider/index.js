import styled from "styled-components";
import TextSlider from "./TextSlider";
import ProgressBar from "./ProgressBar";

const Slider = () => {
  return (
    <Wrapper>
      <TextSlider />
      <ProgressBar />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  // background-color: #000;
  z-index: 100;
`;

export default Slider;
