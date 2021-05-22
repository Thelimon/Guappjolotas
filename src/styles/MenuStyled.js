import styled,  {createGlobalStyle} from "styled-components";

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
  align-items: center;
`;

const LogoImg = styled.img`
  width: 62px;
  height: 54px;
  margin-top: 5px;
  margin-left: 0.6px;
`;

const StyleH1 = styled.h1`
  margin-left: 2.2rem;
  font-style: bold;
  font-size: 34px;
  line-height: 41px;
  text-align: Left;
`;

const SearchBar = styled.div`
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

const SearchIcon = styled.div`
  width: 24px;
  height: 24px;
  opacity: 0.3;
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

const Cart = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  left: 312px;
  top: 25px;
  opacity: 0.3;
`;

export {
  GlobalStyle,
  MainRow,
  LogoImg,
  StyleH1,
  SearchBar,
  SearchIcon,
  SearchImput,
  CategorieItems,
  Cart,
};
