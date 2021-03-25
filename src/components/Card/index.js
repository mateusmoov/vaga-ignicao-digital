import React from "react";
import {
  CardContainer,
  TextContainer,
  CardTitle,
  CardAutorBy,
  CardAutor,
  CardDescription,
  ImageContainer,
  ContainerAutor,
  Vr,
  ContainerAction,
  ContainerRating,
  Rating,
  FontRating,
  FontPrice,
  ContainerButtonLove,
  ButtonLove,
  FontLove,
  ContainerButtonBuy,
  ButtonBuy,
  FontBuy,
} from "./styles";
import ImageCard from "../../assets/beats-headphones.svg";
import ImageRating from "../../assets/star.svg";
import ImageLove from "../../assets/heart.svg";
import ImageBuy from "../../assets/shopping.svg";

const Card = () => {
  return (
    <CardContainer>
      <ImageContainer>
        <img src={ImageCard} alt="imagem" />
      </ImageContainer>
      <TextContainer>
        <CardTitle>FÓRMULA DE LANÇAMENTO</CardTitle>
        <ContainerAutor>
          <CardAutorBy>Por&nbsp;</CardAutorBy>
          <CardAutor>Érico Rocha</CardAutor>
        </ContainerAutor>
        <CardDescription>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </CardDescription>
      </TextContainer>
      <Vr />

      <ContainerAction>
        <ContainerRating>
          <Rating>
            <FontRating>3.4</FontRating>
            <img src={ImageRating} alt="estrela" />
          </Rating>
        </ContainerRating>
        <FontPrice>R$2500</FontPrice>
        <ContainerButtonLove>
          <ButtonLove>
            <img src={ImageLove} alt="coracao" />
            <FontLove>AMEI</FontLove>
          </ButtonLove>
        </ContainerButtonLove>
        <ContainerButtonBuy>
          <ButtonBuy>
            <img src={ImageBuy} alt="comprar" />
            <FontBuy>COMPRAR</FontBuy>
          </ButtonBuy>
        </ContainerButtonBuy>
      </ContainerAction>
    </CardContainer>
  );
};

export default Card;
