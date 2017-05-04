import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  statuses: [{id: 1, label: 'Open'}, {id: 2, label: 'Closed'}],
  customerList: [
    {id: 1, name: 'CS Inc.', contact: {name: 'Chris Schmitz', email: 'schmitz.chris@gmail.com'}}
  ],
  inventory: [
    {id: 1, description: 'Widget', price: 12.95}
  ]
}

const getters = {}

const actions = {}

const mutations = {}

const store = new Vuex.Store({state, getters, actions, mutations})

export default store