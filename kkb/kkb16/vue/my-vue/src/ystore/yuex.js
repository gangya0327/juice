let Vue;
class Store {
  constructor(options) {
    this.state = new Vue({ data: options.state });
    this._mutations = options.mutations;
    this._actions = options.actions;
    this.commit = this.commit.bind(this);
    this.dispatch = this.dispatch.bind(this);
  }
  commit(type, payload) {
    const entry = this._mutations[type];
    if (entry) {
      entry(this.state, payload);
    }
  }
  dispatch(type, payload) {
    const entry = this._actions[type];
    if (entry) {
      entry(this, payload);
    }
  }
}

const install = function (_Vue) {
  Vue = _Vue;
  Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store;
      }
    },
  });
};

export default {
  Store,
  install,
};
