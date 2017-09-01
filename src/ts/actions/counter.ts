/*tslint:disable: no-invalid-this*/
import { ActionMap } from 'nanox';
import { State } from '../store';

const actions: ActionMap<State> = {
  increment(count: number) {
    return {
      count: this.getState().count + count
    };
  },

  decrement(count: number) {
    this.dispatch('waiting', true);
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        resolve({
          count: this.getState().count - count,
          waiting: false
        });
      }, 1000);
    });
  },

  waiting(state: boolean) {
    return {
      waiting: state
    };
  },

  invalid() {
    throw new Error('this is invalid action');
  },

  __error(err) {
    console.error('error', err.message);
    return {
      count: 0
    };
  }
};

export default actions;
