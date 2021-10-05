import React from 'react'
import bcrypt from 'bcryptjs';
import axios from 'axios';
import Cookies from 'js-cookie';

import { Address_Config } from '../Data/Config/Config';

export const Encrypt_Register = async (registerData) => {

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

export const Encrypt_Login = async (registerData, dispatch) => {

    let hash = "";
    let result = false;

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
            if (response.data === false) {
                result = false;
            }
            else {
                Cookies.set('Access_Token', response.data.access, {sameSite: 'lax', secure: 'true'});
                Cookies.set('Refresh_Token', response.data.refresh, {sameSite: 'lax', secure: 'true'});

                result = true;
            }
        })

    if (result)
        return true;

    return false;

}



