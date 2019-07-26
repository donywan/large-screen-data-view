<template>
  <el-container>
    <el-header>大屏数据可视化平台</el-header>
    <el-main>
      <el-row type="flex" class="left">
        <el-col class="elcol">
          <v-funnel />
          <!-- <v-map/> -->
          <!-- <v-echart  autoresize="true"/> -->
        </el-col>
        <el-col class="elcol">
          <!-- <v-funnel autoresize="true" /> -->
        </el-col>
      </el-row>
      <el-row type="flex" class="center">
        <el-col class="center-top"></el-col>
        <el-col class="center-bottom">
          <v-pie/>
        </el-col>
      </el-row>
      <el-row type="flex" class="right">
        <el-col class="elcol">
          <v-line/>
        </el-col>
        <el-col class="elcol"></el-col>
      </el-row>
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>
<script>
import Polar from "../components/Polar";
import Funnel from "../components/Funnel";
import Pie from '../components/Pie';
import Line from '../components/Line';
import Map from '../components/Map';
// import 'echarts/lib/chart/line'
// import 'echarts/lib/component/polar'

export default {
  data() {
    return {};
  },
  components: {
    "v-echart": Polar,
    "v-funnel": Funnel,
    'v-pie': Pie,
    'v-line': Line,
    'v-map': Map,
  }
};
</script>
<style>
#app,
body,
html {
  height: 100%;
  margin: 0;
  /* overflow: hidden; */
}
.el-container {
  /* position: relative; */
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #0a1631 url("../assets/img/bg.png") 0 0 / 100% 100% no-repeat;
}
/* .el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
} */
.el-header {
  color: white;
  line-height: 35px;
  font-size: 20px;
  height: 40px !important;
  background: url("../assets/img/header.png") 0 0 / 100% 100% no-repeat;
}
.el-footer {
  /* bottom: 0; */
  height: 20px !important;
  background: url("../assets/img/footer.png") 0 0 / 100% 100% no-repeat;
}

.el-main {
  flex: 1;
  display: flex;
}
.el-row {
  /* flex-direction: column; */
}
.left {
  flex: 2;
  /* width: 30%; */
}
.center {
  /* width: 40%; */
  flex: 3;
}
.right {
  /* width: 30%; */
  flex: 2;
}
.elcol {
  height: 50%;
}
.center-top {
  height: 60%;
}
.center-bottom {
  height: 40%;
}
</style>
