import React, { useState } from 'react'
import * as echarts from 'echarts';

export const set_JSON_State_Data = (getState, setState, setValue) => {

    setState({
        ...getState,
        ...setValue
    });
}

export const Make_Chart = (title, Chart_Type, data_X, data_Y, data_name, color) => {

    let Chart = echarts.init(document.getElementById("content_data"));

    Chart.setOption({
        title: {
            text: `${title}`
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            data: data_X,
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '10%'],
        },
        dataZoom: [
            {
                type: 'inside',
                start: 0,
                end: 10,
            },
            {
                start: 0,
                end: 10
            }
        ],
        series: [
            {
                name: `${data_name}`,
                type: `${Chart_Type}`,
                smmoth: true,
                showSymbol: false,
                sampling: 'average',
                itemStyle: {
                    color: `${color}`
                },
                data: data_Y

            }
        ]
    })

};