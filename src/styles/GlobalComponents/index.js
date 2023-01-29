import styled, { keyframes } from "styled-components";
export const MainContainer = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: auto;
  padding: 3rem 2rem;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #678983;
  border-radius: 5px;
  width: 100%;
`;

export const DivTable = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem;
`;
