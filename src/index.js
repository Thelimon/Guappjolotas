import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from './styles/GlobalDetail'
import App from './Routes/App';
import Normalize from 'react-normalize';

ReactDOM.render(
  <React.StrictMode>
    <Container>
      <Normalize />
      <App />
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);


