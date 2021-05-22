// import React from 'react'
import { ContCombo, DetailCombo, ContCard, CardWrapper, HeaderCombo, PText, ItemCard, DescCard, H3DescPre, H3Desc, ContCheck, HeadCard } from '../styles/ComboDetail';
import { H2Text } from '../styles/GlobalDetail';
import Checkbox from '@material-ui/core/Checkbox';
import ButtonAddCart from './ButtonAddCart.jsx';


import React, { Component } from 'react'

export default class ComboDetail extends Component {

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
        if(this.props.tipo === 'Bebida'){
            fetch('http://localhost:3004/Guajolota')
            .then(response => response.json())
            .then(sabores => this.setState({ dataSabores: sabores, loading: false }))
        }else{
            fetch('http://localhost:3004/Bebida')
            .then(response => response.json())
            .then(sabores => this.setState({ dataSabores: sabores, loading: false }))
        }
    }

    componentDidMount() {
        this.fetchSabores()
    }

    sumarCombo = (e, precio) => {
        e.preventDefault()
        let aux = this.state.combo
        let valor = aux + precio
        this.setState({
            combo: valor
        })
    }

    restarCombo = (e, precio) => {
        e.preventDefault()
        let aux = this.state.combo
        let valor = aux - precio
        this.setState({
            combo: valor
        })
    }

    render() {
        const precioprop = this.props.precio;
        const cantidadprop = this.props.cantidad;

        const bebidaStyle =
            this.props.tipo === 'Bebida' ?
            {
                height: '110px'
            }
            :
            {
                height: '90px'
            };

        return (
            <>
                <ContCombo>
                    <HeaderCombo>
                        <H2Text>
                            Guajalocombo
                        </H2Text>
                        <PText>
                            Selecciona la bebida que más te guste y disfruta de tu desayuno
                        </PText>
                    </HeaderCombo>
                    <DetailCombo>
                        <ContCard>
                            { this.state.dataSabores.map(sabores => {
                                return(
                                    <CardWrapper style={bebidaStyle} key={ sabores.id } precioCOmbo = { this.state.combo }>
                                        <ItemCard>
                                            <HeadCard>
                                                <ContCheck>
                                                    <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                                                        onChange={e => {
                                                            if(e.target.checked){
                                                                this.sumarCombo(e, sabores.price);
                                                            }else{
                                                                this.restarCombo(e, sabores.price);
                                                            }
                                                        }}
                                                    />
                                                </ContCheck>
                                                <img src={ sabores.image } alt={ sabores.name}></img>
                                            </HeadCard>
                                            <DescCard>
                                                <H3Desc>{ sabores.type }</H3Desc>
                                                <H3DescPre>+${ sabores.price } MXN</H3DescPre>
                                            </DescCard>
                                        </ItemCard>
                                    </CardWrapper>
                                )
                            })}
                        </ContCard>
                    </DetailCombo>
                </ContCombo>
                <ButtonAddCart tipo={this.props.tipo} cantidad={ cantidadprop } precio={ precioprop + this.state.combo } />
            </>
        )
    }
}
