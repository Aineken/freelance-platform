import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.lg} {
  }
`;

export const HeroTop = styled.div`
  margin: auto;
  color: #213479;
  display: flex;
  gap: 10rem;
  font-size: 20px;
  img {
    margin-left: 2rem;
    height: 10px;
  }

  .activeClass {
    color: ${(props) => props.theme.colors.hover};
    img {
      filter: invert(65%) sepia(56%) saturate(3397%) hue-rotate(152deg)
        brightness(102%) contrast(104%);
    }
  }
  @media ${(props) => props.theme.breakpoints.lg} {
  }
  @media ${(props) => props.theme.breakpoints.md} {
    gap: 2rem;
  }
`;

export const TopName = styled.div`
  align-items: center;
  display: flex;
  :hover {
    color: ${(props) => props.theme.colors.hover};
    img {
      filter: invert(65%) sepia(56%) saturate(3397%) hue-rotate(152deg)
        brightness(102%) contrast(104%);
    }
  }
`;
