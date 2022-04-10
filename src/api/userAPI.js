import request from "@/utils/request"

const loginAPI = (userName, hashPassword) => {
    return request.post('/api/login', {
        userName,
        hashPassword
    })
}

const registerAPI = (userName, hashPassword) => {
    return request.post('/api/register', {
            userName,
            hashPassword,
    })
}

export {loginAPI, registerAPI}
