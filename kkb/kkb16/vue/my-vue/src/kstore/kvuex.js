// 保存构造函数引用，避免import
let Vue;

class Store {
  constructor(options) {
    this._mutations = options.mutations;
    this._actions = options.actions;
    // 响应化处理state
    this.state = new Vue({ data: options.state });
    // 绑定commit，dispatch的上下文
    this.commit = this.commit.bind(this)
    this.dispatch = this.dispatch.bind(this)
  }

  // store.commit('add', 1)
  commit(type, payload) {
    const entry = this._mutations[type];
    if (entry) {
      entry(this.state, payload);
    }
  }
  dispatch(type,payload) {
    const entry = this._actions[type];
    if (entry) {
      entry(this, payload);
    }
  }
}

function install(_Vue) {
  Vue = _Vue;
  Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store;
      }
    },
  });
}

export default {
  Store,
  install,
};
