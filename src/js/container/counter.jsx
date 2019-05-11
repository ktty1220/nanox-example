import * as React from 'react';
import Nanox from 'nanox';
import Counter from '../components/counter';
import { initialState } from '../store';

export default class CounterContainer extends Nanox {
  constructor(props) {
    super(props);
    this.state = initialState();
  }

  render() {
    return <Counter actions={this.actions} {...this.state} />;
  }
}
