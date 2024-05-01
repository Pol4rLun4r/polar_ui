import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// style
// import { ThemeProvider } from 'styled-components';

// Ui
import { Thing, GlobalStyle, ThemeProvider } from '../.';


const App = () => {
  return (
    <ThemeProvider theme={{mode: 'dark'}}>
      <GlobalStyle/>
      <Thing />
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
