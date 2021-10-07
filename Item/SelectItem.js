import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const SelectFunc = (props) => {

    return (
        <>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="label">{props.label}</InputLabel>
                <Select
                    labelId="label"
                    name={props.name}
                    id={props.id}
                    value={props.value}
                    label={props.label}
                    onChange={props.onChange}
                >

                    {props.item.map((item) => {
                        return (
                                <MenuItem value={item}>{item}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        </>

    )
}