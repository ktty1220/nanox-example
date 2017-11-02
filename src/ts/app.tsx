import * as React from 'react';
import * as ReactDOM from 'react-dom';
import CounterContainer from './container/counter';

ReactDOM.render(<CounterContainer /> as any, document.getElementById('app'));
