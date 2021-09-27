import React, { useState } from "react";
import './css/LoginCSS.css'
import LogoImage from '../../public/images/logo.png';
import HiTalkImage from '../../public/images/hitalk_logo.png'
import axios from "axios";

import { Address_Config } from "../Data/Config/Config";
import { Encrypt_Login } from "../Util/Encrypt";
import { set_JSON_State_Data } from "../Util/CommonUtil";
import { Link } from "react-router-dom";

const LoginPage = () => {

    const initLoginData = {
        id: '',
        pw: ''
    }

    const [getLoginData, setLoginData] = useState(initLoginData);

    const loginData_Handler = (e) => {
        console.log(e.target.value);
        set_JSON_State_Data(getLoginData, setLoginData, {[e.target.name]: e.target.value});
    }

    const loginButton_Handler = () => {
        console.log("Click");
        const login_result = Encrypt_Login(getLoginData);
        console.log("Login E", login_result);

        if(login_result === true){
            console.log("T");
        }
        else{
            console.log("F")
        }

        set_JSON_State_Data(getLoginData, setLoginData, {pw: ''}); //비밀번호 초기화
    }


    return (
        <>
            <div id="wrap">
                <div id="login_container">
                    <div id="login_side">
                    </div>
                    <div id="login_content">
                        <div id="login_header">
                            <div id="login_header_item">
                                <img src={HiTalkImage} />
                            </div>
                            <div id="login_header_item">
                                <img src={LogoImage} />
                            </div>
                        </div>
                        <div>
                            <div id="loginArea_ID">
                                <div id="inputArea_ID">
                                    <input id="inputBox_ID" name="id" value={getLoginData.id}
                                        type="text" placeholder="아이디" onChange={loginData_Handler} autoFocus></input>
                                </div>
                            </div>
                            <div id="loginArea_PW">
                                <div id="inputArea_PW">
                                    <input id="inputBox_PW" name="pw" value={getLoginData.pw}
                                        type="password" onChange={loginData_Handler} placeholder="패스워드" ></input>
                                </div>
                            </div>
                            <button id="loginButton" onClick={loginButton_Handler}>로그인</button>
                        </div>
                        <div id="login_footer">
                            <Link to = "Register">회원가입</Link>
                        </div>
                    </div>
                    <div id="login_side">
                    </div>

                </div>
            </div>
        </>
    )

}

export default LoginPage;
