<template>
  <div id="bar" class="bar"></div>
</template>
<script>
import Echarts from "echarts/lib/echarts";
import "echarts/lib/chart/bar";
import "echarts/lib/component/legend";
import "echarts/lib/component/tooltip";
// import Bar from "../config/bar";
import Walden from '../theme/walden.project.json';

export default {
  data() {
    return {};
  },
  props: ["option"],
  methods: {
    drawBar() {
      Echarts.registerTheme('walden',Walden)
      this.bar = Echarts.init(document.getElementById("bar"),'walden');
      this.bar.setOption(this.option);
      window.addEventListener("resize", this.resizeHandle);
    },
    resizeHandle() {
      this.bar.resize();
    }
  },
  mounted() {
    this.drawBar();
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeHandle);
  },
  watch: {
    option: {
      handler(val) {
        this.bar.setOption(val, true);
      },
      deep: true
    }
  }
};
</script>
<style>
.bar {
  width: 100%;
  height: 100%;
}
</style>
