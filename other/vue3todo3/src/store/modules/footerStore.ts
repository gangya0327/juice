import { defineStore } from 'pinia';
import { TTab } from '../../types/data';

const footerStore = defineStore('footer', {
  state: () => {
    return {
      tabs: ['All', 'Active', 'Completed'] as TTab[],
      current: 'All' as TTab,
    };
  },
  actions: {
    changeTab(value: TTab) {
      this.current = value;
    },
  },
});

export default footerStore;
