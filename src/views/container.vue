<template>
  <div class="container">
    <div class="control">
      <dl>
        <dt>学生管理</dt>
        <router-link :to="{name:'home'}" tag="dd">学生列表</router-link>
        <router-link to="/add" tag="dd">新增学术</router-link>
        <!-- <dd id="stu-info">学生列表</dd>
        <dd id="add-stu">新增学术</dd> -->
      </dl>
    </div>
    <transition 
     name="fade"
    >
<keep-alive>
     <router-view></router-view>   
</keep-alive>

    </transition>
    <!-- <stu-info></stu-info>
    <stu-modify></stu-modify>
    <stu-add></stu-add> -->
  </div>
</template>

<script>
export default {
   data(){
       return {

       }
   },
};
</script>
<style>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.container{
    position: absolute;
    top:0;
    z-index: 0;
    width: 100%;
    height: 100%;
    padding-top:70px;
    background-color:#fff;
    box-sizing: border-box;
    display: flex;
}
.container .control{
    flex: 1;
    background-color:#4d5e70;
}
.stu-info button,.stu-info input:not(.modify-info input){
    border:none;
    background-color:transparent;
    outline: none;
}
.container .stu-info,.add-stu{
   flex:6;
   height: 100%;
}
.control dl dt{
    color:#b3bcc5;
    font-size: 14px;
    font-weight: bolder;
    padding-left:8px;
    padding: 5px;
    cursor:pointer;
}
.control dl dd{
    color:#b3bcc5;
    font-size: 14px;
    padding:15px 20px;
    margin-left:0;
    cursor:pointer;
}
.control dl dd:hover:not(.active){
    background-color: #eee;
    color:#000;
    opacity: .3;
}
.control dl dd.active{
    background-color: #eee;
    color:#000;
    opacity: .8;
}
.stu-search{
    box-sizing: border-box;
    height: 60px;
    line-height: 60px;
    font-size: 16px;
    padding: 0px 20px;
    background-color: #eee;
}
.stu-search,table{
    width: 100%;
}
.stu-search label{
    font-size: 16px;
    color: #646987;
    font-weight: 800
}
.stu-info input:not(.modify-info input){
    font-size: 16px;
    width: 200px;
    height: 30px;
    background-color:#fff;
}
.stu-info button:not(.modify-info button){
    height: 28px;
    line-height: 28px;
    padding: 0 10px;
    display: inline-block;
    background-color: #354457;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
}
table{
    background-color:rgb(240, 241, 243);
    font-size:14px;

}
table td{
    background-color: #fff;
    padding:6px;
    margin:0;
}
.stu-info table td button{
    padding: 0 10px;
    font-size: 13px;
    border: none;
    color: #fff;
    cursor: pointer;
}
table button:nth-of-type(1):hover{
    background-color: #3a793a
}
table button:nth-of-type(1){
    background-color: #5cb85c
}
table button:nth-of-type(2){
    background-color: #d9534f
}
table button:nth-of-type:hover{
    background-color: #a13e3b
}
table th,td{
    font-size: 14px;
    text-align: center;
}
 table th{
    padding:10px 0;
    color:#646987;
    background-color:#e3e7eb;
}
.add-stu,.modify-info{
    /* display: none; */
    background-color:#eee;
    position: relative;
}
.add-stu .info,.modify-info .info{
  display: flex;
  flex-direction: column; 
  align-items: flex-end;
}
.add-stu .info{
    position: absolute;
    top:50px;
    left:50%;
    transform: translateX(-70%);
}
.info button{
    padding: 6px 25px;
}
.info button:last-of-type{
    margin-right: 5px;
}
/* .info div{
    width: 350px;
} */
.info div:nth-of-type(2) input{
    margin:0 26px;
}
.add-stu input,.modify-info input{
   margin: 5px;
   /* width: 150px; */
}

.modify-info{
    position: fixed;
    z-index: 10;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background-color: rgb(36, 35, 35,.3);
}
.modify-info .info div{
    width:250px;
    text-align: right;
}
.modify-info .info{
    position: absolute;
    z-index: 20;
    left:50%;
    top:50%;
    padding:80px;
    transform: translateX(-60%) translateY(-60%);
    background-color:#fff;
}
.modify-info .info label{
    margin-right: 5px;
}
</style>

