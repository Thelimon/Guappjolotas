// import React from 'react'
import { ContCombo, DetailCombo, ContCard, CardWrapper, HeaderCombo, PText, ItemCard, DescCard, H3DescPre, H3Desc, ContCheck, HeadCard } from '../styles/ComboDetail';
import { H2Text } from '../styles/GlobalDetail';
import Champurrado from '../images/champurradobebi.svg'
import Arroz from '../images/arroz.svg'
import Chocolate from '../images/chocolatebebi.svg'
import Cafe from '../images/cafebebi.svg'
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
        fetch('http://localhost:3004/Bebida')
        .then(response => response.json())
        .then(sabores => this.setState({ dataSabores: sabores, loading: false }))
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
                                    <CardWrapper key={ sabores.id } precioCOmbo = { this.state.combo }>
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
                                                <img src={ sabores.image }></img>
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
                <ButtonAddCart cantidad={ cantidadprop } precio={ precioprop + this.state.combo } />
            </>
        )
    }
}
