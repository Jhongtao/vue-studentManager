<template>
<div id="app">
  <stu-head></stu-head>
  <stu-container></stu-container>
</div>
</template>

<script>
import stuHead from './views/head.vue'
import stuContainer from './views/container.vue'
export default {
   components:{
        stuHead,
        stuContainer
   }
}

</script>

<style>
body,html{
    width:100%;
    height:100%;
    padding:0;
    margin:0;
}
#app{
    width:100%;
    height:100%;
    box-sizing: border-box;
}
</style>