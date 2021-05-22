import React, { Component } from "react";
import CategorieList from "./CategorieList";
import CategorieItem from "./CategorieItem";
import { Cart as CartP } from "@styled-icons/boxicons-regular/Cart";
import { Search } from "@styled-icons/boxicons-regular/Search";
import {
    GlobalStyle,
    MainRow,
    LogoImg,
    StyleH1,
    SearchBar,
    SearchIcon,
    SearchImput,
    CategorieItems,
    Cart,
  } from "../styles/MenuStyled"



export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categorieActive: "Guajolota",
    };
    this.changeCategorie = this.changeCategorie.bind(this);
  }

  changeCategorie(categorie) {
    this.setState({ categorieActive: categorie });
    console.log(categorie);
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <MainRow>
          <LogoImg src="https://i.ibb.co/DMV99gF/title.png" />
          <Cart>
            <CartP />
          </Cart>
        </MainRow>
        <StyleH1>Nada como una Guajolota para empezar el día</StyleH1>
        <SearchBar>
          <SearchIcon>
            <Search />
          </SearchIcon>
          <SearchImput
            type="search"
            id="mySearch"
            name="search"
            placeholder="Sabor de guajolota, bebida..."
          />
        </SearchBar>
        <CategorieItems>
          <CategorieItem changeCategorie={this.changeCategorie} />
        </CategorieItems>
        <CategorieList categorie={this.state.categorieActive}></CategorieList>
      </div>
    );
  }
}
