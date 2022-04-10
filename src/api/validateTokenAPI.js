import request from "@/utils/request"
import { getLocalToken } from "@/utils/tokenOperate"

export const validateAPI = () => {
    return request.get('/api/validate-token', {
        params: {
            token: getLocalToken()
        }
    })
}
