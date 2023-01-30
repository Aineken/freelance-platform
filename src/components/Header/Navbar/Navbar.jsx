import React from "react";
import { Link } from "react-router-dom";
import { newData } from "../../../utils/constants";
import { Items, NavbarContainer } from "./NavbarStyled";

const Navbar = ({ setNavbarActive }) => {
  const handleClick = () => {
    setNavbarActive(false);
  };
  return (
    <NavbarContainer>
      {newData.map((list) => (
        <Link to={`/menu/${list.id}`}>
          <Items onClick={handleClick} key={list.id}>
            {list.name}
          </Items>
        </Link>
      ))}
    </NavbarContainer>
  );
};

export default Navbar;
