import React, { Component } from 'react'
import { ButtonCant, ButtonMenos, ButtonMas } from '../styles/ButtonAddDetail'
import { PlusCircle } from '@styled-icons/boxicons-regular/PlusCircle'
import { MinusCircle } from '@styled-icons/boxicons-regular/MinusCircle'
import ButtonAddCart from './ButtonAddCart.jsx';
import ComboDetail from './ComboDetail.jsx';

export default class ButtonAddDetail extends Component {

    constructor(props){
        super(props)
        this.state = {
            cantidad: 1,
            precio: 25,
            restar: true
        }
    }

    restarCantidad = (e) => {
        e.preventDefault()
        let auxCant = this.state.cantidad - 1
        if(this.state.cantidad === 1 && auxCant === 0){
            this.setState({
                restar: false
            })
        }else{
            this.setState({
                cantidad: auxCant
            })
        }
    }

    sumarCantidad = (e) => {
        e.preventDefault()
        let auxCant = this.state.cantidad + 1
        this.setState({
            cantidad: auxCant
        })
    }


    render() {
        return (
            <>
                <ButtonCant>
                    <ButtonMenos onClick={ this.restarCantidad }>
                        <MinusCircle />
                    </ButtonMenos>
                    <span>{ this.state.cantidad }</span>
                    <ButtonMas onClick={ this.sumarCantidad }>
                        <PlusCircle />
                    </ButtonMas>
                </ButtonCant>
                <ComboDetail cantidad={ this.state.cantidad } precio={ this.state.precio * this.state.cantidad}/>
            </>
        )
    }
}
