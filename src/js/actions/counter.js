/*eslint-env es6*/
const actions = {
  increment(count) {
    return {
      count: this.getState().count + count
    };
  },

  decrement(count) {
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

  waiting(state) {
    return {
      waiting: state
    };
  },

  invalid() {
    throw new Error('invalid action');
  },

  __error(err) {
    console.error('error', err.message);
    return {
      count: 0
    };
  }
};

export default actions;
