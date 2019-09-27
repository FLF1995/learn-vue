import axios from 'axios'
import router from "../router.js"
import { Message } from 'element-ui'

const request = axios.create({
	baseURL:'http://61.174.54.120:9000',
	withCredentials: false,
	timeout:5000
})

request.interceptors.request.use(function (config) {
	let token = localStorage.getItem('token')
	config.headers['Authorization'] = token
	// config.headers['Access-Control-Allow-Origin'] = '*'
	
	// config.headers['Content-Type'] = 'application/json;charset=UTF-8' 

    return config;
}, function (error) {
	// Do something with request error
	return Promise.reject(error);
});

export default request;