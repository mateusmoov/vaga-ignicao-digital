import React from 'react';

import {
  ContainerFilter,
  ContainerPrice,
  TitlePrice,
  SubtitlePrice,
  Container,
  CheckMark,
  Input,
} from './styles';

const Filter = () => (
  <ContainerFilter>
    <ContainerPrice>
      <TitlePrice>Preços</TitlePrice>
      <Container>
        <SubtitlePrice>R$10</SubtitlePrice>
        <Input type="radio" checked="checked" name="radio" />
        <CheckMark />
      </Container>

      <Container>
        <SubtitlePrice>R$10-$100</SubtitlePrice>
        <Input type="radio" checked="checked" name="radio" />
        <CheckMark />
      </Container>

      <Container>
        <SubtitlePrice>R$100-$500</SubtitlePrice>
        <Input type="radio" checked="checked" name="radio" />
        <CheckMark />
      </Container>

      <Container>
        <SubtitlePrice>R$500</SubtitlePrice>
        <Input type="radio" checked="checked" name="radio" />
        <CheckMark />
      </Container>

      <Container>
        <SubtitlePrice>Todos</SubtitlePrice>
        <Input type="radio" checked="checked" name="radio" />
        <CheckMark />
      </Container>
    </ContainerPrice>
  </ContainerFilter>
);

export default Filter;
