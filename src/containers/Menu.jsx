import React from 'react'
import styled from 'styled-components'
import CategorieList from '../components/CategorieList'

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

const Search = styled.div`
height: 60px;
width: 312px;
margin: auto;
margin-top: 32px;
border-radius: 30px;
background: rgba(0, 0, 0, 0.25);
display: flex;
justify-content: space-around;
align-items: center;`

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

const CategorieItem = styled.a`
color: #9A9A9D;
text-decoration: none;
: active {
    color: #FA4A0C;
    border-bottom: #FA4A0C;
} `

const Menu = () => {
    return (
        <div>
            <MainRow>
                <LogoImg src='https://i.ibb.co/DMV99gF/title.png' />
                <i>Ca</i>
            </MainRow>
            <StyleH1>Nada como una Guajolota para empezar el día</StyleH1>
            <Search>
                <i>Bu</i>
                <SearchImput type="search" id="mySearch" name="search" placeholder="Sabor de guajolota, bebida..." />
            </Search>
            <CategorieItems>
                <CategorieItem>Guajalotas</CategorieItem>
                <CategorieItem>Bebidas</CategorieItem>
                <CategorieItem>Tamales</CategorieItem>
            </CategorieItems>
            <CategorieList> </CategorieList>
        </div>
    )
}

export default Menu;

