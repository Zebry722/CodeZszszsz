import { removeToken, setToken, getToken, setTimeStamp } from '@/utils/auth'
import { login, getUserInfo, getUserDetailById } from '@/api/user'
const state = {
  token: getToken(),  // 设置 token 为共享状态  初始化 vuex 从缓存中读取
  userInfo: {},
}
const mutations = {
  setToken(state, token) {
    state.token = token   // 将数据设置给 vuex
    // 同步给缓存
    setToken(token)
  },
  removeToken(state) {
    // 将 vuex 滞空
    state.token = undefined
    removeToken()   // 缓存滞空
  },
  setUserInfo(state, res) {
    state.userInfo = res
    // state.userInfo = {...res}
  },
  removeUser(state) {
    state.userInfo = {}
  }
}
const actions = {
  async login(context, data) {
    const res = await login(data)
    context.commit('setToken', res)
    // 拿到 token
    setTimeStamp()   // 设置当前时间戳
  },
  async getUserInfo(context) {
    const res = await getUserInfo()
    const baseInfo = await getUserDetailById(res.userId)
    context.commit('setUserInfo', { ...res, ...baseInfo })
    return res  // 做权限的时候会访问到
  },
  // 登出操作
  logout(context) {
    // 删除 token
    context.commit('removeToken')
    // 删除用户资料
    context.commit('removeUser')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}