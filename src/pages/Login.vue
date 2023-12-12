<template>
  <base-layout
  >
    <ion-row>
      <ion-col size="12">
        <Image style="height: 200px" src="assets/icon/logo.png" />
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col size="12">
        <ion-item class="form-field">
          <ion-icon slot="start" :icon="Icon.mail"></ion-icon>
          <ion-input
            v-model="fields.username"
            clear-input
            required
            label="E-mail"
            type="email"
            label-placement="floating"
            tabindex="1"
            inputmode="email"
            placeholder="admin"
            @input="errorMessages.username = ''"
          ></ion-input>
        </ion-item>
        <error-message :text="errorMessages.username" />
      </ion-col>
      <ion-col size="12">
        <ion-item class="form-field">
          <ion-icon slot="start" :icon="Icon.key"></ion-icon>
          <ion-input
            v-model="fields.password"
            required
            name="password"
            label="Password"
            tabindex="2"
            label-placement="floating"
            placeholder="admin"
            clear-input
            :type="showPassword ? 'text' : 'password'"
            @input="errorMessages.password = ''"
          ></ion-input>
          <ion-icon
            slot="end"
            :icon="showPassword ? Icon.eyeOff : Icon.eye"
            class="pointer"
            @click="showPassword = !showPassword"
          ></ion-icon>
        </ion-item>
        <error-message :text="errorMessages.password" />
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col size="12">
        <Button
          color="primary"
          text="Login NOw"
          :icon="Icon.enterOutline"
          :is-loading="loading"
          @click="loginUser()"
        />
      </ion-col>
    </ion-row>
    <!-- <ion-row class="ion-text-center">
      <ion-col size="12">
        <ion-text color="tertiary" class="pointer" @click="redirectToRecoveryPassword()">
          Forgot password?
        </ion-text>
      </ion-col>
    </ion-row> -->
  </base-layout>
</template>

<script setup>
import { enterOutline, mail, key, logIn, eye, eyeOff } from "ionicons/icons";

import {
  IonInput,
  IonRow,
  IonCol,
  IonItem,
  IonIcon,
  IonText,
} from "@ionic/vue";

import { useRouter } from "vue-router";
import { ref,onMounted  } from "vue";
//


import Button from "../components/Button.vue";
import Image from "../components/Image.vue";
import login from "../composition/login";
import emitter from "../plugins/emitter";

const { userLogin } = login();
const router = useRouter();

const showPassword = ref(false);

const Icon = ref({
  mail,
  key,
  eye,
  eyeOff,
  logIn,
  enterOutline,
});

const fields = ref({
  username: "admin",
  password: "admin",
});

const errorMessages = ref({
  username: "",
  password: "",
});

onMounted(() => {
  
})


const loading = ref(false);

  async function loginUser() {
  if (!validateFields()) return;

  loading.value = true;

  try {
    
    await userLogin(fields.value)
    .then(() => {
      emitter.emit("logged");
    })/* .catch((err) => {
        console.log("Something was wrong on login", "danger", "top");
        alert("Something was wrong on login", "danger", "top");
        return Promise.reject(err);
        }) */.finally(() => {
      loading.value = false;
        })
  } catch (error) {
    alert(0)
  }

      /* .catch((ex) => {
        alert("Something was wrong on login", "danger", "top");
      }); */
    /* .finally(() => {
      loading.value = false;
    }); */
}
function validateFields() {
  let valid = true;

  if (!fields.value.username) {
    errorMessages.value.username = "Email invalid";
    valid = false;
  }

  if (!fields.value.password) {
    errorMessages.value.password = "Password invalid";
    valid = false;
  }

  return valid;
}

function redirectToRecoveryPassword() {
  router.push({ name: "recovery-password" });
}
</script>

<style scoped>
.form-field {
  display: flex;
  align-items: center;
}

.pointer {
  cursor: pointer;
}
</style>
./useEmitter