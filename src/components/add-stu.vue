<template>
  <div class="add-stu">
    <form action="#" id="add-onestu">
      <div class="info">
        <div>
          <label for="name">姓名</label>
          <input name="name" v-model="addData.name" type="text">
        </div>
        <div>
          <span>性别</span>
          <input name="sex" type="radio" v-model="addData.sex" value="0" checked>
          <label for>男</label>
          <input name="sex" type="radio" v-model="addData.sex" value="1">
          <label for>女</label>
        </div>
        <div>
          <label for="sNo">学号</label>
          <input name="sNo" v-model="addData.sNo" type="text">
        </div>
        <div>
          <label for="email">邮箱</label>
          <input name="email" v-model="addData.email" type="text">
        </div>
        <div>
          <label for="birth">出生年月</label>
          <input name="birth" v-model="addData.birth"  type="text">
        </div>
        <div>
          <label for="phone">手机号</label>
          <input name="phone" v-model="addData.phone" type="text">
        </div>
        <div>
          <label for="address">住址</label>
          <input name="address" v-model="addData.address" type="text">
        </div>
        <div>
          <label for></label>
          <button id="add-info" @click.prevent="addStu({data:addData})" type="submit">提交</button>
          <button type="reset">重置</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  data(){
    return {
      addData:{}
    }
  },
      methods:{
        ...mapMutations(['addStu']),
    }
};
</script>

<style scoped>

</style>