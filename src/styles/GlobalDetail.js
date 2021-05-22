import styled from "styled-components";

const Container = styled.div`
  position: relative;
  height: 1330px;
`;

const ArrowBack = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  left: 24px;
  top: 44px;
  cursor: pointer;
`;

const Cart = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  left: 312px;
  top: 44px;
  opacity: 0.3;
`;

const H2Text = styled.h2`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;

  /* Black */
  color: #0d0d0d;
`;

export { Container, ArrowBack, Cart, H2Text };
