import { defineStore } from 'pinia';
import { TActive } from '../../types/data';

const footerStore = defineStore('footer', {
  state: () => {
    return {
      tabs: ['All', 'Active', 'Completed'] as TActive[],
      active: 'All' as TActive,
    };
  },
  actions: {
    changeActive(active: TActive) {
      this.active = active;
    },
  },
});

export default footerStore;
