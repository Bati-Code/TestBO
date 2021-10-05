import { Button, Input } from 'antd'
import axios from 'axios'
import React, { useEffect } from 'react'
import { Address_Config } from '../Data/Config/Config'

const SMSManage = () => {

    const input_data = {
        receiver: '',
        msg: ''
    }

    useEffect(() => {


    }, [])

    const SMS_Input_Handler = ({ target }) => {

        input_data[target.id] = target.value;

        console.log(input_data);
    }

    const SMS_Button_Handler = () => {

        axios.post(Address_Config.dev_server + 'sendSMS',
            input_data)
            .then((response) => {
                console.log(response.data);
            })
    }

    const SMS_List_Button_Handler = () => {

        axios.post(Address_Config.dev_server + 'testtest',
            input_data)
            .then((response) => {
                console.log(response.data);
            })
    }


    return (
        <>
            <Input id="receiver" placeholder="수신번호" onChange={SMS_Input_Handler}></Input>
            <Input id="msg" placeholder="내용" onChange={SMS_Input_Handler}></Input>
            <Button onClick={SMS_Button_Handler}>Send</Button>
            <Button onClick={SMS_List_Button_Handler}>List</Button>
        </>
    )
}

export default SMSManage;