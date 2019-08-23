// app.title = '气泡图';

var data = [
    [[1400, 1300, 'Australia'], 
    [1000, 800, 'Canada'],
    [1000, 900, 'China'], 
    [7000, 6000, 'Cuba'], 
    [10000, 9000, 'Finland'], 
    [20000, 10000, 'France']],

];

let option = {
    // backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
    //     offset: 0,
    //     color: '#f7f8fa'
    // }, 
    // {
    //     offset: 1,
    //     color: '#cdd0d5'
    // }]),
    // title: {
    //     text: '1990 与 2015 年各国家人均寿命与 GDP'
    // },
    legend: {
        // right: 10,
        // data: ['1990', '2015']
    },
    xAxis: {
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        axisLabel: {
            color: 'white',
        }
    },
    yAxis: {
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        axisLabel: {
            color: 'white',
        },
        scale: true
    },
    series: [{
        // name: '1990',
        data: data[0],
        type: 'scatter',
        symbolSize: function (data) {
            return Math.sqrt(data[0]) / 2;
        },
        label: {
            emphasis: {
                show: true,
                formatter: function (param) {
                    return param.data[2];
                },
                position: 'top'
            },
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(120, 36, 50, 0.5)',
                shadowOffsetY: 5,
                // color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                //     offset: 0,
                //     color: 'rgb(251, 118, 123)'
                // }, {
                //     offset: 1,
                //     color: 'rgb(204, 46, 72)'
                // }])
            }
        }

    }]
};
export default option