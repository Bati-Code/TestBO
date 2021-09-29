import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons'

import './css/Stock_List.css'
import { Address_Config } from '../Data/Config/Config';


const Counter = () => {

    const initSearch = {
        stock_code: '',
        stock_name: '',
    }

    const [getData, setData] = useState([]);
    const [getSearchValue, setSearchValue] = useState(initSearch);
    const { Search } = Input;

    useEffect(() => {

        getList();

    }, [])

    const getList = () => {
        console.log("axios value", getSearchValue);
        axios.post(Address_Config.dev_server + 'test', getSearchValue)
            .then((res) => {
                if (res) {
                    console.log(res.data);
                    setData(res.data);
                }

            })
            .catch((error) => {
                if (error.response) {
                    // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
                    console.log("요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.");
                    console.log("err.data", error.response.data);
                    console.log("err.status", error.response.status);
                    console.log("err.headers", error.response.headers);
                    return;
                }
                else if (error.request) {
                    // 요청이 이루어 졌으나 응답을 받지 못했습니다.
                    // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
                    // Node.js의 http.ClientRequest 인스턴스입니다.
                    console.log("요청이 이루어 졌으나 응답을 받지 못했습니다.", error.request);
                    return;
                }
                else {
                    // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
                    console.log('오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.', error.message, error);
                    return;
                }
            })
    }

    const resetList = () => {
        console.log("axios value", initSearch);
        axios.post(Address_Config.dev_server + 'test', initSearch)
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
    }

    const column = [
        {
            title: '종목코드',
            dataIndex: 'stock_code',
            key: 'stock_code',
        },
        {
            title: '종목명',
            dataIndex: 'stock_name',
            key: 'stock_name',
        },
        {
            title: 'Y/N',
            dataIndex: 'use_yn',
            key: 'stock_name',
        }
    ]

    const searchValue_Change_Handler = ({ target }) => {

        setSearchValue({
            ...getSearchValue,
            [target.name]: target.value
        })
    }

    const search_Input_Key_Handler = (e) => {
        console.log(e);
        if (e.key == "Enter") {
            getList();
        }
    }

    const searchButton_Handler = () => {

        getList();
    }

    const resetButton_Handler = () => {
        console.log("reset");
        setSearchValue({ ...initSearch });

        resetList();
    }

    return (
        <>
            <div id="content">
                <div id="search_label">
                    <div id="search_form">
                        <span>
                            <Input placeholder="종목코드" prefix={<SearchOutlined />} />
                            {/* 종목코드 : <input name="stock_code" value={getSearchValue.stock_code}
                                onChange={searchValue_Change_Handler} onKeyPress={search_Input_Key_Handler}></input> */}
                        </span>
                        <span>
                            <Input placeholder="종목명" prefix={<SearchOutlined />} />
                            {/* 종목명 : <input name="stock_name" value={getSearchValue.stock_name}
                                onChange={searchValue_Change_Handler} onKeyPress={search_Input_Key_Handler}></input> */}
                        </span>
                        <span>
                            <button onClick={searchButton_Handler}>Search</button>
                        </span>
                        <span>
                            <button onClick={resetButton_Handler}>Reset</button>
                        </span>
                    </div>
                    <div id="login_form">
                        <button >로그인</button>
                    </div>
                </div>
                <div>
                    <Table dataSource={getData} columns={column}></Table>
                </div>
            </div>
        </>
    )
}

export default Counter;