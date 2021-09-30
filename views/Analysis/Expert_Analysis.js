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

    useEffect(() => {

        axios.post(Address_Config.dev_server + 'ExpertAnalysis', { expert_nickname: "강남선비" })
            .then((response) => {
                const list = cloneDeep(response.data);
                list.map((item) => {
                    // delete item.expert_name;
                    // delete item.expert_nickname;
                    // item.x = item.gko_date;
                    // item.y = item.order_count;
                    // delete item.gko_date;
                    // delete item.order_count;

                    data_x.push(item.gko_date);
                    data_y.push(item.order_count);
                })
                console.log("Copy", list);
                console.log("Original", response.data);

                console.log("dataX", data_x);
                console.log("dataY", data_y);
                setList({ x: data_x, y: data_y });

                const Chart = echarts.init(document.getElementById("content"));
                Chart.setOption({
                    title: {
                        text: '주문'
                    },
                    tooltip: {},
                    xAxis: {
                        data: data_x,
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
                            name: 'sales',
                            type: 'bar',
                            smmoth: 'true',
                            sampling: 'average',
                            symbol: 'none',
                            itemStyle: {
                                color: 'rgb(255, 70, 131)'
                              },
                            data: data_y
                            
                        }
                    ]
                });



                // initData[0].id = response.data[0].expert_nickname;
                // initData[0].data = list;

                // console.log("INIT", initData);
                // setAnalysis_Data(initData);

            })

    }, [])



    return (
        <>
            {/* <ResponsiveLine
                data={getAnalysis_Data}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'time', format: '%Y-%m-%d', useUTC: false, precision: 'day', min: 'auto',max: 'auto' }}
                yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    format: '%b %d',
                    tickValues: 'every 2 days',
                    legend: 'time scale',
                    legendOffset: -12,
                }}
                axisLeft={{
                    legendOffset: 12,
                    stacked: Boolean('stacked', false),
                }}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                useMesh={true}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            /> */}
        </>
    )
}

export default Expert_Analysis;