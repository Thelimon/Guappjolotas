import styled from 'styled-components';

const ButtonCant = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px;

    position: absolute;
    width: 190px;
    height: 50px;
    left: 85px;
    top: 335px;
    background: #FFFFFF;

    /* shadow-1 */
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
    border: 0;
    border-radius: 20px;
`;

const ButtonMas = styled.button`
    position: static;
    width: 40px;
    height: 40px;
    left: 134px;
    top: 16px;
    cursor: pointer;
    /* Inside Auto Layout */
    border: 0;
    border-radius: 20px;
    flex: none;
    order: 2;
    flex-grow: 0;
    margin: 0px 32px;
`;

const ButtonMenos = styled.button`
    position: static;
    width: 40px;
    height: 40px;
    left: 16px;
    top: 16px;
    cursor: pointer;
    /* Inside Auto Layout */
    border: 0;
    border-radius: 20px;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 32px;
`;

export { ButtonCant, ButtonMas, ButtonMenos };