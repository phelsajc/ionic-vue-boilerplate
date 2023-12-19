<template>
  <KeepAlive>
    <base-layout :show-tool-bar-menu="true">
      <ion-card>
        <ion-card-header>
          <ion-card-title>Filter</ion-card-title>
          <!-- <ion-card-subtitle>Card Subtitle</ion-card-subtitle> -->
        </ion-card-header>

        <ion-card-content>
          <ion-grid size="12">
            <ion-row>
              <ion-col size="12">
                Date
                <VueDatePicker
                  v-model="form.date"
                  :format="'YYY-dd-MM'"
                  :teleport="true"
                  range
                ></VueDatePicker
              ></ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="12">
                <ion-item>
                  <ion-select
                    label="Stations"
                    v-model="form.stns"
                    placeholder="Select"
                    @ionChange="selectStn($event)"
                    :multiple="true"
                  >
                    <ion-select-option v-for="e in stn_list" :value="e">{{
                      e
                    }}</ion-select-option>
                  </ion-select>
                </ion-item>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="12">
                <ion-item>
                  <ion-label>Total Regular Beds</ion-label>
                  <ion-badge color="success">{{ total_reg_beds }}</ion-badge>
                </ion-item>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="12">
                <ion-button expand="block" @click="filter()">FIND</ion-button>
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
              <ion-item v-for="e in censusResults" @click="redirect(e)">
                <ion-label>{{ e.station }}</ion-label>
              </ion-item>
            </ion-list>
          </ion-scroll>
        </ion-card-content>
      </ion-card>
    </base-layout>
  </KeepAlive>
</template>

<script>
import { ref, onMounted, onIonViewDidEnter, computed } from "vue";
import moment from "moment";
import Stns from "@/api/getStations";
import Census from "@/api/getCensus";
import { defineStore } from 'pinia'
import { stationStore } from '../../store/station';
import { useRouter } from "vue-router";

export default {
  setup() {
    const datef = ref();
    const datet = ref();
    const total_reg_beds = ref(0);
    const someData = ref("Hello from parent component");
    const stn_list = ref([]);
    const stnVal = ref([]);
    const stnInput = ref([]);
    const stnStore = stationStore();
    //const censusResults = stnStore.getStations;//ref(stnStore.getStations);
    const censusResults = computed(() => stnStore.getStations)

    const form = ref({
      date: null,
      fdate: null,
      tdate: null,
      stns: null,
    });

    const format = (date) => {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `Selected date is ${day}/${month}/${year}`;
    };

    function getResults() {
      //showLoading()
      stn_list.value.push("All");
      Stns.list()
        .then((response) => {
          /* timeline_header.value = response.data
        dismissLoading() */
          response.data.data.forEach((element) => {
            stn_list.value.push(element.station);
          });
        })
        .catch((err) => {
          console.log(err);
          /* store.dispatch('toast/presentToast', {
            m: err.message,
            type: 'message'
          })
          dismissLoading() */
        })
        .finally(/* dismissLoading() */);
    }

    onMounted(async () => {
      await getResults();
      console.log("stnStore.getStations")
    });

    const router = useRouter();

    function redirect(e) {
      router.push({
        name: "stations",
        params: {
          propKey: JSON.stringify(e),
        },
      });
    }

    async function selectStn(ev) {
      if (ev.detail.value[0] == "All") {
        stnVal.value = [];
        stnVal.value = ["All"];
      } else {
        var index = stnVal.value.indexOf("All");
        if (index !== -1) {
          stnVal.value.splice(index, 1);
          stnVal.value = [];
          await ev.detail.value.forEach((element) => {
            stnVal.value.push(element);
          });
        }
      }
    }

    function filter() {
      form.stnInput = stnVal.value;
      form.value.fdate = moment(form.value.date[0]).format("YYYY-MM-DD");
      form.value.tdate = moment(form.value.date[1]).format("YYYY-MM-DD");
      Census.list(form.value)
        .then((response) => {
          total_reg_beds.value = response.data.totalRegularBed;
          //censusResults.value = [];
          //censusResults.value.push(response.data.data);
          //stnStore.stations(censusResults.value);
          stnStore.stations(response.data.data);
          /* response.data.data.forEach(element => {
          }); */
          /* console.log(response);
          console.log(total_reg_beds.value);
          console.log("stnStore.getStations 2")
          console.log(stnStore.getStations) */
          //censusResults.value.push(stnStore.getStations);
          /* console.log(censusResults.value) */
          console.log(stnStore.getStations)
        })
        .catch((err) => {
          console.log(err);
        })
        .finally();
    }

    return {
      redirect,
      datef,
      datet,
      getResults,
      selectStn,
      total_reg_beds,
      stn_list,
      stnVal,
      filter,
      form,
      censusResults,
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
