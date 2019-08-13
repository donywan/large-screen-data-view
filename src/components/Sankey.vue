<template>
  <div>
    <div id="sankey" class="sankey"></div>
  </div>
</template>
<script>
import Echarts from "echarts/lib/echarts";
// import Option from "../config/pie";
import "echarts/lib/chart/sankey";
import "echarts/lib/component/legend";
import "echarts/lib/component/tooltip";
import Macarons from '../theme/macarons.project.json';

export default {
  data() {
    return {
      // option: Option
    };
  },
  props: ["option"],
  methods: {
    drawSankey() {
        Echarts.registerTheme('macarons',Macarons)
      this.sankey= Echarts.init(document.getElementById("sankey"),'macarons');
      this.sankey.setOption(this.option);
      window.addEventListener("resize", this.resizeHandle);
    },
    resizeHandle() {
      this.sankey.resize();
    }
  },
  mounted() {
    this.drawSankey();
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeHandle);
  },
  watch: {
    option: {
      handler(val) {
        this.sankey.setOption(val, true);
      },
      deep: true
    }
  }
};
</script>
<style>
.sankey{
  width: 100%;
  height: 100%;
}
</style>

