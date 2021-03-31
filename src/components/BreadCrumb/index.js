import React from "react";
import * as S from "styles";

import ImageHome from "assets/breadcrumb/home.svg";
import ImageChevrons from "assets/breadcrumb/chevrons-right.svg";
const BreadCrumb = () => {
  return (
    <S.ContainerDiretory>
      <S.Location>Resultados</S.Location>
      <S.Vr />
      <S.Directory>
        <img src={ImageHome} alt="home" />
        <img src={ImageChevrons} alt="home" />
        <S.DirectoryText>Cursos</S.DirectoryText>
      </S.Directory>
    </S.ContainerDiretory>
  );
};

export default BreadCrumb;
