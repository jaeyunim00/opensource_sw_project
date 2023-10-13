import React, { useRef, useState, useEffect, useLocation } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { styled } from "styled-components";

// import required modules
import { Pagination } from "swiper/modules";

//Components
import StatusWarming from "../components/StatusWarming";

export default function Main() {
  return (
    <div>
      <Section_1 className="scroll-section" id="scroll-section-1">
        <StatusWarming></StatusWarming>
      </Section_1>
      <section className="scroll-section" id="scroll-section-1">
        이산화탄소
      </section>
      <section className="scroll-section" id="scroll-section-1">
        빙하
      </section>
      <section className="scroll-section" id="scroll-section-1">
        게임
      </section>
    </div>
  );
}

const Section_1 = styled.section`
  // height: 100vh;
`;
