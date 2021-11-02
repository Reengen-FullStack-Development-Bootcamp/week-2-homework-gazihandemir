import Vue from "vue";
import VueRouter from "vue-router";
import Hotels from '@/components/Hotels/Hotels'
import Details from '@/components/Hotels/Details'
import Reservation from '@/components/Hotels/Reservation'

Vue.use(VueRouter);
export const routes = [
  { path: '/', component: Hotels },
  { path: '/details/:id', component: Details, props: true, name: 'details/:id' },
  { path: '/details/:id/reservation', component: Reservation, name: '/details/:id/reservation' },
]