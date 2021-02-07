import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
    FormControl,
    InputLabel,
    OutlinedInput,
    FormControlLabel,
    MenuItem,
    Select,
    Switch,
    FormLabel
} from '@material-ui/core';
import { KeyboardDatePicker } from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '50%'
    }
}));

const FormInput = (props) => {
    const classes = useStyles();
    let element = null;
    const inputProps = {
        ...props
    };

    switch (inputProps.type) {
        case 'input':
            element = <FormControl variant="outlined">
                <InputLabel htmlFor="component-outlined">Textbox</InputLabel>
                <OutlinedInput
                    id="component-outlined"
                    label="Name"
                    value={inputProps.value} />
            </FormControl>
            break;
        case 'select':
            const options = props.options || [];
            element = <FormControl variant="outlined" className={classes.root}>
                <InputLabel id="demo-simple-select-outlined-label">Select</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    label="Age"
                >
                    {options.map((option, index) => (
                        <MenuItem key={index} value={option.value || ''}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            break;
        case 'date':
            const today = new Date();
            element = <FormControl variant="outlined">
                <Fragment>
                    <KeyboardDatePicker
                        autoOk
                        variant="inline"
                        inputVariant="outlined"
                        label="With keyboard"
                        format="DD/MM/yyyy"
                        value={today}
                        InputAdornmentProps={{ position: "start" }}
                        onChange={date => console.log(date)}
                    />
                </Fragment>
            </FormControl>
            break;
        case 'switch':
            element = <FormControl component="fieldset">
                <FormLabel component="legend">Assign responsibility</FormLabel>
                <FormControlLabel
                    control={<Switch name="start" />}
                    label="Start    "
                />
            </FormControl>
            break;
        case 'textarea':
            element = <FormControl variant="outlined" size="medium">
                <InputLabel htmlFor="component-outlined">Textarea</InputLabel>
                <OutlinedInput
                    id="component-outlined"
                    label="Name"
                    multiline
                    rows={10}
                    cols={100}
                    value={inputProps.value} />
            </FormControl>
            break;
        default:
            element = <div>Input Type Not Defined</div>
    }

    return (
        <div>
            {element}
        </div>
    );
}

export default FormInput;
