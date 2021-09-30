import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ResponsiveLine } from '@nivo/line'
import loadsh, { cloneDeep } from 'lodash';
import * as echarts from 'echarts';
import { Address_Config } from '../Data/Config/Config';


const Expert_Analysis = () => {

    const initData = [
        {
            'id': '',
            'data': []
        }
    ]

    const data_x = [];
    const data_y = [];

    const [getAnalysis_Data, setAnalysis_Data] = useState(initData);
    const [getList, setList] = useState({});
    const [get_data_x, set_data_x] = useState([]);
    const [get_data_y, set_data_y] = useState([]);

    useEffect(() => {

        axios.post(Address_Config.dev_server + 'ExpertAnalysis', { expert_nickname: "강남선비" })
            .then((response) => {
                const list = cloneDeep(response.data);
                list.map((item) => {

                    data_x.push(item.gko_date);
                    data_y.push(item.order_count);
                })
                console.log("Copy", list);
                console.log("Original", response.data);

                console.log("dataX", data_x);
                console.log("dataY", data_y);
                setList({ x: data_x, y: data_y });

                    // const Chart = echarts.init(document.getElementById("content"));
                    // Chart.setOption({
                    //     title: {
                    //         text: '주문'
                    //     },
                    //     tooltip: {},
                    //     xAxis: {
                    //         data: data_x,
                    //         boundaryGap: [0, '10%'],
                    //     },
                    //     yAxis: {
                    //         type: 'value',
                    //     },
                    //     dataZoom: [
                    //         {
                    //             type: 'inside',
                    //             start: 0,
                    //             end: 10,
                    //             height: '10%'
                    //         },
                    //         {
                    //             start: 0,
                    //             end: 10
                    //         }
                    //     ],
                    //     series: [
                    //         {
                    //             name: 'sales',
                    //             type: 'bar',
                    //             smmoth: 'true',
                    //             sampling: 'average',
                    //             symbol: 'none',
                    //             itemStyle: {
                    //                 color: 'rgb(255, 70, 131)'
                    //             },
                    //             data: data_y

                    //         }
                    //     ]
                    // });

                // Make_Chart('test', 'line', data_x, data_y, 'data', 'rgb(255, 70, 0)');/
            })

       

    }, [])

    const Make_Chart = (title, Chart_Type, data_X, data_Y, data_name, color) => {
        const Chart = echarts.init(document.getElementById("content"));
        Chart.setOption({
            title: {
                text: { title }
            },
            tooltip: {},
            xAxis: {
                data: { data_X },
                boundaryGap: [0, '10%'],
            },
            yAxis: {
                type: 'value',
            },
            dataZoom: [
                {
                    type: 'inside',
                    start: 0,
                    end: 10,
                    height: '10%'
                },
                {
                    start: 0,
                    end: 10
                }
            ],
            series: [
                {
                    name: { data_name },
                    type: { Chart_Type },
                    smmoth: 'true',
                    sampling: 'average',
                    symbol: 'none',
                    itemStyle: {
                        color: { color }
                    },
                    data: { data_Y }

                }
            ]
        });
    }



    return (
        <>
        </>
    )
}

export default Expert_Analysis;