import api from "@/api";
import { Preferences } from "@capacitor/preferences";
import { defineStore } from "pinia";
import UserTypes from "../enums/UserTypes";
import { makeString } from "../utils";

export const useLoginStore = defineStore("login", {
  id: 'auth',
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    user: JSON.parse(localStorage.getItem('user')),
    returnUrl: null
  }),
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
    async login(userCredentials) {
      console.log('234 response')
      return api
        .post("auth/login", userCredentials)
        .then(async (response) => {
          console.log('response')
          console.log(response.data.access_token)
          await this.setToken(response.data.access_token);
          await this.setUserData({
            id: 1,
            typeUser: UserTypes.ADMINISTRATOR,
            userName: "Admin",
          });
          this.user = response;
          localStorage.setItem('user', JSON.stringify(response));

          return {
            data: {
              userType: UserTypes.ADMINISTRATOR,
            },
          };
        })
        .catch((err) => {
          console.log('err response')
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
