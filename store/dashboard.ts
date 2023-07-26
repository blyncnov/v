// stores/counter.js
import { defineStore } from "pinia";

export const useDashboardController = defineStore("dashboard", {
  state: () => ({
    isOpen: true,
    openNav: false,
  }),
  actions: {
    ToggleDashboard() {
      this.isOpen = !this.isOpen;
      console.log(this.isOpen);
    },

    OpenNavigationBar() {
      this.openNav = !this.openNav;
    },
  },
});

export const usedashboard = defineStore("navigation", {
  state: () => ({
    isOpen: true,
    openNav: false,
  }),
  actions: {
    ToggleDashboard() {
      this.isOpen = !this.isOpen;
      console.log(this.isOpen);
    },

    OpenNavigationBar() {
      this.openNav = !this.openNav;
    },
  },
});
