import http from '../util/http';
import Axios from 'axios';
import { Promise, reject } from 'q';
import { resolve } from 'path';
// 使用百度echarts的dataset来管理数据

function getData(param) {
    var promise = new Promise((resolve, reject) => {
        http.get('/analysisOfFlow/analysisOfFlow/', param).then((result) => {
            if (result.status == 200) {
                let data1 = setData(result.data)
                resolve(data1)
            }
        }).catch((err)=>{
            console.log(err)
        })
    })
    return promise
}
// 组合成dataset
function setDataSet(param) {
    // 排序
    sortData(param)
    let data = []
    for (let item of param) {
        let objData = {}
        objData.day_id = item.day_id
        for (let type of item.data) {
            objData[type.channel_type] = type.pv
        }
        data.push(objData)
    }
    // console.log(data)
    return data
}

// 获取后端数据之后组合成dataset
function setData(result) {
    let arr0 = ['日期']
    // 定义一个对象数组
    let objData = []

    for (let obj of result) {
        if (!arr0.includes(obj.channel_type)) {
            // 如果第一行数组中不包含chanel_type则进行添加
            arr0.push(obj.channel_type)
        }
        // 定义单个对象
        let objArr = {}
        // objArr.channel_type = obj.channel_type
        objArr.day_id = obj.day_id
        objArr.data = []
        // 定义渠道对象
        let objType = {}
        objType.channel_type = obj.channel_type
        objType.pv = obj.pv
        objArr.data.push(objType)
        // 根据渠道名称进行合并
        if (objData.length == 0) {
            objData.push(objArr)
        }
        // 默认不包含
        let type = true
        for (let o of objData) {
            if (objArr.day_id == o.day_id) {
                if (!o.data.includes(objType)) {
                    o.data.push(objType)
                }
                type = false
            }
        }
        if (type) {
            objData.push(objArr)
        }
    }
    return setDataSet(objData)
}
// 排序
function sortData(param) {
    param.sort(compareDate)
    param.forEach(element => {
        element.data.sort((obj1, obj2) => {
            return obj1.channel_type.localeCompare(obj2.channel_type)
        })
    });
}

// 日期排序
function compareDate(obj1, obj2) {
    let date1 = obj1.day_id
    let date2 = obj2.day_id
    // 年月日
    let year1 = date1.substr(0, 4)
    let month1 = date1.substr(4, 2)
    let day1 = date1.substr(6, 2)

    let year2 = date2.substr(0, 4)
    let month2 = date2.substr(4, 2)
    let day2 = date2.substr(6, 2)

    // 创建日期对象
    let nDate1 = new Date(year1, month1, day1)
    let nDate2 = new Date(year2, month2, day2)

    return nDate1 - nDate2
}
export default { getData }