import React from 'react'
import TotalCart from './TotalCart'
import { Container, ItemDetail, InfoCart, ImageCart, DescriptionCart, NameCart, QuantityCart, PriceCart, ProductNotCart, ImageNotCart } from '../../styles/Cart/ItemDetailCart'

var content = 'recibe los datos'

function ItemDeteilCart(props) {


    return (
       
            content.length?
            <ProductNotCart>
                <ImageNotCart src='https://i.ibb.co/PZ6Zmy5/Frame20.png' />
            </ProductNotCart>:
            <Container>
                <ItemDetail >
                    <InfoCart>
                        <ImageCart src='https://i.ibb.co/JvLbPSh/guajolotas.png'/>
                        <DescriptionCart>
                            <NameCart>Nombre</NameCart>
                            <QuantityCart>Cantidad</QuantityCart>
                        </DescriptionCart>
                    </InfoCart>
                    <PriceCart> MXN</PriceCart>
                </ItemDetail>
                <TotalCart />
            </Container>
            
        
    )
}

export default ItemDeteilCart
