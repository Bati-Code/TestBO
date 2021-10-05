import axios from 'axios';
import React, { useEffect, useState } from 'react';
import loadsh, { cloneDeep } from 'lodash';
import { Address_Config } from '../Data/Config/Config';
import { Make_Chart } from '../Util/CommonUtil';

import { Input, Select } from 'antd';
import './css/Expert_AnalysisCSS.css'



const Expert_Analysis = () => {

    const data_x = [];
    const data_y = [];

    const { Search } = Input;
    const { Option } = Select;

    const [get_Expertname, set_Expertname] = useState('강남선비');
    const [get_GraphType, set_GraphType] = useState('bar');


    useEffect(() => {
        console.log(get_Expertname, "   :  ", get_GraphType);
        getGraph(get_Expertname, get_GraphType);
    }, [get_Expertname, get_GraphType])

    const getGraph = (search_data, search_type) => {
        axios.post(Address_Config.dev_server + 'ExpertAnalysis', { expert_nickname: search_data })
            .then((response) => {
                const list = cloneDeep(response.data);
                list.map((item) => {

                    data_x.push(item.gko_date);
                    data_y.push(item.order_count);
                })

                Make_Chart(search_data, search_type, data_x, data_y, '주문', 'rgb(255, 70, 0)');
            })
    }

    const expert_Graph_Search_Handler = (value) => {
        console.log(value);
        set_Expertname(value);
    }

    const Graph_Type_Select_Handler = (value) => {
        console.log(`selected ${value}`);
        set_GraphType(value);
    }




    return (
        <>
            <div id="Graph_SearchForm">
                <div>
                    <Search placeholder="전문가 검색" onSearch={expert_Graph_Search_Handler} />
                </div>
                <div>
                    <Select defaultValue="bar" onChange={Graph_Type_Select_Handler}>
                        <Option value="bar">막대 그래프</Option>
                        <Option value="line">선형 그래프</Option>
                    </Select>
                </div>
            </div>
        </>
    )
}

export default Expert_Analysis;