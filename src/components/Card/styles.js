import styled from "styled-components";

export const CardContainer = styled.div`
  height: 250px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  display: flex;
  margin-bottom: 27px;
`;

export const TextContainer = styled.div`
  width: 622px;
  margin-top: 31px;
  margin-bottom: 64px;
  margin-left: 23px;
  margin-right: 74px;
`;

export const CardTitle = styled.p`
  font-family: Montserrat;
  font-weight: 400;
  color: #2c2c2c;
  margin-bottom: 7px;
`;

export const ContainerAutor = styled.div`
  margin-bottom: 22px;
  display: flex;
`;

export const CardAutorBy = styled.p`
  font-family: Montserrat;
  font-weight: 300;
  color: #7e7e7e;
  font-size: 12px;
`;

export const CardAutor = styled.p`
  font-family: Montserrat;
  font-weight: 700;
  color: #7e7e7e;
  font-size: 12px;
`;

export const CardDescription = styled.p`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 300;
  color: #2c2c2c;
  line-height: 23px;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Vr = styled.div`
  border-left: 1px solid #dadada;
  height: 100%;
`;

export const ContainerAction = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`;

export const ContainerRating = styled.div`
  width: 60px;
  height: 30px;
  border-radius: 3px;
  background-color: #787878;
  margin-bottom: 19px;
  margin-left: 146px;
`;

export const Rating = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  img {
    width: 12px;
  }
`;

export const FontRating = styled.p`
  font-family: Montserrat;
  font-weight: 400;
  font-size: 14px;
  color: white;
`;

export const FontPrice = styled.p`
  font-weight: 400;
  font-size: 18px;
  color: #2c2c2c;
  font-family: Montserrat;
  margin-bottom: 39px;
`;

export const ContainerButtonLove = styled.div`
  margin-bottom: 11px;
`;

export const ButtonLove = styled.button`
  width: 186px;
  height: 45px;
  background: #ededed;
  border-radius: 8px;
  border: none;
`;

export const FontLove = styled.p`
  display: inline;
  font-weight: 600;
  margin-left: 8px;
  font-size: 14px;
  color: #2c2c2c;
  font-family: Montserrat;
`;

export const ContainerButtonBuy = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonBuy = styled.button`
  width: 185px;
  height: 45px;
  background: #686868;
  border-radius: 8px;
  border: none;
`;

export const FontBuy = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: white;
  font-family: Montserrat;
  display: inline;
  margin-left: 12px;
  font-weight: 600;
`;
