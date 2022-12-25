import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'
import theme from './theme';
import { Provider } from 'react-redux'
import store from './store/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ChakraProvider><Provider store={store}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App /></Provider>
    </ChakraProvider>

  </React.StrictMode>
);


