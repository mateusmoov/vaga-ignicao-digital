import React from "react";
import * as S from "./styles";

import ImageGrid from "assets/list-view/grid.svg";
import ImageList from "assets/list-view/list.svg";
import ImageSearch from "assets/list-view/search.svg";
const ListViewSearch = () => {
  return (
    <S.ListViewSearch>
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
          <S.Button>
            <img src={ImageList} alt="list" />
          </S.Button>
        </S.ListViewButtons>
      </S.ContainerListView>
      <S.ContainerForm>
        <form>
          <img src={ImageSearch} alt="pesquisar" />
          <input
            type="text"
            id="busca"
            name="busca"
            placeholder="Buscar"
            size="100"
          />
        </form>
      </S.ContainerForm>
    </S.ListViewSearch>
  );
};

export default ListViewSearch;
