import { MyActions } from './actions';

export interface State {
  type: string;
  count: number;
  waiting: boolean;
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
