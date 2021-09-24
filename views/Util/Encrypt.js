import React from 'react'
import bcrypt from 'bcryptjs';
import axios from 'axios';
import { Address_Config } from '../Data/Config/Config';


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
    
    // const salt = bcrypt.genSaltSync(10);
    // const ClientSalt = "$2a$10$dXmlCWvUshsXfcuVgWQtJu"; 

    // const hash = bcrypt.hashSync("ss", ClientSalt);
   
    // console.log("Client Salt : ", salt);
    // console.log("Hashed PW", hash);

    // const server_salt = bcrypt.genSaltSync(10);
    // const server_hash = bcrypt.hashSync(hash, server_salt);
    
    // console.log("Server_Hashed PW", server_hash);

    // const DB_hash = "$2a$10$zp4ghsYEqv9KEMzjZ6jOxOhXe2Mm/agiuWI3988.x3fXXpjfzq5R6";

    // console.log("Server_PW Check : ", bcrypt.compareSync(hash, DB_hash)); 
}

export const Encrypt_Login = async(registerData) => {

    let hash = "";

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
            console.log(response.data);
        })
}

