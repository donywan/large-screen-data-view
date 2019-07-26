export default {
    title: {
        //   text: "南丁格尔玫瑰图",
        //   subtext: "纯属虚构",
        x: "center"
    },
    legend: {
        orient: 'vertical',
        x: "left",
        y: "middle",
        data: [
            "rose1",
            "rose2",
            "rose3",
            "rose4",
            "rose5",
            // "rose6",
            // "rose7",
            // "rose8"
        ],
        textStyle: {
            color: 'white',
        }
    },
    calculable: true,
    series: [
        {
            name: "面积模式",
            type: "pie",
            radius: [10, 80],
            center: ["55%", "50%"],
            roseType: "area",
            // bottom: "20",
            data: [
                { value: 10, name: "rose1" },
                { value: 5, name: "rose2" },
                { value: 15, name: "rose3" },
                { value: 25, name: "rose4" },
                { value: 20, name: "rose5" },
                // { value: 35, name: "rose6" },
                // { value: 30, name: "rose7" },
                // { value: 40, name: "rose8" }
            ]
        }
    ]
}
