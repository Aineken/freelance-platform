import styled from "styled-components";

export const NavbarContainer = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 2px;
  top: 50px;
  right: 0;
  z-index: 999;
  background: #fff;
  border-radius: 10px;
  transition: all 0.3s;
  cursor: pointer;
  padding: 0.5rem;
  box-shadow: rgb(80 78 78 / 50%) 3px 3px 20px;
  @media ${(props) => props.theme.breakpoints.md} {
  }
`;

export const Items = styled.li`
  color: #000;
  display: flex;
  width: 100%;
  margin-right: 1rem;
  display: inline-block;
  padding: 0.5rem;
  font-size: 16px;
  font-weight: 300;
  border-radius: 10px;
  :hover {
    background-color: #eaeff9;
  }
  @media ${(props) => props.theme.breakpoints.md} {
  }
`;

export const ItemButton = styled.button`
  display: flex;
  justify-content: space-between;
  place-items: center;
  text-decoration: none;
  text-align: left;
  color: inherit;
  font-size: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
  width: 100%;
  height: 100%;

  :hover {
    background-color: ${(props) => !props.main && "#fff"};
  }

  @media ${(props) => props.theme.breakpoints.md} {
  }
`;
