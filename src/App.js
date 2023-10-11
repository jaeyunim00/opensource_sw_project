import { Suspense, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import { styled } from "styled-components";
import { Reset } from "styled-reset";

//pages
import Main from "./pages/Main";
import Talk from "./pages/Talk";
import Bot from "./pages/Bot";
import Game from "./pages/Game";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>로딩중</div>}>
        <Reset></Reset>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
          <Route path="/talk" element={<Talk></Talk>}></Route>
          <Route path="/bot" element={<Bot></Bot>}></Route>
          <Route path="/game" element={<Game></Game>}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
