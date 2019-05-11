import * as React from 'react';
import * as ReactDOM from 'react-dom';
import actions from './actions';
import CounterContainer from './container/counter';

ReactDOM.render(
  <CounterContainer actions={actions} />,
  document.getElementById('app')
);
