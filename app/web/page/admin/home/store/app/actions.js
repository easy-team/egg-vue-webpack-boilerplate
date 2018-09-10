'use strict';

import * as Type from './mutation-type';
import Vue from 'vue';
import Vuex from 'vuex';
import request from 'framework/network/request';

Vue.use(Vuex);

const actions = {

  SET_ARTICLE_LIST: (store, json) => {
    return request.post('/admin/api/article/list', json, store).then(response => {
      store.commit(Type.SET_ARTICLE_LIST, response.data);
    });
  },

  SET_ARTICLE_DETAIL: ({ commit, dispatch, state }, { id }) => {
    return request.get(`${state.origin}/admin/api/article/${id}`)
      .then(response => {
        commit(Type.SET_ARTICLE_DETAIL, response.data);
      });
  },

  SET_SAVE_ARTICLE: ({ commit, dispatch, state }, data) => {
    return request.post(`${state.origin}/admin/api/article/add`, data, {
      // headers: {
      //   'x-csrf-token': state.csrf,
      // }
    }).then(response => {
      commit(Type.SET_ARTICLE_LIST, data);
    });
  },

};

export default actions;