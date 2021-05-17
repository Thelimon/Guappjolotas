import styled from 'styled-components';

const ContSabores = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

    position: absolute;
    width: 312px;
    height: 234px;
    left: 24px;
    top: 447px;
`;

const ContCard = styled.div`
    display: grid;
    grid-gap: 4rem;
    grid-template-columns: repeat(3,1fr);
    width: 312px;

`;


export { ContSabores, ContCard };