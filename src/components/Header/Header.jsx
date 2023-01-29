import React from "react";
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

function Header() {
  return (
    <HeaderContainer>
      <Container>
        <Div1>
          <NavLink>
            <HeaderImg src={ru} alt="" />
          </NavLink>
          <NavLink>
            <HeaderImg src={en} alt="" />
          </NavLink>
          <NavLink>
            <HeaderImg src={login} alt="" />
          </NavLink>
          <NavLink>
            <HeaderImg src={navbar} alt="" />
          </NavLink>
          <Link to="/" state={{ platform: "platform" }}>
            <NavLink>
              <HeaderImg logo src={logo} alt="" />
            </NavLink>
          </Link>
        </Div1>
        <Div2>
          <HeaderTitle>Платформа Фриланса</HeaderTitle>
          <HeaderText>созданная фрилансерами за свой счет</HeaderText>
          {/* Search */}
          <Search />
          <HeaderBottom>
            <span>или</span>
            <Link to="/">
              <BottomLink>
                <img src={headBut1} alt="" />
                <span>создать заказ</span>
              </BottomLink>
            </Link>
            <Link to="/">
              <BottomLink>
                <img src={headBut2} alt="" />
                <span>объявить конкурс</span>
              </BottomLink>
            </Link>
            <Link to="/">
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
