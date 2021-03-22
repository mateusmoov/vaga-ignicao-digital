import styled from "styled-components";

export const ContainerFilter = styled.div`
  height: 1452px;
  width: 371px;
  background: #FFFFFF;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  padding-top: 18px;
  padding-left: 31px;
`;

export const ContainerPrice = styled.div`
  height: 207px;
  width: 119px;
  margin-bottom: 23px;
`;

export const TitlePrice = styled.p`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 18px;
`;


export const SubtitlePrice = styled.p`
display: inline-block;
font-family: Montserrat;
font-weight: 300;
font-size: 16px;
color: #2C2C2C;
`;

export const CheckMark = styled.span`
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

export const Container = styled.label`
  display: inline;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
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

  &:hover ${Input} ~ ${CheckMark} {
    background-color: #979797;
  }

  & ${Input}:checked ~ ${CheckMark} {
    background-color: #969696;
  }

  & ${Input}:checked ~ ${CheckMark}:after {
    display: block;
  }

  & ${CheckMark}:after {
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }
`;
