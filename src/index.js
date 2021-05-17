import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from './styles/GlobalDetail'
import App from './Routes/App';

ReactDOM.render(
  <React.StrictMode>
    <Container>
      <App />
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);


