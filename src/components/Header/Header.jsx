import React, { useState } from "react";
import ru from "./SVGs/ru.svg";
import en from "./SVGs/en.svg";
import login from "./SVGs/login.svg";
import navbar from "./SVGs/navbar.svg";
import logo from "./SVGs/logo.svg";
import headBut1 from "./SVGs/headBut1.svg";
import headBut2 from "./SVGs/headBut2.svg";
import headBut3 from "./SVGs/headBut3.svg";

import {
  BottomLink,
  Container,
  Div1,
  Div2,
  HeaderBottom,
  HeaderContainer,
  HeaderImg,
  HeaderText,
  HeaderTitle,
  NavLink,
} from "./HeaderStyled";
import Search from "../Search/Search";
import { Link } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

function Header() {
  const [lang, setLang] = useState("ru");
  const [navbarActive, setNavbarActive] = useState(false);
  return (
    <HeaderContainer>
      <Container>
        <Div1>
          <NavLink>
            <HeaderImg
              className={lang === "ru" && "active"}
              onClick={() => setLang("ru")}
              src={ru}
              alt=""
            />
          </NavLink>
          <NavLink>
            <HeaderImg
              className={lang === "en" && "active"}
              onClick={() => setLang("en")}
              src={en}
              alt=""
            />
          </NavLink>
          {/* <Link to="/login"> */}
          <NavLink>
            <HeaderImg src={login} alt="" />
          </NavLink>
          {/* </Link> */}
          <NavLink>
            <HeaderImg
              onClick={() => setNavbarActive((prev) => !prev)}
              className={navbarActive && "active"}
              src={navbar}
              alt=""
            />
            {navbarActive && <Navbar setNavbarActive={setNavbarActive} />}
          </NavLink>
          {/* <Link to="/" state={{ platform: true }}> */}
          <NavLink>
            <HeaderImg logo src={logo} alt="" />
          </NavLink>
          {/* </Link> */}
        </Div1>
        <Div2>
          <Link to="/">
            <HeaderTitle>Платформа Фриланса</HeaderTitle>
            <HeaderText>созданная фрилансерами за свой счет</HeaderText>
          </Link>

          {/* Search */}
          <Search />
          <HeaderBottom>
            <span>или</span>
            <Link to="/create">
              <BottomLink>
                <img src={headBut1} alt="" />
                <span>создать заказ</span>
              </BottomLink>
            </Link>
            <Link to="/application">
              <BottomLink>
                <img src={headBut2} alt="" />
                <span>объявить конкурс</span>
              </BottomLink>
            </Link>
            <Link to="/orders">
              <BottomLink>
                <img src={headBut3} alt="" />
                <span>найти заказ</span>
              </BottomLink>
            </Link>
          </HeaderBottom>
        </Div2>
      </Container>
    </HeaderContainer>
  );
}

export default Header;
