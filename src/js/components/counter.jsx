import * as React from 'react';

export default class Counter extends React.Component {
  render() {
    const { dispatch, count, type } = this.props;
    return (
      <div>
        <h2>{type} example</h2>
        <div>{count}</div>
        <button onClick={() => dispatch('increment', 1)}>+1</button>
        <button onClick={() => dispatch('decrement', 1)}>-1(delay 1s)</button>
        <button onClick={() => dispatch('increment', 100)}>+100</button>
        <button onClick={() => dispatch('invalid')}>invalid(console)</button>
        <p>{(this.props.waiting) ? 'waiting' : ''}</p>
      </div>
    );
  }
}
