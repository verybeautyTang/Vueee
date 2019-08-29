//直接对象管理
import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS} from 'motation_type'
export default {
  [RECEIVE_ADDRESS](state,address) {
    state.address=address
  },
  [RECEIVE_CATEGORYS](state, categorys) {
    state.categorys = categorys
  } ,
  [RECEIVE_SHOPS](state, shops) {
    state.shops = shops
  }

}