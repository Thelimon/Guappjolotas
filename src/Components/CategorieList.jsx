import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

const Categorie = styled.div`
width: 312px;
margin: auto;
margin-top: 24px;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
grid-gap: 1rem;
width: 100%;
margin: 0 auto;
`
const CategorieLi = styled.div`
height: 80px;
width: 312px;
left: 0px;
top: 0px;
border-radius: 20px;
padding: 16px;
background: white;
cursor: pointer
;`

const CategorieImg = styled.div`
position: relative;
text-align: center;`

const EllipseImg = styled.img`
position:absolute;
height: 35px;
width: 80px;
top: 42px;
left: 0px;
z-index: 1;`

const ProductImg = styled.img`
position:absolute;
bottom: -70px;
left: 0px;
z-index: 2;`

const CategorieText = styled.div`
position: absolute;
left: 136px;
width: 184px;
text-decoration: none;`

const ProductName = styled.p`
font-weight: 600;
font-size: 17px;
line-height: 21px;
text-align: Left;`

const ProductPrice = styled.p`
font-weight: 600;
font-size: 14px;
line-height: 17px;
text-align: Left;
color: #FA4A0C;
`

export default class CategorieList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }

    fetchProducts = () => {
        fetch(`http://localhost:3004/${this.props.categorie}`)
            .then(response => response.json())
            .then(product => this.setState({ products: product }))
    }

    componentDidMount() {
        this.fetchProducts()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.categorie !== this.props.categorie) {
            this.fetchProducts()
        }
    }

    render() {
        return (
            <>
                <Categorie>
                    {
                        this.state.products.map(product => {
                            return (
                                <CategorieLi key={`${product.category}-${product.id}`}>
                                    <Link to={{
                                        pathname: `/${product.category}/${product.id}`,
                                        tipo: product.category,
                                        id: product.articleId
                                    }}>
                                        <CategorieImg>
                                            <EllipseImg src={product.elipse}></EllipseImg>
                                            <ProductImg src={product.image}></ProductImg>
                                        </CategorieImg>
                                        <CategorieText>
                                            <ProductName>{product.type}</ProductName>
                                            <ProductPrice>${product.price} MXN</ProductPrice>
                                        </CategorieText>
                                    </Link>
                                </CategorieLi>

                            )
                        })
                    }
                </Categorie>
            </>
        )
    }
}
