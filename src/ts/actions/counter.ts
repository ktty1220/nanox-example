/*tslint:disable: no-invalid-this*/
import { MyActions } from '../store';

const actions: MyActions = {
  reset() {
    return {
      count: 0
    };
  },

  increment(count: number) {
    return {
      count: this.state.count + count
    };
  },

  decrement(count: number) {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        resolve({
          count: this.state.count - count,
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
    throw new Error('invalid action');
  }
};

export default actions;
