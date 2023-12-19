import { defineStore } from 'pinia';

export const stationStore = defineStore({
    id: 'stn',
    state: () => ({
        alert: null,
        stn: [],
    }),
    actions: {
        success(message) {
            this.alert = { message, type: 'alert-success' };
        },
        error(message) {
            this.alert = { message, type: 'alert-danger' };
        },
        clear() {
            this.alert = null;
        },
        stations(stn) {
            this.stn = []
            this.stn = stn;
        },
    },
    getters: {
      getStations() {
        return this.stn
      },
    },
});