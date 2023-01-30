import React, { useEffect, useRef, useState } from "react";
import { HeroTop, MainDiv, TopName } from "./HeroStyled";
import curve from "../Header/SVGs/curve.svg";
import HeroMain from "../../pages/HeroMain/HeroMain";
import AboutPlatform from "../../pages/AboutPlatform/AboutPlatform";
import { useLocation } from "react-router-dom";

function Hero() {
  const [main, setMain] = useState("hero");

  let test = useLocation();

  useEffect(() => {
    if (test.state === null) {
      return () => (test.state = null);
    }

    if (test.state.platform) {
      setMain("platform");
    }
  }, [test]);

  return (
    <MainDiv>
      <HeroTop>
        <TopName
          className={main === "hero" && "activeClass"}
          onClick={() => setMain("hero")}
        >
          Услуги
          <img src={curve} alt="Services" />
        </TopName>

        <TopName
          className={main === "platform" && "activeClass"}
          onClick={() => setMain("platform")}
        >
          О платформе
          <img src={curve} alt="Platforms" />
        </TopName>
      </HeroTop>
      {main === "hero" && <HeroMain />}
      {main === "platform" && <AboutPlatform />}
    </MainDiv>
  );
}

export default Hero;
