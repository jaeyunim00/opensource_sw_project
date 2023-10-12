import styled, { keyframes } from "styled-components";

const TextSlider = () => (
  <Wrapper>
    <div className="slider">
      <div className="slide">DANMIN</div>
      <div className="slide">JAEYUN IM</div>
      <div className="slide">FRONTENT</div>
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

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  .slider {
    width: 300%;
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    height: 100vh;
    align-items: center;
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
        -webkit-text-stroke: 0.1rem
          ${() => {
            return "black";
          }};
      }
      &:nth-child(3) {
        position: relative;
        ::after {
          width: 100%;
          text-align: center;
          content: "FRONTEND";
          position: absolute;
          left: -0.4rem;
          top: -0.4rem;
          -webkit-text-stroke: 0.1rem
            ${() => {
              return "blue";
            }};
          opacity: 0.7;
          color: transparent;
        }
        ::before {
          width: 100%;
          text-align: center;
          content: "FRONTEND";
          position: absolute;
          left: 0.4rem;
          top: 0.4rem;
          -webkit-text-stroke: 0.1rem
            ${() => {
              return "red";
            }};
          opacity: 0.7;
          color: transparent;
        }
      }
    }
  }
`;

export default TextSlider;
