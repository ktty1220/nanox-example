import { Action } from 'nanox';

export interface State {
  type: string;
  count: number;
  waiting: boolean;
}

export interface MyActions {
  reset: Action<State>;
  increment: Action<State>;
  decrement: Action<State>;
  waiting: Action<State>;
  invalid: Action<State>;
}

export interface Props {
  actions: MyActions;
}

export const initialState = () => {
  return {
    type: 'ts',
    count: 0,
    waiting: false
  };
};
