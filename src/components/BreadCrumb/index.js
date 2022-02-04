import React from "react";
import * as S from "./styles";

import ImageHome from "assets/breadcrumb/home.svg";
import ImageChevrons from "assets/breadcrumb/chevrons-right.svg";
import ImageSettings from "assets/breadcrumb/settings.svg";

const BreadCrumb = () => {
  return (
    <S.ContainerBread>
      <S.Location>Resultados</S.Location>
      <S.Vr />
      <S.ContainerDirectory>
        <S.Directory>
          <img src={ImageHome} alt="home" />
          <img src={ImageChevrons} alt="home" />
          <S.DirectoryText>Cursos</S.DirectoryText>
        </S.Directory>
        <S.Settings>
          <img src={ImageSettings} alt="settings" />
        </S.Settings>
      </S.ContainerDirectory>
    </S.ContainerBread>
  );
};

export default BreadCrumb;
