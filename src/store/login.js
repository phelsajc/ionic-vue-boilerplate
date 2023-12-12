import api from "@/api";
import { Preferences } from "@capacitor/preferences";
import { defineStore } from "pinia";
import UserTypes from "../enums/UserTypes";
import { makeString } from "../utils";

export const useLoginStore = defineStore("login", {
  actions: {
    async setToken(token) {
      await Preferences.set({
        key: "token",
        value: token,
      });
    },
    async setUserData(userData) {
      await Preferences.set({
        key: "user",
        value: JSON.stringify({
          userId: userData.id,
          userType: userData.typeUser,
          userName: userData.userName,
        }),
      });
    },
     login(userCredentials) {
      /**
       * This is a fake login, you can remove this if
       */
      /* if (
        userCredentials.email === "admin" &&
        userCredentials.password === "admin"
      ) {
        return await this.fakeLogin();
      }
 */
      return api
      //.post("/login", userCredentials)
      .post("api/auth/login", userCredentials)
      //.then(async (response) => {
        .then( (response) => {
         /*  await this.setToken(response.token);
          await this.setUserData(response.data); */
          // this.setToken(response.token);
         //  this.setUserData(response.data);

            this.setToken(makeString(20));
            this.setUserData({
             id: 1,
             typeUser: UserTypes.ADMINISTRATOR,
             userName: "Admin",
           });
     
           return {
             data: {
               userType: UserTypes.ADMINISTRATOR,
             },
           };//response.data;
        })
        //.catch((error) => error.response);
        /* .catch((err) => {
          console.log(commit)
          return Promise.reject(err)
        }) */
        .catch((err) => {
          return Promise.reject(err)
        })
    },
    /**
     * This is a fake login, you can remove this method
     */
    /* async fakeLogin() {
      await this.setToken(makeString(20));
      await this.setUserData({
        id: 1,
        typeUser: UserTypes.ADMINISTRATOR,
        userName: "Admin",
      });

      return {
        data: {
          userType: UserTypes.ADMINISTRATOR,
        },
      };
    }, */
  },
});
