import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Nanox from 'nanox';
import Counter from './components/counter';
import actions from './actions';
import { Props, State, initialState } from './store';

class CounterContainer extends Nanox<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = initialState();
  }

  //protected onSetState(data: Partial<State>, type: string) {
  //  console.info('state will update', { data, type });
  //  return true;
  //}

  //public componentWillUpdate(_props: Props, state: State) {
  //  console.info('new state', state);
  //}

  public render() {
    return <Counter actions={this.actions} {...this.state} />;
  }
}

ReactDOM.render(
  <CounterContainer actions={actions} />,
  document.getElementById('app')
);
