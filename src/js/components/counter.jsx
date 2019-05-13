import React, { memo, useCallback } from 'react';

const Counter = memo(({ actions, count, type, waiting }) => {
  const increment1 = useCallback(async () => {
    await actions.increment(1);
  }, []);
  const decrement1 = useCallback(async () => {
    await actions.waiting(true);
    await actions.decrement(1);
  }, []);
  const increment100 = useCallback(async () => {
    await actions.increment(100);
  }, []);
  const invalid = useCallback(async () => {
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
