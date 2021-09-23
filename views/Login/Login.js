import React from 'react'

const Login = () => {


    return (
        <>
            <div id="header">
                UNTITLED
            </div>
            <div id="container">
                <div id="side">

                </div>
                <div id="content">
                     <div>
                            <div className="loginArea_ID">
                                <div className="inputArea_ID">
                                    <input className="inputID" id="inputBox_ID"
                                        type="text" placeholder="아이디" onKeyPress={EnterHandler} autoFocus></input>
                                </div>
                            </div>
                            <div className="loginArea_PW">
                                <div className="inputArea_PW">
                                    <input className="inputPW" id="inputBox_PW"
                                        type="password" placeholder="패스워드" onKeyPress={EnterHandler}></input>
                                </div>
                            </div>
                            <button className="loginButton" onClick={loginHandler}>로그인</button>
                        </div>
                </div>
                <div id="side">

                </div>

            </div>
        </>
    )

}

export default Login;
