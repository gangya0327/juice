import View from './krouter-view';
import Link from './krouter-link';

let Vue;

class KVueRouter {
  constructor(options) {
    this.$options = options;

    // 创建响应式的current
    Vue.util.defineReactive(this, 'current', '/');

    // 监听url变化
    window.addEventListener('hashchange', this.onHashChange.bind(this));
    window.addEventListener('load', this.onHashChange.bind(this));
  }
  onHashChange() {
    this.current = window.location.hash.slice(1);
  }
}

KVueRouter.install = function (_Vue) {
  // 保存构造函数，在KVueRouter里使用
  Vue = _Vue;
  // 挂载$router
  // 获取根实例中的router选项
  Vue.mixin({
    beforeCreate() {
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router;
      }
    },
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);
};

export default KVueRouter;
