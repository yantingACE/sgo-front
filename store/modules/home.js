import request from "../../utils/request.js"
const state = {
	homeData:{},
	indexCateList:[],
	
}
const mutations = {
	SET_HOMEDATA(state,homeData){
		state.homeData = homeData
	},
	SET_INDEXCATELIST(state,indexCateList){
		state.indexCateList = indexCateList
	}
}
const actions = {
	async getHomeData({commit}){
		const result = await request('/getIndexData')
		commit('SET_HOMEDATA',result)
	},
	async getIndexCateList({commit}){
		const result = await request('/getIndexCateList')
		console.log(result)
		commit('SET_INDEXCATELIST',result)
	},
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