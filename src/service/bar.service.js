import BarOption from '../config/bar';
import DataSetService from './dataset.service';
// 调整配置
function changeOption(data) {
    // 定义一个serise数组
    let seriseArr = []
    if (data.length != 0) {
        let objSize = Object.keys(data[0]).length - 1;
        for (let i = 0; i < objSize; i++) {
            let serise = {}
            serise.type = 'bar'
            seriseArr.push(serise)
        }
    }
    BarOption.series = seriseArr
    BarOption.dataset.source = data
    // console.log('bar',BarOption)
}
// 获取折线图数据
function getData(param) {
    DataSetService.getData(param).then((response)=>{
        // 更改图表配置
        changeOption(response)
    })
}
export default {
    getData
}