import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette:{
    primary:{
      main: '#FF9770'
    },
    secondary:{
      main: '#E9FF70'
    },
    text: {
      primary:"#AFAFAF" ,
      secondary: "#FFFFFF"
    }
  }
})

ReactDOM.render(
  <ThemeProvider theme = { theme }>
    <App />
    </ThemeProvider>,
  document.getElementById('root')
);

