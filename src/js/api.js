const axios = require('axios')
const url = require('./Urls.js')
const api = {}
const AppKey = {
   appkey:'jianghongtao_1550904069645'
}
api.findByPage = function (page = 1,size = 10){
    return axios.get(url.BaseUrl + url.findByPage, {
        params:{
            page,
            size,
            ...AppKey
        }
    })
}
api.updateStudent = function (data){
   return axios.get(url.BaseUrl + url.updateStudent,{
       params : data

   })
}
api.addStudent = function (data){
    return axios.get(url.BaseUrl + url.addStudent, {
        params:{
            ...AppKey,
            ...data
        }
    })
}
api.delStu = function(id){
    return axios.get(url.BaseUrl + url.delStudent, {
        params : {
            ...AppKey,
            sNo : id
        }
    })
}
api.serStuList = function(val, page = 1, size = 10, sex = -1){
    return axios.get(url.BaseUrl + url.searchPage, {
        params : {
            ...AppKey,
            sex,
            search:val,
            page,
            size
        }
    })
}


export default api