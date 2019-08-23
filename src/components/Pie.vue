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
import Walden from "../theme/walden.project.json";

export default {
  data() {
    return {
      // option: Option
    };
  },
  props: {option:{}},
  methods: {
    setPieOption() {
    },
    drawPie() {
      Echarts.registerTheme("walden", Walden);
      this.pie = Echarts.init(document.getElementById("pie"), "walden");
      this.pie.setOption(this.option, true);
      // console.log(this.pie);
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
        // let data = JSON.parse(JSON.stringify(val))
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
