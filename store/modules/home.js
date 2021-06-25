import request from "../../utils/request.js"
const state = {
	homeData:{}
}
const mutations = {
	SET_HOMEDATA(state,homeData){
		state.homeData = homeData
	}
}
const actions = {
	async getHomeData({commit}){
		const result = await request('/getHomeData')
		commit('SET_HOMEDATA',result)
	}
}
const getters = {
	navList(state){
		return (state.homeData.kingKongModule || {}).kingKongList || []
	},
	iconList(state){
		return state.homeData.policyDescList || []
	},
	floorList(state){
		return state.homeData.categoryModule || []
	}
}
export default {
	state,
	mutations,
	actions,
	getters
}