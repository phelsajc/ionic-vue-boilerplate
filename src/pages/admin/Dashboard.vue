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
            <ion-item v-for="e in censusResults[0]" @click="redirect(e)">
              <ion-label>{{ e.station }}</ion-label>
            </ion-item>
          </ion-list>
        </ion-scroll>
      </ion-card-content>
    </ion-card>
  </base-layout>
</template>

<script>
import { ref, onMounted, onIonViewDidEnter } from "vue";
import moment from "moment";
import Stns from "@/api/getStations";
import Census from "@/api/getCensus";

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
    const censusResults = ref([]);
    
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
      stn_list.value.push("ALL");
      Stns.list()
        .then((response) => {
          /* timeline_header.value = response.data
        dismissLoading() */
          console.log(response);
          response.data.data.forEach((element) => {
            stn_list.value.push(element.station);
          });
          /* alert(stn_list) */
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
    });

    const router = useRouter();
    const b = [
    {
      station: "Nursery",
      user: 3,
      type: "support",
    },
    {
      station: "Station 11",
      user: 3,
      type: "support",
    },
    {
      station: "Pedia Ward",
      user: 3,
      type: "support",
    },
    {
      station: "Station 1",
      user: 3,
      type: "support",
    },
    {
      station: "Station 3",
      user: 3,
      type: "support",
    },
  ];

    function redirect(e) {
      router.push({
        name: "stations",
        params: {
          propKey: JSON.stringify(e),
        },
      });
    }

   async function selectStn(ev) {
    //console.log("Current value:", JSON.stringify(ev.detail.value));
    stnVal.value = [];
     await ev.detail.value.forEach((element) => {
       console.log(element);
            stnVal.value.push(element);
      });
    }

    function filter() {
      form.stnInput = stnVal.value
     // console.log(form.value.date[0])
      form.value.fdate = moment(form.value.date[0]).format("YYYY-MM-DD");
      form.value.tdate = moment(form.value.date[1]).format("YYYY-MM-DD");
      //console.log(form.value)

      
      Census.list(form.value)
        .then((response) => {
          //  console.log(response)
          total_reg_beds.value = response.data.totalRegularBed
          censusResults.value.push(response.data.data)
          /* response.data.data.forEach(element => {
            console.log(element)
          }); */
           console.log(response)
           console.log(total_reg_beds.value)
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
