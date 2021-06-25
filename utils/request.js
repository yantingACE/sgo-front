import config from "./config.js"
export default function request(url,data={},method="GET"){
	return new Promise((resolve,reject) => {
		wx.request({
			url:config.host + url,
			data,
			method,
			success:(res) => {
				resolve(res.data)
			},
			fail:(err) => {
				reject(err)
			}
		})
	})
}