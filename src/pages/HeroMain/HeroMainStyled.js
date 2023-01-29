import styled from "styled-components";

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;
  width: max-content;
  margin: auto;
  place-items: center;
  margin: 50px auto;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  width: 200px;
  justify-content: center;
  padding: 2rem 1rem;
  transition: 0.3s ease;
  :hover {
    background-color: #eaeff9;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

export const CardTitle = styled.h3`
  display: inline;
  color: #808080;
  font-size: ${(props) => (props.small ? "1.5rem" : "2rem")};
  font-weight: 500;
  padding: 20px 0 0;
  text-align: center;
  color: ${(props) => props.theme.colors.accent1};
`;

export const CardImg = styled.img`
  width: 50px;
  margin: auto;
  object-fit: cover;
  ::selection {
    background: transparent;
  }
  ::-moz-selection {
    background: transparent;
  }
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
`;
