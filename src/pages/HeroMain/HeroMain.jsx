import React from "react";
import { Link } from "react-router-dom";
import { mainCardDatas } from "../../utils/constants";
import {
  CardContainer,
  CardImg,
  CardTitle,
  HeroContainer,
} from "./HeroMainStyled";

const HeroMain = () => {
  return (
    <HeroContainer id="hero">
      {mainCardDatas.map(({ id, title, image }) => {
        return (
          <Link key={id} to={`/services/${id}`}>
            <CardContainer key={id}>
              <CardImg src={image} alt="Card Image" />
              <CardTitle>{title} </CardTitle>
            </CardContainer>
          </Link>
        );
      })}
    </HeroContainer>
  );
};

export default HeroMain;
