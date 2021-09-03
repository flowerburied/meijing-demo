import axios from '../../utils/request.js'
import qs from 'qs'
let field = {
    // 场地列表
    getPlaceList(data) {
        return axios({
            url: '/H5/getPlaceList',
            method: 'post',
            data: qs.stringify(data)
        })
    },
    // 获取openid
    GetOpenid(data) {
        return axios({
            url: '/H5/GetOpenid',
            method: 'post',
            data: qs.stringify(data)
        })
    },
}

export default field