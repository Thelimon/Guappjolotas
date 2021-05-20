import React from 'react'
import HeaderDetail from './HeaderDetail.jsx'
import ItemDetail from './ItemDetail.jsx'
import SaboresDetail from './SaboresDetail.jsx';
import ButtonAddDetail from './ButtonAddDetail.jsx';



function Detail(props) {
    return (
        <>
            <HeaderDetail />
            <ItemDetail tipo={ props.match.params.tipo } id={ props.match.params.productId }/>
            <ButtonAddDetail />
            <SaboresDetail />
        </>
    )
}

export default Detail
