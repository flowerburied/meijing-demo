import axios from '../../utils/request.js'
let field = {
    // 场地列表
    getPlaceList(data) {
        return axios({
            url: '/H5/getPlaceList',
            method: 'post',
            data: data
        })
    },
    // 获取openid
    GetOpenid(data) {
        return axios({
            url: '/H5/GetOpenid',
            method: 'post',
            data: data
        })
    },
}

export default field