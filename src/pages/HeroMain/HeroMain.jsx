import React from "react";
import { Link } from "react-router-dom";
import { mainCardDatas } from "../../utils/constants";
import {
  CardContainer,
  CardImg,
  CardsContainer,
  CardTitle,
} from "./HeroMainStyled";

const HeroMain = () => {
  return (
    <CardsContainer>
      {mainCardDatas.map(({ id, title, image, link }) => {
        return (
          <Link to={`/services/${link}`}>
            <CardContainer key={id}>
              <CardImg src={image} alt="Card Image" />
              <CardTitle>{title} </CardTitle>
            </CardContainer>
          </Link>
        );
      })}
    </CardsContainer>
  );
};

export default HeroMain;
