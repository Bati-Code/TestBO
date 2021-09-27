import React from 'react'
import bcrypt from 'bcryptjs';
import axios from 'axios';
import { Address_Config } from '../Data/Config/Config';
import Cookies from 'js-cookie';


export const Encrypt_Register = async(registerData) => {

    let hash = "";

    await axios.get(Address_Config.dev_server + 'getSalt')
        .then(async (response) => {
            console.log(response.data);
            console.log("before data", registerData);
            hash = bcrypt.hashSync(registerData.pw, response.data);
            registerData.pw = hash;
            console.log("after  data", registerData);
        })
    await axios.post(Address_Config.dev_server + 'registerhitalk', registerData)
        .then((response) => {
            console.log(response.data);

        })
}

export const Encrypt_Login = async(registerData) => {

    let hash = "";
    let login_result = false;

    await axios.get(Address_Config.dev_server + 'getSalt')
        .then(async (response) => {
            console.log(response.data);
            console.log("before data", registerData);
            hash = bcrypt.hashSync(registerData.pw, response.data);
            registerData.pw = hash;
            console.log("after  data", registerData);
        })
    await axios.post(Address_Config.dev_server + 'loginhitalk', registerData)
        .then((response) => {
            console.log("Check", response.data);
            Cookies.set('Access_Token', response.data.access);
            Cookies.set('Refresh_Token', response.data.refresh);
            login_result = response.data;
        })
      
}

