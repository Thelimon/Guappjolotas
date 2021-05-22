import React, { Component } from "react";
import {
  Categorie,
  CategorieLi,
  CategorieImg,
  EllipseImg,
  ProductImg,
  CategorieText,
  ProductName,
  ProductPrice,
}from '../styles/CategoryListStyled'
import { Link } from "react-router-dom";



export default class CategorieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  fetchProducts = () => {
    fetch(`https://api-guapp.herokuapp.com/${this.props.categorie}`)
      .then((response) => response.json())
      .then((product) => this.setState({ products: product }));
  };

  componentDidMount() {
    this.fetchProducts();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.categorie !== this.props.categorie) {
      this.fetchProducts();
    }
  }

  render() {
    return (
      <>
        <Categorie>
          {this.state.products.map((product) => {
            return (
              <CategorieLi key={`${product.category}-${product.id}`}>
                <Link
                  to={{
                    pathname: `/${product.category}/${product.id}`,
                    tipo: product.category,
                    id: product.articleId,
                  }}
                >
                  <CategorieImg>
                    <EllipseImg src={product.elipse}></EllipseImg>
                    <ProductImg
                      src={product.image}
                      style={
                        product.category === "Guajolota"
                          ? { top: 2 }
                          : product.category === "Bebida"
                          ? { left: 30, bottom: -60 }
                          : product.category === "Tamal"
                          ? { bottom: -70 }
                          : {}
                      }
                    ></ProductImg>
                  </CategorieImg>
                  <CategorieText>
                    <ProductName>{product.type}</ProductName>
                    <ProductPrice>${product.price} MXN</ProductPrice>
                  </CategorieText>
                </Link>
              </CategorieLi>
            );
          })}
        </Categorie>
      </>
    );
  }
}
