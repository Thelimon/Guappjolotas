import styled from 'styled-components';

const Container = styled.div`
        width: 95%;
        padding: 120px;
    `;


const ItemDetail = styled.div`  
        margin: 10px;
        display: flex;
        justify-content: space-between;
    `;
const InfoCart = styled.div`
    display: flex;
`;

const ImageCart = styled.img`
        height:55px;
        width: 55px;
    `;
const DescriptionCart = styled.div`
        margin-top: 4px;
        margin-left: 15px;
        width: auto;
        display: flex;
        flex-direction: column;
    `;

const NameCart = styled.p`
        color: #0D0D0D;
        font-weight: 650;
        font-size: 12px;
    `;

const QuantityCart = styled.p`
        margin-top: -6px;
        color: #FA4A0C;
        font-weight: 630;
        font-size: 12px;
    `;


const PriceCart = styled.p`
        color: #FA4A0C;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
    `;

const ProductNotCart = styled.div`
    
    transform: translateY(60%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ImageNotCart = styled.img`
    height: auto;
    width: auto;
    object-fit: cover;
`;

const ContainerPrice = styled.div`
        background-color: white;
        border-radius: 20px;
        margin: 18px;
        height: 23px;
        padding: 18px;
        display: flex;
        align-items:center;
        justify-content: space-between;
    `;

const TitlePrice = styled.p`
        color: #0D0D0D;
        font-weight: 630;
        font-size: 17px;
        line-height: 21px;
    `;

const Price = styled.p`
        color: #FA4A0C;
        font-weight: 630;
        font-size: 17px;
        line-height: 21px;

    `;
    


export { Container, ItemDetail, InfoCart, ImageCart, DescriptionCart, NameCart, QuantityCart, PriceCart, ProductNotCart, ImageNotCart, ContainerPrice, TitlePrice, Price };