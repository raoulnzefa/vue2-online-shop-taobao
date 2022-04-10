import axios from "axios"
import { getLocalToken } from "@/utils/tokenOperate"

const request = axios.create({
    baseURL: 'http://localhost:3000/'
})

request.defaults.timeout = 5000

// 添加请求拦截器
request.interceptors.request.use(
    config => {
        config.headers.Authorization = getLocalToken()
        return config
    }
)

export default request
