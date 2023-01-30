import React, { useEffect, useRef, useState } from "react";
import { HeroTop, MainDiv, TopName } from "./HeroStyled";
import curve from "../Header/SVGs/curve.svg";
import HeroMain from "../../pages/HeroMain/HeroMain";
import AboutPlatform from "../../pages/AboutPlatform/AboutPlatform";
import { useLocation } from "react-router-dom";

function Hero() {
  const [main, setMain] = useState(true);

  let test = useLocation();

  useEffect(() => {
    if (test.state === null) {
      return console.log("haha");
    }

    if (test.state.platform === "platform") {
      return setMain(false);
    }
  }, [test]);

  return (
    <MainDiv>
      <HeroTop>
        <TopName
          className={main === true ? "activeClass" : null}
          onClick={() => setMain(true)}
        >
          Услуги
          <img src={curve} alt="Services" />
        </TopName>

        <TopName
          className={main === false ? "activeClass" : null}
          onClick={() => setMain(false)}
        >
          О платформе
          <img src={curve} alt="Platforms" />
        </TopName>
      </HeroTop>
      {main ? <HeroMain /> : <AboutPlatform />}
    </MainDiv>
  );
}

export default Hero;
