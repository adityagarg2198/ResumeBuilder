import React from 'react'
import {FormControl,Input,InputLabel} from '@material-ui/core';

const InputBox = (props) => {
    return (
        <>
            <FormControl margin="normal" fullWidth="true" required={props.req} > 
                        <InputLabel htmlFor={props.name}>{props.title}</InputLabel>
                        <Input id={props.name} name= {props.name} value={props.value}type="text" onChange={props.func} fullWidth="true"/>
            </FormControl>
        </>
    )
}

export default InputBox;
