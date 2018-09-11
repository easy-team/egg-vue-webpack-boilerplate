'use strict';
import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

export default function createStore() {
  const state = {
    articleTotal: 0,
    articleList: [],
    article: {}
  };
  return new Vuex.Store({
    state,
    actions,
    getters,
    mutations
  });
}