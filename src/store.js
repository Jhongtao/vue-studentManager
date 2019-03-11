import Vue from 'vue'
import Vuex from 'vuex'
import api from './js/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      tableList : [],
      pageNum:0
  },
  mutations: {
       initTable(state,{page,callback}){
         api.findByPage(page).then(res=>{
           if(res.data.status == 'success'){
            state.tableList = res.data.data.findByPage
            state.pageNum = Math.ceil(res.data.data.cont/10)
            callback?callback():''
           }else{
             alert(res.data.msg)
           }
         }).catch(err=>{
           alert(err)
         })
       },
       updateStu(state,{data}){
         api.updateStudent(data).then(res=>{
           alert(res.data.msg)
         }).catch(err => {
           alert(err)
         })
       },
       addStu(state,{data}){
         api.addStudent(data).then(res=>{
           alert(res.data.msg)
         }).catch(err=>{
           alert(err)
         })
       },
       delStu(state,{id}){
         api.delStu(id).then(res=>{
           alert(res.data.msg)
         }).catch(err=>{
           alert(err)
         })
       },
       searchStu(state,{val,page,callback}){
        if(val === ''){
         this.commit('initTable',{page:1,callback})
          return
        }
         api.serStuList(val,page).then(res=>{
           if(res.data.status == 'success'){
             state.tableList = res.data.data.searchList
             state.pageNum = Math.ceil(res.data.data.cont/10)
             callback?callback():''
           }else{
            alert(res.data.msg)
           }
         }).catch(err=>{
           alert(err)
         })     
       }
  },
  actions: {

  }
})
