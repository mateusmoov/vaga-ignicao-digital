import React from 'react';

import FiveStars from '../../assets/5-Star.svg';
import FourStars from '../../assets/4-Star.svg';
import ThreeStars from '../../assets/3-Star.svg';

import {
  ContainerFilter,
  ContainerPrice,
  TitlePrice,
  SubtitlePrice,
  ContainerRadio,
  Checkmark,
  CheckMarkRadio,
  Input,
  InputCheckmark,
  Line,
  ContainerValue,
  NumberValue,
  ContainerCategory,
  ContainerCheckbox,
  ContainerRating,
  ContainerStars,
  Rating,
  ContainerButton,
  Button,
} from './styles';

const Filter = () => (
  <ContainerFilter>
    <ContainerPrice>
      <TitlePrice>Preços</TitlePrice>
      <ContainerRadio>
        <SubtitlePrice>R$10</SubtitlePrice>
        <Input type="radio" name="radio" />
        <CheckMarkRadio />
      </ContainerRadio>

      <ContainerRadio>
        <SubtitlePrice>R$10-$100</SubtitlePrice>
        <Input type="radio" name="radio" />
        <CheckMarkRadio />
      </ContainerRadio>

      <ContainerRadio>
        <SubtitlePrice>R$100-$500</SubtitlePrice>
        <Input type="radio" name="radio" />
        <CheckMarkRadio />
      </ContainerRadio>

      <ContainerRadio>
        <SubtitlePrice>R$500</SubtitlePrice>
        <Input type="radio" name="radio" />
        <CheckMarkRadio />
      </ContainerRadio>

      <ContainerRadio>
        <SubtitlePrice>Todos</SubtitlePrice>
        <Input type="radio" name="radio" />
        <CheckMarkRadio />
      </ContainerRadio>
    </ContainerPrice>
    <Line />

    <ContainerValue>
      <TitlePrice>Valores</TitlePrice>
      <NumberValue>1.99 - 4098</NumberValue>
    </ContainerValue>
    <Line />

    <ContainerCategory>
      <TitlePrice>Categorias</TitlePrice>

      <ContainerCheckbox>
        <SubtitlePrice>Érico Rocha</SubtitlePrice>
        <InputCheckmark type="checkbox" name="scales" />
        <Checkmark />
      </ContainerCheckbox>

      <ContainerCheckbox>
        <SubtitlePrice>Desafio 6 em 7</SubtitlePrice>
        <InputCheckmark type="checkbox" name="scales" />
        <Checkmark />
      </ContainerCheckbox>

      <ContainerCheckbox>
        <SubtitlePrice>Fórmula de lançamento</SubtitlePrice>
        <InputCheckmark type="checkbox" name="scales" />
        <Checkmark />
      </ContainerCheckbox>

      <ContainerCheckbox>
        <SubtitlePrice>KlickPages</SubtitlePrice>
        <InputCheckmark type="checkbox" name="scales" />
        <Checkmark />
      </ContainerCheckbox>

      <ContainerCheckbox>
        <SubtitlePrice>Audios</SubtitlePrice>
        <InputCheckmark type="checkbox" name=" scales" />
        <Checkmark />
      </ContainerCheckbox>
    </ContainerCategory>
    <Line />
    <ContainerRating>
      <TitlePrice>Avaliação</TitlePrice>
      <ContainerStars>
        <img src={FiveStars} alt="5 stars" />
        <Rating>8500</Rating>
      </ContainerStars>
      <ContainerStars>
        <img src={FourStars} alt="5 stars" />
        <Rating>3250</Rating>
      </ContainerStars>
      <ContainerStars>
        <img src={ThreeStars} alt="5 stars" />
        <Rating>1120</Rating>
      </ContainerStars>
    </ContainerRating>

    <ContainerButton>
      <Button>LIMPAR FILTRO</Button>
    </ContainerButton>
  </ContainerFilter>
);

export default Filter;
