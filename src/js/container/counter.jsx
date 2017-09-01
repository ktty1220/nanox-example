import * as React from 'react';
import Nanox from 'nanox';
import Counter from '../components/counter';
import { initialState } from '../store';
import actions from '../actions';

export default class CounterContainer extends Nanox {
  constructor(props) {
    super(props);
    this.state = initialState();
  }

  componentDidMount() {
    this.registerActions(actions);
  }

  render() {
    return <Counter dispatch={this.dispatch} {...this.state} />;
  }
}
