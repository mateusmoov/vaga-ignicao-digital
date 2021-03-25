import ReactSlider from "react-slider";
import styled from "styled-components";

export const TitleFilter = styled.p`
  font-family: Montserrat;
  font-weight: 400px;
  color: #2c2c2c;
  font-size: 18px;
  margin-bottom: 19px;
`;

export const FilterSection = styled.div``;

export const ContainerFilter = styled.div`
  height: 1452px;
  width: 371px;
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  padding: 20px;
`;

export const ContainerPrice = styled.div`
  width: 119px;
  margin-top: 18px;
  margin-bottom: 38px;
`;

export const TitlePrice = styled.p`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 18px;
`;

export const SubtitlePrice = styled.p`
  display: block;
  font-family: Montserrat;
  font-weight: 300;
  font-size: 16px;
  color: #2c2c2c;
`;

export const CheckMarkRadio = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 16px;
  width: 16px;
  border: 1px solid #979797;
  border-radius: 50%;

  &:after {
    position: absolute;
    display: none;
  }
`;

export const Input = styled.input``;

export const ContainerRadio = styled.label`
  display: block;
  position: relative;
  padding-left: 28px;
  margin-bottom: 18px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  & ${Input} {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  & ${Input}:checked ~ ${CheckMarkRadio} {
    background-color: #969696;
  }

  & ${Input}:checked ~ ${CheckMarkRadio}:after {
    display: block;
  }

  & ${CheckMarkRadio}:after {
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }
`;

export const Line = styled.hr`
  border: 1px solid #d6d6d6;
`;

export const ContainerValue = styled.div`
  width: 100%;
  margin-top: 33px;
  box-sizing: border-box;
`;

export const ContainerTextValue = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NumberValue = styled.h1`
  font-family: Montserrat;
  font-weight: 400;
  font-size: 20px;
`;

export const ContainerCategory = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 33px;
  margin-bottom: 24px;
`;

export const InputCheckmark = styled.input``;

export const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 17px;
  width: 17px;
  border: 1px solid #999999;
  background-color: white;
  border-radius: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerCheckbox = styled.label`
  display: block;
  margin-bottom: 16px;
  position: relative;
  cursor: pointer;
  padding-left: 26px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  & ${InputCheckmark} {
    position: absolute;
    display: none;
    cursor: pointer;
  }

  &:hover ${InputCheckmark} ~ ${Checkmark} {
    background-color: #ccc;
  }

  & ${InputCheckmark}:checked ~ ${Checkmark} {
    background-color: #2196f3;
  }

  & ${InputCheckmark}:checked ~ ${Checkmark}:after {
    display: block;
  }

  & ${Checkmark}:after {
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }
`;

export const ContainerRating = styled.div`
  margin-top: 33px;
`;

export const ContainerStars = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 17px;
`;

export const Rating = styled.h1`
  font-family: Montserrat;
  font-weight: 300;
  font-size: 14px;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 53px;
`;

export const Button = styled.button`
  border: none;
  font-family: Montserrat;
  font-weight: 400;
  background-color: #696969;
  color: white;
  padding: 17px 74px 18px 53px;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
`;

export const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 25px;
`;

export const FilterThumb = styled.div`
  height: 20px;
  width: 20px;
  text-align: center;
  position: relative;
  top: -35%;
  border-radius: 50%;
  cursor: grab;
  background-color: #606060;
  outline: none;
`;

export const FilterTrack = styled.div`
  top: 0;
  bottom: 0;
  background-color: #606060;
  border-radius: 999px;
  height: 6px;
`;
