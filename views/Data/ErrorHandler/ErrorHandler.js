import axios from 'axios';
import Cookies from 'js-cookie';
import React from 'react'
import { useHistory } from 'react-router-dom';
import { Address_Config, Error_Code } from '../Config/Config'

//error_code : 601
const Access_Token_Expried_Error = () => {

    console.log("Access Token 만료");
    axios.post(Address_Config.dev_server + "requestToken",
        {
            id: "aa"
        },
        {
            headers: {
                Authorization_refresh: Cookies.get("Refresh_Token"),
            }
        })
        .then((response) => {
            console.log(response.data);
            Cookies.set('Access_Token', response.data.access);
        })


    console.log("EEEE");

    return;
}

//error_code : 611
const Refresh_Token_Expried_Error = () => {

    //const history = useHistory();
    console.log("Refresh Token 만료");

   // history.push("/");
}


const ErrorHandler = (error_code) => {

    switch (error_code) {

        case Error_Code.Access_Token_Expried_Error:
            Access_Token_Expried_Error();
            break;
        case Error_Code.Refresh_Token_Expried_Error:
            Refresh_Token_Expried_Error();
            break;

        default:
            break;
    }
}


export default ErrorHandler;