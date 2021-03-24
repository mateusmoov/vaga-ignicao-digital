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
} from "./styles";
import ImageCard from "../../assets/beats-headphones.svg";

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
    </CardContainer>
  );
};

export default Card;
