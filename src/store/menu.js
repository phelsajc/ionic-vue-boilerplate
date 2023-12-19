import { defineStore } from 'pinia'
import {
  personAdd,
  power,
  enter,
  call,
  home,
  alertCircle,
  nuclear,
} from 'ionicons/icons';

import UserTypes from '../enums/UserTypes';

import HomeRoutesByUser from "../enums/HomeRoutesByUser";

export const useMenuStore = defineStore('menu', {
  state: () => ({
    /**
   * These items will be shown all the time, whether the user is logged in
   * or not
   */
  publicItems: [
    /* {
      title: "Contact 1",
      url: "/contact",
      icon: call,
    },
    {
      title: "Not found 1",
      url: "/any-router-that-dont-exists",
      icon: alertCircle,
    },
    {
      title: "Not authorized 1",
      url: "/not-authorized",
      icon: nuclear,
    },
    {
      title: "Home",
      url: "/home",
      icon: home,
    }, */
    /* {
      title: "Division",
      type: 2,
    },
    {
      title: "Dashboard",
      url: 'admin/dashboard' ,
      icon: home, 
    }, */
  ],
  /**
   * These items will only be shown when the user is not logged in
   */
  withoutAuth: [
    /* {
      title: "Home",
      url: "/home",
      icon: home,
    }, */
    {
      title: "Division",
      type: 2,
    },
    {
      title: "Login",
      url: "/login",
      icon: enter,
    },
    {
      title: "Register",
      url: "/register",
      icon: personAdd,
    },
    {
      title: "Division",
      type: 2,
    },
  ],
  /**
   * These items will only be shown when the user is logged in
   */
  needAuth: [
    {
      title: "Dashboard",
      url: 'admin/dashboard' ,
      icon: home, 
    },
    {
      title: "Division",
      type: 2,
    },
    {
      title: "Logout 1",
      url: "/logout",
      icon: power,
    }
  ],
  /**
   * These items will be shown according to the type of user
   */
  [UserTypes.CLIENT]: [
    {
      title: "Home",
      url: "/client/home",
      icon: home,
    },
    {
      title: "Division",
      type: 2,
    },
  ],
  [UserTypes.ADMINISTRATOR]: [
    {
      title: "Dashboard 2",
      url: "/admin/dashboard",
      icon: home,
    },
    {
      title: "Division",
      type: 2,
    },
  ],
  }),
  getters: {
    getPublic(state) {
      return state.publicItems;
    },
    getWithoutAuth(state) {
      return state.withoutAuth;
    },
    getNeedAuth(state) {
      return state.needAuth;
    },
    getMenuByUserType: (state) => (userType) => state[userType] || [],
  }
})