import PieOption from '../config/pie';
import DataSetService from './dataset.service';
// 调整配置
function changeOption(data) {
   // 定义一个serise数组
    let seriseArr = []
    if (data.length != 0) {
        let objSize = Object.keys(data[0]).length - 1;
        for (let i = 0; i < objSize; i++) {
            let serise = {}
            serise.type = 'pie'
            seriseArr.push(serise)
        }
    }
    // PieOption.series = seriseArr
    // PieOption.dataset.source = data
    console.log('pie',PieOption) 
}
// 获取折线图数据
function getData(param) {
    // return new Promise((reslove, reject) => {
        DataSetService.getData(param).then((response) => {
            // 更改图表配置
            // reslove(changeOption(response))
            changeOption(response)
            // console.log('response',response)
        })
    // })
}
export default {
    getData
}