<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- 标题信息 -->
    
      <div class="header">
      <h2 class="header-title">大屏数据可视化平台</h2>
    </div>
    <!-- 图标容器 -->
    <div class="container">
      <!-- <div class="flex-row">
        <div class="flex-cell"></div>
        <div class="flex-cell"></div>
        <div class="flex-cell"></div>
      </div>
      <div>
        <div class="flex-cell"></div>
        <div class="flex-cell"></div>
        <div class="flex-cell"></div>
        <div class="flex-cell"></div>
      </div> -->
    </div>
    <div class="footer">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
<style lang="css">
/* .flex-row{
display: flex;
flex: 1;
height: 400px;
}
.flex-cell{
display: flex;
flex: 1;
}
.flex-cell-center{

} */
.container {
  /* position: fixed; */
  /* margin: 48px 0px 24px 0px; */
  /* display: flex;
  flex: 1;*/
  /* height: 100%; */
}
.header-title {
  color: white;
  line-height: 2px;
  font-weight: lighter;
}
.home {
  background: #0a1631 url("../assets/img/bg.png") 0 0 / 100% 100% no-repeat;
  /* position: absolute; */
  /* overflow: hidden; */
  /* width: 100%;*/
  height: 100%;
  /* min-width: 1200px;
  min-height: 600px; */
  overflow: hidden;
}
.header {
  background: url("../assets/img/header.png") 0 0 / 100% 100% no-repeat;
  height: 48px;
  width: 100%;
  /* position: absolute; */
  overflow: hidden;
}
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 24px;
  width: 100%;
  background: url("../assets/img/footer.png") 0 0 / 100% 100% no-repeat;
}
</style>