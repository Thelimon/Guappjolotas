import React, { Component } from 'react'
import styled from 'styled-components'
import CategorieList from './CategorieList'
import CategorieItem from './CategorieItem';
import { createGlobalStyle } from 'styled-components';
import { Cart as CartP } from '@styled-icons/boxicons-regular/Cart';
import { Search } from '@styled-icons/boxicons-regular/Search'

const GlobalStyle = createGlobalStyle`
    body{
        background-color: #F2F2F2;
        font-family: 'Inter', sans-serif;
        text-align: center;
        box-sizing: border-box;
    }
`;

const MainRow = styled.div`
width: 312px;
margin: auto;
display: flex;
justify-content: space-between;
align-items: center;`

const LogoImg = styled.img`
width: 62px;
height: 54px;
margin-top: 5px;
margin-left: 0.6px;`

const StyleH1 = styled.h1`
font-style: bold;
font-size: 34px;
line-height: 41px;
text-align: Left;`

const SearchBar = styled.div`
height: 60px;
width: 312px;
margin: auto;
margin-top: 32px;
border-radius: 30px;
background: rgba(0, 0, 0, 0.25);
display: flex;
justify-content: space-around;
align-items: center;`

const SearchIcon = styled.div`
    width: 24px;
    height: 24px;
    opacity: 0.3;`

const SearchImput = styled.input`
width: 231px;
font-weight: 400;
font-size: 17px;
line-height: 21px;
text-align: Left;
background: none;
border: none;
color: #9A9A9D;`

const CategorieItems = styled.div`
height: 32px;
width: 312px;
margin: auto;
margin-top: 40px;
display: flex;
justify-content: space-between;`

const Cart = styled.div`
    position: absolute;
    width: 24px;
    height: 24px;
    left: 312px;
    top: 25px;
    opacity: 0.3;`

// const Menu = () => {
//     return (
//         <div>
//             <GlobalStyle />
//             <MainRow>
//                 <LogoImg src='https://i.ibb.co/DMV99gF/title.png' />
//                 <Cart>
//                     <CartP />
//                 </Cart>
//             </MainRow>
//             <StyleH1>Nada como una Guajolota para empezar el día</StyleH1>
//             <Search>
//                 <i>Bu</i>
//                 <SearchImput type="search" id="mySearch" name="search" placeholder="Sabor de guajolota, bebida..." />
//             </Search>
//             <CategorieItems>
//                 <CategorieItem>Guajalotas</CategorieItem>
//                 <CategorieItem>Bebidas</CategorieItem>
//                 <CategorieItem>Tamales</CategorieItem>
//             </CategorieItems>
//             <CategorieList></CategorieList>
//         </div>
//     )
// }

// export default Menu;


export default class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categorieActive: 'Guajolota',
        }
        this.changeCategorie = this.changeCategorie.bind(this)
    }

    changeCategorie(categorie) {
        this.setState({ categorieActive: categorie })
        console.log(categorie)
    }

    render() {

        return (
            <div>
                <GlobalStyle />
                <MainRow>
                    <LogoImg src='https://i.ibb.co/DMV99gF/title.png' />
                    <Cart>
                        <CartP />
                    </Cart>
                </MainRow>
                <StyleH1>Nada como una Guajolota para empezar el día</StyleH1>
                <SearchBar>
                    <SearchIcon><Search /></SearchIcon>
                    <SearchImput type="search" id="mySearch" name="search" placeholder="Sabor de guajolota, bebida..." />
                </SearchBar>
                <CategorieItems>
                    <CategorieItem changeCategorie={this.changeCategorie} />
                </CategorieItems>
                <CategorieList categorie={this.state.categorieActive}></CategorieList>
            </div>
        )
    }
}