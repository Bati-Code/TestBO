import React from "react";
import './css/LoginCSS.css'
import LogoImage from '../../public/images/logo.png';
import HiTalkImage from '../../public/images/hitalk_logo.png'

const LoginPage = () => {


    return (
        <>
            <div id="wrap">
                <div id="container">
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
                                    <input id="inputBox_ID"
                                        type="text" placeholder="아이디" autoFocus></input>
                                </div>
                            </div>
                            <div id="loginArea_PW">
                                <div id="inputArea_PW">
                                    <input id="inputBox_PW"
                                        type="password" placeholder="패스워드" ></input>
                                </div>
                            </div>
                            <button id="loginButton" >로그인</button>
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
