import styled from "styled-components";

export const ContainerNavbar = styled.div`
  width: 280px;
  height: 1960px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.170509);
`;

export const ContainerLogo = styled.div`
  display: flex;
  justify-content: center;
`;

export const Logo = styled.div`
  margin-top: 29px;
`;

export const ContainerDropdown = styled.div`
  display: flex;
  margin-left: 24px;
  margin-top: 34px;

  select {
    font-family: Montserrat;
    font-size: 15px;
    border: none;
    background: #ececec;
    border-radius: 4px;
    height: 36px;
    width: 236px;
  }
`;

export const ContainerApps = styled.div`
  margin-top: 84px;
  display: flex;
  flex-direction: column;
  margin-left: 38px;
`;

export const TitleApps = styled.p`
  font-size: 14px;
  color: #999999;
  font-weight: 400;
  font-family: Montserrat;
  margin-top: 20px;
`;

export const ContainerAnchors = styled.div`
  margin-top: 20px;
  font-family: Montserrat;
  display: flex;
  flex-direction: column;
  color: #2c2c2c;
  gap: 15px;
  a {
    text-decoration: none;
  }
  img {
    margin-right: 10px;
  }

  a:visited {
    color: #2c2c2c;
  }
`;
