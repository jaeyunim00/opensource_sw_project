import React, { useState, useMemo, useEffect } from "react";
import { styled } from "styled-components";
import axios from "axios";

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
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "http://api.openweathermap.org/data/2.5/air_pollution?lat=50&lon=50&appid=48fcd44bf33b160f79fc6827a225a0c7"
      );
      return res.data;
    };

    fetchData().then((res) => setData(res));
  }, []);

  return (
    <Container>
      <Co2>CONTENT1</Co2>
      <Gracier>CONTENT2</Gracier>
    </Container>
  );
};

export default StatusWarming;
