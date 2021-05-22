import styled from "styled-components";

const MainRow = styled.div`
  width: 312px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 62px;
  height: 54px;
  margin-top: 5px;
  margin-left: 0.6px;
`;

const StyleH1 = styled.h1`
  font-style: bold;
  font-size: 34px;
  line-height: 41px;
  text-align: Left;
`;

const Search = styled.div`
  height: 60px;
  width: 312px;
  margin: auto;
  margin-top: 32px;
  border-radius: 30px;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const SearchImput = styled.input`
  width: 231px;
  font-weight: 400;
  font-size: 17px;
  line-height: 21px;
  text-align: Left;
  background: none;
  border: none;
  color: #9a9a9d;
`;

const CategorieItems = styled.div`
  height: 32px;
  width: 312px;
  margin: auto;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
`;

const CategorieItem = styled.a`
  color: #9a9a9d;
  text-decoration: none;
  &&:active {
    color: #fa4a0c;
    border-bottom: #fa4a0c;
  }
`;

const GlobalStyle = createGlobalStyle`
    body{
        background: #F2F2F2;
        font-family: 'Inter', sans-serif;
        text-align: center;
        box-sizing: border-box;
    }    
`;

export {
  MainRow,
  LogoImg,
  StyleH1,
  Search,
  SearchImput,
  CategorieItems,
  CategorieItem,
  GlobalStyle,
};
