import axios from 'axios';
import Cookies from 'js-cookie';
import React from 'react'
import { useHistory } from 'react-router-dom';
import { Address_Config, Error_Code } from '../Config/Config'


const Reset_Page = (message) => {
    window.alert(message);

    Cookies.remove("Access_Token");
    Cookies.remove("Refresh_Token");
    window.location.href = "/";
}

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
//error_code : 602 / 603
const Access_Token_Form_Valdiate_Error = () => {

    console.log("Access_Token Form or Validate Error");
    Reset_Page("Access Token 검증 에러");
    return;
}

//error_code : 611
const Refresh_Token_Expried_Error = () => {

    console.log("Refresh Token 만료");
    Cookies.remove("Access_Token");
    Cookies.remove("Refresh_Token");
    window.location.href = "/";
    Reset_Page("Refresh Token Expired");
    return;
}

//error_code : 612 / 613
const Refresh_Token_Form_Valdiate_Error = () => {

    console.log("Refresh Form or Validate Error");
    Reset_Page("Refresh Token 검증 에러");
    return;
}


const ErrorHandler = (error_code) => {

    console.log("Error_Code", error_code);

    switch (error_code) {

        case Error_Code.Access_Token_Expired:
            Access_Token_Expried_Error();
            break;
        case Error_Code.Access_Token_Form_Error || Error_Code.Access_Token_Validate_Error:
            Access_Token_Form_Valdiate_Error();
            break;

        case Error_Code.Refresh_Token_Expired:
            Refresh_Token_Expried_Error();
            break;
        case Error_Code.Refresh_Token_Form_Error || Error_Code.Refresh_Token_Validate_Error:
            Refresh_Token_Form_Valdiate_Error();
            break;

        default:
            break;
    }
}


export default ErrorHandler;