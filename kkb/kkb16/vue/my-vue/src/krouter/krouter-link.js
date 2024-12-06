export default {
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  render(h) {
    // <a href="#/abc">abc</a>
    // <router-link to="/abc">abc</router-link>
    return h('a', { attrs: { href: '#' + this.to } }, this.$slots.default);
  },
};
