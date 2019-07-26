<template>
  <div>
    <div id="pie" class="pie"></div>
  </div>
</template>
<script>
import Echarts from "echarts/lib/echarts";
// import Option from "../config/pie";
import "echarts/lib/chart/pie";
import "echarts/lib/component/legend";
import "echarts/lib/component/tooltip";

export default {
  data() {
    return {
      // option: Option
    };
  },
  props: ["option"],
  methods: {
    drawPie() {
      this.pie = Echarts.init(document.getElementById("pie"));
      this.pie.setOption(this.option);
      window.addEventListener("resize", this.resizeHandle);
    },
    resizeHandle() {
      this.pie.resize();
    }
  },
  mounted() {
    this.drawPie();
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeHandle);
  },
  watch: {
    option: {
      handler(val) {
        this.pie.setOption(val, true);
      },
      deep: true
    }
  }
};
</script>
<style>
.pie {
  width: 100%;
  height: 100%;
}
</style>
