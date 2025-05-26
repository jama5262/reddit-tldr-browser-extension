import { defineStore } from 'pinia';

export const useCollapsibleStore = defineStore('collapsible', {
  state: () => ({
    isOpen: false,
  }),
  actions: {
    toggleCollapse() {
      this.isOpen = !this.isOpen;
    },
  },
});