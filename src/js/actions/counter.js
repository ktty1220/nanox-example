/*eslint-env es6*/
const actions = {
  reset() {
    return {
      count: 0
    }
  },

  increment(count) {
    return {
      count: this.state.count + count
    };
  },

  decrement(count) {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        resolve({
          count: this.state.count - count,
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
  }
};

export default actions;
