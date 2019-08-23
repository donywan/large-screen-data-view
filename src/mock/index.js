import Mock from 'mockjs';
let funnel = {
    "mark2": null,
    "functional_clicks": null,
    "crash_log": null,
    "business_code": null,
    "errcode": null,
    "user_number": null,
    "user_uniqueid": null,
    "month_id": null,
    "day_id": null,
    "hour_id": null,
    "totalNumber": 5221,
    "immediatelyNumber": 1102,
    "secondNumber": 185,
    "succesNumber": 106,
    "activityType": null,
    "conversionRate": 0.02,
    "cause_of_error": null,
    "errorLogNum": 0
}
let datadata = [{ "channel_type": "安卓", "day_id": "20190816", "pv": "26866531", "sdate": "20190813", "edate": "20190819" }, { "channel_type": "IOS", "day_id": "20190814", "pv": "6268426", "sdate": "20190813", "edate": "20190819" }, { "channel_type": "安卓", "day_id": "20190815", "pv": "22003959", "sdate": "20190813", "edate": "20190819" }, { "channel_type": "IOS", "day_id": "20190813", "pv": "5225156", "sdate": "20190813", "edate": "20190819" }, { "channel_type": "网厅触屏", "day_id": "20190819", "pv": "1705248", "sdate": "20190813", "edate": "20190819" }, { "channel_type": "商城触屏", "day_id": "20190819", "pv": "2396150", "sdate": "20190813", "edate": "20190819" }, { "channel_type": "IOS", "day_id": "20190819", "pv": "5585088", "sdate": "20190813", "edate": "20190819" }, { "channel_type": "安卓", "day_id": "20190819", "pv": "20490895", "sdate": "20190813", "edate": "20190819" }, { "channel_type": "掌厅H5", "day_id": "20190819", "pv": "4718797", "sdate": "20190813", "edate": "20190819" }, { "channel_type": "安卓", "day_id": "20190814", "pv": "23006292", "sdate": "20190813", "edate": "20190819" }, { "channel_type": "安卓", "day_id": "20190813", "pv": "19823734", "sdate": "20190813", "edate": "20190819" }, { "channel_type": "商城触屏", "day_id": "20190818", "pv": "2343975", "sdate": "20190813", "edate": "20190819" }, { "channel_type": "网厅触屏", "day_id": "20190818", "pv": "1722881", "sdate": "20190813", "edate": "20190819" }, { "channel_type": "商城触屏", "day_id": "20190817", "pv": "2664506", "sdate": "20190813", "edate": "20190819" }, { "channel_type": "网厅触屏", "day_id": "20190817", "pv": "2026955", "sdate": "20190813", "edate": "20190819" }, { "channel_type": "商城触屏", "day_id": "20190816", "pv": "2854863", "sdate": "20190813", "edate": "20190819" }, { "channel_type": "网厅触屏", "day_id": "20190816", "pv": "2318626", "sdate": "20190813", "edate": "20190819" }, { "channel_type": "商城触屏", "day_id": "20190815", "pv": "2525904", "sdate": "20190813", "edate": "20190819" }, { "channel_type": "掌厅H5", "day_id": "20190818", "pv": "4799134", "sdate": "20190813", "edate": "20190819" }, { "channel_type": "网厅触屏", "day_id": "20190815", "pv": "1805688", "sdate": "20190813", "edate": "20190819" }, { "channel_type": "商城触屏", "day_id": "20190814", "pv": "2598135", "sdate": "20190813", "edate": "20190819" }, { "channel_type": "掌厅H5", "day_id": "20190817", "pv": "5190517", "sdate": "20190813", "edate": "20190819" }, { "channel_type": "网厅触屏", "day_id": "20190814", "pv": "1807636", "sdate": "20190813", "edate": "20190819" }, { "channel_type": "商城触屏", "day_id": "20190813", "pv": "3066544", "sdate": "20190813", "edate": "20190819" }, { "channel_type": "掌厅H5", "day_id": "20190816", "pv": "5616649", "sdate": "20190813", "edate": "20190819" }, { "channel_type": "网厅触屏", "day_id": "20190813", "pv": "1755142", "sdate": "20190813", "edate": "20190819" }, { "channel_type": "掌厅H5", "day_id": "20190815", "pv": "4982633", "sdate": "20190813", "edate": "20190819" }, { "channel_type": "IOS", "day_id": "20190818", "pv": "5880007", "sdate": "20190813", "edate": "20190819" }, { "channel_type": "掌厅H5", "day_id": "20190814", "pv": "5412466", "sdate": "20190813", "edate": "20190819" }, { "channel_type": "IOS", "day_id": "20190817", "pv": "6839721", "sdate": "20190813", "edate": "20190819" }, { "channel_type": "掌厅H5", "day_id": "20190813", "pv": "4669286", "sdate": "20190813", "edate": "20190819" }, { "channel_type": "安卓", "day_id": "20190818", "pv": "21205848", "sdate": "20190813", "edate": "20190819" }, { "channel_type": "IOS", "day_id": "20190816", "pv": "7590738", "sdate": "20190813", "edate": "20190819" }, { "channel_type": "安卓", "day_id": "20190817", "pv": "24339718", "sdate": "20190813", "edate": "20190819" }, { "channel_type": "IOS", "day_id": "20190815", "pv": "5843474", "sdate": "20190813", "edate": "20190819" }]
// console.log(Mock)
Mock.mock('/conversionRate/conversionRate', funnel)
Mock.mock('/analysisOfFlow/analysisOfFlow/', 'get', datadata)
// Mock.mock('http://10.152.21.81:8080/conversionRate/conversionRate?activityType=001','get',funnel)