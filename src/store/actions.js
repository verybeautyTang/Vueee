import {reqAddress,reqFoodCategorys,reqShops} from '../api';
import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS} from 'motation_type';

export default {
  // 异步获取地址
  async getAddress({
    commit,
    state
  }) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    commit(RECEIVE_ADDRESS, {
      address: result.data
    })
  },
  // 异步获取分类列表
  async getCategorys({
    commit
  }) {
    const result = await reqFoodCategorys()
    commit(RECEIVE_CATEGORYS, {
      categorys: result.data
    })
  },
  // 异步获取商家列表
  async getShops({
    commit,
    state
  }) {
    const {
      latitude,
      longitude
    } = state
    const result = await reqShops({
      latitude,
      longitude
    })
    commit(RECEIVE_SHOPS, {
      shops: result.data
    })
  }
}
