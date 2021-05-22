import styled from 'styled-components';

const ContCombo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

    position: absolute;
    width: 312px;
    height: 382px;
    left: 24px;
    top: 721px;
`;

const DetailCombo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;

    position: static;
    width: 312px;
    height: 138px;
    left: 0px;
    top: 146px;

    /* Inside Auto Layout */
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 8px 0px;
`;

const HeaderCombo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

    position: static;
    width: 312px;
    height: 74px;
    left: 0px;
    top: 0px;

    /* Inside Auto Layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 24px 0px;
`;

const PText = styled.p`
    position: static;
    width: 312px;
    height: 42px;
    left: 0px;
    top: 32px;

    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 138.84%;

    letter-spacing: 0.02em;

    /* Black */
    color: #0D0D0D;
    opacity: 0.5;

    /* Inside Auto Layout */
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 8px 0px;
`;

const ContCard = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(2,1fr);
`;

const CardWrapper = styled.div`
    padding: 16px;
    width: 120px;
    height: 90px;

    background: #FFFFFF;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.03);
    border-radius: 20px;
`;

const ItemCard = styled.div`
    position: static;
    width: 64px;
    height: 64px;
    left: 0px;
    top: 0px;

    /* Inside Auto Layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 8px;
`;

const DescCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;

    position: static;
    width: 120px;
    height: 30px;
    left: 16px;
    top: 88px;

    /* Inside Auto Layout */
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    margin: 8px 0px;



`;

const HeadCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`;

const ContCheck = styled.div`
    position: static;
    width: 24px;
    height: 24px;

    /* Inside Auto Layout */
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 8px;
`;

const H3Desc = styled.h3`
    position: static;
    width: 120px;
    height: 0px;
    left: 0px;
    top: 0px;

    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;

    /* Black */

    color: #0D0D0D;
`;

const H3DescPre = styled.h3`
    position: static;
    width: 120px;
    height: 15px;
    left: 0px;
    top: 19px;

    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */


    color: #FA4A0C;
`;


export { ContCombo, DetailCombo, ContCard, CardWrapper, ItemCard, HeaderCombo, PText, DescCard, H3Desc, H3DescPre, ContCheck, HeadCard };