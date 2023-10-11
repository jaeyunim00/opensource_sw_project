import React, { useState, useMemo } from "react";
import { styled } from "styled-components";

let Container = styled.div`
  background-color: wheat;
  top: 20px;
  width: 95%;
  height: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
let Co2 = styled.div`
  width: 40%;
  height: 80%;
  background-color: orange;
`;
let Gracier = styled.div`
  width: 40%;
  height: 80%;
  background-color: orange;
`;

const StatusWarming = () => {
  let [count, setCount] = useState(0);

  return (
    <Container>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <Co2>CONTENT1</Co2>
      <Gracier>CONTENT2</Gracier>
    </Container>
  );
};

export default StatusWarming;
