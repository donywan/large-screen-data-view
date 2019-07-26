<template>
  <div id="map" class="map"></div>
</template>
<script>
import Echarts from "echarts/lib/echarts";
import "echarts/lib/chart/map";
import "echarts/map/js/province/anhui";
import "echarts/lib/component/legend";
import "echarts/lib/component/tooltip";
// import Option from "../config/map";
export default {
  data() {
    return {};
  },
  props: ["option"],
  mounted() {
    this.map = Echarts.init(document.getElementById("map"));
    this.map.setOption(this.option);
    window.addEventListener("resize", this.resizeHandle);
  },
  methods: {
    resizeHandle() {
      this.map.resize();
    }
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeHandle);
  },
  watch: {
    option: {
      handler(val) {
        this.map.setOption(val, true);
      },
      deep: true
    }
  }
};
</script>
<style>
.map {
  height: 100%;
  width: 100%;
}
</style>

