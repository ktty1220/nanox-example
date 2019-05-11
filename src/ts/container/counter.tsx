import * as React from 'react';
import Nanox from 'nanox';
import Counter from '../components/counter';
import { Props, initialState, State } from '../store';

export default class CounterContainer extends Nanox<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = initialState();
  }

  public render() {
    return <Counter actions={this.actions} {...this.state} />;
  }
}
