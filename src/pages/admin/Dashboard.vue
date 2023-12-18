<template>
  <base-layout :show-tool-bar-menu="true">
    <ion-card>
      <ion-card-header>
        <ion-card-title>Filter</ion-card-title>
        <!-- <ion-card-subtitle>Card Subtitle</ion-card-subtitle> -->
      </ion-card-header>

      <ion-card-content>
        <ion-grid size="12">
          <ion-row>
            <ion-col size="6">
              From
              <VueDatePicker
                v-model="date"
                :format="'YYY-dd-MM'"
                :teleport="true"
              ></VueDatePicker
            ></ion-col>
            <ion-col size="6">
              To
              <VueDatePicker
                v-model="date"
                :format="format"
                :teleport="true"
              ></VueDatePicker>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="12">
              <ion-item>
                <ion-select label="Stations" placeholder="Select" :multiple="true">
                  <ion-select-option value="apple">Apple</ion-select-option>
                  <ion-select-option value="banana">Banana</ion-select-option>
                  <ion-select-option value="orange">Orange</ion-select-option>
                </ion-select>
              </ion-item>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="12">
              <ion-item>
                <ion-label>Total Regular Beds</ion-label>
                <ion-badge color="success">100</ion-badge>
              </ion-item>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-card-content>
    </ion-card>

    <ion-card>
      <ion-card-header>
        <ion-card-title>Results</ion-card-title>
      </ion-card-header>

      <ion-card-content>
        <ion-scroll scrollY="true">
          <ion-list>
            <ion-item @click="redirect()">
              <ion-label>Nursery</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Pedia Ward</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>ICU</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>SICU</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Station 1</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Nursery</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Pedia Ward</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>ICU</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>SICU</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Station 1</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Station 12</ion-label>
            </ion-item>
          </ion-list>
        </ion-scroll>
      </ion-card-content>
    </ion-card>
  </base-layout>
</template>

<script>
import { ref } from "vue";

import { useRouter } from "vue-router";
export default {
  setup() {
    const date = ref();
    const format = (date) => {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return `Selected date is ${day}/${month}/${year}`;
    };
    const router = useRouter();
    const a = [{
      a:{
        aa:1,
        bb:2
      }
    }]
    function redirect() {
      //router.push("stations");
      router.push({ 
        name: "stations",
        query: {
          station: 'Nursery',
          user: 3,
          type: 'support'
        },
      });
    }

    return {
      redirect,
      date,
    };
  },
};
</script>

<style>
ion-list {
  overflow: hidden;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
}

ion-card .list-md {
  max-height: 290px !important;
}
</style>
