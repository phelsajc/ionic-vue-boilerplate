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
      /**
       * This is a fake login, you can remove this if
       */
      /* 
            if (
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
        .then(async (response) => {
          /*  await this.setToken(response.token);
           await this.setUserData(response.data); */
          // this.setToken(response.token);
          //  this.setUserData(response.data);

          await this.setToken(makeString(20));
          await this.setUserData({
            id: 1,
            typeUser: UserTypes.ADMINISTRATOR,
            userName: "Admin",
          });
          /* await this.setUserData({
            id: 2,
            typeUser: UserTypes.CLIENT,
            userName: "Client",
          }); */
          // update pinia state
          this.user = response;
          localStorage.setItem('user', JSON.stringify(response));

          return {
            data: {
              userType: UserTypes.ADMINISTRATOR,
            },
          };
          /* return {
                      data: {
                        userType: UserTypes.CLIENT,
                      },
                    }; */
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
