import React, { Component } from 'react'
import styled from 'styled-components'

const CategorieI = styled.a`
color: #9A9A9D;
text-decoration: none;
font-weight: 400;
font-size: 17px;
line-height: 21px;`

export default class CategorieItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [],
            categorieActive: ''
        }
    }

    fetchCategorie = () => {
        fetch('http://localhost:3004/Categories')
            .then(response => response.json())
            .then(categoriesJSON => this.setState({ categories: categoriesJSON }))
    }

    componentDidMount() {
        this.fetchCategorie()
    }

    handleClick = (categoria) => {
        this.props.changeCategorie(categoria);
        this.setState({ categorieActive: categoria })
    }

    render() {
        var style_a = { color: "#FA4A0C", textDecoration: "underline" };
        var style = {}

        return (
            <>
                {
                    this.state.categories.map(categorie => {
                        return (
                            <CategorieI
                                key={`${categorie.id}-${categorie.category}`}
                                onClick={() => this.handleClick(categorie.category)}
                                style={this.state.categorieActive === categorie.category ? style_a : style}
                            >{categorie.category}
                            </CategorieI>
                        )
                    })
                }
            </>
        )
    }
}
