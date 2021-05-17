import React from 'react';
import { ContSabores, ContCard } from '../styles/SaboresDetail';
import { H2Text } from '../styles/GlobalDetail';
import Verde from '../images/verde.svg';
import Mole from '../images/mole.svg';
import Rajas from '../images/rajas.svg';
import Piña from '../images/piña.svg';
import Pasas from '../images/pasas.svg';
import Guayaba from '../images/guayaba.svg';

function SaboresDetail() {
    return (
        <>
            <ContSabores>
                <H2Text>Sabor</H2Text>
                <ContCard>
                    <img src={ Verde }></img>
                    <img src={ Mole }></img>
                    <img src={ Rajas }></img>
                    <img src={ Piña }></img>
                    <img src={ Pasas }></img>
                    <img src={ Guayaba }></img>
                </ContCard>
            </ContSabores>
        </>
    )
}

export default SaboresDetail
