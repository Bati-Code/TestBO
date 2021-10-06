import { Tooltip } from 'antd'
import React from 'react'

export const Column_Data = {

    column_List: [
        {
            title: 'Message_ID',
            dataIndex: 'mid',
            key: 'mid',
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: '발신번호',
            dataIndex: 'sender',
            key: 'sender',
        },
        {
            title: 'SMS 카운트',
            dataIndex: 'sms_count',
            key: 'sms_count',
        },
        {
            title: 'SMS 상태',
            dataIndex: 'sms_state',
            key: 'sms_state',
        },
        {
            title: 'SMS 내용',
            dataIndex: 'msg',
            key: 'msg',
        },
        {
            title: '실패 카운트',
            dataIndex: 'fail_count',
            key: 'reg_date',
        },
        {
            title: '등록 시간',
            dataIndex: 'reg_date',
            key: 'reg_date',
        },
    ],

    column_total: [
        {
            title: '발신번호',
            dataIndex: 'sender',
            key: 'sender',
        },
        {
            title: '타입',
            dataIndex: 'type_str',
            key: 'type_str',
        },
        {
            title: 'SMS 카운트',
            dataIndex: 'count',
            key: 'count',
        },
        {
            title: '결과',
            dataIndex: 'result_str',
            key: 'result_str',
        },
        {
            title: '등록 시간',
            dataIndex: 'reg_date',
            key: 'reg_date',
        },
    ],

    column_Detail_total: [
        {
            title: 'Message_ID',
            dataIndex: 'mdid',
            key: 'mdid',
        },
        {
            title: '타입',
            dataIndex: 'type_str',
            key: 'type_str',
        },
        {
            title: '발신번호',
            dataIndex: 'sender',
            key: 'sender',
        },
        {
            title: '수신번호',
            dataIndex: 'receiver',
            key: 'receiver',
        },
        {
            title: '수신 통신사',
            dataIndex: 'telecom_str',
            key: 'telecom_str',
        },
        {
            title: 'SMS 내용',
            dataIndex: 'msg',
            key: 'msg',
            ellipsis: {
                showTitle: false,
            },
            render: msg => (
                <Tooltip placement="topLeft" title={msg}>
                    {msg}
                </Tooltip>
            ),
        },
        {
            title: 'SMS 상태',
            dataIndex: 'result_str',
            key: 'result_str',
        },
        {
            title: '등록 시간',
            dataIndex: 'reg_date',
            key: 'reg_date',
        },
        {
            title: '예약 시간',
            dataIndex: 'reserve_date',
            key: 'reserve_date',
        },
        {
            title: '전송 시간',
            dataIndex: 'send_date',
            key: 'send_date',
        },
    ]





}