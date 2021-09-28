import axios from 'axios'
import React from 'react'


export function IntercepterA(axios_props) {

    const axiosInstance = axios_props.create();

    axiosInstance.interceptors.request.use((config) => {
        config.headers.Authorization = Cookies.get("Access_Token");

        return config;
    });

    axiosInstance.interceptors.response.use((config) => {

        console.log("Status", config.status);

        return config;
    },
        (error) => {
            console.log("Error Status", error.response.data.status);
        })


    return axiosInstance;
}






