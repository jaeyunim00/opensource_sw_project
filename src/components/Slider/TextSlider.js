import styled, { keyframes } from "styled-components";

const TextSlider = () => (
  <Wrapper>
    <div className="slider">
      <div className="slide">
        <span>Global Warm</span>
        <Red>ING</Red>
      </div>
      <div className="slide">TO</div>
      <Green className="slide">
        <span>GNI</span>
      </Green>
    </div>
  </Wrapper>
);

const slide = keyframes`
    0% {
        margin-left: 0;
    }

    20% {
        margin-left: 0;
    }


    35% {
        margin-left: -100%;
    }

    60% {
        margin-left: -100%;
    }


    75% {
        margin-left: -200%;
    }

    90% {
        margin-left: -200%;
    }

    100% {
        margin-left: 0;
    }
`;

const Red = styled.span`
  color: #bf0603;
`;

const Green = styled.span`
  color: #70e000;
`;

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  .slider {
    width: 300%;
    box-sizing: border-box;
    overflow: hidden;
    display: flex;

    animation: ${slide} 3s infinite;

    .slide {
      font-size: 9.6rem;
      line-height: 11.7rem;
      letter-spacing: 0.12em;
      width: 100%;
      text-align: center;
      font-weight: 900;
      box-sizing: border-box;
      color: black;

      @media (max-width: 420) {
        font-size: 5rem;
        line-height: 5rem;
      }

      &:nth-child(2) {
        color: transparent;
        -webkit-text-stroke: 0.2rem
          ${() => {
            return "black";
          }};
      }
      &:nth-child(3) {
        position: relative;
        color: #70e000;
        ::after {
          width: 100%;
          text-align: center;
          content: "GNI";
          position: absolute;
          left: -0.4rem;
          top: -0.4rem;
          -webkit-text-stroke: 0.1rem
            ${() => {
              return "red";
            }};
          opacity: 0.7;
          color: transparent;
        }
        ::before {
          width: 100%;
          text-align: center;
          content: "GNI";
          position: absolute;
          left: 0.4rem;
          top: 0.4rem;
          -webkit-text-stroke: 0.1rem
            ${() => {
              return "blue";
            }};
          opacity: 0.7;
          color: transparent;
        }
      }
    }
  }
`;

export default TextSlider;
