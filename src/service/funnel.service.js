import FunnelOption from '../config/funnel';
import http from '../util/http';
// 调整配置
function changeOption(data) {
    // 数组对象
    let seriesData = [
        { name: '总访问量', value: data.totalNumber },
        { name: '立即办理', value: data.immediatelyNumber },
        { name: '二次确认', value: data.secondNumber },
        { name: '成功办理', value: data.succesNumber },
    ]
    // legenData
    let legenData = ['总访问量', '立即办理', '二次确认', '成功办理']
    FunnelOption.series[0].data = seriesData;
    FunnelOption.legend.data = legenData;
    return FunnelOption
}
// 获取折线图数据
function getData(param) {
    http.get('/conversionRate/conversionRate', param).then((result) => {
        if (result.status == 200) {
            return changeOption(result.data)
        }
    }).catch((err) => {
        console.log(err)
    });
}
export default {
    getData
}