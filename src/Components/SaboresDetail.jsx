import React, { Component } from 'react'
import { ContSabores, ContCard } from '../styles/SaboresDetail';
import styled from 'styled-components';
import { H2Text } from '../styles/GlobalDetail';

const ItemCard = styled.div`
    width: 50px;
    height: 50px;
    left: 0px;
    top: 0px;
    cursor: pointer;
    flex: none;
    order: 0;
    flex-grow: 0;
`;

export default class SaboresDetail extends Component {

    constructor(props){
        super(props)
        this.state = {
            loading: true,
            error: null,
            dataSabores: [],
            combo: 0
        }
    }

    fetchSabores = () => {
        fetch('http://localhost:3004/Sabor')
        .then(response => response.json())
        .then(sabores => this.setState({ dataSabores: sabores, loading: false }))
    }

    componentDidMount() {
        this.fetchSabores()
    }

    handleClick(e, tipo){
        e.preventDefault()
        console.log(tipo);
    }

    render() {
        return (
            <>
                <ContSabores>
                    <H2Text>Sabor</H2Text>
                    <ContCard>
                        { this.state.dataSabores.map(sabores => {
                            return(
                                <ItemCard key={ sabores.id } onClick={(e) => this.handleClick(e, sabores.type)}>
                                    <img src={ sabores.image } alt={ sabores.name }></img>
                                </ItemCard>
                            )
                        })}
                    </ContCard>
                </ContSabores>
            </>
        )
    }
}
