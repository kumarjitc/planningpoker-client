import React, { Fragment, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
    FormControl,
    InputLabel,
    OutlinedInput,
    FormControlLabel,
    MenuItem,
    Select,
    Switch,
    FormLabel,
    Chip,
    Input
} from '@material-ui/core';
import InvitationIcon from '@material-ui/icons/ViewAgendaTwoTone';
import FileCopyIcon from '@material-ui/icons/FileCopyTwoTone';
import { KeyboardDatePicker } from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '50%'
    }
}));

const FormInput = (props) => {
    const classes = useStyles();
    const [copied, setCopied] = React.useState('');
    let element = null;

    const validate = (event) => {
        let invalid = false;
        const validators = props.validators;
        const value = event.target.value;

        for (let i = 0; i < validators.length; i++) {
            switch (validators[i]) {
                case REQUIRED:
                    if (!value.trim()) {
                        invalid = true;
                        break;
                    }
                    break;
            }
        }

        return invalid;
    }

    const onCopyClick = async () => {
        await navigator.clipboard.writeText(props.value);
    }

    const handleCopyNotification = () => {
        setCopied('ID Copied To ClipBoard - ');

        setTimeout(() => {
            setCopied('');
        }, 5000);
    }

    switch (props.type) {
        case INPUT:
            element = <FormControl variant="outlined">
                <InputLabel htmlFor={props.name + "-component-outlined"}>{props.label}</InputLabel>
                <OutlinedInput
                    id={props.name + "-component-outlined"}
                    label="TextBox"
                    value={props.value}
                    onChange={(event) => {
                        props.onChange(props.name, event.target.value);
                    }}
                    onBlur={(event) => {
                        if (props.validators && validate(event)) {
                            props.onBlur(props.name);
                        }
                    }}
                    error={props.invalid}
                />
            </FormControl>
            break;
        case SELECT:
            const options = props.options || [];
            element = <FormControl variant="outlined" className={classes.root}>
                <InputLabel id="demo-simple-select-outlined-label">Select</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    label="Select"
                >
                    {options.map((option, index) => (
                        <MenuItem key={index} value={option.value || ''}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            break;
        case DATE:
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
        case SWITCH:
            element = <FormControl component="fieldset">
                <FormLabel component="legend">Assign responsibility</FormLabel>
                <FormControlLabel
                    control={<Switch name="start" />}
                    label="Start"
                />
            </FormControl>
            break;
        case TEXTAREA:
            element = <FormControl variant="outlined" size="medium">
                <InputLabel htmlFor="component-outlined">Textarea</InputLabel>
                <OutlinedInput
                    id="component-outlined"
                    label="Textarea"
                    multiline
                    rows={10}
                    cols={100}
                    value={props.value} />
            </FormControl>
            break;
        case LABEL:
            element = <>
                <input id={"hidden-" + props.name} value={props.value} type="hidden" />
                <Chip
                    icon={<InvitationIcon />}
                    label={(copied ? copied : 'Copy This ID To Invite Others To Join - ') + props.value}
                    clickable
                    color="primary"
                    onDelete={() => {
                        onCopyClick().then(data => {
                            handleCopyNotification();
                        }).catch(error => {
                            throw new "excption " + error.message;
                        });
                    }}
                    deleteIcon={<FileCopyIcon />}
                    variant={copied ? 'default' : 'outlined'}
                />
            </>
    }

    return (
        <div>
            {element}
        </div>
    );
};

// Control Types
export const [
    INPUT,
    SELECT,
    DATE,
    SWITCH,
    TEXTAREA,
    LABEL
] = [
        'input',
        'select',
        'date',
        'switch',
        'textarea',
        'label'
    ];

// Validators
export const [
    REQUIRED
] = [
        'required'
    ];

export default FormInput;
