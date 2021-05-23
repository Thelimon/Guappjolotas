import styled from 'styled-components';


const StyleHeaderCart = styled.div`    
        background-color: #F2F2F2;
        font-family: 'Inter', sans-serif;
        text-align: auto;
`;

const Container = styled.div`
    position: relative;
    height: 1330px;
`;

const Back = styled.div`
    position: fixed;
    width: 24px;
    height: 24px;
    left: 30px;
    top: 55px;
    cursor: pointer;
`;

const Title = styled.h1`
        font-style: inter;
        font-size: 25px;
        padding-top: 30px;
        position: fixed;
        align-items: center;
        left: 50%;
        transform: translateX(-50%);`;



export { StyleHeaderCart, Container, Back, Title };