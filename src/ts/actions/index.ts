import counterActions, { CounterActions } from './counter';

export type MyActions = CounterActions;
export default {
  ...counterActions
};
