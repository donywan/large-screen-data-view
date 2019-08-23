export default {
    title: {
        //   text: "南丁格尔玫瑰图",
        //   subtext: "纯属虚构",
        // x: "center"
    },
    dataset: {
        source: [
            ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
            ['Matcha Latte', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
            ['Milk Tea', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
            ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
            ['Walnut Brownie', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
        ]
    },
    legend: {
        // orient: 'vertical',
        // x: "left",
        // y: "middle",
        // data: [
        //     "rose1",
        //     "rose2",
        //     "rose3",
        //     "rose4",
        //     "rose5",
        //     // "rose6",
        //     // "rose7",
        //     // "rose8"
        // ],
        textStyle: {
            color: 'white',
        }
    },
    // calculable: true,
    series: [
        { type: 'pie', seriesLayoutBy: 'row' },
        { type: 'pie', seriesLayoutBy: 'row' },
        { type: 'pie', seriesLayoutBy: 'row' },
        { type: 'pie', seriesLayoutBy: 'row' },
        { type: 'pie', seriesLayoutBy: 'row' }
        // {
        //     name: "面积模式",
        //     type: "pie",
        //     radius: [10, 80],
        //     center: ["55%", "50%"],
        //     roseType: "area",
        //     // bottom: "20",
        //     data: [
        //         { value: 10, name: "rose1" },
        //         { value: 5, name: "rose2" },
        //         { value: 15, name: "rose3" },
        //         { value: 25, name: "rose4" },
        //         { value: 20, name: "rose5" },
        //         // { value: 35, name: "rose6" },
        //         // { value: 30, name: "rose7" },
        //         // { value: 40, name: "rose8" }
        //     ]
        // }
    ]
}
