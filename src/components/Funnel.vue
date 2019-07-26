<template>
  <div>
    <!-- <vue-chart :options="option" autoresize ref="charts" /> -->
    <div id="funnel" class="funnel" ref="funnel"></div>
  </div>
</template>
<script>
import Echarts from "echarts/lib/echarts";
import "echarts/lib/chart/funnel";
import "echarts/lib/component/legend";
import "echarts/lib/component/tooltip";
// import Option from "../config/funnel";

export default {
  data() {
    return {
      // option: {}
    };
  },
  props: ["option"],
  methods: {
    // 创建流程图
    drawFunnel() {
      this.funnel = Echarts.init(document.getElementById("funnel"));
      this.funnel.setOption(this.option);
      window.addEventListener("resize", this.resizeHandel);
    },
    resizeHandel() {
      this.funnel.resize();
    }
  },
  mounted() {
    this.drawFunnel();
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeHandel);
  },
  watch: {
    option: {
      handler(val) {
        this.funnel.setOption(val, true);
      },
      deep: true
    }
  }
};
</script>
<style>
.echarts {
  height: 400px !important;
  width: 100% !important;
}
.funnel {
  height: 100%;
  width: 100%;
}
</style>
