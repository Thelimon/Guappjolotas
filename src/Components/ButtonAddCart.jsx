import React from 'react'
import { ContBotonAgregarCar, BotonAgregarCar, AgregarBoton, PrecioBoton } from '../styles/ButtonAddCart'

function ButtonAddCart(props) {
    const precio = props.precio;
    return (
        <>
            <ContBotonAgregarCar>
                <BotonAgregarCar>
                    <AgregarBoton>Agregar { props.cantidad } al carrito</AgregarBoton>
                    <PrecioBoton>${ precio }</PrecioBoton>
                </BotonAgregarCar>
            </ContBotonAgregarCar>
        </>
    )
}

export default ButtonAddCart
