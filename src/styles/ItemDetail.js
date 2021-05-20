import styled from 'styled-components';

const ContDetail = styled.div`
    position: absolute;
    width: 200px;
    height: 200px;
    left: 80px;
    top: 0px;
`;

const ContImg = styled.div`
    position: absolute;
    left: 20px;
    top: 17.41px;
    filter: drop-shadow(0px 40px 40px rgba(0, 0, 0, 0.07));
`;

const ImgItem = styled.img`
    position: absolute;
    width: 165.83px;
    height: 165.83px;
    top: 2.5%;
    bottom: 3.51%;
`;

const ImgElipse = styled.img`
    position: relative;
    z-index: -1;
    top: 80px;
`;

const ContDesc = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;

    position: absolute;
    width: 312px;
    height: 103px;
    left: 24px;
    top: 200px;
`;

const H1Styled = styled.h1`
    position: static;
    width: 312px;
    height: 68px;
    left: 0px;
    top: 0px;

    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 34px;
    text-align: center;

    /* Black */
    color: #0D0D0D;
`;

const H2Precio = styled.h2`
    position: static;
    width: 99px;
    height: 27px;
    left: 106.5px;
    top: 76px;

    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 27px;
    /* identical to box height */
    text-align: center;

    color: #FA4A0C;
    /* Inside Auto Layout */
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 8px 0px;
`;


export { ContDetail, ContImg, ImgItem, ImgElipse, ContDesc, H1Styled, H2Precio };