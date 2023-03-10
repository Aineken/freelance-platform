import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #1f57c3;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  gap: 5rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 25px 50px;
  @media ${(props) => props.theme.breakpoints.md} {
    gap: 2rem;
  }
`;

export const Div1 = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  height: max-content;
  min-height: 50px;

  @media ${(props) => props.theme.breakpoints.md} {
    justify-content: center;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

export const Div2 = styled.div`
  margin-top: 30px;
  display: flex;
  width: 800px;
  gap: 1rem;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 100%;
  }
  @media ${(props) => props.theme.breakpoints.md} {
  }
`;
export const HeaderTitle = styled.h1`
  text-align: center;
  width: 100%;
  color: #fff;
  font-size: 42px;
  margin: 0.5rem;
`;
export const HeaderText = styled.p`
  color: #00ccff;
  font-size: 22px;
  text-align: center;
  width: 100%;
`;
export const HeaderBottom = styled.div`
  display: flex;
  padding: 15px 25px;
  width: max-content;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  color: #fff;
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 10px 15px;
    width: 100%;
    gap: 1rem;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;

export const NavLink = styled.div`
  display: grid;
  width: max-content;
  justify-content: center;
  align-items: center;
  height: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
  }
  .active {
    filter: invert(65%) sepia(56%) saturate(3397%) hue-rotate(152deg)
      brightness(102%) contrast(104%);
  }
`;

export const BottomLink = styled.div`
  color: #fff;

  margin-left: 3rem;
  display: flex;
  align-items: center;
  img {
    margin-right: 8px;
    height: 30px;
  }
  span {
    transition: 0.3s ease;
    :hover {
      color: ${(props) => props.theme.colors.hover};
    }
  }
  @media ${(props) => props.theme.breakpoints.md} {
    margin: 0;
  }
`;

export const HeaderImg = styled.img`
  color: aqua;
  filter: invert(93%) sepia(94%) saturate(0%) hue-rotate(115deg)
    brightness(106%) contrast(105%);
  transition: 0.1s ease;
  :hover {
    filter: invert(65%) sepia(56%) saturate(3397%) hue-rotate(152deg)
      brightness(102%) contrast(104%);
  }
  height: ${(props) => (props.logo ? "40px" : "20px")};

  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;
