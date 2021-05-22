import React from "react";
import {
  ContBotonAgregarCar,
  BotonAgregarCar,
  AgregarBoton,
  PrecioBoton,
} from "../styles/ButtonAddCart";

function ButtonAddCart(props) {
  const precio = props.precio;

  const buttonS =
    props.tipo === "Bebida"
      ? {
          height: "0px",
        }
      : {
          height: "101px",
        };
  return (
    <>
      <ContBotonAgregarCar style={buttonS}>
        <BotonAgregarCar>
          <AgregarBoton>Agregar {props.cantidad} al carrito</AgregarBoton>
          <PrecioBoton>${precio}</PrecioBoton>
        </BotonAgregarCar>
      </ContBotonAgregarCar>
    </>
  );
}

export default ButtonAddCart;
