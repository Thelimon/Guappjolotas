import styled from "styled-components";

const ContBotonAgregarCar = styled.div`
  display: grid;
  place-items: center;
  padding: 16px 24px;
  position: absolute;
  height: 101px;
  left: 0px;
  bottom: -425px;
`;

const BotonAgregarCar = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  width: 312px;
  height: 69px;

  /* Primary */
  border: none;
  background: #fa4a0c;
  border-radius: 40px;

  /* Inside Auto Layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 1.5rem 0;
`;

const AgregarBoton = styled.span`
  position: static;
  width: 176px;
  height: 21px;
  left: 24px;
  top: 24px;

  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 21px;
  /* identical to box height */

  text-align: right;

  color: #f6f6f9;
  /* Inside Auto Layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const PrecioBoton = styled.span`
  position: static;
  width: 57px;
  height: 21px;
  left: 231px;
  top: 24px;

  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 21px;
  /* identical to box height */
  color: #f6f6f9;
`;

export { ContBotonAgregarCar, BotonAgregarCar, AgregarBoton, PrecioBoton };
