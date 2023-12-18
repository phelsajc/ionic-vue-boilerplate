<template>
  <base-layout page-default-back-link="/admin-dashboard" :show-tool-bar-menu="true" :page-title="stn">
    <ion-card>
      <!-- <ion-card-header>
      <ion-card-title>Card Title</ion-card-title>
      <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
    </ion-card-header> -->
      <ion-card-content>
        <ion-list>
          <ion-item>
            <ion-badge slot="end" color="blue">December 13 2023</ion-badge>
            <ion-label>Date</ion-label>
          </ion-item>
          <ion-item>
            <ion-badge slot="end" color="secondary">22</ion-badge>
            <ion-label>Bed Capacity</ion-label>
          </ion-item>
          <ion-item>
            <ion-badge slot="end" color="secondary">22</ion-badge>
            <ion-label>Regular Beds</ion-label>
          </ion-item>
          <ion-item>
            <ion-badge slot="end" color="secondary">0</ion-badge>
            <ion-label>Bassinets</ion-label>
          </ion-item>
          <ion-item>
            <ion-badge slot="end" color="secondary">69.99%</ion-badge>
            <ion-label>Occupancy Rate</ion-label>
          </ion-item>
          <ion-item>
            <ion-badge slot="end" color="secondary">2.2</ion-badge>
            <ion-label>ALOS</ion-label>
          </ion-item>
        </ion-list>
      </ion-card-content>
    </ion-card>
    <ion-card>
      <!-- <ion-card-header>
      <ion-card-title>Card Title</ion-card-title>
      <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
    </ion-card-header> -->
      <ion-card-content>
        <ion-list>
          <ion-item>
            <ion-badge slot="end" color="secondary">December 13 2023</ion-badge>
            <ion-label>Date</ion-label>
          </ion-item>
          <ion-item>
            <ion-badge slot="end">22</ion-badge>
            <ion-label>Bed Capacity</ion-label>
          </ion-item>
          <ion-item>
            <ion-badge slot="end">22</ion-badge>
            <ion-label>Regular Beds</ion-label>
          </ion-item>
          <ion-item>
            <ion-badge slot="end">22</ion-badge>
            <ion-label>Bassinets</ion-label>
          </ion-item>
          <ion-item>
            <ion-badge slot="end">22</ion-badge>
            <ion-label>Occupancy Rate</ion-label>
          </ion-item>
          <ion-item>
            <ion-badge slot="end">22</ion-badge>
            <ion-label>ALOS</ion-label>
          </ion-item>
        </ion-list>
      </ion-card-content>
    </ion-card>
    <ion-card>
      <!-- <ion-card-header>
      <ion-card-title>Card Title</ion-card-title>
      <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
    </ion-card-header> -->
      <ion-card-content>
        <ion-list>
          <ion-item>
            <ion-badge slot="end" color="secondary">December 13 2023</ion-badge>
            <ion-label>Date</ion-label>
          </ion-item>
          <ion-item>
            <ion-badge slot="end">22</ion-badge>
            <ion-label>Bed Capacity</ion-label>
          </ion-item>
          <ion-item>
            <ion-badge slot="end">22</ion-badge>
            <ion-label>Regular Beds</ion-label>
          </ion-item>
          <ion-item>
            <ion-badge slot="end">22</ion-badge>
            <ion-label>Bassinets</ion-label>
          </ion-item>
          <ion-item>
            <ion-badge slot="end">22</ion-badge>
            <ion-label>Occupancy Rate</ion-label>
          </ion-item>
          <ion-item>
            <ion-badge slot="end">22</ion-badge>
            <ion-label>ALOS</ion-label>
          </ion-item>
        </ion-list>
      </ion-card-content>
    </ion-card>
    <ion-card>
      <!-- <ion-card-header>
      <ion-card-title>Card Title</ion-card-title>
      <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
    </ion-card-header> -->
      <ion-card-content>
        <ion-list>
          <ion-item>
            <ion-badge slot="end" color="secondary">December 13 2023</ion-badge>
            <ion-label>Date</ion-label>
          </ion-item>
          <ion-item>
            <ion-badge slot="end">22</ion-badge>
            <ion-label>Bed Capacity</ion-label>
          </ion-item>
          <ion-item>
            <ion-badge slot="end">22</ion-badge>
            <ion-label>Regular Beds</ion-label>
          </ion-item>
          <ion-item>
            <ion-badge slot="end">22</ion-badge>
            <ion-label>Bassinets</ion-label>
          </ion-item>
          <ion-item>
            <ion-badge slot="end">22</ion-badge>
            <ion-label>Occupancy Rate</ion-label>
          </ion-item>
          <ion-item>
            <ion-badge slot="end">22</ion-badge>
            <ion-label>ALOS</ion-label>
          </ion-item>
        </ion-list>
      </ion-card-content>
    </ion-card>
  </base-layout>
</template>

<script>
import { onBeforeUnmount, onMounted, ref, computed, reactive } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const stn = route.query.station
    onMounted(async () => {
      console.log(route.query);
    });
    return {
        stn
    };
  },
};
</script>
