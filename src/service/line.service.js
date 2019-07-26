import http from '../util/http';
import LineOption from '../config/line';
// 调整配置
function changeOption(result){
    let option = LineOption.series = []
    return option
}
// 获取折线图数据
function getLine(data) {
    http.post('', data).then((result) => {
        if (result) {
            console.log(result)
        }
        return changeOption(result)
    }).catch((err) => {
        console.log(err)
    });
}
export default {
    getLine
}