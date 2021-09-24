import React from "react";
import './css/RegisterCSS.css'
import LogoImage from '../../public/images/logo.png';
import HiTalkImage from '../../public/images/hitalk_logo.png'
import axios from "axios";

import { Address_Config } from "../Data/Config/Config";
import { Encrypt_Register } from "../Util/Encrypt";

const LoginPage = () => {

    const loginData = {
        id: '',
        pw: ''
    }

    const RegisterData_Handler = (e) => {
        console.log(e.target.value);

        loginData[e.target.name] = e.target.value;

        console.log(loginData);
    }

    const RegisterButton_Handler = () => {
        console.log("Click");
        Encrypt_Register(loginData);
    }


    return (
        <>
            <div id="wrap">
                <div id="login_container">
                    <div id="side">
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
                                    <input id="inputBox_ID" name="id"
                                        type="text" placeholder="아이디" onChange={RegisterData_Handler} autoFocus></input>
                                </div>
                            </div>
                            <div id="loginArea_PW">
                                <div id="inputArea_PW">
                                    <input id="inputBox_PW" name="pw"
                                        type="password" onChange={RegisterData_Handler} placeholder="패스워드" ></input>
                                </div>
                            </div>
                            <button id="loginButton" onClick={RegisterButton_Handler}>회원가입</button>
                        </div>
                    </div>
                    <div id="side">
                    </div>

                </div>
            </div>
        </>
    )

}

export default LoginPage;
