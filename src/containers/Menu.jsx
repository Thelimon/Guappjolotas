import React from "react";
import {
  MainRow,
  LogoImg,
  StyleH1,
  Search,
  SearchImput,
  CategorieItems,
  CategorieItem,
} from "../styles/MainSectionStyled";
import CategorieList from "../components/CategorieList";

const Menu = () => {
  return (
    <div>
      <MainRow>
        <LogoImg src="https://i.ibb.co/DMV99gF/title.png" />
        <i>Ca</i>
      </MainRow>
      <StyleH1>Nada como una Guajolota para empezar el día</StyleH1>
      <Search>
        <i>Bu</i>
        <SearchImput
          type="search"
          id="mySearch"
          name="search"
          placeholder="Sabor de guajolota, bebida..."
        />
      </Search>
      <CategorieItems>
        <CategorieItem>Guajalotas</CategorieItem>
        <CategorieItem>Bebidas</CategorieItem>
        <CategorieItem>Tamales</CategorieItem>
      </CategorieItems>
      <CategorieList> </CategorieList>
    </div>
  );
};

export default Menu;
