import { defineStore } from 'pinia';
import { TActive } from '../../types/data';

const footerStore = defineStore('footer', {
  state: () => {
    return {
      tabs: ['All', 'Active', 'Completed'] as TActive[],
      current: 'All' as TActive,
    };
  },
  actions: {
    changeTab(active: TActive) {
      this.current = active;
    },
  },
});

export default footerStore;
