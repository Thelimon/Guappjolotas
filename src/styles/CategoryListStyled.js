import styled from "styled-components";

const Categorie = styled.div`
  display: grid;
  place-items: center;
  width: 312px;
  margin: auto;
  margin-top: 24px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 1rem;
  width: 100%;
  margin: 1rem auto;
`;
const CategorieLi = styled.div`
  height: 80px;
  width: 312px;
  left: 0px;
  top: 0px;
  border-radius: 20px;
  padding: 16px;
  background: white;
  cursor: pointer;
  &&:last-child{
    margin-bottom: 2rem;
  }
`;

const CategorieImg = styled.div`
  position: relative;
  text-align: center;
`;

const EllipseImg = styled.img`
  position: absolute;
  height: 35px;
  width: 80px;
  top: 42px;
  left: 0px;
  z-index: 1;
`;

const ProductImg = styled.img`
  position: absolute;
  left: 0px;
  z-index: 2;
`;

const CategorieText = styled.div`
  position: absolute;
  left: 136px;
  width: 184px;
  text-decoration: none;
`;

const ProductName = styled.p`
  font-weight: 600;
  font-size: 17px;
  line-height: 21px;
  text-align: Left;
`;

const ProductPrice = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: Left;
  color: #fa4a0c;
`;

export {
  Categorie,
  CategorieLi,
  CategorieImg,
  EllipseImg,
  ProductImg,
  CategorieText,
  ProductName,
  ProductPrice,
};
