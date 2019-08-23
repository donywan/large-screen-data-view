import PieOption from '../config/pie';
import DataSetService from './dataset.service';
// 调整配置
function changeOption(data) {
    // 定义一个serise数组
    let series = {}
    series.type = 'pie'
    // key-value dataset不支持seriesLayoutBy
    // series.seriesLayoutBy = 'row'
    PieOption.series.push(series)
    PieOption.dataset.source = data
    // console.log('pie',JSON.stringify(PieOption))
}
// 获取折线图数据
function getData(param) {
    DataSetService.getData(param).then((response) => {
        // 更改图表配置
        changeOption(response)
    })
}
export default {
    getData
}