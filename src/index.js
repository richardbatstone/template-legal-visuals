import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider as StyletronProvider} from 'styletron-react';
import {Client as Styletron} from 'styletron-engine-atomic';
import {LightTheme, DarkTheme, BaseProvider} from 'baseui';

const engine = new Styletron();
ReactDOM.render(
  <StyletronProvider value={engine}>
    <BaseProvider theme={LightTheme}>
      <App />
    </BaseProvider>
  </StyletronProvider>,
  document.getElementById('root'),
);