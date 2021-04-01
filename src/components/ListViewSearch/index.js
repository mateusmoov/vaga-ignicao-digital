import React from "react";
import * as S from "./styles";

import ImageGrid from "assets/list-view/grid.svg";
const ListViewSearch = () => {
  return (
    <S.ContainerListView>
      <S.ListViewText>
        <S.ListViewStats>200 resultados encontrados</S.ListViewStats>
      </S.ListViewText>
      <S.ListViewButtons>
        <S.ContainerDropdown>
          <form>
            <select>
              <option>Listagem</option>
            </select>
          </form>
        </S.ContainerDropdown>
        <S.Button>
          <img src={ImageGrid} alt="grid" />
        </S.Button>
      </S.ListViewButtons>
    </S.ContainerListView>
  );
};

export default ListViewSearch;
