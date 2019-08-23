<template>
  <div class="bg01">
    <div class="header">
      <h3>大屏数据可视化平台</h3>
      <input type="button" class="button" @click="drawer = true" value="Options" />
      <!-- <span class="log">UDBAC</span> -->
    </div>
    <!-- 抽屉选项 -->
    <div>
      <el-drawer title="选项" :visible.sync="drawer" :direction="direction" custom-class="drawer">
        <!-- <el-row class="el-row">
          <el-row class="dateRow">
            <span>日期选择:</span>
          </el-row>
          <el-row class="dateRow">
            <el-col :span="8">
              <el-date-picker class="datePicker" v-model="startDate" type="date" placeholder="选择日期"></el-date-picker>
            </el-col>
            <el-col :span="5" class="dateLine">-</el-col>
            <el-col :span="8">
              <el-date-picker class="datePicker" v-model="endDate" type="date" placeholder="选择日期"></el-date-picker>
            </el-col>
          </el-row>
          <el-row class="dateRow">
            <span>活动类型:</span>
          </el-row>
          <el-row class="dateRow">
            <el-radio-group v-model="radio1">
              <el-radio-button label="家庭网"></el-radio-button>
              <el-radio-button label="宽带新装"></el-radio-button>
              <el-radio-button label="宽带续约"></el-radio-button>
              <el-radio-button label="线上售卡"></el-radio-button>
            </el-radio-group>
          </el-row>
        </el-row>-->
        <el-form :model="ruleForm" label-position="top" class="customer-form">
          <el-form-item label="选择日期">
            <el-col :span="11">
              <el-form-item prop="startDate">
                <el-date-picker
                  type="date"
                  placeholder="开始日期"
                  v-model="startDate"
                  value-format="yyyy-MM-dd"
                  style="width: 100%;"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col class style="text-align:center" :span="2">-</el-col>
            <el-col :span="11">
              <el-form-item prop="endDate">
                <el-date-picker
                  type="date"
                  placeholder="结束日期"
                  v-model="endDate"
                  value-format="yyyy-MM-dd"
                  style="width: 100%;"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="选择活动">
            <el-radio-group v-model="actives">
              <el-radio-button label="001">家庭网</el-radio-button>
              <el-radio-button label="002">宽带新装</el-radio-button>
              <el-radio-button label="003">宽带续约</el-radio-button>
              <el-radio-button label="004">线上售卡</el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item style="text-align:center;">
            <el-button type="primary" @click="startGenerate('ruleForm')">立即生成</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
        <el-row style="position: absolute;
    bottom: 20px;right:20px;">
          <span>数据来源：UDBAC</span>
        </el-row>
      </el-drawer>
    </div>

    <div class="wrapper">
      <div class="container-fluid">
        <div class="row fill-h">
          <div class="col-lg-4 fill-h">
            <div class="xpanel-wrapper xpanel-wrapper-5">
              <div class="xpanel">
                <v-line class="fill-h" :option="lineOption" />
              </div>
            </div>
            <div class="xpanel-wrapper xpanel-wrapper-5">
              <div class="xpanel">
                <v-bar class="fill-h" :option="barOption" ref="bar" />
              </div>
            </div>
          </div>
          <div class="col-lg-4 fill-h">
            <div class="xpanel-wrapper xpanel-wrapper-7">
              <div class="xpanel">
                <!-- <v-map class="fill-h" :option="mapOption"/> -->
                <!-- <v-sankey class="fill-h" :option="sankeyOption"/> -->
                <v-scatter class="fill-h" :option="scatterOption" />
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
                <v-funnel class="fill-h" :option="funnelOption" />
              </div>
            </div>
            <div class="xpanel-wrapper xpanel-wrapper-4">
              <div class="xpanel">
                <v-pie class="fill-h" :option="pieOption" />
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
// import VSankey from '../components/Sankey';
import VScatter from "../components/Scatter";
import FunnelOption from "../config/funnel";
import PieOption from "../config/pie";
import LineOption from "../config/line";
// import MapOption from '../config/map';
import BarOption from "../config/bar";
// import SankeyOption from '../config/sankey';
import ScatterOption from "../config/scatter";
// 服务
import FunnelService from "../service/funnel.service";
// import DataService from '../service/dataset.service';
// import datasetService from '../service/dataset.service';
import LineService from "../service/line.service";
import barService from "../service/bar.service";
import pieService from "../service/pie.service";
// import pie from '../config/pie';

export default {
  data() {
    return {
      drawer: false,
      direction: "ltr",
      // 日期
      startDate: "",
      endDate: "",
      // 活动类型
      actives: "001",
      // form
      ruleForm: {},
      rules: {
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],

        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ]
      },
      // 配置
      funnelOption: FunnelOption,
      pieOption: PieOption,
      lineOption: LineOption,
      // mapOption: MapOption,
      scatterOption: ScatterOption,
      barOption: BarOption
      // sankeyOption: SankeyOption,
    };
  },
  components: {
    "v-funnel": VFunnel,
    "v-pie": VPie,
    "v-line": VLine,
    // "v-map": VMap,
    "v-bar": VBar,
    // 'v-sankey': VSankey,
    "v-scatter": VScatter
  },
  created(){
     let dateNow = new Date().toLocaleDateString().replace(/\//g,'-');
    // 初始化图表
    let data = {
      activityType: '001',
      // 接口只有接收一个日期
      day_id: dateNow
    };
    // 获取数据并且更改视图
    FunnelService.getData(data);
    LineService.getData(data);
    barService.getData(data);
    pieService.getData(data);
  },
  
  methods: {
    // 立即生成
    startGenerate() {
      // 关闭遮罩
      this.drawer = false;
      // 定义参数对象
      let data = {
        activityType: this.actives,
        // 接口只有接收一个日期
        day_id: this.startDate
      };
      // 获取数据并且更改视图
      FunnelService.getData(data);
      data.sdate = this.startDate
      data.edate = this.endDate
      LineService.getData(data);
      barService.getData(data);
      pieService.getData(data);
    },
    resetForm(formName) {
      this.startDate = "";
      this.endDate = "";
      this.actives = "001";
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    change() {
      this.lineOption.series = [];
    }
  },
  mounted() {}
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
.log {
  color: #5dc2fe;
  float: right;
  font-size: 25px;
  margin-top: -15px;
}
.button {
  float: left;
  margin: -15px 0px 0px 20px;
  border-radius: 5px;
  background: none;
  color: #5dc2fe;
}
.drawer {
  /* background: url("../assets/png/bg01.png") center no-repeat; */
}
.datePicker {
  width: 150px !important;
}
.dateRow {
  margin: 20px 20px !important;
}
.dateLine {
  padding: 10px 0px 0px 10px;
  text-align: center;
}
.customer-form {
  padding: 20px;
}
</style>
