/*eslint-env browser*/
import React from 'react';
import ReactDOM from 'react-dom';
import Nanox from 'nanox';
import Counter from './components/counter';
import actions from './actions';
import { initialState } from './store';

class CounterContainer extends Nanox {
  constructor(props) {
    super(props);
    this.state = initialState();
  }

  //onSetState(data, type) {
  //  console.info('state will update', { data, type });
  //  return true;
  //}

  //componentWillUpdate(props, state) {
  //  console.info('new state', state);
  //}

  render() {
    return <Counter actions={this.actions} {...this.state} />;
  }
}

ReactDOM.render(
  <CounterContainer actions={actions} />,
  document.getElementById('app')
);
