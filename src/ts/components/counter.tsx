import * as React from 'react';
import { NanoxActionMap } from 'nanox';
import { State, MyActions } from '../store';

interface CounterProps extends State {
  actions: NanoxActionMap<MyActions>;
}

export default class Counter extends React.Component<CounterProps, {}> {
  public render() {
    const { actions, count, type } = this.props;
    return (
      <div>
        <h2>{type} example</h2>
        <div>{count}</div>
        <button onClick={() => actions.increment(1)}>+1</button>
        <button onClick={() => {
          actions.increment(1)
          .then(() => actions.waiting(true))
          .then(() => actions.decrement(1));
        }}>-1(delay 1s)</button>
        <button onClick={() => actions.increment(100)}>+100</button>
        <button onClick={() => {
          actions.invalid()
          .catch((err: Error) => {
            console.warn('error', err.message);
            actions.reset();
          });
        }}>invalid(console)</button>
        <p>{(this.props.waiting) ? 'waiting' : ''}</p>
      </div>
    );
  }
}
