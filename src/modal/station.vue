<template>
  <base-layout
    page-default-back-link="/admin-dashboard"
    :show-tool-bar-menu="true"
    :show-menu-button="false"
    :page-title="results.station"
  > 
    <ion-card v-for="e in results.station_detail">
      <ion-card-content>
        <ion-list>
          <ion-item>
            <ion-badge slot="end" color="blue">{{e.date}}</ion-badge>
            <ion-label>Date</ion-label>
          </ion-item>
          <ion-item>
            <ion-badge slot="end" color="blue">{{e.bedCapacity}}</ion-badge>
            <ion-label>Bed Capacity</ion-label>
          </ion-item>
          <ion-item>
            <ion-badge slot="end" color="blue">{{e.regularBed}}</ion-badge>
            <ion-label>Regular Beds</ion-label>
          </ion-item>
          <ion-item>
            <ion-badge slot="end" color="blue">{{e.bassinets}}</ion-badge>
            <ion-label>Bassinets</ion-label>
          </ion-item>
          <ion-item>
            <ion-badge slot="end" color="blue">{{e.occupanyRate}}</ion-badge>
            <ion-label>Occupancy Rate</ion-label>
          </ion-item>
          <ion-item>
            <ion-badge slot="end" color="blue">{{e.alos}}</ion-badge>
            <ion-label>ALOS</ion-label>
          </ion-item>
        </ion-list>
      </ion-card-content>
    </ion-card>

    
   
  </base-layout>
</template>

<script>
import { onBeforeUnmount, onMounted, ref, computed, reactive, defineProps } from "vue";
import { useRoute } from "vue-router";

export default {
  setup(props) {
    const route = useRoute();
    const stn = route.query.station;
    //const propsRef = defineProps(["propKey"]);
    const results = JSON.parse(route.params.propKey);
    onMounted(async () => {
      console.log(results);
      // console.log(objectParam);
      /* route.params.propKey.forEach(element => {
        console.log(element);
        }); */
    });
    return {
      stn,
      results,
      //receivedProp,
    };
  },
};
</script>
