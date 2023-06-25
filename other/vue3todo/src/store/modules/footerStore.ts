import { defineStore } from 'pinia';

const footerStore = defineStore('footer', {
  state: () => {
    return {
      tabs: ['All', 'Active', 'Completed'],
      active: 'All',
    };
  },
});

export default footerStore;
