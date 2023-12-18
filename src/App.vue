<template>
  <IonApp>
    <IonSplitPane content-id="main-content">
      <Menu />
      <!-- https://stackoverflow.com/a/64682862/12542704 -->
      <ion-router-outlet
        id="main-content"
        :key="$route.fullPath"
      ></ion-router-outlet>
    </IonSplitPane>
  </IonApp>
</template>

<script setup>
/* import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/vue"; */
import Menu from "./components/Menu.vue";
import { onMounted, ref} from "vue";
import { Preferences } from "@capacitor/preferences";

const isLoggedIn = ref(false);

async function verifyIsLoggedIn() {
  const token = await Preferences.get({ key: "token" });
  isLoggedIn.value = !!token.value;
}

onMounted(async () => {
  await verifyIsLoggedIn();
  console.log("isLoggedIn.value: ",isLoggedIn.value)
});

</script>
