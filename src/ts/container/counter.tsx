import * as React from 'react';
import Nanox from 'nanox';
import Counter from '../components/counter';
import { State, initialState } from '../store';
import actions from '../actions';

export default class CounterContainer extends Nanox<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = initialState();
  }

  public componentDidMount() {
    this.registerActions(actions);
  }

  public render() {
    return <Counter dispatch={this.dispatch} {...this.state} />;
  }
}
