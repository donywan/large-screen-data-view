<template>
  <div class="bg01">
    <div class="header">
      <h3>大屏数据可视化平台</h3>
      <!-- <input type="button" @click="change"/> -->
    </div>

    <div class="wrapper">
      <div class="container-fluid">
        <div class="row fill-h">
          <div class="col-lg-4 fill-h">
            <div class="xpanel-wrapper xpanel-wrapper-5">
              <div class="xpanel">
                <v-line class="fill-h" :option="lineOption"/>
              </div>
            </div>
            <div class="xpanel-wrapper xpanel-wrapper-5">
              <div class="xpanel">
                <v-bar class="fill-h" :option="barOption"/>
              </div>
            </div>
          </div>
          <div class="col-lg-4 fill-h">
            <div class="xpanel-wrapper xpanel-wrapper-7">
              <div class="xpanel">
                  <!-- <v-map class="fill-h" :option="mapOption"/> -->
                  <v-sankey class="fill-h" :option="sankeyOption"/>
              </div>
            </div>
            <div class="xpanel-wrapper xpanel-wrapper-3">
              <div class="xpanel">
                <div></div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 fill-h">
            <div class="xpanel-wrapper xpanel-wrapper-6">
              <div class="xpanel">
                <v-funnel class="fill-h" :option="funnelOption"/>
              </div>
            </div>
            <div class="xpanel-wrapper xpanel-wrapper-4">
              <div class="xpanel">
                <v-pie class="fill-h" :option="pieOption"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VFunnel from "../components/Funnel";
import VPie from "../components/Pie";
import VLine from "../components/Line";
// import VMap from "../components/Map";
import VBar from "../components/Bar";
import VSankey from '../components/Sankey';
import FunnelOption from '../config/funnel';
import PieOption from '../config/pie';
import LineOption from '../config/line';
// import MapOption from '../config/map';
import BarOption from '../config/bar';
import SankeyOption from '../config/sankey';

export default {
  data() {
    return {
        funnelOption: FunnelOption,
        pieOption: PieOption,
        lineOption: LineOption,
        // mapOption: MapOption,
        barOption: BarOption,
        sankeyOption: SankeyOption,
    };
  },
  components: {
    "v-funnel": VFunnel,
    "v-pie": VPie,
    "v-line": VLine,
    // "v-map": VMap,
    "v-bar": VBar,
    'v-sankey': VSankey,
  },
  methods:{
      change(){
          this.lineOption.series=[]
      }
  },
  mounted(){
  }
};
</script>
<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
  min-height: 635px;
  font-family: "microsoft yahei", arial, sans-serif;
  background-color: #0f1c30;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
.bg01 {
  background: url("../assets/png/bg01.png") 100% no-repeat;
  height: 100%;
}
.bg02 {
  background: url("../assets/png/bg02.png") 100% no-repeat;
  height: 100%;
}
.bg03 {
  background: url("../assets/png/bg03.png") 100% no-repeat;
  height: 100%;
}
.bg04 {
  background: url("../assets/png/bg04.png") 100% no-repeat;
  height: 100%;
}
.header {
  margin: 0 auto;
  width: 100%;
  height: 65px;
  max-width: 1920px;
  background: url("../assets/png/header.png") center no-repeat;
}
.header h3 {
  margin: 0;
  padding: 0;
  line-height: 50px;
  text-align: center;
  font-size: 24px;
  color: #5dc2fe;
}
.wrapper {
  position: absolute;
  top: 80px;
  bottom: 0;
  left: 0;
  right: 0;
  min-height: 555px;
}
.container-fluid {
  height: 100%;
  min-height: 100%;
}
.row {
  margin-left: -7px;
  margin-right: -8px;
}
.row > div {
  padding-left: 7px;
  padding-right: 8px;
}
.xpanel-wrapper {
  padding-bottom: 15px;
  box-sizing: border-box;
}
.xpanel-wrapper-1 {
  height: 10%;
}
.xpanel-wrapper-2 {
  height: 20%;
}
.xpanel-wrapper-3 {
  height: 30%;
}
.xpanel-wrapper-4 {
  height: 40%;
}
.xpanel-wrapper-5 {
  height: 50%;
}
.xpanel-wrapper-6 {
  height: 60%;
}
.xpanel-wrapper-7 {
  height: 70%;
}
.xpanel-wrapper-8 {
  height: 80%;
}
.xpanel-wrapper-9 {
  height: 90%;
}
.xpanel-wrapper-10 {
  height: 100%;
}
.xpanel {
  padding: 15px;
  height: 100%;
  min-height: 170px;
  background: url("../assets/png/panel.png") center no-repeat;
  background-size: 100% 100%;
  box-sizing: border-box;
}

/* tool */
.fill-h {
  height: 100%;
  min-height: 100%;
}
.no-margin {
  margin: 0 !important;
}
.no-padding {
  padding: 0 !important;
}

/* scrollbar */
::-webkit-scrollbar {
  width: 0;
  height: 0;
}
::-webkit-scrollbar-track {
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
