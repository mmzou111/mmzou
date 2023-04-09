import axios from 'axios'
import config from '../config'

// 是开发环境还是生产环境，进行判断
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

class HttpRequest {
	constructor(baseUrl) {
		this.baseUrl = baseUrl
	}
	// 定义axios相关配置
	getInsideConfig() {
		const config = {
			baseUrl: this.baseUrl,
			header: {}
		}
		return config
	}
	interceptors(instance) {
		// Add a request interceptor 请求拦截器
		instance.interceptors.request.use(function(config) {
			// Do something before request is sent
			return config;
		}, function(error) {
			// Do something with request error
			return Promise.reject(error);
		});

		// Add a response interceptor 响应拦截器
		instance.interceptors.response.use(function(response) {
			console.log(response,'response');
			// Do something with response data
			return response;
		}, function(error) {
			// console.log(error,'error');
			// Do something with response error
			return Promise.reject(error);
		});
	}
	request(options){
		const instance = axios.create()
		options = {...this.getInsideConfig(),...options}
		this.interceptors(instance)
		return instance(options)
	}
}

export default new HttpRequest(baseUrl)
