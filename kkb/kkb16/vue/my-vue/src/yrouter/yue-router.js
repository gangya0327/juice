let Vue;

class YueRouter {
  constructor(options) {
    this.$options = options;
    Vue.util.defineReactive(this, 'current', '/');
    window.addEventListener('hashchange', () => {
      this.current = window.location.hash.slice(1);
    });
  }
}

YueRouter.install = function (_Vue) {
  Vue = _Vue;
  Vue.mixin({
    beforeCreate() {
      // console.log(this.$options);
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router;
      }
    },
  });
  Vue.component('router-link', {
    props: {
      to: {
        type: String,
        required: true,
      },
    },
    render(h) {
      return h('a', { attrs: { href: '#' + this.to } }, this.$slots.default);
    },
  });
  Vue.component('router-view', {
    render(h) {
      const obj = this.$router.$options.routes.find((route) => route.path === this.$router.current);
      return h(obj.component);
    },
  });
};

export default YueRouter;
