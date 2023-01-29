import React, { useEffect, useRef, useState } from "react";
import { HeroTop, MainDiv, TopName } from "./HeroStyled";
import curve from "../Header/SVGs/curve.svg";
import HeroMain from "../../pages/HeroMain/HeroMain";
import AboutPlatform from "../../pages/AboutPlatform/AboutPlatform";
import { Link, useLocation } from "react-router-dom";

function Hero({ platform }) {
  console.log(platform);
  const [main, setMain] = useState(true);

  const data = useLocation();

  useEffect(() => {
    if (data.state.platform === "platform") {
      setMain(false);
    }
  }, [data]);

  return (
    <MainDiv>
      <HeroTop>
        <TopName onClick={() => setMain(true)}>
          Услуги
          <img src={curve} alt="Services" />
        </TopName>

        <TopName onClick={() => setMain(false)}>
          О платформе
          <img src={curve} alt="Platforms" />
        </TopName>
      </HeroTop>
      {main ? <HeroMain /> : <AboutPlatform />}
    </MainDiv>
  );
}

export default Hero;
