import styled from "styled-components";

export const SearchBar = styled.input`
  border: none;
  outline: none;
  width: 100%;
`;

export const SearchWrapper = styled.form`
  display: flex;
  justify-content: space-between;
  height: 60px;
  background: #fff;
  border-radius: 50px;
  width: 100%;
  align-items: center;
  margin-top: 20px;

  @media ${(props) => props.theme.breakpoints.md} {
    height: 50px;
  }
`;
