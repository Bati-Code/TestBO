import { Button, DatePicker, Input, Table, TimePicker } from 'antd'
import axios from 'axios'
import moment, { now } from 'moment'
import React, { useEffect, useState } from 'react'

import { Address_Config } from '../Data/Config/Config'
import { set_JSON_State_Data } from '../Util/CommonUtil'
import { Column_Data } from './SMSColumn'
import './css/SMSManageCSS.css'
import { SelectFunc } from '../../Item/SelectItem'
import { Box, TextField, Typography } from '@mui/material'
import { DateRangePicker, LocalizationProvider } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns';

import koLocale from 'date-fns/locale/ko';

const SMSManage = () => {

    const format = 'HH:mm';

    const input_data = {
        receiver: '',
        msg: '',
        msgid: '',
        reservation_date: '',
        reservation_time: ''
    }

    const search_input_init_data = {
        sender: '',
        receiver: '',
        msg: ''
    }

    const select_init_data = {
        type_data: 'ALL',
        telecom_data: 'ALL',
        success_data: 'ALL'
    }



    const [get_input_data, set_input_data] = useState(input_data);
    const [get_input_List_data, set_input_List_data] = useState('');
    const [get_input_List, set_input_List] = useState([]);
    const [get_List_Table_data, set_List_Table_data] = useState([{}]);
    const [get_List_Table_Column, set_List_Table_Column] = useState(Column_Data.column_List);
    const [get_List_Table_Loading, set_List_Table_Loading] = useState(false);
    const [get_Money, set_Money] = useState({ sms_CNT: 0, lms_CNT: 0, mms_CNT: 0 });

    const [get_Search_Input_Data, set_Search_Input_Data] = useState(search_input_init_data);
    const [get_Select_Data, set_Select_Data] = useState(select_init_data);
    const [get_Date, set_Date] = useState([moment().date(1).format('YYYY/MM/DD'), moment().format('YYYY/MM/DD')]);


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
        set_List_Table_Loading(true);
        axios.get(Address_Config.dev_server + 'listSMS')
            .then((response) => {
                set_List_Table_Loading(false);
                console.log(response.data);
                set_List_Table_Column(Column_Data.column_List);
                set_List_Table_data(response.data);
            })
    }

    //SendList
    const Send_SMS_Number_List_Button_Handler = () => {

        axios.post(Address_Config.dev_server + 'sendSMSlist',
            {
                'phone_List': get_input_List,
                'input_data': get_input_data,
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

    //통계
    const SMS_Analysis_Button_Handler = () => {

        set_List_Table_Loading(true);
        axios.get(Address_Config.dev_server + 'SMSTotal')
            .then((response) => {
                //console.log(response.data.list);
                set_List_Table_Loading(false);
                set_List_Table_Column(Column_Data.column_total);
                set_List_Table_data(response.data);
            })
    }

    //상세통계
    const SMS_Detail_Analysis_Button_Handler = () => {

        set_List_Table_Loading(true);
        axios.get(Address_Config.dev_server + 'SMSDetailTotal')
            .then((response) => {
                console.log(response.data.list);
                set_List_Table_Loading(false);
                set_List_Table_Column(Column_Data.column_Detail_total);
                set_List_Table_data(response.data);
            })
    }

    //datepicker
    const DatePickerHandler = (date, dateString) => {
        console.log(dateString);
        set_JSON_State_Data(get_input_data, set_input_data, { reservation_date: dateString });
    }

    //timepicker
    const TimePickerHandler = (time, timeString) => {
        console.log(timeString);
        set_JSON_State_Data(get_input_data, set_input_data, { reservation_time: timeString });
    }

    //Search_Input_Handler
    const Search_Input_Handler = (e) => {
        console.log(e.target);
        set_JSON_State_Data(get_Search_Input_Data, set_Search_Input_Data, { [e.target.id]: e.target.value });
    }

    //SelectHandler
    const selectHandler = (e) => {
        console.log(e.target);
        set_JSON_State_Data(get_Select_Data, set_Select_Data, { [e.target.name]: e.target.value });
    }

    //검색
    const DetailList_Search_Handler = () => {

        axios.post(Address_Config.dev_server + 'listDetailSearch',
            {
                'select_data': get_Select_Data,
                'input_data': get_Search_Input_Data,
                'search_date_data': get_Date.toString()
            })
            .then((response) => {
                console.log(response.data);
            })
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
                    <DatePicker onChange={DatePickerHandler} />
                    <TimePicker onChange={TimePickerHandler} defaultValue={moment("08:00", format)} format={format} />
                </div>
                <div id="Button_Wrap">
                    <div id="Left_Wrap">
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
                    </div>
                    <div id="Right_Wrap">
                        <div>
                            <Button onClick={SMS_Analysis_Button_Handler}>전송 통계</Button>
                        </div>
                        <div>
                            <Button onClick={SMS_Detail_Analysis_Button_Handler}>상세 전송 통계</Button>
                        </div>

                    </div>
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
                <div id="SMS_Search_Wrap">
                    {/* 문자내용 조회일, 발신번호, 수신번호, 문자종류, 통신사, 발송결과,  */}
                    <div>
                        <SelectFunc
                            id="select-helper"
                            value={get_Select_Data.type_data}
                            name="type_data"
                            label="Type"
                            onChange={selectHandler}
                            item={["ALL", "SMS", "LMS", "MMS"]} />
                        <SelectFunc
                            id="select-helper"
                            value={get_Select_Data.telecom_data}
                            name="telecom_data"
                            label="Telecom"
                            onChange={selectHandler}
                            item={["ALL", "SKT", "KTF", "LGF", "ETC"]} />
                        <SelectFunc
                            id="select-helper"
                            value={get_Select_Data.success_data}
                            name="success_data"
                            label="전송 여부"
                            onChange={selectHandler}
                            item={["ALL", "성공", "실패", "미처리"]} />
                    </div>
                    <div>
                        <Input id='sender' placeholder="발신번호" onChange={Search_Input_Handler} />
                        <Input id='receiver' placeholder="수신번호" onChange={Search_Input_Handler} />
                        <Input id='msg' placeholder="문자 내용" onChange={Search_Input_Handler} />
                    </div>
                    <div>
                        <LocalizationProvider dateAdapter={AdapterDateFns} locale={koLocale}>
                            <div>
                                <Typography sx={{ mt: 2, mb: 1 }}>조회</Typography>
                                <DateRangePicker
                                    calendars={2}
                                    inputFormat="yyyy/MM/dd"
                                    toolbarFormat="yyyy/MM/dd"
                                    mask="____/__/__"
                                    value={get_Date}
                                    onChange={(newValue) => {
                                        console.log("VALUE", newValue);
                                        set_Date(newValue);
                                    }}

                                    renderInput={(startProps, endProps) => (
                                        <>
                                            <TextField {...startProps} />
                                            <Box sx={{ mx: 2 }}> to </Box>
                                            <TextField {...endProps} />
                                        </>
                                    )}
                                />
                            </div>
                        </LocalizationProvider>
                    </div>
                    <div>
                        <Button onClick={DetailList_Search_Handler}>검색</Button>
                    </div>
                </div>
                <div>
                    <Table dataSource={get_List_Table_data.list} columns={get_List_Table_Column}
                        loading={get_List_Table_Loading}
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