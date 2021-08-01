import React from 'react';
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
import { green, grey } from '@material-ui/core/colors';

const useStyles = makeStyles({
    modalAction: {
        '& button': {
            marginRight: 10
        },
        '& .fabGreen': {
            backgroundColor: green[500],
        },
        '& .fabGrey': {
            backgroundColor: grey[500],
        }
    }
});

export default function FormModal(props) {
    const classes = useStyles();

    return (
        <div>
            <Dialog open={props.open} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                    <div class="modal-title">
                        Add/Update
                    </div>
                    <div className={classes.modalAction}>
                        <Tooltip title="Cancel">
                            <Fab size="small" className="fabGrey" onClick={props.onCancel}>
                                <CancelIcon />
                            </Fab>
                        </Tooltip>
                        <Tooltip title="Delete">
                            <Fab size="small" color="secondary" onClick={props.onCancel}>
                                <DeleteIcon />
                            </Fab>
                        </Tooltip>
                        <Tooltip title="Save">
                            <Fab size="small" color="primary" className="fabGreen">
                                <SaveIcon />
                            </Fab>
                        </Tooltip>
                    </div>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Save Project Details
                    </DialogContentText>
                    <FormContianer>
                        <FormGroup {...props.controls} />
                    </FormContianer>
                </DialogContent>
            </Dialog>
        </div>
    );
}
