// import http from "../common/http"
const createMapPoint = (data) => {
	return http.post('lbs/store', data)
}
const getLBSMapPoint = (data) => {
	return http.get('lbs/list', data)
}
export default {
	createMapPoint,
	getLBSMapPoint
}