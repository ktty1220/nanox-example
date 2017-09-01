export interface State {
  type: string;
  count: number;
  waiting: boolean;
}

export interface Prop extends State {
  dispatch(...args: any[]): void;
}

export const initialState = () => {
  return {
    type: 'ts',
    count: 0,
    waiting: false
  };
};
