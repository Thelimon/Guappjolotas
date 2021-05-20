import React, { Component } from 'react'
import { ContDetail, ContImg, ImgItem, ImgElipse, ContDesc, H1Styled, H2Precio } from '../styles/ItemDetail'

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
        return (
            <div key={this.state.dataD.id}>
                <ContDetail>
                    <ContImg>
                        <ImgItem src={ this.state.dataD.imageD }></ImgItem>
                        <ImgElipse src={ this.state.dataD.elipseD }></ImgElipse>
                    </ContImg>
                </ContDetail>
                <ContDesc>
                    <H1Styled>{ this.state.dataD.name }</H1Styled>
                    <H2Precio>${ this.state.dataD.price } MXN</H2Precio>
                </ContDesc>
            </div>
        )
    }
}