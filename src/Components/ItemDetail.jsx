import React, { Component } from 'react'
import { ContDetail, ContImg, ImgItem, ImgElipse, ContDesc, H1Styled, H2Precio } from '../styles/ItemDetail'
import ButtonAddDetail from './ButtonAddDetail.jsx';

export default class ItemDetail extends Component {

    constructor(props){
        super(props)
        this.state = {
            loading: true,
            error: null,
            dataD: []
        }
    }

    fetchProduct = () => {

        this.setState({
            loading: true,
            error: null,
        })

        fetch(`http://localhost:3004/${ this.props.tipo}/${this.props.id}`)
        .then(response => response.json())
        .then(producto => this.setState({ dataD: producto, loading: false }))
    }

    componentDidMount() {
        this.fetchProduct()
    }

    render() {

        const tamalStyle =
            this.props.tipo === 'Tamal' ?
            {
                height: '140px'
            }
            :
            {
                height: '165.83px'
            };

        const bebidaStyle =
            this.props.tipo === 'Bebida' ?
            {
                top: '120px'
            }
            :
            {
                top: '80px'
            };

        return (
                <div key={this.state.dataD.id}>
                    <ContDetail>
                        <ContImg>
                            <ImgItem style={tamalStyle} src={ this.state.dataD.imageD }></ImgItem>
                            <ImgElipse style={bebidaStyle} src={ this.state.dataD.elipseD }></ImgElipse>
                        </ContImg>
                    </ContDetail>
                    <ContDesc>
                        <H1Styled>{ this.state.dataD.name }</H1Styled>
                        <H2Precio>${ this.state.dataD.price } MXN</H2Precio>
                    </ContDesc>
                    <ButtonAddDetail tipo={ this.state.dataD.type } precio={ this.state.dataD.price }/>
                </div>
        )
    }
}
