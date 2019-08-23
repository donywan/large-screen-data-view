<template>
  <div id="scatter" class="scatter"></div>
</template>
<script>
import Echarts from "echarts/lib/echarts";
import "echarts/lib/chart/scatter";
import "echarts/lib/component/legend";
import "echarts/lib/component/tooltip";
import Walden from '../theme/walden.project.json';
// import scatterOption from '../config/scatter';

export default {
  data() {
    return {
      
    };
  },
  props: ["option"],
  methods: {
    drawScatter() {
      Echarts.registerTheme('walden',Walden)
      this.scatter = Echarts.init(document.getElementById("scatter"),'walden');
      this.scatter.setOption(this.option);
      // console.log(scatterOption)
      window.addEventListener("resize", this.resizeHandle);
    },
    resizeHandle() {
      this.scatter.resize();
    }
  },
  mounted() {
    this.drawScatter();
    // console.log(this.option)
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeHandle);
  },
  watch: {
    option: {
      handler(val) {
        this.scatter.setOption(val, true);
      },
      deep: true
    }
  }
};
</script>
<style>
.scatter{
  width: 100%;
  height: 100%;
}
</style>
