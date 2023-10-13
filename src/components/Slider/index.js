import styled from "styled-components";
import TextSlider from "./TextSlider";
import ProgressBar from "./ProgressBar";

import { COLORS } from "../../styles/Style";

const Slider = () => {
  return (
    <Wrapper>
      <TextSlider />
      <ProgressBar />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${COLORS.white};
  z-index: 100;
`;

export default Slider;
