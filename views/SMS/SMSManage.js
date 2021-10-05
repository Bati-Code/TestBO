import { Button, DatePicker, Input, Table } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Address_Config } from '../Data/Config/Config'
import { set_JSON_State_Data } from '../Util/CommonUtil'

import './css/SMSManageCSS.css'

const SMSManage = () => {

    const input_data = {
        receiver: '',
        msg: '',
        msgid: '',
        reservation_date: ''
    }

    const column = [
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
    ]

    const [get_input_data, set_input_data] = useState(input_data);
    const [get_input_List_data, set_input_List_data] = useState('');
    const [get_input_List, set_input_List] = useState([]);
    const [get_List_Table_data, set_List_Table_data] = useState([{}]);
    const [get_Money, set_Money] = useState({ sms_CNT: 0, lms_CNT: 0, mms_CNT: 0 });


    useEffect(() => {


    }, [])

    const SMS_Input_Handler = ({ target }) => {

        set_JSON_State_Data(get_input_data, set_input_data, { [target.id]: target.value });
    }

    //Send
    const SMS_Button_Handler = () => {

        axios.post(Address_Config.dev_server + 'sendSMS',
            get_input_data)
            .then((response) => {
                console.log(response.data);
            })
    }

    //List
    const SMS_List_Button_Handler = () => {

        axios.get(Address_Config.dev_server + 'listSMS')
            .then((response) => {
                console.log(response.data);
                set_List_Table_data(response.data);
            })
    }

    //SendList
    const Send_SMS_Number_List_Button_Handler = () => {

        axios.post(Address_Config.dev_server + 'sendSMSlist',
            {
                'data': get_input_List,
                'msg': get_input_data.msg,
            })
            .then((response) => {
                console.log(response.data);
            })
    }

    //번호리스트
    const SMS_Input_List_Handler = ({ target }) => {
        console.log(target.value);
        set_input_List_data(target.value);
    }

    //NumberAdd
    const SMS_Input_List_Button_Handler = () => {

        console.log(get_input_List_data);

        set_input_List([...get_input_List, get_input_List_data]);
    }


    //취소
    const SMS_Number_List_Cancel_Button_Handler = (index) => {
        console.log("List", get_input_List);
        const array = get_input_List;
        array.splice(index, 1);
        set_input_List([...array]);
    }

    //DetailList
    const SMS_Detail_List_Button_Handler = () => {

        axios.post(Address_Config.dev_server + 'listDetailSMS',
            {
                'mid': get_input_data.msgid,
            })
            .then((response) => {
                console.log(response.data);
            })
    }

    //잔고
    const SMS_Money_Button_Handler = () => {

        axios.get(Address_Config.dev_server + 'SMSMoney')
            .then((response) => {
                console.log(response.data);
                set_Money(response.data);
            })
    }

    //datepicker
    const DatePickerHandler = (date, dateString) => {
        console.log(dateString);
        set_JSON_State_Data(get_input_data, set_input_data, { reservation_date: dateString });
      }





    return (
        <>
            <div id="SMS_Wrap">
                <div id="input_Wrap">
                    <Input id="receiver" placeholder="수신번호" onChange={SMS_Input_Handler}></Input>
                    <Input id="msg" placeholder="내용" onChange={SMS_Input_Handler}></Input>
                    <Input id="list" placeholder="번호 리스트" onChange={SMS_Input_List_Handler}></Input>
                    <Input id="msgid" placeholder="메세지 아이디" onChange={SMS_Input_Handler}></Input>
                </div>
                <div>
                    <DatePicker onChange={DatePickerHandler}/>
                </div>
                <div>
                    SMS 보내기_______
                    <Button onClick={SMS_Button_Handler}>Send</Button>
                    <Button onClick={Send_SMS_Number_List_Button_Handler}>SendList</Button>
                </div>
                <div>
                    SMS 리스트 받기_________
                    <Button onClick={SMS_List_Button_Handler}>List</Button>
                    <Button onClick={SMS_Detail_List_Button_Handler}>DetailList</Button>
                </div>
                <div>
                    전화번호 추가_________
                    <Button onClick={SMS_Input_List_Button_Handler}>NumberAdd</Button>
                </div>
                <div>
                    잔고 확인___________
                    <Button onClick={SMS_Money_Button_Handler}>ShowMeTheMoney</Button>
                </div>
                <div id="phone_list">
                    전화번호 목록_______________
                    {get_input_List.map((item, index) => {

                        return (
                            <div key={index}>
                                <span>{item}</span>
                                <Button onClick={() => SMS_Number_List_Cancel_Button_Handler(index)}>취소</Button>
                            </div>

                        )
                    })}
                </div>
                <div>
                    잔고 ----  SMS : {get_Money.sms_CNT} LMS : {get_Money.lms_CNT} MMS : {get_Money.mms_CNT}
                </div>
                <div>
                    <Table dataSource={get_List_Table_data.list} columns={column}
                        onRow={(record, rowIndex) => (
                            {
                                onClick: (event) => { console.log(record, rowIndex) }
                            }
                        )} />
                </div>
            </div>
        </>
    )
}

export default SMSManage;