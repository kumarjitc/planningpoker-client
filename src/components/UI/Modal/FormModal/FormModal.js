import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormContianer from '../../FormContainer/FormContainer';
import FormGroup from '../../FormGroup/FormGroup';

import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import DeleteIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles';
import { PRIMARY_GREEN, HOVER_GREEN, PRIMARY_GREY, HOVER_GREY } from '../../../../utils/MaterialColorCodes';

const useStyles = makeStyles({
    modalAction: {
        '& button': {
            marginRight: 10
        },
        '& .fabGreen': {
            backgroundColor: PRIMARY_GREEN,
            '&:hover': {
                backgroundColor: HOVER_GREEN,
            }
        },
        '& .fabGrey': {
            backgroundColor: PRIMARY_GREY,
            '&:hover': {
                backgroundColor: HOVER_GREY,
            }
        }
    }
});

export default function FormModal(props) {
    const classes = useStyles();

    const setValue = () => {
        const controls = JSON.parse(JSON.stringify(props.controls));
        console.log(props, controls);
        if (props.data) {
            Object.keys(controls).forEach(control => {
                controls[control]['value'] = props.data[control];
            });
        }
        return controls;
    }

    const [form, setForm] = useState({});

    useEffect(() => {
        console.log('HERE WAIT');
        setForm(setValue());
    }, [props.controls]);

    const onChange = (name, value) => {
        setForm({
            ...form,
            [name]: {
                ...form[name],
                value: value
            }
        });
    };

    const onBlur = (name, isInvalid) => {
        setForm({
            ...form,
            [name]: {
                ...form[name],
                invalid: isInvalid
            }
        });
    };

    const getValue = () => {
        let formValue = {};
        Object.entries(form).forEach(entry => {
            formValue = {
                ...formValue,
                [entry[0]]: entry[1].value
            };
        });
        return formValue;
    }

    return (
        <div>
            <Dialog open={props.open} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                    <div class="modal-title">
                        {`Modify ${props.type} Details`}
                    </div>
                    <div className={classes.modalAction}>
                        <Tooltip title="Delete">
                            <Fab size="small" color="secondary" onClick={() => {
                                props.onDelete(getValue());
                            }}>
                                <DeleteIcon />
                            </Fab>
                        </Tooltip>
                        <Tooltip title="Save">
                            <Fab size="small" color="primary" className="fabGreen" onClick={() => {
                                props.onSave(getValue());
                            }}>
                                <SaveIcon />
                            </Fab>
                        </Tooltip>
                        <Tooltip title="Cancel">
                            <Fab size="small" className="fabGrey" onClick={props.onCancel}>
                                <CancelIcon />
                            </Fab>
                        </Tooltip>
                    </div>
                </DialogTitle>
                <DialogContent>
                    <FormContianer>
                        <FormGroup {...form} fullWidth={true} onChange={onChange} onBlur={onBlur} />
                    </FormContianer>
                </DialogContent>
            </Dialog>
        </div>
    );
}
