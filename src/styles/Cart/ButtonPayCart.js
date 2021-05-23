import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    
    text-align: auto;
    position: fixed;
    justify-content: center;
    align-items: center;

    left: 50%;
    right: 50%;
    height: 101px;
    bottom: 0px;

`;

const BotonPay = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 24px;
    color: #FFFFFF;

    position: absolute;
    width: 350px;
    height: 69px;
    top: 16px;
    font-size: 21px;

    border: none;
    background: #FA4A0C;
    border-radius: 40px;

    /* Inside Auto Layout */
    order: 0;
    flex-grow: 0;
`;

export { Container, BotonPay };