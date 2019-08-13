<template>
  <div>
    <div id="line" class="line"></div>
    <!-- <input type="button" @click="change"> -->
  </div>
</template>
<script>
import Echarts from "echarts/lib/echarts";
import "echarts/lib/chart/line";
import "echarts/lib/component/legend";
import "echarts/lib/component/tooltip";
// import Line from "../config/line";
import Walden from '../theme/walden.project.json';
import Macarons from '../theme/macarons.project.json';

export default {
  data() {
    return {
      //  lineOption: Option
    };
  },
  props: ["option"], // 父组件传递给子组件数据
  methods: {
    drawLine() {
      // 注册主题
      Echarts.registerTheme('macarons',Macarons)
      Echarts.registerTheme('walden', Walden)
      // 初始化图表
      this.line = Echarts.init(document.getElementById("line"),'macarons');
      this.line.setOption(this.option);
      // 监听窗体变化
      window.addEventListener("resize", this.resizeHandle);
    },
    resizeHandle() {
      // 自适应浏览器窗体变化
      this.line.resize();
    },
    change() {
      // Line.series = [];
      // this.line.setOption(Line, true);
    }
  },
  mounted() {
    // 加载图表
    this.drawLine();
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeHandle);
  },
  watch: {
    // 监控option对象变化进行更新图表
    option: {
      handler(val) {
        // 这里有个坑，echart默认合并，请求数据更新option图表看不到变化，加个true为不合并数据
        this.line.setOption(val, true);
      },
      deep: true // 深度监控对象中属性变化
      // immediate: true,
    }
  }
};
</script>
<style>
.line {
  width: 100%;
  height: 100%;
}
</style>

