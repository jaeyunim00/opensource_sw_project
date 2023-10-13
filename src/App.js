import { Suspense, useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import { styled } from "styled-components";
import { Reset } from "styled-reset";

//pages
import Main from "./pages/Main";
import Talk from "./pages/Talk";
import Bot from "./pages/Bot";
import Game from "./pages/Game";

//components
import Loading from "./components/Loading";
import Slider from "./components/Slider";

function App() {
  const [slider, setSlider] = useState(true);

  useEffect(() => {
    const setSliderFalse = () => {
      setSlider(false);
    };
    setTimeout(setSliderFalse, 2700);
  }, []);

  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Reset></Reset>
        <Navbar></Navbar>
        {slider ? (
          <Slider></Slider>
        ) : (
          <Routes>
            <Route path="/" element={<Main></Main>}></Route>
            <Route path="/talk" element={<Talk></Talk>}></Route>
            <Route path="/bot" element={<Bot></Bot>}></Route>
            <Route path="/game" element={<Game></Game>}></Route>
          </Routes>
        )}
      </Suspense>
    </div>
  );
}

export default App;
