import * as React from 'react';
import { NanoxActionMap } from 'nanox';
import { MyActions } from '../actions';
import { State } from '../store';

interface CounterProps extends State {
  actions: NanoxActionMap<MyActions>;
}

// tslint:disable-next-line variable-name
const Counter: React.FC<CounterProps> = React.memo(({ actions, count, type, waiting }) => {
  const increment1 = React.useCallback(async () => {
    await actions.increment(1);
  }, []);
  const decrement1 = React.useCallback(async () => {
    await actions.waiting(true);
    await actions.decrement(1);
  }, []);
  const increment100 = React.useCallback(async () => {
    await actions.increment(100);
  }, []);
  const invalid = React.useCallback(async () => {
    try {
      await actions.invalid();
    } catch (err) {
      console.error('error', err.message);
      await actions.reset();
    }
  }, []);

  return (
    <div>
      <h2>{type} example</h2>
      <div>{count}</div>
      <button onClick={increment1}>+1</button>
      <button onClick={decrement1}>-1(delay 1s)</button>
      <button onClick={increment100}>+100</button>
      <button onClick={invalid}>invalid(console)</button>
      <p>{(waiting) ? 'waiting' : ''}</p>
    </div>
  );
});

export default Counter;
