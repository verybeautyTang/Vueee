//Vuex的核心管理模块
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import motation from 'motation';
import actions from 'actions';
Vue.use(Vuex)
export default new Vuex.Store({
  state,
  getters,
  motation,
  actions
})
