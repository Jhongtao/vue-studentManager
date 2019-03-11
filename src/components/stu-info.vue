<template>
  <div class="stu-info">
    <div class="stu-search">
      <label for="sec">查找学生信息:</label>
      <input
        type="text"
        name="sec"
        id="search-stu"
        v-model.trim="serVal"
        @keyup.enter="searchStu({val:serVal,page:pageIndex,callback:bindTurnPage})"
        placeholder="请输入关键字"
      >
      <button id="ser-stuinfo" @click="searchStu({val:serVal,page:pageIndex,callback:bindTurnPag})">搜索</button>
    </div>
    <table border="0">
      <thead>
        <tr>
          <th>学号</th>
          <th>姓名</th>
          <th>性别</th>
          <th>邮箱</th>
          <th>年龄</th>
          <th>手机号码</th>
          <th>住址</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody id="stu-body">
        <tr v-for="(item,index) in tableList" :key="index">
          <td>{{item.sNo}}</td>
          <td>{{item.name}}</td>
          <td>{{item.sex == '0'?'男':'女'}}</td>
          <td>{{item.email}}</td>
          <td>{{item.birth}}</td>
          <td>{{item.phone}}</td>
          <td>{{item.address}}</td>
          <td>
            <button @click="editStu(index)" class="stu-table-edit">编辑</button>
            <button @click="delStu({id : item.sNo});initTable()" class="stu-table-delete">删除</button>
          </td>
          <!-- {{pageNum}} -->
        </tr>
      </tbody>
    </table>
    <div id="turn-page"></div>

    <div class="modify-info" @click="isShow?isShow=false:isShow=true" v-show="isShow" id="modify">
      <form action="#" id="modify-stu">
        <div class="info" @click.stop>
          <div>
            <label for="name">姓名</label>
            <input name="name" v-model="editData.name" type="text">
          </div>
          <div>
            <span>性别</span>
            <input name="sex" type="radio" v-model="editData.sex" value="0" checked>
            <label for>男</label>
            <input name="sex" type="radio" v-model="editData.sex" value="1">
            <label for>女</label>
          </div>
          <div>
            <label for="sNo">学号</label>
            <input name="sNo" v-model="editData.sNo" type="text">
          </div>
          <div>
            <label for="email">邮箱</label>
            <input name="email" v-model="editData.email" type="text">
          </div>
          <div>
            <label for="birth">出生年月</label>
            <input name="birth" v-model="editData.birth" type="text">
          </div>
          <div>
            <label for="phone">手机号</label>
            <input name="phone" v-model="editData.phone" type="text">
          </div>
          <div>
            <label for="address">住址</label>
            <input name="address" v-model="editData.address" type="text">
          </div>
          <div>
            <label for></label>
            <button id="edit-sub" @click.prevent="submitStu" type="submit">提交</button>
            <button type="reset">重置</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { turn } from "../js/turnPage.js";
import _ from "jquery";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      isShow: false,
      editData: {},
      serVal: "",
      pageIndex:1
    };
  },
  created() {
    this.initTable({page:1,
    callback:this.bindTurnPage})

  },
  mounted() {

  },
  updated() {

    //  console.log(this.pageNum)
 
  },
  methods: {
    ...mapMutations(["initTable", "updateStu", "delStu", "searchStu"]),
    editStu(index) {
      this.isShow ? (this.isShow = false) : (this.isShow = true);
      this.editData = this.tableList[index];
    },
    submitStu() {
      this.updateStu({ data: this.editData });
    },
    bindTurnPage(){
     turn(_)
    _("#turn-page").turnPage({
      pageLen : this.pageNum,
      direction : 'right',
      curPage : this.pageIndex,
      callback:(index)=>{
        console.log(this)
         this.pageIndex = index
      }
    })
    }
  },
  watch:{
     pageIndex(newIndex){
         if(this.serVal !== ''){
           this.searchStu({val : this.serVal, page : newIndex})
           return
         }else{
          this.initTable({page : newIndex})
         }

     }
  },
  computed: {
    ...mapState(["tableList","pageNum"])
  }
};
</script>

<style scoped>
</style>