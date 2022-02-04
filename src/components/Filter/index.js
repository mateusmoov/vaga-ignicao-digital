import React, { useState } from "react";
import FiveStars from "assets/5-Star.svg";
import FourStars from "assets/4-Star.svg";
import ThreeStars from "assets/3-Star.svg";
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
  ContainerTextValue,
  NumberValue,
  ContainerCategory,
  ContainerCheckbox,
  ContainerRating,
  ContainerStars,
  Rating,
  ContainerButton,
  Button,
  FilterThumb,
  FilterTrack,
  StyledSlider,
  FilterSection,
} from "./styles";

const Filter = () => {
  const [ThumbValue, setThumbValue] = useState(0);
  const [TrackValue, setTrackValue] = useState(0);
  return (
    <FilterSection>
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
          <ContainerTextValue>
            <TitlePrice>Valores</TitlePrice>
            <NumberValue>
              {TrackValue}-{ThumbValue}
            </NumberValue>
          </ContainerTextValue>
          <StyledSlider
            defaultValue={[1, 6000]}
            min={1}
            max={6000}
            ariaValuetext={(state) =>
              `Thumb value ${setTrackValue(state.valueNow)}`
            }
            renderThumb={(props, state) => (
              <FilterThumb {...props}>
                {setThumbValue(state.valueNow)}
              </FilterThumb>
            )}
            renderTrack={(props, state) => (
              <FilterTrack {...props} index={state.index} />
            )}
            pearling
            minDistance={100}
          />
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
    </FilterSection>
  );
};

export default Filter;
