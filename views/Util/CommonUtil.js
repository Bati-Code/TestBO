import React, { useState } from 'react'

export const set_JSON_State_Data = (getState, setState, setValue) => {

    setState({
        ...getState,
        ...setValue
    });
}