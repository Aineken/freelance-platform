import styled from "styled-components";

export const AboutContainer = styled.div`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #5e5e5e;
`;

export const AboutMain = styled.h2`
  font-weight: 700;
  font-size: 36px;
  width: 100%;
  text-align: center;

  color: #213479;
`;
export const AboutTitle = styled.h4`
  margin: 4rem;
  font-weight: 600;
  font-size: 30px;
  width: 100%;
  text-align: center;
`;

export const AboutText = styled.p`
  margin: 2rem;
  font-weight: 300;
  font-size: 24px;
  line-height: 30px;
  width: 100%;
  text-indent: 50px;
  span {
    height: 30px;
    margin-right: 1rem;
  }
`;
